import { Component, Input } from '@angular/core';
import { BasePage } from '../../common/BasePage';

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
  @Input() i: number;
  @Input() openGame: (game:any, pageRef:any) => void;
  @Input() onPressingCardGame: (game:any, pageRef:any) => void;
  @Input() updateEditCheck: (game:any, pageRef:any) => void;
  @Input() tapCheckbox: (game:any, pageRef:any) => void;
  @Input() ref: BasePage;
  @Input() onEdit: boolean;

  constructor() {  
    console.log("GameWidgetComponent");  
  }

  openGameInWidget(game:any){
    this.openGame(game, this.ref);
  }

  onPressing(game:any){
    this.onPressingCardGame(game, this.ref);
  }

  updateCheck(game:any){
    this.updateEditCheck(game, this.ref);
  }

  tapCheck(game:any){
    this.tapCheckbox(game, this.ref);
  }
}
