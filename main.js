import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
//import {firebase} from 'firebase';
var firebase = require('./firebase');
var firebaseui = require('firebaseui');

const firebaseConfig = {
  apiKey: "AIzaSyDd0PTOLxQr3_KHMH7IcfTsfTfNHa1C5l8",
  authDomain: "simple-archive-app.firebaseapp.com",
  projectId: "simple-archive-app",
  storageBucket: "simple-archive-app.appspot.com",
  messagingSenderId: "183155358943",
  appId: "1:183155358943:web:03dd0f37e13ffa1dcf7d6a"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    { 
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethd: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHO
    }
  ]
});

console.log('working');