import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC-BM82k6hEktSdPzEQ6DcPDNVXATO1phE",
    authDomain: "react-hooks-app-adcb7.firebaseapp.com",
    projectId: "react-hooks-app-adcb7",
    storageBucket: "react-hooks-app-adcb7.appspot.com",
    messagingSenderId: "317851459181",
    appId: "1:317851459181:web:a3eb89716a23f720d66964"
};

const firebaseApp = firebase.default.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();
