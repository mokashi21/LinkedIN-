import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUJzxy9KWxA4SUN1wstUtUWNm8Z4wT6p8",
  authDomain: "linkedin-a763c.firebaseapp.com",
  projectId: "linkedin-a763c",
  storageBucket: "linkedin-a763c.appspot.com",
  messagingSenderId: "99937360357",
  appId: "1:99937360357:web:b8943398728ddbfd0f770c",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
