import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController, Loading } from 'ionic-angular';

/**
 * Generated class for the TransitionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage({
  name: "loading",
  segment: "loading"
})
@Component({
  selector: 'page-transition',
  templateUrl: 'transition.html',
})
export class TransitionPage {
  loader: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, loadingCtrl: LoadingController) {
    this.loader = loadingCtrl.create({
      content: "Caricamento..."
    });
    this.loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransitionPage');
    this.navCtrl.push(this.navParams.get("pageId"), {
      id: this.navParams.get("id"),
      audienceId: this.navParams.get("audienceId")
    }).then(() => {
      const index = this.navCtrl.getActive().index;
      this.navCtrl.remove(0, index);
      this.loader.dismiss();
    });;

  }

}
