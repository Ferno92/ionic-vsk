import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { MenuController } from 'ionic-angular';

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

  userLogged: boolean;
  userImage: String;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authService: AuthService, public menuCtrl: MenuController) {
      if(authService.isUserLogged()){
        console.log("user logged already");
        this.userLogged = true;
        this.userImage = authService.getUserImage();
      }else{
        console.log("no user logged");
        this.userLogged = false;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  logOut(){
    this.authService.signOut();
  }

}
