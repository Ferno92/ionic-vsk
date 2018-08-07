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
        var afoListObs = self.afoDatabase.list("/" + item.userId + "/games");
        afoListObs.subscribe(userGames => {
          userGames.forEach(game => {
            // console.log(game.$key + " - " + item.gameKey + " = " + (game.$key == item.gameKey));
            if(game.$key == item.gameKey){
              self.games.push(game);
            }
          });
        });
      });
    });
  }

  ionViewDidLoad() {
    this.onInit(this.navBar);
  }
}
