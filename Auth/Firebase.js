// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDETlAge2i2VYn4EzoTFbaJSU1wLFirtAA",
  authDomain: "native-3f890.firebaseapp.com",
  projectId: "native-3f890",
  storageBucket: "native-3f890.appspot.com",
  messagingSenderId: "1040398432301",
  appId: "1:1040398432301:web:d487d0bf22df144596a0a4",
  measurementId: "G-2MVQSWGEY6",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
