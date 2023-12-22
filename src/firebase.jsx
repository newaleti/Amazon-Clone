// Import the functions you need from the SDKs you need
import { initializeApp,  } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQJIOnWZb6HDOzU10Gp_AvmvuoTOoboi8",
  authDomain: "cone-b161f.firebaseapp.com",
  projectId: "cone-b161f",
  storageBucket: "cone-b161f.appspot.com",
  messagingSenderId: "1033400248874",
  appId: "1:1033400248874:web:a98821f4ac0a401743f153",
  measurementId: "G-7M8PB1W5CV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth}
