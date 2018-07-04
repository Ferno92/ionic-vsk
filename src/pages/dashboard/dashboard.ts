import { Component } from "@angular/core"; 
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AuthService } from "../../services/auth.service";
import { MenuController } from "ionic-angular";
import { Events } from "ionic-angular";
import {
  AfoListObservable,
  AngularFireOfflineDatabase,
  AfoObjectObservable
} from "angularfire2-offline/database";
import { empty } from "rxjs/observable/empty";
import { BasePage } from "../../common/BasePage";
import { auth } from "firebase/app";

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "dashboard",
  segment: "dashboard"
})
@Component({
  selector: "page-dashboard",
  templateUrl: "dashboard.html"
})
export class DashboardPage extends BasePage {
  userLogged: boolean;
  userImage: String;
  version: String = "0.0.1";
  onlineVersion: AfoObjectObservable<any>;
  games: AfoListObservable<any[]>;
  emptyGames: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
    public menuCtrl: MenuController,
    public events: Events,
    public afoDatabase: AngularFireOfflineDatabase
  ) {
    super(navCtrl, authService)
    this.userLogged = false;
    this.emptyGames = true;

    this.onlineVersion = afoDatabase.object("updateVersion");

    console.log("version: " + this.onlineVersion);
  }

  onUserChange(user: any){
    var self = this;
    if (user != null) {
      this.userLogged = true;
      this.userImage = user.photoURL;
      this.games = this.afoDatabase.list('/'+ this.authService.user.uid + '/games');
      this.games.subscribe({
        next(gamesFound){
          self.emptyGames = gamesFound.length == 0;
        }
      });
    } else {
      this.userLogged = false;
    }
  }

  ionViewDidLoad() {
    this.onInit();
  }

  ionViewWillEnter() {
    this.events.publish("currentPage", "dashboard");
  }

  logOut() {
    this.authService.signOut();
  }

  reload() {
    window.location.reload();
  }
}
