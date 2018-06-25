import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authService: AuthService) {
      if(authService.isUserLogged()){
        console.log("user logged already");
      }else{
        console.log("no user logged");
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  logOut(){
    this.authService.signOut();
  }

}
