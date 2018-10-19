import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  Platform,
  Navbar,
  Events
} from "ionic-angular";
import { BasePage } from "../../common/BasePage";
import { AuthService } from "../../services/auth.service";
import {
  AfoListObservable,
  AngularFireOfflineDatabase,
  AfoObjectObservable
} from "angularfire2-offline/database";

/**
 * Generated class for the SearchTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "search-team",
  segment: "search-team"
})
@Component({
  selector: "page-search-team",
  templateUrl: "search-team.html"
})
export class SearchTeamPage extends BasePage {
  @ViewChild("navbar")
  navBar: Navbar;
  teams: AfoListObservable<any[]>;
  emptyTeams: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
    public alertCtrl: AlertController,
    public platform: Platform,
    public afoDatabase: AngularFireOfflineDatabase,
    public events: Events
  ) {
    super(navCtrl, authService, alertCtrl, platform);
    this.TAG = "SearchTeamPage";
  }

  ionViewDidLoad() {
    this.onInit(this.navBar);
  }

  ionViewWillEnter(){
    this.events.publish("currentPage", "search-team");
  }

  onUserChange(user: any) {
    this.logOnConsole(this.TAG, "on user change" + user);
    if (user != null) {
      this.teams = this.afoDatabase.list(
        "/users/" + this.authService.user.uid + "/teams"
      );
      var self = this;
      this.teams.subscribe({
        next(teamsFound) {
          self.logOnConsole(self.TAG, "teamsFound: " + teamsFound.length);
          self.emptyTeams = teamsFound.length <= 0;
        }
      });
    }
  }

  onTapTeam(team: any){
    this.navCtrl.push("formation", {
      id: team.id,
      onEdit: true,
      fromLive: false
    });
  }
}
