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
import { BasePage } from '../../common/BasePage';
import { AuthService } from "../../services/auth.service";
import { ScreenOrientation } from "@ionic-native/screen-orientation";
import {
  AngularFireOfflineDatabase
} from "angularfire2-offline/database";

/**
 * Generated class for the GameTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "game-tabs",
  segment: "game-tabs"
})
@Component({
  selector: 'page-game-tabs',
  templateUrl: 'game-tabs.html',
})
export class GameTabsPage extends BasePage {
  @ViewChild(Navbar) navbar: Navbar;
  scorePage = "live-match";
  formationPage = "formation";
  chatPage = "chat";
  scoreParams: any;
  rotation = "phone-landscape";
  isLandscape = false;
  isLocked = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authService: AuthService,
    public alertCtrl: AlertController,
    public platform: Platform,
    private screenOrientation: ScreenOrientation,
    public afoDatabase: AngularFireOfflineDatabase) {
    super(navCtrl, authService, alertCtrl, platform);
    this.scoreParams = {
      id: navParams.get("id"),
      audienceId: navParams.get("audienceId")
    }
  }
  
  ionViewDidLoad() {
    this.initOnScreenOrientationChange();
    this.onInit(this.navbar);
  }

  
  onUserChange(user: any) {
    console.log("on user change live" + user);
    if (user != null) {
      var id = "";
      console.log("1, audience: " + (this.scoreParams.audienceId == "undefined"));
      if (this.scoreParams.audienceId == undefined || this.scoreParams.audienceId == "undefined" || this.scoreParams.audienceId == ":audienceId") {
        console.log("2");
        id = this.authService.user.uid;
        this.retrieveGameInfo(id, false);
      } else {
        console.log("3");
        this.findUserFromAudienceId();
      }
    } else {
      console.log("4");
      this.findUserFromAudienceId();
    }
    console.log("5");
    this.initOnScreenOrientationChange();
  }

  findUserFromAudienceId() {
    var id = "";
    var isAudience = true;
    var users = this.afoDatabase.list("/users");
    users.subscribe(userList => {
      userList.forEach(user => {
        if (user.audienceId == this.scoreParams.audienceId) {
          id = user.$key;
          this.retrieveGameInfo(id, isAudience);
        }
      });
    });
  }

  retrieveGameInfo(userId: string, isAudience: boolean) {
    var url = "/users/" + userId + "/games";
    console.log(url);
    var games = this.afoDatabase.list(url);
    games.subscribe(items => {
      var found = false;
      // items is an array
      items.forEach(item => {
        if (item.id == this.scoreParams.id) {
          console.log("Item:", item);
          found = true;
          if (item.live && !isAudience) {
            this.askBeforeGoBack = true;
          }
        }
      });
      if (!found) {
        //TODO: error message
      }
    });
  }
  

  rotate() {
    // console.log(this.screenOrientation.type);
    if (
      this.screenOrientation.type !=
        this.screenOrientation.ORIENTATIONS.LANDSCAPE &&
      this.screenOrientation.type !=
        this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY &&
      this.screenOrientation.type !=
        this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY
    ) {
      document.body.webkitRequestFullscreen();
      if (!this.isLocked) {
        this.screenOrientation.lock(
          this.screenOrientation.ORIENTATIONS.LANDSCAPE
        );
        this.isLocked = true;
      }
      this.isLandscape = true;
      this.rotation = "phone-portrait";
    } else {
      if (!this.isLocked) {
        this.screenOrientation.lock(
          this.screenOrientation.ORIENTATIONS.PORTRAIT
        );
        this.isLocked = true;
      }
      var self = this;
      setTimeout(function() {
        if (this.isLocked) {
          self.screenOrientation.unlock();
          self.isLocked = false;
        }
        document.webkitExitFullscreen();
        self.isLandscape = false;
        self.rotation = "phone-landscape";
      }, 500);
    }
  }

  initOnScreenOrientationChange() {
    this.screenOrientation.onChange().subscribe(type => {
      console.log("on change: " + type);
      if (
        this.screenOrientation.type !=
          this.screenOrientation.ORIENTATIONS.LANDSCAPE &&
        this.screenOrientation.type !=
          this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY &&
        this.screenOrientation.type !=
          this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY
      ) {
        this.isLandscape = false;
        this.rotation = "phone-landscape";
      } else {
        this.isLandscape = true;
        this.rotation = "phone-portrait";
      }
    });
  }

}
