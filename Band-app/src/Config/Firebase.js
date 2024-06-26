// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5667rNPYSaQPEJ8QjEKc47yjTHYUE5l8",
  authDomain: "band-b910d.firebaseapp.com",
  databaseURL:
    "https://band-b910d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "band-b910d",
  storageBucket: "band-b910d.appspot.com",
  messagingSenderId: "331980907050",
  appId: "1:331980907050:web:a253be2c74d28ac153d953",
  measurementId: "G-NRPR6D8H7M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = new getFirestore(app);
