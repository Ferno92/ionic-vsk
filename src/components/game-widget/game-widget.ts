import { Component, Input } from '@angular/core';

/**
 * Generated class for the GameWidgetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'game-widget',
  templateUrl: 'game-widget.html'
})
export class GameWidgetComponent {

  @Input() game: any;

  constructor() {  
    console.log("GameWidgetComponent");  
  }

}
