import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCSVB2cF9FKrnxAGTVwEI2BStW-s_581Ak",

  authDomain: "to-do-app-firebase-project.firebaseapp.com",

  projectId: "to-do-app-firebase-project",

  storageBucket: "to-do-app-firebase-project.appspot.com",

  messagingSenderId: "541623710345",

  appId: "1:541623710345:web:10816f263f45e606e34c58"

};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore()
