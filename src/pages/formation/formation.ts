import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  List,
  AlertController,
  Platform,
  Navbar,
  Events,
  ModalController
} from "ionic-angular";
import { PlayerComponent } from "../../components/player/player";
import { BasePage } from "../../common/BasePage";
import { AuthService } from "../../services/auth.service";
import {
  AfoListObservable,
  AngularFireOfflineDatabase,
  AfoObjectObservable
} from "angularfire2-offline/database";
import { Guid } from "../../common/Guid";
/**
 * Generated class for the FormationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "formation",
  segment: "formation/:id/:onEdit/:fromLive"
})
@Component({
  selector: "page-formation",
  templateUrl: "formation.html"
})
export class FormationPage extends BasePage {
  @ViewChild("player")
  player: PlayerComponent;
  @ViewChild("navbar")
  navBar: Navbar;
  teamRef: AfoListObservable<any[]>;
  team = { id: "", name: "", players: [], win: -1 };
  teamId: string;
  onEdit: boolean;
  fromLive: boolean;
  pageTitle: string;
  teamKey: string;
  players: Array<any> = [];
  firstLinePlayers: {id: string, number: number; name: string }[] = [
    { id: "", number: -1, name: "" },
    { id: "", number: -1, name: "" },
    { id: "", number: -1, name: "" }
  ];
  secondLinePlayers: { id: string, number: number; name: string }[] = [
    { id: "", number: -1, name: "" },
    { id: "", number: -1, name: "" },
    { id: "", number: -1, name: "" }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
    public alertCtrl: AlertController,
    public platform: Platform,
    public afoDatabase: AngularFireOfflineDatabase,
    public events: Events,
    private guid: Guid,
    public modalCtrl: ModalController
  ) {
    super(navCtrl, authService, alertCtrl, platform);
    this.TAG = "FormationPage";
    this.teamId = navParams.get("id");
    this.onEdit = navParams.get("onEdit");
    this.fromLive = navParams.get("fromLive");
    this.pageTitle = "Formazione";
    this.logOnConsole(
      this.TAG,
      this.teamId + " " + this.onEdit + " " + this.fromLive
    );

    events.subscribe("create-team", page => {
      this.saveTeam();
    });
  }

  ionViewDidLoad() {
    this.onInit(this.navBar);
  }

  ionViewWillEnter() {
    if (this.fromLive) {
      this.events.publish("currentPage", "formation-from-live");
    } else {
      this.events.publish("currentPage", "formation");
    }
  }

  onUserChange(user: any) {
    this.logOnConsole(this.TAG, "on user change" + user);
    if (user != null && this.teamId != undefined && this.teamId != "undefined") {
      this.teamRef = this.afoDatabase.list(
        "/users/" + this.authService.user.uid + "/teams"
      );
      var self = this;
      this.teamRef.subscribe({
        next(teamsFound) {
          self.logOnConsole(this.TAG, "teamFound: " + teamsFound.length);
          teamsFound.filter(item => {
            return (
              item.id.toLowerCase().indexOf(self.teamId.toLowerCase()) > -1
            );
          });
          if (teamsFound.length > 0) {
            if (teamsFound[0].players == undefined) {
              teamsFound[0].players = [];
            }
            self.players = teamsFound[0].players;
            self.team = teamsFound[0];
            self.teamKey = teamsFound[0].$key;
            self.firstLinePlayers = teamsFound[0].firstLine;
            self.secondLinePlayers = teamsFound[0].secondLine;
          }
        }
      });
    }else{
      this.team = {id: "", name: "Non possiedi le informazioni di questa squadra, creala nella sezione 'Le mie squadre'", players: [], win: -1};
    }
  }

  saveTeam() {
    this.logOnConsole(this.TAG, "teamId: " + this.teamId);
    if (this.teamId != null && this.teamId != undefined && this.teamId != "") {
      if (this.checkMissingData()) {
        this.teamId = this.guid.newGuid();
        this.saveTeamOnFirebase(false);
      } else {
        this.errorPopup(
          "Dati mancanti",
          "Mancano alcuni dati, controlla di aver inserito tutto!"
        );
      }
    } else {
      if (this.checkMissingData()) {
        this.teamId = this.guid.newGuid();
        this.saveTeamOnFirebase(true);
      } else {
        this.errorPopup(
          "Dati mancanti",
          "Mancano alcuni dati, controlla di aver inserito tutto!"
        );
      }
    }
  }

  checkMissingData() {
    return (
      this.team.name != null &&
      this.team.name != undefined &&
      this.team.name.trim() != ""
    );
  }

  saveTeamOnFirebase(isNew: boolean) {
    var teamRefAdded;

    var teamPromise;
    var obj = {
      id: this.teamId,
      name: this.team.name,
      players: this.players,
      win: this.team.win == undefined ? 0 : this.team.win,
      firstLine: this.firstLinePlayers,
      secondLine: this.secondLinePlayers
    };
    if (isNew) {
      teamRefAdded = this.teamRef.push({});

      teamPromise = teamRefAdded.set(obj);
    } else {
      teamRefAdded = this.afoDatabase
        .object(
          "/users/" + this.authService.user.uid + "/teams/" + this.teamKey
        )
        .update(obj);
    }

    if (teamPromise != undefined) {
      teamPromise.then(() =>
        this.logOnConsole(this.TAG, "team edited on firebase!")
      );
      if (teamPromise.offline != undefined) {
        teamPromise.offline.then(() =>
          this.logOnConsole(this.TAG, "offline team edited to device storage!")
        );
      }
    }
    if (!this.fromLive) {
      this.goBack();
    } else {
      this.onEdit = false;
    }
  }

  modifyPlayer(player: any) {
    this.addPlayer(player);
  }

  addPlayer(player: any) {
    var buttons = [
      {
        text: "Aggiungi",
        handler: data => {
          if (data.name.trim() != "" && data.number.trim() != "") {
            this.players.push({
              id: this.guid.newGuid(),
              name: data.name,
              number: data.number
            });
            console.log(this.players);
          } else {
            this.errorPopup(
              "Dati mancanti",
              "Numero o nome giocatore non inserito correttamente"
            );
          }
        }
      }
    ];
    if (player != undefined) {
      buttons.push({
        text: "Elimina",
        handler: data => {
          var index = this.players.indexOf(player, 0);
          if (index > -1) {
            this.players.splice(index, 1);
          }
        }
      });
    }
    let prompt = this.alertCtrl.create({
      title: "Aggiungi giocatore",
      message: "Inserisci nome e numero del giocatore",
      inputs: [
        {
          name: "name",
          placeholder: "Nome",
          value: player != undefined ? player.name : ""
        },
        {
          name: "number",
          placeholder: "Numero",
          type: "number",
          value: player != undefined ? player.number : ""
        }
      ],
      buttons: buttons
    });
    prompt.present();
  }

  changePlayer(player: any, zone: number) {
    var playersAvailable = [];
    this.players.forEach(element => {
      var found = false;
      this.firstLinePlayers.forEach(item1 =>{
        if(item1.number == element.number){
          found = true;
        }
      });
      
      this.secondLinePlayers.forEach(item2 =>{
        if(item2.number == element.number){
          found = true;
        }
      });
      if(!found){
        playersAvailable.push(element);
      }
      
    });
    const modal = this.modalCtrl.create("page-player-modal", {
      selected: player,
      list: playersAvailable,
      zone: zone
    });
    modal.onDidDismiss(data => {
      this.updateFormation(data);
    });
    modal.present();
  }

  updateFormation(data:any){
    switch(data.zone){
      case 1:
      this.secondLinePlayers[2] = data.selected;
      break;
      case 2:
      this.firstLinePlayers[2] = data.selected;
      break;
      case 3:
      this.firstLinePlayers[1] = data.selected;
      break;
      case 4:
      this.firstLinePlayers[0] = data.selected;
      break;
      case 5:
      this.secondLinePlayers[0] = data.selected;
      break;
      case 6:
      this.secondLinePlayers[1] = data.selected;
      break;
    }
  }
}
