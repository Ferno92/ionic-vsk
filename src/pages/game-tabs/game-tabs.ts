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
import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { AngularFireOfflineDatabase } from "angularfire2-offline/database";
import { ShortUrlService } from "angular-shorturl";
// import { SocialShare } from 'angular-socialshare';

/**
 * Generated class for the GameTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "game-tabs",
  segment: "game-tabs/:id/:audienceId"
})
@Component({
  selector: "page-game-tabs",
  templateUrl: "game-tabs.html"
})
export class GameTabsPage extends BasePage {
  @ViewChild(Navbar)
  navbar: Navbar;
  scorePage = "live-match";
  formationPage = "formation";
  chatPage = "chat";
  scoreParams: any;
  formationParams: any;
  chatParams: any;
  rotation = "phone-landscape";
  isLandscape = false;
  isLocked = false;
  tabIndex: number = 0;
  audienceIdForShare: string;
  shortenedUrl: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
    public alertCtrl: AlertController,
    public platform: Platform,
    private screenOrientation: ScreenOrientation,
    public afoDatabase: AngularFireOfflineDatabase,
    private shortUrlService: ShortUrlService,
    public events: Events
  ) {
    super(navCtrl, authService, alertCtrl, platform);
    this.TAG = "GameTabsPage";
    this.scoreParams = {
      id: navParams.get("id"),
      audienceId: navParams.get("audienceId")
    };
    this.formationParams = {
      id: undefined,
      onEdit: false,
      fromLive: true
    }
    this.chatParams = {
      id: navParams.get("id"),
      audienceId: navParams.get("audienceId")
    }
    this.logOnConsole(this.TAG, this.scoreParams);
  }

  ionViewDidLoad() {
    this.initOnScreenOrientationChange();
    this.onInit(this.navbar);
  }


  shortAudienceUrl() {
    var re = /undefined/gi;
    var url = window.location.href.replace(re, this.audienceIdForShare);
    if(url.includes("loading")){
      this.logOnConsole(this.TAG, "retry, it contains loading: " + url);
      // setTimeout(this.shortAudienceUrl(), 5000);
      
    }else{
      this.logOnConsole(this.TAG, "ref: " + url);
      this.shortUrlService.load(url).then(data => {
        this.logOnConsole(this.TAG, "shortUrlService: " + data);
        this.shortenedUrl = data;
      });
    }
  }

  onUserChange(user: any) {
    this.logOnConsole(this.TAG, "on user change live" + user);
    if (user != null) {
      var id = "";
      this.logOnConsole(
        this.TAG,
        "1, audience: " + (this.scoreParams.audienceId == "undefined")
      );
      if (
        this.scoreParams.audienceId == undefined ||
        this.scoreParams.audienceId == "undefined" ||
        this.scoreParams.audienceId == ":audienceId"
      ) {
        this.logOnConsole(this.TAG, "2");
        id = this.authService.user.uid;
        this.retrieveGameInfo(id, false);
      } else {
        this.logOnConsole(this.TAG, "3");
        this.findUserFromAudienceId();
      }
    } else {
      this.logOnConsole(this.TAG, "4");
      this.findUserFromAudienceId();
    }
    this.logOnConsole(this.TAG, "5");
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
    this.logOnConsole(this.TAG, url);
    var games = this.afoDatabase.list(url);
    games.subscribe(items => {
      var found = false;
      // items is an array
      items.forEach(item => {
        if (item.id == this.scoreParams.id) {
          this.logOnConsole(this.TAG, "Item:", item);
          found = true;
          if (item.live && !isAudience) {
            this.askBeforeGoBack = true;
          }
          this.formationParams.id = item.homeTeamId;
        }
      });
      if (!found) {
        //TODO: error message
      }
    });
    var audienceRef = this.afoDatabase.object(
      "/users/" + userId + "/audienceId"
    );
    audienceRef.subscribe(audience => {
      this.audienceIdForShare = audience.$value;
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
      this.logOnConsole(this.TAG, "on change: " + type);
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

  public transition(e): void {
    this.tabIndex = e.index;
  }

  share() {
    let newVariable: any;
    newVariable = window.navigator;
    if (newVariable && newVariable.share) {
      newVariable
        .share({
          title: "title",
          text: "Segui la partita in diretta: ",
          url: this.shortenedUrl
        })
        .then(() => console.log("Successful share"))
        .catch(error => console.log("Error sharing", error));
    } else {
      alert("share not supported");
    }
  }

  sharePopup(){
    this.shortAudienceUrl();
    let prompt = this.alertCtrl.create({
      title: "Condividi la partita in corso",
      message: "Condividi la partita con i tuoi amici! Fai sapere come sta andando la tua squadra del cuore, punto per punto ;)",
      buttons: [
        {
          text: "Condividi",
          handler: data => {
            this.share();
          }
        }
      ]
    });
    prompt.present();
  }
}
