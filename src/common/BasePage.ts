import { NavController } from "ionic-angular";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { AuthService } from "../services/auth.service";

export class BasePage {
  public canGoBack: boolean;

  constructor(public navCtrl: NavController,
    public authService: AuthService) {
  }

  onUserChange(user: any){
    
    console.log("onUserChange");
  }

  public goBack() {
    if (this.navCtrl.canGoBack()) {
      this.navCtrl.pop();
    } else {
      this.navCtrl.setRoot(DashboardPage);
      this.navCtrl.popToRoot();
    }
  }

  onInit() {
    this.canGoBack = this.navCtrl.canGoBack();
    this.authService.authState.subscribe(user => {
      this.onUserChange(user);
    });
  }
}
