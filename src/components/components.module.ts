import { NgModule } from '@angular/core';
import { GameWidgetComponent } from './game-widget/game-widget';
import { IonicModule } from 'ionic-angular/umd';
import { PlayerComponent } from './player/player';
@NgModule({
	declarations: [GameWidgetComponent,
    PlayerComponent],
	imports: [IonicModule],
	exports: [GameWidgetComponent,
    PlayerComponent]
})
export class ComponentsModule {}
