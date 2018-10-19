import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";

/**
 * Generated class for the PlayerStatsModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage({
  name: "page-player-stats-modal",
  segment: "page-player-stats-modal"
})
@Component({
  selector: "page-player-stats-modal",
  templateUrl: "player-stats-modal.html"
})
export class PlayerStatsModalPage {
  list: Array<any> = [];
  selected: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.selected = navParams.get("selected");
    this.list = navParams.get("list");
    if (this.selected.stats == undefined) {
      var obj3 = {
        err: 0,
        pos: 0,
        null: 0
      };
      var obj2 = {
        err: 0,
        pos: 0
      };

      this.selected.stats = {
        attacco: Object.assign({}, obj3),
        difesa: Object.assign({}, obj2),
        ricezione: Object.assign({}, obj2),
        alzata: Object.assign({}, obj2),
        battuta: Object.assign({}, obj3),
        muro: Object.assign({}, obj3)
      };
    }
  }

  ionViewDidLoad() {}

  close() {
    this.calculateMedia();
    this.viewCtrl.dismiss({ selected: this.selected });
  }

  add(parent: string, type: string) {
    switch (parent) {
      case "attacco":
        switch (type) {
          case "err":
            this.selected.stats.attacco.err++;
            break;
          case "pos":
            this.selected.stats.attacco.pos++;
            break;
          case "null":
            this.selected.stats.attacco.null++;
            break;
        }
        break;
      case "difesa":
        switch (type) {
          case "err":
            this.selected.stats.difesa.err++;
            break;
          case "pos":
            this.selected.stats.difesa.pos++;
            break;
        }
        break;
      case "ricezione":
        switch (type) {
          case "err":
            this.selected.stats.ricezione.err++;
            break;
          case "pos":
            this.selected.stats.ricezione.pos++;
            break;
        }
        break;
      case "alzata":
        switch (type) {
          case "err":
            this.selected.stats.alzata.err++;
            break;
          case "pos":
            this.selected.stats.alzata.pos++;
            break;
        }
        break;
      case "battuta":
        switch (type) {
          case "err":
            this.selected.stats.battuta.err++;
            break;
          case "pos":
            this.selected.stats.battuta.pos++;
            break;
          case "null":
            this.selected.stats.battuta.null++;
            break;
        }
        break;
      case "muro":
        switch (type) {
          case "err":
            this.selected.stats.muro.err++;
            break;
          case "pos":
            this.selected.stats.muro.pos++;
            break;
          case "null":
            this.selected.stats.muro.null++;
            break;
        }
        break;
    }
  }

  remove(parent: string, type: string) {
    switch (parent) {
      case "attacco":
        switch (type) {
          case "err":
            this.selected.stats.attacco.err = this.removeMinZero(
              this.selected.stats.attacco.err
            );
            break;
          case "pos":
            this.selected.stats.attacco.pos = this.removeMinZero(
              this.selected.stats.attacco.pos
            );
            break;
          case "null":
            this.selected.stats.attacco.null = this.removeMinZero(
              this.selected.stats.attacco.null
            );
            break;
        }
        break;
      case "difesa":
        switch (type) {
          case "err":
            this.selected.stats.difesa.err = this.removeMinZero(
              this.selected.stats.difesa.err
            );
            break;
          case "pos":
            this.selected.stats.difesa.pos = this.removeMinZero(
              this.selected.stats.difesa.pos
            );
            break;
        }
        break;
      case "ricezione":
        switch (type) {
          case "err":
            this.selected.stats.ricezione.err = this.removeMinZero(
              this.selected.stats.ricezione.err
            );
            break;
          case "pos":
            this.selected.stats.ricezione.pos = this.removeMinZero(
              this.selected.stats.ricezione.pos
            );
            break;
        }
        break;
      case "alzata":
        switch (type) {
          case "err":
            this.selected.stats.alzata.err = this.removeMinZero(
              this.selected.stats.alzata.err
            );
            break;
          case "pos":
            this.selected.stats.alzata.pos = this.removeMinZero(
              this.selected.stats.alzata.pos
            );
            break;
        }
        break;
      case "battuta":
        switch (type) {
          case "err":
            this.selected.stats.battuta.err = this.removeMinZero(
              this.selected.stats.battuta.err
            );
            break;
          case "pos":
            this.selected.stats.battuta.pos = this.removeMinZero(
              this.selected.stats.battuta.pos
            );
            break;
          case "null":
            this.selected.stats.battuta.null = this.removeMinZero(
              this.selected.stats.battuta.null
            );
            break;
        }
        break;
      case "muro":
        switch (type) {
          case "err":
            this.selected.stats.muro.err = this.removeMinZero(
              this.selected.stats.muro.err
            );
            break;
          case "pos":
            this.selected.stats.muro.pos = this.removeMinZero(
              this.selected.stats.muro.pos
            );
            break;
          case "null":
            this.selected.stats.muro.null = this.removeMinZero(
              this.selected.stats.muro.null
            );
            break;
        }
        break;
    }
  }

  removeMinZero(value: number) {
    return value - 1 >= 0 ? value - 1 : 0;
  }

  calculateMedia() {
    var errSum =
      this.selected.stats.attacco.err +
      this.selected.stats.difesa.err +
      this.selected.stats.ricezione.err +
      this.selected.stats.alzata.err +
      this.selected.stats.battuta.err +
      this.selected.stats.muro.err;

    var posSum =
      this.selected.stats.attacco.pos +
      this.selected.stats.difesa.pos +
      this.selected.stats.ricezione.pos +
      this.selected.stats.alzata.pos +
      this.selected.stats.battuta.pos +
      this.selected.stats.muro.pos;

    this.selected.stats.media = posSum - errSum;
  }
}
