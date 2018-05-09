import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {
  AfoListObservable,
  AngularFireOfflineDatabase } from 'angularfire2-offline/database';
// import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // songsRef: AngularFireList<any>;
  songs: AfoListObservable<any[]>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
    afoDatabase: AngularFireOfflineDatabase, public actionSheetCtrl: ActionSheetController) {
      // this.songsRef = afDatabase.list('/songs');
      this.songs = afoDatabase.list('/songs');
  }

  addSong(){
    let prompt = this.alertCtrl.create({
      title: 'Song Name',
      message: "Enter a name for this new song you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked'); 
          }
        },
        {
          text: 'Save',
          handler: data => {
            const newSongRef = this.songs.push({});
   
            const promise = newSongRef.set({
              id: newSongRef.key,
              title: data.title
            });
            promise.offline.then(() => console.log('offline data added to device storage!'));
            promise.then(() => console.log('data added to firebase!'));
          }
        }
      ]
    });
    prompt.present();
  }

  showOptions(songId, songTitle) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Delete Song',
          role: 'destructive',
          handler: () => {
            this.removeSong(songId);
          }
        },{
          text: 'Update title',
          handler: () => {
            this.updateSong(songId, songTitle);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  removeSong(songId: string){
    const promise = this.songs.remove(songId);
    promise.offline.then(() => console.log('offline data removed from device storage!'));
            promise.then(() => console.log('data removed from firebase!'));
  }

  updateSong(songId, songTitle){
    let prompt = this.alertCtrl.create({
      title: 'Song Name',
      message: "Update the name for this song",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title',
          value: songTitle
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            const promise = this.songs.update(songId, {
              title: data.title
            });
            promise.offline.then(() => console.log('offline data updated to device storage!'));
            promise.then(() => console.log('data updated to firebase!'));
          }
        }
      ]
    });
    prompt.present();
  }
}
