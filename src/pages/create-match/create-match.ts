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
  AngularFireOfflineDatabase,
  AfoObjectObservable
} from "angularfire2-offline/database";
import * as moment from "moment";
import { GeoService } from "../../services/geo.service";
import { ChangeDetectorRef } from "@angular/core";
import { Guid } from "../../common/Guid";

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
  live: AfoListObservable<any[]>;
  audience: AfoObjectObservable<any>;
  audienceId: string;
  liveKey: string;
  liveMatchOn: boolean;
  liveMatch: any;
  places: any[] = [];
  selectedPlace: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public authService: AuthService,
    public alertCtrl: AlertController,
    public platform: Platform,
    public afoDatabase: AngularFireOfflineDatabase,
    private geoService: GeoService,
    private changeDetector: ChangeDetectorRef,
    private guid: Guid
  ) {
    super(navCtrl, authService, alertCtrl, platform);

    events.subscribe("create-match", page => {
      this.createMatch();
    });
  }

  ionViewDidLoad() {
    this.onInit(this.navBar);
    console.log("ionViewDidLoad " + moment(new Date()).valueOf());
    this.geoService.getLocation(this.retrievePlaces, this);
  }

  ionViewWillEnter() {
    this.events.publish("currentPage", "create-match");
  }

  onUserChange(user: any) {
    if (user != null) {
      this.games = this.afoDatabase.list(
        "/users/" + this.authService.user.uid + "/games"
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

      //check spectateId exists
      this.audience = this.afoDatabase.object(
        "/users/" + this.authService.user.uid + "/audienceId"
      );
      var self = this;
      this.audience.subscribe(item => {
        if (item.$value == null) {
          var id = self.guid.newGuid();
          self.audience.set(id);
          self.audienceId = id;
        } else {
          self.audienceId = item.$value;
        }
      });

      //reference to live game list
      this.live = this.afoDatabase.list("/live");
      this.live.subscribe(items => {
        items.forEach(item => {
          if (item.audienceId == this.audienceId) {
            console.log("found live: " + item.$key);
          } else {
            console.log("not found live");
          }
        });
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
                "/users/" + this.authService.user.uid + "/games/" + this.liveMatch.id
              )
              .update(this.liveMatch);
            this.live.remove(this.liveKey);
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
          var location = {
            id: "",
            name: "",
            lat: "",
            long: "",
            city: "",
            address: ""
          };
          if (this.selectedPlace != "0") {
            for (var i = 0; i < this.places.length; i++) {
              var item: any = this.places[i];
              console.log(item.id);
              if (item.id == this.selectedPlace) {
                location.id = this.selectedPlace;
                location.name = item.name;
                location.lat = item.location.lat;
                location.long = item.location.lng;
                location.city =
                  item.location.city == undefined ? "" : item.location.city;
                location.address =
                  item.location.address == undefined
                    ? ""
                    : item.location.address;
                break;
              }
            }
          }

          var date = {
            ms: moment(new Date()).valueOf(),
            day: moment(new Date()).format("MMM/DD")
          }

          const promise = newGameRef.set({
            id: newGameRef.key,
            teamA: this.teamA,
            teamB: this.teamB,
            resultA: 0,
            resultB: 0,
            date: date,
            location: location,
            live: true
          });

          const liveRef = this.live.push({});
          const livePromise = liveRef.set({
            audienceId: this.audienceId,
            userId: this.authService.user.uid,
            gameKey: newGameRef.key
          });

          if (promise != undefined) {
            promise.then(() => console.log("data added to firebase!"));
            livePromise.then(() => console.log("live link added to firebase!"));
            if (promise.offline != undefined) {
              promise.offline.then(() =>
                console.log("offline data added to device storage!")
              );
              livePromise.offline.then(() =>
                console.log("offline live link added to device storage!")
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

  retrievePlaces(placesObserver: any, pagesRef: CreateMatchPage) {
    placesObserver.subscribe(
      data => {
        console.log(data.response.venues);
        data.response.venues.push({ id: 0, name: "Seleziona una voce.." });
        pagesRef.selectedPlace = "0";
        pagesRef.places = data.response.venues;
        // pagesRef.changeDetector.detectChanges();
      },
      err => console.error(err),
      () => console.log("done loading places")
    );
  }

  onPlaceSelection(text: String) {
    console.log(this.selectedPlace);
  }
}
