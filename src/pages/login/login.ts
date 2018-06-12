import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { GooglePlus } from '@ionic-native/google-plus';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * https://ionicthemes.com/tutorials/about/ionic2-app-with-socialsharing-and-deeplinking
 * https://ionicframework.com/docs/native/deeplinks/
 * https://angularfirebase.com/lessons/ionic-google-login-with-firebase-and-angularfire/
 */

@IonicPage({
  name: "login",
  segment: "login"
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: Observable<firebase.User>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, 
    private gplus: GooglePlus,
    private platform: Platform) {

      this.user = this.afAuth.authState;
      console.log("user not null? ", this.user != null);

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async nativeGoogleLogin(): Promise<void> {
    try {
  
      const gplusUser = await this.gplus.login({
        'webClientId': '208284925648-u76mj4ulkproaqu8np57pv2444s8deuh.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })
  
      return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))
  
    } catch(err) {
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
  
    } catch(err) {
      console.log(err)
    }
  
  }

  googleLogin() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
  }
  
  signOut() {
    this.afAuth.auth.signOut();
  }

}
