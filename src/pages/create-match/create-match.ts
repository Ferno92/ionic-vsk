import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  Events,
  Platform,
  Navbar
} from "ionic-angular";
import { BasePage } from "../../common/BasePage";
import { AuthService } from "../../services/auth.service";
import {
  AfoListObservable,
  AngularFireOfflineDatabase
} from "angularfire2-offline/database";
import * as moment from "moment";
import { GeoService } from "../../services/geo.service"

/**
 * Generated class for the CreateMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "create-match",
  segment: "create-match"
})
@Component({
  selector: "page-create-match",
  templateUrl: "create-match.html"
})
export class CreateMatchPage extends BasePage {
  @ViewChild("navbar") navBar: Navbar;
  teamA: String;
  teamB: String;
  games: AfoListObservable<any[]>;
  liveMatchOn: boolean;
  liveMatch: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public authService: AuthService,
    public alertCtrl: AlertController,
    public platform: Platform,
    public afoDatabase: AngularFireOfflineDatabase,
    private geoService: GeoService
  ) {
    super(navCtrl, authService, alertCtrl, platform);

    events.subscribe("create-match", page => {
      this.createMatch();
    });
  }

  ionViewDidLoad() {
    this.onInit(this.navBar);
    console.log("ionViewDidLoad");
    this.geoService.getLocation();
  }

  ionViewWillEnter() {
    this.events.publish("currentPage", "create-match");
  }

  onUserChange(user: any) {
    if (user != null) {
      this.games = this.afoDatabase.list(
        "/" + this.authService.user.uid + "/games"
      );
      this.games.subscribe(items => {
        var found = false;
        // items is an array
        items.forEach(item => {
          if (item.live) {
            found = true;
            //this.askBeforeGoBack = true;
            this.liveMatch = item;
          }
        });
        if (found) {
          this.liveMatchOn = true;
        } else {
          this.liveMatchOn = false;
        }
      });
    }
  }

  askCloseLiveMatch() {
    let prompt = this.alertCtrl.create({
      title: "Partita in corso",
      message:
        "Hai una partita in corso '" +
        this.liveMatch.teamA +
        " - " +
        this.liveMatch.teamB +
        "', vuoi chiuderla e aprirne una nuova?",
      buttons: [
        {
          text: "No",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Si",
          handler: data => {
            this.liveMatch.live = false;
            this.afoDatabase
              .object(
                "/" + this.authService.user.uid + "/games/" + this.liveMatch.id
              )
              .update(this.liveMatch);
            this.liveMatchOn = false;
            this.createMatch();
          }
        }
      ]
    });
    prompt.present();
  }

  createMatch() {
    if (
      this.teamA == undefined ||
      this.teamA.trim() == "" ||
      this.teamB == undefined ||
      this.teamB.trim() == ""
    ) {
      this.errorPopup(
        "Dati mancanti",
        "Inserisci entrambi i nomi delle squadre in gioco"
      );
    } else {
      if (this.authService.user != null) {
        if (this.liveMatchOn) {
          this.askCloseLiveMatch();
        } else {
          const newGameRef = this.games.push({});

          const promise = newGameRef.set({
            id: newGameRef.key,
            teamA: this.teamA,
            teamB: this.teamB,
            resultA: 0,
            resultB: 0,
            date: moment(new Date()).format("MMM/DD"),
            location: "Reggio-Emilia",
            live: true
          });

          if (promise != undefined) {
            promise.then(() => console.log("data added to firebase!"));
            if (promise.offline != undefined) {
              promise.offline.then(() =>
                console.log("offline data added to device storage!")
              );
            }
          }

          //TODO remove from stack create-match
          // let currentIndex = this.navController.getActive().index;
          // this.navController.push(DestinationPage).then(() => {
          //   this.navController.remove(currentIndex);
          // });
          this.openLiveMatch(newGameRef.key, this.teamA, this.teamB);
        }
      }
    }
  }
}
