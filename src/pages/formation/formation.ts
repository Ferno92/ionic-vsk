import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { PlayerComponent } from "../../components/player/player";

/**
 * Generated class for the FormationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "formation",
  segment: "formation"
})
@Component({
  selector: 'page-formation',
  templateUrl: 'formation.html',
})
export class FormationPage {
  @ViewChild("player") player: PlayerComponent;
  firstLinePlayers: { number: number, name: string }[] = [
    { "number": 17, "name": "Ferno" },
    { "number": 2, "name": "Mariot" },
    { "number": 5, "name": "Lalla" }
];
  secondLinePlayers: { number: number, name: string }[] = [
    { "number": 14, "name": "Ste" },
    { "number": 4, "name": "Marta" },
    { "number": 21, "name": "Chiara" }
];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormationPage');
  }

}
