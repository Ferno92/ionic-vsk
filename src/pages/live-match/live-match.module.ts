import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveMatchPage } from './live-match';

@NgModule({
  declarations: [
    LiveMatchPage,
  ],
  imports: [
    IonicPageModule.forChild(LiveMatchPage),
  ],
})
export class LiveMatchPageModule {}
