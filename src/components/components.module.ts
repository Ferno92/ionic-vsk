import { NgModule } from '@angular/core';
import { GameWidgetComponent } from './game-widget/game-widget';
import { IonicModule } from 'ionic-angular/umd';
@NgModule({
	declarations: [GameWidgetComponent],
	imports: [IonicModule],
	exports: [GameWidgetComponent]
})
export class ComponentsModule {}
