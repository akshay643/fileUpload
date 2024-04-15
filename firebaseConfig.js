// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxs_9PoWo2KwHGWLri4sikxPOVP8Z1vmk",
  authDomain: "myfirstnative-da21a.firebaseapp.com",
  projectId: "myfirstnative-da21a",
  storageBucket: "myfirstnative-da21a.appspot.com",
  messagingSenderId: "261409909123",
  appId: "1:261409909123:web:53551ba6fe5a2002e7aeb6",
  measurementId: "G-MZXRG2F6ZC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
