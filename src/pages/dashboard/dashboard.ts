import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { MenuController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { AfoListObservable, AngularFireOfflineDatabase, AfoObjectObservable } from 'angularfire2-offline/database';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "dashboard",
  segment: "dashboard"
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  userLogged: boolean;
  userImage: String;
  version: String = "0.0.1";
  onlineVersion: AfoObjectObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authService: AuthService, public menuCtrl: MenuController, public events: Events,
    afoDatabase: AngularFireOfflineDatabase) {
      this.userLogged = false;

      this.authService.authState.subscribe(user => {
        if (user != null) {
          this.userLogged = true;
          this.userImage = user.photoURL;
          console.log("logged user: " + user.displayName);
        }else{
          this.userLogged = false;
        }
      });

      this.onlineVersion = afoDatabase.object('updateVersion');
      console.log("version: " + this.onlineVersion)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  ionViewWillEnter(){
    this.events.publish('currentPage', 'dashboard');
  }
  

  logOut(){
    this.authService.signOut();
  }

  reload(){
    window.location.reload();
  }

  createMatch(){
    this.navCtrl.push("create-match");
  }

}
