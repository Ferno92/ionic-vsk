import { Directive, ElementRef, Renderer } from "@angular/core";
import { Content } from "ionic-angular";
import { Events } from "ionic-angular";
@Directive({
  selector: "[hide-fab]",
  host: {
    "(ionScroll)": "handleScroll($event)"
  }
})
export class HideFabDirective {
  private fabRef;
  private iconRef;
  private storedScroll: number = 0;
  private threshold: number = 10;

  constructor(
    public element: ElementRef,
    public renderer: Renderer,
    public events: Events
  ) {
    console.log("Hello HideFabDirective Directive");
  }

  ngAfterViewInit() {
    var self = this;
    setTimeout(function() {
      console.log("All Transtition set");
      self.fabRef = document.getElementsByClassName("fab-button")[0];
      self.iconRef = self.fabRef.getElementsByClassName("fab-icon")[0];
      console.log("All Transtition set " + self.fabRef + " | " + self.renderer);
      self.renderer.setElementStyle(
        self.fabRef,
        "webkitTransition",
        "transform 500ms,bottom 500ms"
      );
    }, 500);
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
    if (event.scrollTop != 0) {
      // console.log("event scroll: " + event.scrollTop);
      this.renderer.setElementStyle(this.fabRef, "background-color", "#3F51B5"); //md-arrow-round-up
      this.renderer.setElementStyle(this.fabRef, "color", "#ffffff");
      this.iconRef.classList.remove("ion-md-add");
      this.iconRef.classList.add("ion-md-arrow-round-up");

      
      // this.events.publish("currentPage", "dashboard-scroll");

      // this.renderer.setElementStyle(this.fabRef, 'transform', 'rotate(360deg)');
    } else {
      // console.log("event scroll zero");
      this.renderer.setElementStyle(this.fabRef, "background-color", "#FFC107");
      this.renderer.setElementStyle(this.fabRef, "color", "#000000");
      this.iconRef.classList.remove("ion-md-arrow-round-up");
      this.iconRef.classList.add("ion-md-add");

      // this.events.publish("currentPage", "dashboard");
      // this.renderer.setElementStyle(this.fabRef, 'transform', 'rotate(-360deg)');
    }
  }

  // filp(el){
  //   var obj = document.getElementById('flip3D');
  //   if(obj.getAttribute('flipped') === 'true') {
  //     this.renderer.setElementStyle(this.fabRef, 'transform', 'perspective(600px) rotateY(0deg)');
  //       obj.setAttribute('flipped', 'false');
  //   } else {
  //   	obj.children[0].style.transform = "perspective(600px) rotateY(180deg)";
  //       obj.setAttribute('flipped', 'true');
  //   }
  // }
}
