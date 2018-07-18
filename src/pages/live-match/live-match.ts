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
  segment: "live-match/:id"
})
@Component({
  selector: "page-live-match",
  templateUrl: "live-match.html"
})
export class LiveMatchPage extends BasePage {
  @ViewChild("navbar") navBar: Navbar;
  games: AfoListObservable<any[]>;
  gameId: String;
  teamA: String;
  teamB: String;
  currentGame: any;

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
  }

  onUserChange(user: any) {
    if (user != null) {
      this.games = this.afoDatabase.list(
        "/" + this.authService.user.uid + "/games"
      );
      this.games.subscribe(items => {
        var found = false;
        // items is an array
        items.forEach(item => {
          if(item.id == this.gameId){
            console.log("Item:", item);
            this.currentGame = item;
            this.teamA = item.teamA;
            this.teamB = item.teamB;
            console.log(this.teamA + " vs " + this.teamB);
            found = true;
            if(item.live){
              this.askBeforeGoBack = true;
            }
          }

        });
        if(!found){
          //TODO: error message
        }
      });
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LiveMatchPage");
    this.onInit(this.navBar);
  }

  ionViewWillEnter() {
    this.events.publish("currentPage", "live-match");
  }
}
