import { Directive, ElementRef, Renderer } from '@angular/core';
import { Content } from "ionic-angular";
@Directive({
  selector: '[hide-fab]',
  host: {
    '(ionScroll)': 'handleScroll($event)'
  }
})
export class HideFabDirective {
  private fabRef;
  private iconRef;
  private storedScroll: number = 0;
  private threshold: number = 10;
 
  constructor(public element:ElementRef,public renderer:Renderer) {
    console.log('Hello HideFabDirective Directive');
  }
 
  ngAfterViewInit() {
    var self = this;
    setTimeout(function(){
      console.log("All Transtition set");
      self.fabRef = document.getElementsByClassName("fab-button")[0];
      self.iconRef = self.fabRef.getElementsByClassName("fab-icon")[0];
      console.log("All Transtition set " + self.fabRef + " | " + self.renderer);
      self.renderer.setElementStyle(self.fabRef, 'webkitTransition', 'transform 500ms,bottom 500ms');
    }, 1000);
    
  }
 
  handleScroll(event: Content) {
    // if (event.scrollTop - this.storedScroll > this.threshold) {
    //   console.log("Scrolling down");
    //     this.renderer.setElementStyle(this.fabRef, 'bottom', '0');
    //     this.renderer.setElementStyle(this.fabRef, 'webkitTransform', 'scale3d(.1,.1,.1)');
    // } else if (event.scrollTop - this.storedScroll < 0) {
    //   console.log("Scrolling up");
    //     this.renderer.setElementStyle(this.fabRef, 'bottom', '-50');
    //     this.renderer.setElementStyle(this.fabRef, 'webkitTransform', 'scale3d(1,1,1)');
    // }
    // // console.log(event.scrollTop - this.storedScroll);
    // this.storedScroll = event.scrollTop;
    if(event.scrollTop != 0){
      console.log("event scroll: " + event.scrollTop);
      this.renderer.setElementStyle(this.fabRef, 'background-color', '#3F51B5');//md-arrow-round-up
      this.renderer.setElementStyle(this.fabRef, 'color', '#ffffff');
      this.iconRef.classList.remove("ion-md-add");
      this.iconRef.classList.add("ion-md-arrow-round-up");
    }else{
      console.log("event scroll zero");
      this.renderer.setElementStyle(this.fabRef, 'background-color', '#FFC107');
      this.renderer.setElementStyle(this.fabRef, 'color', '#000000');
      this.iconRef.classList.remove("ion-md-arrow-round-up");
      this.iconRef.classList.add("ion-md-add");
    }
  }

}
