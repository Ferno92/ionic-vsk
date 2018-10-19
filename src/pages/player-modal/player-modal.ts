import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PlayerModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "page-player-modal",
  segment: "page-player-modal"
})
@Component({
  selector: 'page-player-modal',
  templateUrl: 'player-modal.html',
})
export class PlayerModalPage {
  list: Array<any> = [];
  selected: any;
  zone: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    this.zone = navParams.get("zone");
    this.selected = navParams.get("selected");
    this.list = navParams.get("list");
  }

  ionViewDidLoad() {
    
  }

  close(){
    this.viewCtrl.dismiss({selected: this.selected, zone: this.zone});
  }

  substitute(player:any){
    
    var index = this.list.indexOf(player, 0);
    if(this.selected.number > 0){
      this.list[index] = this.selected;
    }else{
      this.list.splice(index, 1);
    }
    this.selected = player;
  }

  remove(){
    this.list.push(this.selected);
    this.selected = {
      id: "",
      name: "",
      number: -1
    }
  }

}
