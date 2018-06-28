import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';
import { App } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
// import { GoogleLoginComponent } from '../components/google-login/google-login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = DashboardPage;
  userLogged: boolean;
  userImage: String;

  constructor(public app: App, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private auth: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.auth.authState.subscribe(user => {
        console.log("logged user change ");
        if (user != null) {
          this.userLogged = true;
          this.userImage = user.photoURL;
          console.log("logged user: " + user.displayName);
        }else{
          this.userLogged = false;
        }
      });
      this.userLogged = false;
    });
  }

  goToLogin() {
    this.app.getActiveNav().push('login');
  }
}

