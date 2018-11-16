import { Component} from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Events,
  Platform,
  AlertController
} from "ionic-angular";
import { BasePage } from "../../common/BasePage";
import { AuthService } from "../../services/auth.service";
import {
  AfoListObservable,
  AngularFireOfflineDatabase
} from "angularfire2-offline/database";
import * as moment from "moment";


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "chat",
  segment: ":id/:audienceId"
})
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage extends BasePage {
  chatsRef: AfoListObservable<any[]>;
  chats = [];
  textAreaMessage: string;
  gameId: String;
  audienceId: String;
  isAudience = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public authService: AuthService,
    public afoDatabase: AngularFireOfflineDatabase,
    public alertCtrl: AlertController,
    public platform: Platform) {
    super(navCtrl, authService, alertCtrl, platform);
    this.gameId = navParams.get("id");
    this.audienceId = navParams.get("audienceId");
    this.TAG = "ChatPage";
  }

  ionViewDidLoad() {
    this.onInit(undefined);
  }

  onUserChange(user: any) {
    this.logOnConsole(this.TAG, "on user change live" + user);
    if (user != null) {
      var id = "";
      this.logOnConsole(this.TAG, "1, audience: " + (this.audienceId == "undefined"));
      if (this.audienceId == undefined || this.audienceId == "undefined" || this.audienceId == ":audienceId") {
        this.logOnConsole(this.TAG, "2");
        id = this.authService.user.uid;
        this.retrieveGameInfo(id);
      } else {
        this.logOnConsole(this.TAG, "3");
        this.findUserFromAudienceId();
      }
    } else {
      this.logOnConsole(this.TAG, "4");
      this.findUserFromAudienceId();
    }
    this.logOnConsole(this.TAG, "5");
  }
  
  findUserFromAudienceId() {
    var id = "";
    this.isAudience = true;
    var users = this.afoDatabase.list("/users");
    users.subscribe(userList => {
      userList.forEach(user => {
        if (user.audienceId == this.audienceId) {
          id = user.$key;
          this.retrieveGameInfo(id);
        }
      });
    });
  }

  retrieveGameInfo(userId: string) {
    var url = "/users/" + userId + "/games";
    this.logOnConsole(this.TAG, url);
    var games = this.afoDatabase.list(url);
    games.subscribe(items => {
      var found = false;
      // items is an array
      items.forEach(item => {
        this.logOnConsole(this.TAG, "Item:", item + " gameId: " + this.gameId);  
        if (item.id == this.gameId) {        
          this.showChat(userId, item.$key);
        }
      });
      if (!found) {
        //TODO: error message
      }
    });
  }


  showChat(userId: string, gameKey: string) {
    this.chatsRef = this.afoDatabase.list(
      "/users/" + userId + "/games/" + gameKey + "/chats",
      {
        query: {
          orderByChild: "ms"
        }
      }
    );
    this.chatsRef.subscribe(chatList => {
      // console.log("chat length: " + chatList.length);
      this.chats = chatList;
      var self = this;

      setTimeout(function() {
        var scrollableContent = document.getElementsByClassName(
          "scrollable-content"
        )[0] as HTMLDivElement;
        // console.log(scrollableContent + " - " + scrollableContent.scrollHeight);
        if (scrollableContent != undefined) {
          scrollableContent.scrollTo(0, scrollableContent.scrollHeight);
        }
      }, 500);
    });
  }
  
  keyPress(ev: any) {
    // console.log(ev);
    if (ev.keyCode == 13) {
      //press enter
      this.pushMessage();
    }
  }

  pushMessage() {
    if (this.textAreaMessage.trim() != "") {
      var user = this.authService.user;
      const chatsNewItem = this.chatsRef.push({});
      const chatsPromise = chatsNewItem.set({
        name: user != null ? user.displayName : "Anonimo",
        userId: user != null ? user.uid : "",
        pictureUrl: user != null ? user.photoURL : "",
        text: this.textAreaMessage,
        ms: moment(new Date()).valueOf(),
        date: moment(new Date()).format("MMM/DD, h:mm")
      });

      if (chatsPromise != undefined) {
        chatsPromise.then(() => console.log("chat added to firebase!"));
        if (chatsPromise.offline != undefined) {
          chatsPromise.offline.then(() =>
          this.logOnConsole(this.TAG, "offline chat added to device storage!")
          );
        }
      }
      this.textAreaMessage = "";
    }
    var scrollableContent = document.getElementsByClassName(
      "scrollable-content"
    )[0] as HTMLDivElement;
    this.logOnConsole(this.TAG, scrollableContent + " - " + scrollableContent.offsetHeight);
    if (scrollableContent != undefined) {
      scrollableContent.scrollTo(0, scrollableContent.offsetHeight);
    }
  }

  getChatHeight() {
    var infoContent = document.getElementsByClassName(
      "match-info-container"
    )[0] as HTMLDivElement;
    return "calc(100% - " + (infoContent.offsetHeight + 100) + "px)";
  }

  // expandChat() {
  //   this.chatExpanded = !this.chatExpanded;
  //   this.changeIconExpand();
  // }

  // changeIconExpand() {
  //   if (this.iconExpand == "expand") {
  //     this.iconExpand = "contract";
  //   } else {
  //     this.iconExpand = "expand";
  //   }
  // }

}
