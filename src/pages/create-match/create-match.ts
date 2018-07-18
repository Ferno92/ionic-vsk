import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  Events,
  Platform,
  Navbar
} from "ionic-angular";
import { BasePage } from "../../common/BasePage";
import { AuthService } from "../../services/auth.service";
import {
  AfoListObservable,
  AngularFireOfflineDatabase
} from "angularfire2-offline/database";
import * as moment from 'moment';

/**
 * Generated class for the CreateMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "create-match",
  segment: "create-match"
})
@Component({
  selector: "page-create-match",
  templateUrl: "create-match.html"
})
export class CreateMatchPage extends BasePage {
  @ViewChild("navbar") navBar: Navbar;
  teamA: String;
  teamB: String;

  games: AfoListObservable<any[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public authService: AuthService,
    public alertCtrl: AlertController,
    public platform: Platform,
    public afoDatabase: AngularFireOfflineDatabase
  ) {
    super(navCtrl, authService, alertCtrl, platform);

    events.subscribe("create-match", page => {
      console.log(this.teamA + " - " + this.teamB);
      if (
        this.teamA == undefined ||
        this.teamA.trim() == "" ||
        this.teamB == undefined ||
        this.teamB.trim() == ""
      ) {
        this.errorPopup(
          "Dati mancanti",
          "Inserisci entrambi i nomi delle squadre in gioco"
        );
      } else {
        if (this.authService.user != null) {
          const newGameRef = this.games.push({});

          const promise = newGameRef.set({
            id: newGameRef.key,
            teamA: this.teamA,
            teamB: this.teamB,
            resultA: 0,
            resultB: 0,
            date: moment(new Date).format("MMM/DD"),
            location: "Reggio-Emilia",
            live: true
          });

          if (promise != undefined) {
            promise.then(() => console.log("data added to firebase!"));
            if (promise.offline != undefined) {
              promise.offline.then(() =>
                console.log("offline data added to device storage!")
              );
            }
          }

          this.openLiveMatch(newGameRef.key, this.teamA, this.teamB);
        }
      }
    });
  }

  ionViewDidLoad() {
    this.onInit(this.navBar);
  }

  ionViewWillEnter() {
    this.events.publish("currentPage", "create-match");
  }

  onUserChange(user: any) {
    if (user != null) {
      this.games = this.afoDatabase.list(
        "/" + this.authService.user.uid + "/games"
      );
    }
  }
}
