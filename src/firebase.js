// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCCt1vPNrkMhRqsJkmbJyGakXPhLNLPvs4",
  authDomain: "tarunmubi-eaaab.firebaseapp.com",
  projectId: "tarunmubi-eaaab",
  storageBucket: "tarunmubi-eaaab.appspot.com",
  messagingSenderId: "541071055526",
  appId: "1:541071055526:web:fb29ab0ab71e6e66137267",
  measurementId: "G-R0GQ7Y7ZP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth}