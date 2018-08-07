import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SearchLivePage } from '../pages/search-live/search-live';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireOfflineModule } from 'angularfire2-offline';
import { LoginPageModule } from '../pages/login/login.module';
import { AngularFireAuth } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import { AuthService } from '../services/auth.service';
import { HideFabDirective} from '../directives/hide-fab/hide-fab';
import { GeoService } from "../services/geo.service";
import { HttpClientModule } from '@angular/common/http';
import { Guid} from "../common/Guid";
import { GameWidgetComponent } from "../components/game-widget/game-widget";
// import { GameWidgetComponent } from '../components/game-widget/game-widget';
// import {
//   AfoListObservable,
//   AngularFireOfflineDatabase } from 'angularfire2-offline/database';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyDBvxVAYOPwEk2ApbU_DfQ-tmcgOfJ6k4Y",
    authDomain: "ionicvsk.firebaseapp.com",
    databaseURL: "https://ionicvsk.firebaseio.com",
    projectId: "ionicvsk",
    storageBucket: "",
    messagingSenderId: "589403062376"
};

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    HideFabDirective,
    GameWidgetComponent,
    SearchLivePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireOfflineModule,
    LoginPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    SearchLivePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    GooglePlus,
    AuthService,
    GeoService,
    Guid
  ]
})
export class AppModule {}
