import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameTabsPage } from './game-tabs';

@NgModule({
  declarations: [
    GameTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(GameTabsPage),
  ],
})
export class GameTabsPageModule {}
