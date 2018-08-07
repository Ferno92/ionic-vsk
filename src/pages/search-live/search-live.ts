import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  Platform,
  Navbar
} from "ionic-angular";
import {
  AfoListObservable,
  AngularFireOfflineDatabase,
  AfoObjectObservable
} from "angularfire2-offline/database";
import { BasePage } from "../../common/BasePage";
import { AuthService } from "../../services/auth.service";
import { GameWidgetComponent } from "../../components/game-widget/game-widget";

/**
 * Generated class for the SearchLivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "search-live",
  segment: "search-live"
})
@Component({
  selector: "search-live",
  templateUrl: "search-live.html"
})
export class SearchLivePage extends BasePage {
  @ViewChild("navbar") navBar: Navbar;
  @ViewChild("gameWidget") gameWidget: GameWidgetComponent;
  liveList: AfoListObservable<any[]>;
  emptyGames = true;
  games = [];
  gamesFiltered = [];
  onSearch = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afoDatabase: AngularFireOfflineDatabase,
    public authService: AuthService,
    public alertCtrl: AlertController,
    public platform: Platform
  ) {
    super(navCtrl, authService, alertCtrl, platform);
    //reference to live game list
    this.liveList = this.afoDatabase.list("/live");
    var self = this;
    this.liveList.subscribe(items => {
      console.log("SearchLivePage: " + items.length);
      if (items.length > 0) {
        this.emptyGames = false;
      } else {
        this.emptyGames = true;
      }
      items.forEach(item => {
        var afoListObs = self.afoDatabase.list("/users/" + item.userId + "/games");
        afoListObs.subscribe(userGames => {
          userGames.forEach(game => {
            // console.log(game.$key + " - " + item.gameKey + " = " + (game.$key == item.gameKey));
            if (game.$key == item.gameKey) {
              game.audienceId = item.audienceId;
              if (self.games.length > 0) {
                self.games.forEach(gamePushed => {
                  if (gamePushed.id != game.id) {
                    self.games.push(game);
                  }
                });
              } else {
                self.games.push(game);
              }
            }
          });
          this.gamesFiltered = this.games;
        });
      });
    });
  }

  ionViewDidLoad() {
    this.onInit(this.navBar);
  }

  showLiveGame(game: any, pageRef: any) {
    pageRef.navCtrl.push("live-match", {
      id: game.$key,
      audienceId: game.audienceId
    });
  }
  
  onPressingCardGame(game: any, pageRef: any) {}
  
  updateEditCheck(game: any, pageRef: any) {}

  showSearch(){
    this.onSearch = true;
  }

  getItems(ev: any){
    const val = ev.target.value;
    console.log("getItems" + val);
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.gamesFiltered = this.games.filter((item) => {
        return (item.teamA.toLowerCase().indexOf(val.toLowerCase()) > -1) || 
        (item.teamB.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }else if(val == undefined){
      this.onSearch = false;
      this.gamesFiltered = this.games;
    }
  }

  onCancel(ev:any){
    this.onSearch = false;
    this.gamesFiltered = this.games;
    console.log("onCancel");
  }
}
