import {
  NavController,
  AlertController,
  Platform,
  Navbar
} from "ionic-angular";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { AuthService } from "../services/auth.service";

export class BasePage {
  public canGoBack: boolean;
  public askBeforeGoBack: boolean;
  logEnabled = true;
  protected TAG = "BasePage";

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public alertCtrl: AlertController,
    public platform: Platform
  ) {}

  onUserChange(user: any) {
    this.logOnConsole(this.TAG, "onUserChange");
  }

  public goBack() {
    this.logOnConsole(this.TAG, "askBeforeGoBack: " + this.askBeforeGoBack);
    if (this.askBeforeGoBack) {
      this.askGoBackPopup();
    } else {
      if (this.navCtrl.canGoBack()) {
        this.navCtrl.pop();
      } else {
        this.navCtrl.setRoot(DashboardPage);
        this.navCtrl.popToRoot();
      }
    }
  }

  onInit(navBar: Navbar) {
    this.platform.registerBackButtonAction(() => {
      this.logOnConsole(this.TAG, "backPressed 1");
      this.errorPopup("what", "ouch");
    }, 2);
    //console.log("navbar: " + navBar);
    if (navBar != undefined) { //TODO: ------> lost navbar back button override
      navBar.backButtonClick = (e: UIEvent) => {
        // todo something
        this.goBack();
      };
    }
    this.askBeforeGoBack = false;
    this.canGoBack = this.navCtrl.canGoBack();
    this.authService.authState.subscribe(user => {
      this.onUserChange(user);
    });
  }

  errorPopup(text: string, description: string) {
    let prompt = this.alertCtrl.create({
      title: text,
      message: description,
      buttons: [
        {
          text: "OK",
          handler: data => {
            this.logOnConsole(this.TAG, "Cancel clicked");
          }
        }
      ]
    });
    prompt.present();
  }

  askGoBackPopup() {
    let prompt = this.alertCtrl.create({
      title: "Abbandona partita",
      message: "Sei sicuro di voler abbandonare la partita?",
      buttons: [
        {
          text: "Si",
          handler: data => {
            this.askBeforeGoBack = false;
            this.goBack();
          }
        },
        {
          text: "No",
          handler: data => {
            this.logOnConsole(this.TAG, "Cancel clicked");
          }
        }
      ]
    });
    prompt.present();
  }

  openLiveMatch(key: String, teamA: String, teamB: String) {
    // this.navCtrl.push("live-match", {
    //   id: key,
    //   teamA: teamA,
    //   teamB: teamB
    // });
    this.navCtrl.push("loading", {
      id: key,
      teamA: teamA,
      teamB: teamB,
      pageId: "game-tabs"
    });
  }

  protected logOnConsole(tag:string, text:string, object?:any){
    if(this.logEnabled){
      if(object != undefined && object != null){
        console.log(tag + ": " + text, object);
      }else{
        console.log(tag + ": " + text);
      }
    }
  }
}
