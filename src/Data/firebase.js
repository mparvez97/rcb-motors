// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "@firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBJSVz2GZNaZ17B2iiYyU2aQYM94sfAg-s",
  authDomain: "rcb-motorcars.firebaseapp.com",
  projectId: "rcb-motorcars",
  storageBucket: "rcb-motorcars.appspot.com",
  messagingSenderId: "470758891361",
  appId: "1:470758891361:web:4880eeacf21e046bb66f20",
  measurementId: "G-FT30NNCG5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firedb = getDatabase(app);

export default firedb;