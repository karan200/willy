import * as firebase from 'firebase' 
require('@firebase/firestore') 
var firebaseConfig = { 
    apiKey: "AIzaSyDpwEgieS4MzRrv_yF9FVeKBng7Iu6g18c",
    authDomain: "willy-app-29468.firebaseapp.com",
    databaseURL: "https://willy-app-29468.firebaseio.com",
    projectId: "willy-app-29468",
    storageBucket: "willy-app-29468.appspot.com",
    messagingSenderId: "824951881957",
    appId: "1:824951881957:web:417dd07f8dd64ce54b140c"
   };
        // Initialize Firebase
         firebase.initializeApp(firebaseConfig);
          export default firebase.firestore();
