
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { Guid } from '../common/Guid';

@Injectable()
export class AuthService {
    public user: firebase.User;
    public userLogged: boolean;
    public authState: any;
    public anonymousId = new Guid();

    constructor(public afAuth: AngularFireAuth) {
        console.log("AuthService constructor");
        this.userLogged = false;
        this.authState = this.afAuth.authState;
        this.afAuth.authState.subscribe(user => {
            this.user = user;
            if(this.user != null){
                this.userLogged = true;
            }
        });
    }

    signInWithEmail(credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
            credentials.password);
    }

    signInWithCredential(credentials) {
        console.log('Sign in with credentials');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
            credentials.password);
    }

    signInWithPopup() {

        const provider = new firebase.auth.GoogleAuthProvider();

        console.log("AuthService signInWithPopup" + this.afAuth.auth);
        return this.afAuth.auth.signInWithPopup(provider);
    }

    signOut() {
        this.afAuth.auth.signOut();
        this.userLogged = false;
    }

    isUserLogged(){
        return this.userLogged;
    }

    getUserImage(){
        return this.afAuth.auth.currentUser.photoURL;
    }

}