import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA-yzB4M-b8UG2X4yD8iEQ16m9oAmEpFLE",
    authDomain: "clothing-store-959e2.firebaseapp.com",
    databaseURL: "https://clothing-store-959e2.firebaseio.com",
    projectId: "clothing-store-959e2",
    storageBucket: "clothing-store-959e2.appspot.com",
    messagingSenderId: "622389944225",
    appId: "1:622389944225:web:a91cabdb6698b9e154f5e0",
    measurementId: "G-HB6X8KHFDS"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;