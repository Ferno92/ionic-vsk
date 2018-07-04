import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { BasePage } from "../../common/BasePage";
import { Events } from "ionic-angular";
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
  segment: "live-match"
})
@Component({
  selector: "page-live-match",
  templateUrl: "live-match.html"
})
export class LiveMatchPage extends BasePage {
  games: AfoListObservable<any[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public authService: AuthService,
    public afoDatabase: AngularFireOfflineDatabase
  ) {
    super(navCtrl, authService);
    
  }

  onUserChange(user: any){
    if (user != null) {
      this.games = this.afoDatabase.list("/" + this.authService.user.uid + "/games");
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LiveMatchPage");
    this.onInit();
  }

  ionViewWillEnter() {
    this.events.publish("currentPage", "live-match");
  }

  saveGame() {
    if (this.authService.user != null) {
      const newGameRef = this.games.push({});

      const promise = newGameRef.set({
        id: newGameRef.key,
        name: "Cobra vs Panther"
      });

      if (promise != undefined) {
        promise.then(() => console.log("data added to firebase!"));
        if (promise.offline != undefined) {
          promise.offline.then(() =>
            console.log("offline data added to device storage!")
          );
        }
      } 
    }
  }
}
