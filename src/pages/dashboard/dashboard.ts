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
  version: String = "0.0.4";
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
    this.TAG = "DashboardPage";
    this.userLogged = false;
    this.emptyGames = true;

    this.onlineVersion = afoDatabase.object("updateVersion");

    this.logOnConsole(this.TAG, "version: " + this.onlineVersion);
  }

  onUserChange(user: any) {
    var self = this;
    if (user != null) {
      this.userLogged = true;
      this.userImage = user.photoURL;
      this.games = this.afoDatabase.list(
        "/users/" + this.authService.user.uid + "/games",
        {
          query: {
            orderByChild: "date/ms"
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

  openGame(game: any, pageRef:any) {
    pageRef.logOnConsole(this.TAG, pageRef);
    if (pageRef.onEdit) {
      game.checked = !game.checked;
      if (game.checked) {
        pageRef.updateEditCheck(game, false, this);
      }
    } else {
      pageRef.openLiveMatch(game.id, game.teamA, game.teamB);
    }
  }

  onPressingCardGame(game: any, pageRef:any) {
    if (!pageRef.onEdit) {
      game.checked = true;
      pageRef.onEdit = true;
      pageRef.gamesChecked.push(game);
      pageRef.events.publish("currentPage", "dashboard-edit");
    }
  }
  updateEditCheck(game: any, reverse: boolean, pageRef:any) {
    this.logOnConsole(this.TAG, "updateEditCheck, checked: " + game.checked);
    // game.checked = !game.checked;
    if ((reverse && !game.checked) || (!reverse && game.checked)) {
      pageRef.gamesChecked.push(game);
    } else {
      var index = pageRef.gamesChecked.indexOf(game);
      pageRef.gamesChecked.splice(index, 1);
      if (pageRef.gamesChecked.length == 0) {
        pageRef.removeOnEdit();
      }
    }
    this.logOnConsole(this.TAG, "gamesChecked length: " + pageRef.gamesChecked.length);
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
    for(var game in this.gamesChecked){
      var gameChecked:any = this.gamesChecked[0];
      this.logOnConsole(this.TAG, gameChecked.id);
      this.games.remove(gameChecked.id);
    }
    this.removeOnEdit();
  }

  // tapCheckbox(game: any) {
  //   //console.log("tapCheckbox: " + game.checked);
  //   //if (game.checked == undefined || !game.checked) {
  //   //this.updateEditCheck(game, true);
  //   //} else {
  //   //this.updateEditCheck(game, true);
  //   //}
  // }
}
