// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz10SgWU51sOrAS0YZaSiRfuyfhLP3clQ",
  authDomain: "bs-society.firebaseapp.com",
  databaseURL: "https://bs-society-default-rtdb.firebaseio.com",
  projectId: "bs-society",
  storageBucket: "bs-society.appspot.com",
  messagingSenderId: "748040608832",
  appId: "1:748040608832:web:eb5143c41a07c5b99353a5",
  measurementId: "G-YDC8JBS3L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);