/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBf1FPcUbZE5rLvoux9cYMjbCP_NowrYf4",
    authDomain: "learn-vue-ac0bb.firebaseapp.com",
    projectId: "learn-vue-ac0bb",
    storageBucket: "learn-vue-ac0bb.appspot.com",
    messagingSenderId: "935764178492",
    appId: "1:935764178492:web:40cb2e989ebf29d9263539",
    measurementId: "G-P3YJLQXEKB"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};
