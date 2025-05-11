import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcaSLhtrLvsCd0kix21QjgWGvCtWJZgbw",
  authDomain: "clone-9115b.firebaseapp.com",
  projectId: "clone-9115b",
  storageBucket: "clone-9115b.firebasestorage.app",
  messagingSenderId: "366618105764",
  appId: "1:366618105764:web:299d130569ba4a7c949331",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
