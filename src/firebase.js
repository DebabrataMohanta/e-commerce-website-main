import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfw459_w5OdoOMtpSOovpyqT_xxJvzgZs",
  authDomain: "e-commerce-d3336.firebaseapp.com",
  projectId: "e-commerce-d3336",
  storageBucket: "e-commerce-d3336.appspot.com",
  messagingSenderId: "991598258011",
  appId: "1:991598258011:web:a770e8e1db5bb29f495c7e",
  measurementId: "G-2T42EKRJ1Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };