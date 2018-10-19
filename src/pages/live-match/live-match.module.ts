import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveMatchPage } from './live-match';
import {AutosizeModule} from 'ngx-autosize';

@NgModule({
  declarations: [
    LiveMatchPage,
  ],
  imports: [
    IonicPageModule.forChild(LiveMatchPage),
    AutosizeModule
  ],
})
export class LiveMatchPageModule {}
