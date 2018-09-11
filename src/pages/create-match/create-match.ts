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
  @ViewChild("navbar")
  navBar: Navbar;
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
  teams: any[] = [];
  teamId: string;
  teamHomeEnabled = true;
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
    this.TAG = "CreateMatchPage";

    events.subscribe("create-match", page => {
      this.createMatch();
    });
  }

  ionViewDidLoad() {
    this.onInit(this.navBar);
    this.logOnConsole(
      this.TAG,
      "ionViewDidLoad " + moment(new Date()).valueOf()
    );
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
      var self = this;
      this.live.subscribe(items => {
        items.forEach(item => {
          if (item.audienceId == this.audienceId) {
            self.logOnConsole(this.TAG, "found live: " + item.$key);
          } else {
            self.logOnConsole(this.TAG, "not found live");
          }
        });
      });

      const teamsRef = this.afoDatabase.list("/users/" + this.authService.user.uid + "/teams");
      teamsRef.subscribe(items => {
        items.forEach(item =>{
          self.teams.push(item);
        });
        console.log(self.teams);
      })
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
            this.logOnConsole(this.TAG, "Cancel clicked");
          }
        },
        {
          text: "Si",
          handler: data => {
            this.liveMatch.live = false;
            this.afoDatabase
              .object(
                "/users/" +
                  this.authService.user.uid +
                  "/games/" +
                  this.liveMatch.id
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
              this.logOnConsole(this.TAG, item.id);
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
          };

          const promise = newGameRef.set({
            id: newGameRef.key,
            teamA: this.teamA,
            teamB: this.teamB,
            resultA: 0,
            resultB: 0,
            date: date,
            location: location,
            live: true,
            homeTeamId: this.teamId
          });

          const liveRef = this.live.push({});
          const livePromise = liveRef.set({
            audienceId: this.audienceId,
            userId: this.authService.user.uid,
            gameKey: newGameRef.key
          });

          if (promise != undefined) {
            promise.then(() =>
              this.logOnConsole(this.TAG, "data added to firebase!")
            );
            livePromise.then(() =>
              this.logOnConsole(this.TAG, "live link added to firebase!")
            );
            if (promise.offline != undefined) {
              promise.offline.then(() =>
                this.logOnConsole(
                  this.TAG,
                  "offline data added to device storage!"
                )
              );
              livePromise.offline.then(() =>
                this.logOnConsole(
                  this.TAG,
                  "offline live link added to device storage!"
                )
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
        pagesRef.logOnConsole(this.TAG, data.response.venues);
        data.response.venues.push({ id: 0, name: "Seleziona una voce.." });
        pagesRef.selectedPlace = "0";
        pagesRef.places = data.response.venues;
        // pagesRef.changeDetector.detectChanges();
      },
      err => console.error(err),
      () => pagesRef.logOnConsole(this.TAG, "done loading places")
    );
  }

  onPlaceSelection(text: String) {
    this.logOnConsole(this.TAG, this.selectedPlace);
  }

  openTeamAlert(){
    var list = [{
      type: 'radio',
      label: 'Inserisci nuova squadra',
      value: 'new',
      checked: true
    }];
    this.teams.forEach(item => {
      var obj = {
        type: 'radio',
        label: item.name,
        value: item.id,
        checked: false
      }
      list.push(obj);
    });
    let prompt = this.alertCtrl.create({
      title: "Scegli squadra",
      message: "Scegli tra le squadre che hai salvato",
      inputs: list
    });
    prompt.addButton('Cancel');
    prompt.addButton({
      text: 'Ok',
      handler: (data: any) => {
        console.log('Radio data:', data);
        if(data == 'new'){
          this.teamHomeEnabled = true;
          this.teamA = '';
          this.teamId = ''
        }else{
          this.teamHomeEnabled = false;
          this.teams.forEach(team =>{
            if(team.id == data){
              this.teamA = team.name;
            }
          });
          this.teamId = data;
        }
      }
    });
    prompt.present();
  }
}
