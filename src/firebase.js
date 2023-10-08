// import firebase from "firebase/compat/app"; // for version 10

// import "firebase/compat/auth"; // Import the auth service
// import "firebase/compat/firestore"; // Import the firestore service
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxl4HOYu567lHrtAgFzSEGj0hnGAjgZv0",
  authDomain: "clone-ca34c.firebaseapp.com",
  databaseURL: "https://clone-ca34c.firebaseio.com",
  projectId: "clone-ca34c",
  storageBucket: "clone-ca34c.appspot.com",
  messagingSenderId: "894702126969",
  appId: "1:894702126969:web:9a9cdf715cd4e0f1dd11a8",
  measurementId: "G-3N6KL1GXV2",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Export Firebase services
// const db = firebaseApp.firestore(); // If you're using Firestore
// const auth = firebase.auth();

// export { db, auth };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firebase();
const auth = firebase.auth();

export { db, auth };
