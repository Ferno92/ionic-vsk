import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { Platform } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { DashboardPage } from '../dashboard/dashboard';
import { Events } from 'ionic-angular';

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
  canGoBack: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private gplus: GooglePlus, private platform: Platform,
    private authService: AuthService,private toastCtrl: ToastController, public events: Events) {

    console.log("user not null? ", this.user != null);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.canGoBack = this.navCtrl.canGoBack();
  }

  ionViewWillEnter(){
    this.events.publish('currentPage', 'login');
  }

  async nativeGoogleLogin(): Promise<void> {
    try {

      const gplusUser = await this.gplus.login({
        'webClientId': '208284925648-u76mj4ulkproaqu8np57pv2444s8deuh.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })

      return await this.authService.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))

    } catch (err) {
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      console.log("webGoogleLogin " + this.authService);
      const credential = await this.authService.signInWithPopup().then( success => {
        console.log("login succesfull");
        this.showSuccesfullToast('Autenticazione eseguita', "success");
        this.navCtrl.popToRoot();
      })
      .catch( error => console.error('ERROR', error));

    } catch (err) {
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
    this.authService.signOut();
  }

  login() {

  }

  createAccount() {
    //https://firebase.google.com/docs/auth/web/password-auth#create_a_password_based_account
  }

  showSuccesfullToast(text: String, result: String){
    let toast = this.toastCtrl.create({
      message: '' + text,
      duration: 2000,
      position: 'top',
      cssClass: 'toast-login ' + result
    });
  
    toast.present();
  }

  goBack(){
    if(this.navCtrl.canGoBack()){
    this.navCtrl.pop();
    }else{
      this.navCtrl.setRoot(DashboardPage);
      this.navCtrl.popToRoot();
    }
  }

}
