import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AuthService } from "../services/auth.service";
import { App, AlertController } from "ionic-angular";
import { Events } from "ionic-angular";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { Observable, Subject } from "rxjs";
import { ApplicationRef } from '@angular/core';
// import { GoogleLoginComponent } from '../components/google-login/google-login';
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = DashboardPage;
  userLogged: boolean;
  userImage: String;
  userName: String;
  fabColor: String;
  fabIcon: String;
  hasFab: boolean;
  public currentMenu: String;
  public subject: Subject<String>;

  constructor(
    public app: App,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private auth: AuthService,
    public events: Events,
    public alertCtrl: AlertController, 
    private applicationRef : ApplicationRef 
  ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.userLogged = false;
      this.currentMenu = "dashboard";
      this.auth.authState.subscribe(user => {
        // console.log("logged user change ");
        if (user != null) {
          this.userLogged = true;
          this.userImage = user.photoURL;
          this.userName = user.displayName;
          // console.log("logged user: " + user.displayName);
        } else {
          this.userLogged = false;
        }
      });

      this.subject = new Subject();
      this.subject.subscribe(next => {
        this.currentMenu = next;
      });

      events.subscribe("currentPage", page => {
        // user and time are the same arguments passed in `events.publish(user, time)`
        console.log("current page: " + page);
        this.setCurrentPage(page);
        this.changeFab(page);
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

  setCurrentPage(page: String) {
    this.subject.next(page);
  }

  popupLogout() {
    let prompt = this.alertCtrl.create({
      title: "Esci",
      message: "Vuoi veramente uscire?",
      buttons: [
        {
          text: "Indietro",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Esci",
          handler: data => {
            this.logOut();
          }
        }
      ]
    });
    prompt.present();
  }

  logOut() {
    this.auth.signOut();
  }

  fabOnClick(){
    if(this.currentMenu == "dashboard"){
      this.createMatch();
    }else if(this.currentMenu == "create-match"){
      this.startMatch();
    }else if(this.currentMenu == "dashboard-scroll"){
      this.scrollTop();
    }
  }

  createMatch() {
    this.app.getActiveNav().push("create-match");
  }

  startMatch() {
    this.app.getActiveNav().push("live-match");
  }

  scrollTop(){
    document.getElementsByClassName("dashboard-container")[0].getElementsByClassName("scroll-content")[0].scrollTop = 0;
    
    console.log("top!!!");
    // var element = document.getElementsByClassName("fab-button");
    // for(var i=0, len = element.length; i<len; i++)
    // {
    //   element[i].style["background-color"] = "#FFC107";
    //   element[i].style["color"] = "#000000";
    // }
    // document.getElementsByClassName("fab-icon")[0].classList.remove("ion-md-arrow-round-up");
    // document.getElementsByClassName("fab-icon")[0].classList.add("ion-md-add");
    
    this.fabColor = "secondary";
    this.fabIcon = "md-add";
    
    this.events.publish("currentPage", "dashboard");
  }

  changeFab(type: String) {
    console.log("changeFab: " + type);
    if (type === "create-match") {
      this.fabColor = "success";
      this.fabIcon = "md-checkmark";
      this.hasFab = true;
    }else if(type === "dashboard"){
      this.fabColor = "secondary";
      this.fabIcon = "md-add";
      this.hasFab = true;
    }else if(type === "dashboard-scroll"){
      this.fabColor = "primary";
      this.fabIcon = "md-arrow-round-up";
      this.hasFab = true;
      console.log("color: " + this.fabColor + " fabIcon: " + this.fabIcon);
    }else{
      //hide fab
      this.hasFab = false;
      
    }
    this.applicationRef.tick();
  }
}
