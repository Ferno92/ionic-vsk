import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../../common/BasePage';
import { Events } from 'ionic-angular';

/**
 * Generated class for the LiveMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "live-match",
  segment: "live-match"
})
@Component({
  selector: 'page-live-match',
  templateUrl: 'live-match.html',
})
export class LiveMatchPage extends BasePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    super(navCtrl)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiveMatchPage');
    this.onInit();
  }
  
  ionViewWillEnter(){
    this.events.publish('currentPage', 'live-match');
  }

}
