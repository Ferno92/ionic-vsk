import { Component, Input } from '@angular/core';

/**
 * Generated class for the PlayerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'player',
  templateUrl: 'player.html'
})
export class PlayerComponent {

  @Input() name: string;
  @Input() number: number;

  constructor() {
    
  }

}
