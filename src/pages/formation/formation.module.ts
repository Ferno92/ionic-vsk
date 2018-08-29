import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormationPage } from './formation';

@NgModule({
  declarations: [
    FormationPage,
  ],
  imports: [
    IonicPageModule.forChild(FormationPage),
  ],
})
export class FormationPageModule {}
