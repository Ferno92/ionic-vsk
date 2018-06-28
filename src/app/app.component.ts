import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AuthService } from "../services/auth.service";
import { App } from "ionic-angular";
import { Events } from 'ionic-angular';

import { DashboardPage } from "../pages/dashboard/dashboard";
import { Observable, Subject } from "rxjs";
// import { GoogleLoginComponent } from '../components/google-login/google-login';
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = DashboardPage;
  userLogged: boolean;
  userImage: String;
  userName: String;
  public currentMenu: String;
  public subject: Subject<String>;

  constructor(
    public app: App,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private auth: AuthService,
    public events: Events
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.userLogged = false;
      this.currentMenu = "dashboard";
      this.auth.authState.subscribe(user => {
        console.log("logged user change ");
        if (user != null) {
          this.userLogged = true;
          this.userImage = user.photoURL;
          this.userName = user.displayName;
          console.log("logged user: " + user.displayName);
        } else {
          this.userLogged = false;
        }
      });
      
      this.subject = new Subject();
      this.subject.subscribe(next => {
        this.currentMenu = next;
      })

      events.subscribe('currentPage', (page) => {
        // user and time are the same arguments passed in `events.publish(user, time)`
        console.log('current page: ' + page);
        this.setCurrentPage(page);
      });
    });
  }

  goToLogin() {
    this.app.getActiveNav().push("login");
    this.subject.next("login");
  }

  goToDashboard() {
    this.app.getActiveNav().setRoot(DashboardPage);
    this.app.getActiveNav().popToRoot();
    this.subject.next("dashboard");
  }

  setCurrentPage(page: String){
    this.subject.next(page);
  }
}
