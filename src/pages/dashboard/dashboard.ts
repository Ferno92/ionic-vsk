import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Events,
  MenuController,
  ToastController,
  AlertController,
  Platform,
  Navbar
} from "ionic-angular";
import { ViewChild } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import {
  AfoListObservable,
  AngularFireOfflineDatabase,
  AfoObjectObservable
} from "angularfire2-offline/database";
import { BasePage } from "../../common/BasePage";

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
  @ViewChild("navbar") navBar: Navbar;

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
    public afoDatabase: AngularFireOfflineDatabase,
    private toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public platform: Platform
  ) {
    super(navCtrl, authService, alertCtrl, platform);
    this.userLogged = false;
    this.emptyGames = true;

    this.onlineVersion = afoDatabase.object("updateVersion");

    console.log("version: " + this.onlineVersion);
  }

  onUserChange(user: any) {
    var self = this;
    if (user != null) {
      this.userLogged = true;
      this.userImage = user.photoURL;
      this.games = this.afoDatabase.list(
        "/" + this.authService.user.uid + "/games",
        {
          query: {
            orderByChild: "date"
          }
        }
      );
      this.games.subscribe({
        next(gamesFound) {
          self.emptyGames = gamesFound.length == 0;
        }
      });
    } else {
      this.userLogged = false;
    }
  }

  ionViewDidLoad() {
    this.onInit(this.navBar);
  }

  ionViewWillEnter() {
    this.events.publish("currentPage", "dashboard");
  }

  logOut() {
    this.authService.signOut();
    this.showSuccesfullToast("Logout avvenuto", "success");
  }

  reload() {
    window.location.reload();
  }

  showSuccesfullToast(text: String, result: String) {
    let toast = this.toastCtrl.create({
      message: "" + text,
      duration: 2000,
      position: "top",
      cssClass: "toast-login " + result
    });

    toast.present();
  }

  openGame(game: any) {
    console.log(game);
    this.openLiveMatch(game.id, game.teamA, game.teamB);
  }

  onPressingCardGame(game: any){
    console.log("onPressingCardGame");
    game.pressed = true;
  }
}
