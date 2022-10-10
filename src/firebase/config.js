import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase';
import { getFirestore } from 'firebase/firestore';
import { getStorage} from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyC5jR5LLN6N05dBF3WcrpOGJsq-Lh7JRgI",
    authDomain: "chatcnm.firebaseapp.com",
    projectId: "chatcnm",
    storageBucket: "chatcnm.appspot.com",
    messagingSenderId: "660018259648",
    appId: "1:660018259648:web:b19db2ed4fbb3af1d26f25"
  };
  firebase.initializeApp(firebaseConfig);
  var auth2 = firebase.auth();
  export default auth2;
  export const app =  initializeApp(firebaseConfig);
  export const auth = getAuth();
  export const storage = getStorage();
  export const db = getFirestore();