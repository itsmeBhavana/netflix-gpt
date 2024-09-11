// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdNzCwRA3vI_eX7HaTrHCbRbuQWBQGRWI",
  authDomain: "netflixgpt-409ed.firebaseapp.com",
  projectId: "netflixgpt-409ed",
  storageBucket: "netflixgpt-409ed.appspot.com",
  messagingSenderId: "846314815383",
  appId: "1:846314815383:web:0684feebdea2537f528ed2",
  measurementId: "G-3L5S5CD5PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();