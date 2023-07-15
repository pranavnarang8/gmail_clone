import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVlzYACpCmiBXyq3trF1GriyDDBnYoWdk",
  authDomain: "clone-3a9d4.firebaseapp.com",
  projectId: "clone-3a9d4",
  storageBucket: "clone-3a9d4.appspot.com",
  messagingSenderId: "692616948736",
  appId: "1:692616948736:web:77f84d50c05d36dea53ce5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
