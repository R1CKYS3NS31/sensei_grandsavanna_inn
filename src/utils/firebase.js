// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnAoBNQRd0Kk8oSIMbavyBmVxNnjMppHU",
  authDomain: "sensei-clone.firebaseapp.com",
  projectId: "sensei-clone",
  storageBucket: "sensei-clone.appspot.com",
  messagingSenderId: "215143499245",
  appId: "1:215143499245:web:558b2e44c368e5ffd353e4",
  measurementId: "G-GLB3F2JZ37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
const db = getFirestore(app)

export {db,auth}