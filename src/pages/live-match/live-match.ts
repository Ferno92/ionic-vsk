import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Events,
  Platform,
  AlertController,
  Navbar
} from "ionic-angular";
import { BasePage } from "../../common/BasePage";
import { AuthService } from "../../services/auth.service";
import {
  AfoListObservable,
  AngularFireOfflineDatabase
} from "angularfire2-offline/database";

/**
 * Generated class for the LiveMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "live-match",
  segment: "live-match/:id/:audienceId"
})
@Component({
  selector: "page-live-match",
  templateUrl: "live-match.html"
})
export class LiveMatchPage extends BasePage {
  @ViewChild("navbar") navBar: Navbar;
  games: AfoListObservable<any[]>;
  gameId: String;
  audienceId: String;
  currentGame: any;
  pause = false;
  gameOver = false;
  isAudience = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public authService: AuthService,
    public afoDatabase: AngularFireOfflineDatabase,
    public alertCtrl: AlertController,
    public platform: Platform
  ) {
    super(navCtrl, authService, alertCtrl, platform);
    // this.teamA = navParams.get("teamA");
    // this.teamB = navParams.get("teamB");
    this.gameId = navParams.get("id");
    this.audienceId = navParams.get("audienceId");
    console.log("audience: " + this.audienceId + " - id: " + this.gameId);
  }

  onUserChange(user: any) {
    if (user != null) {
      var url = "";
      if (this.audienceId == undefined || this.audienceId == ":audienceId") {
        url = "/users/" + this.authService.user.uid + "/games";
        this.retrieveGameInfo(url);
      } else {
        this.isAudience = true;
        var users = this.afoDatabase.list("/users");
        users.subscribe(userList => {
          userList.forEach(user => {
            if (user.audienceId == this.audienceId) {
              url = "/users/" + user.$key + "/games";
              console.log(url);
              this.retrieveGameInfo(url);
            }
          });
        });
      }
    }
  }

  retrieveGameInfo(url: string) {
    this.games = this.afoDatabase.list(url);
    this.games.subscribe(items => {
      var found = false;
      // items is an array
      items.forEach(item => {
        if (item.id == this.gameId) {
          console.log("Item:", item);
          this.currentGame = item;
          if (this.currentGame.live) {
            if (this.currentGame.sets == undefined) {
              this.currentGame.sets = [{ a: 0, b: 0 }];
            } else {
              if (this.isSetEnded() && !this.isGameOver()) {
                this.pause = true;
              } else if (this.isGameOver()) {
                this.gameOver = true;
              }
            }
          }
          found = true;
          if (item.live && !this.isAudience) {
            this.askBeforeGoBack = true;
          }
        }
      });
      if (!found) {
        //TODO: error message
      }
    });
  }

  ionViewDidLoad() {
    this.onInit(this.navBar);
  }

  ionViewWillEnter() {
    this.events.publish("currentPage", "live-match");
  }

  updateSetValue(team: String, increment: boolean) {
    var teamValue =
      team == "a"
        ? this.currentGame.sets[
            this.currentGame.resultA + this.currentGame.resultB
          ].a
        : this.currentGame.sets[
            this.currentGame.resultA + this.currentGame.resultB
          ].b;
    if (increment) {
      teamValue = teamValue + 1;
    } else {
      teamValue = teamValue == 0 ? 0 : teamValue - 1;
    }

    if (team == "a") {
      this.currentGame.sets[
        this.currentGame.resultA + this.currentGame.resultB
      ].a = teamValue;
    } else {
      this.currentGame.sets[
        this.currentGame.resultA + this.currentGame.resultB
      ].b = teamValue;
    }

    if (this.isSetEnded() && !this.isGameOver()) {
      this.pause = true;
    } else if (this.isGameOver()) {
      this.gameOver = true;
    }
    this.updateGame();
  }

  isSetEnded() {
    var isSetEnded =
      (this.currentGame.sets[
        this.currentGame.resultA + this.currentGame.resultB
      ].a >= 25 &&
        this.currentGame.sets[
          this.currentGame.resultA + this.currentGame.resultB
        ].a >=
          this.currentGame.sets[
            this.currentGame.resultA + this.currentGame.resultB
          ].b +
            2) ||
      (this.currentGame.sets[
        this.currentGame.resultA + this.currentGame.resultB
      ].b >= 25 &&
        this.currentGame.sets[
          this.currentGame.resultA + this.currentGame.resultB
        ].b >=
          this.currentGame.sets[
            this.currentGame.resultA + this.currentGame.resultB
          ].a +
            2);
    return isSetEnded;
  }

  isGameOver() {
    var winnerA =
      this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB]
        .a >=
      this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB]
        .b;
    var gameOver =
      this.isSetEnded() &&
      (winnerA ? this.currentGame.resultA == 2 : this.currentGame.resultB == 2);
    return gameOver;
  }

  createSet() {
    var winnerA =
      this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB]
        .a >=
      this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB]
        .b;
    if (winnerA) {
      this.currentGame.resultA = this.currentGame.resultA + 1;
    } else {
      this.currentGame.resultB = this.currentGame.resultB + 1;
    }
    if (!this.gameOver) {
      this.currentGame.sets.push({ a: 0, b: 0 });
      this.pause = false;
    } else {
      this.currentGame.live = false;
    }
    this.updateGame();
  }

  rollBack() {
    var winnerA =
      this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB]
        .a >
      this.currentGame.sets[this.currentGame.resultA + this.currentGame.resultB]
        .b;
    if (winnerA) {
      this.currentGame.sets[
        this.currentGame.resultA + this.currentGame.resultB
      ].a =
        this.currentGame.sets[
          this.currentGame.resultA + this.currentGame.resultB
        ].a - 1;
    } else {
      this.currentGame.sets[
        this.currentGame.resultA + this.currentGame.resultB
      ].b =
        this.currentGame.sets[
          this.currentGame.resultA + this.currentGame.resultB
        ].b - 1;
    }
    if (!this.isSetEnded()) {
      this.pause = false;
      this.gameOver = false;
    }
    this.updateGame();
  }

  updateGame() {
    this.afoDatabase
      .object(
        "/users/" + this.authService.user.uid + "/games/" + this.currentGame.id
      )
      .update(this.currentGame);
  }
}
