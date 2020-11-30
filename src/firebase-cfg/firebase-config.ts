import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'YOUR KEY',
    authDomain: 'YOUR KEY',
    databaseURL: 'YOUR KEY',
    projectId: 'YOUR KEY',
    storageBucket: 'YOUR KEY',
    messagingSenderId: 'YOUR KEY',
    appId: 'YOUR KEY',
    measurementId: 'YOUR KEY',
};

const firebaseApp = firebase.default.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();
