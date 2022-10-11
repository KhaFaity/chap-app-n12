import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC5jR5LLN6N05dBF3WcrpOGJsq-Lh7JRgI",
  authDomain: "chatcnm.firebaseapp.com",
  projectId: "chatcnm",
  storageBucket: "chatcnm.appspot.com",
  messagingSenderId: "660018259648",
  appId: "1:660018259648:web:b19db2ed4fbb3af1d26f25"
};

// Use this to initialize the firebase App
export const app = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
export const db = app.firestore();
export const auth = firebase.auth();
export const storage = getStorage();