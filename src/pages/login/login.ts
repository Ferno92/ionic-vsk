import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { Platform } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { Events } from 'ionic-angular';
import { BasePage } from '../../common/BasePage';

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
export class LoginPage extends BasePage {

  user: Observable<firebase.User>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private gplus: GooglePlus, private platform: Platform,
    public authService: AuthService,private toastCtrl: ToastController, public events: Events) {
      super(navCtrl, authService)

  }

  ionViewDidLoad() {
    this.onInit();
  }

  ionViewWillEnter(){
    this.events.publish('currentPage', 'login');
  }

  onUserChange(user: any){
    if (user != null) {
      this.goBack();
    }
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
        this.goBack();
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


}
