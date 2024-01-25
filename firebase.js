// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzRWgEvOnwjbjbdZ_BkicPT1dfYSIbRfk",
  authDomain: "nile-cash.firebaseapp.com",
  projectId: "nile-cash",
  storageBucket: "nile-cash.appspot.com",
  messagingSenderId: "269531387595",
  appId: "1:269531387595:web:32b600e1cd455442abad4e",
  measurementId: "G-5KNBYDV1H0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);