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
  onEdit: boolean = false;
  gamesChecked: String[] = new Array<String>();

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
    if (this.onEdit) {
      game.checked = !game.checked;
      console.log("openGame: " + game.checked);
      if (game.checked) {
        this.updateEditCheck(game, false);
      }
    } else {
      this.openLiveMatch(game.id, game.teamA, game.teamB);
    }
  }

  onPressingCardGame(game: any) {
    if (!this.onEdit) {
      game.checked = true;
      this.onEdit = true;
      this.gamesChecked.push(game);
      this.events.publish("currentPage", "dashboard-edit");
    }
  }
  updateEditCheck(game: any, reverse: boolean) {
    console.log("updateEditCheck, checked: " + game.checked);
    // game.checked = !game.checked;
    if ((reverse && !game.checked) || (!reverse && game.checked)) {
      this.gamesChecked.push(game);
    } else {
      var index = this.gamesChecked.indexOf(game);
      this.gamesChecked.splice(index, 1);
      if (this.gamesChecked.length == 0) {
        this.removeOnEdit();
      }
    }
    console.log("gamesChecked length: " + this.gamesChecked.length);
  }

  removeOnEdit() {
    this.onEdit = false;
    this.events.publish("currentPage", "enable-dashboard");
    // while (this.gamesChecked.length > 0) {
    //   var gameRemoved: any = this.gamesChecked.pop();
    //   this.games.forEach(items => {

    //     for (var item in items) {
    //       var game: any = item;
    //       console.log("removeonedit id: " + game.id + " length: " + this.gamesChecked.length);
    //       if (gameRemoved.id == game.id) {
    //         game.edit = false;
    //       }
    //     }

    //   });
    // }
  }

  deleteGames() {
  }

  tapCheckbox(game: any) {
    //console.log("tapCheckbox: " + game.checked);
    //if (game.checked == undefined || !game.checked) {
    //this.updateEditCheck(game, true);
    //} else {
    //this.updateEditCheck(game, true);
    //}
  }
}
