import { NavController } from "ionic-angular";
import { DashboardPage } from "../pages/dashboard/dashboard";

export class BasePage {
  public canGoBack: boolean;

  constructor(public navCtrl: NavController) {}

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
  }
}
