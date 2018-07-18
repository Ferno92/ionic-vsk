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

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public alertCtrl: AlertController,
    public platform: Platform
  ) {}

  onUserChange(user: any) {
    console.log("onUserChange");
  }

  public goBack() {
    console.log("askBeforeGoBack: " + this.askBeforeGoBack);
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
    console.log("navbar");
    this.platform.registerBackButtonAction(() => {
      console.log("backPressed 1");
      this.errorPopup("what", "ouch");
    }, 2);
    navBar.backButtonClick = (e: UIEvent) => {
      // todo something
      console.log("backPressed 2");
      this.askGoBackPopup();
    };
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
            console.log("Cancel clicked");
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
            console.log("Cancel clicked");
          }
        }
      ]
    });
    prompt.present();
  }

  openLiveMatch(key:String, teamA:String, teamB:String){
    this.navCtrl.push("live-match", {
      id: key,
      teamA: teamA,
      teamB: teamB
    });
  }

}
