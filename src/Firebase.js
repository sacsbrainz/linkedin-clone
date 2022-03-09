import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAFYNpcik2bDc8_x55n6P3H0ynqgONRIFE",
    authDomain: "linkedin-clone-963e5.firebaseapp.com",
    projectId: "linkedin-clone-963e5",
    storageBucket: "linkedin-clone-963e5.appspot.com",
    messagingSenderId: "139207382349",
    appId: "1:139207382349:web:0c523baa4d0de1d22ed304"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export {db,auth};