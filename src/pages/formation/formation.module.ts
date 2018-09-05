import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormationPage } from './formation';
import { PlayerComponent } from "../../components/player/player";

@NgModule({
  declarations: [
    FormationPage,
    PlayerComponent
  ],
  imports: [
    IonicPageModule.forChild(FormationPage),
  ],
})
export class FormationPageModule {}
