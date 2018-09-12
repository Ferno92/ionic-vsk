import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerStatsModalPage } from './player-stats-modal';

@NgModule({
  declarations: [
    PlayerStatsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerStatsModalPage),
  ],
})
export class PlayerStatsModalPageModule {}
