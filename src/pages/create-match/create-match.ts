import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { BasePage } from '../../common/BasePage';
import { AuthService } from "../../services/auth.service";

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
  selector: 'page-create-match',
  templateUrl: 'create-match.html',
})
export class CreateMatchPage extends BasePage {
  teamA: String;
  teamB: String;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,
    public authService: AuthService) {
    super(navCtrl, authService);

    events.subscribe("create-match", page => {
      console.log(this.teamA + " - " + this.teamB);
      this.navCtrl.push("live-match", {
        "teamA": this.teamA,
        "teamB": this.teamB
      });
    });
  }

  ionViewDidLoad() {
    this.onInit();
  }

  ionViewWillEnter(){
    this.events.publish('currentPage', 'create-match');
  }


}
