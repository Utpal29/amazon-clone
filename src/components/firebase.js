import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBN_UlrUNP7bJRgJvWZXXMxK-mwd2sXrAI",
  authDomain: "clone-3ab36.firebaseapp.com",
  projectId: "clone-3ab36",
  storageBucket: "clone-3ab36.appspot.com",
  messagingSenderId: "868812503254",
  appId: "1:868812503254:web:3b9430b4e55af42f287177",
  measurementId: "G-QTT0WTWB83",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
