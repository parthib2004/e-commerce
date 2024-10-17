// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMK2msMJQlkbayvD-ePHjMCO7D3mCi9Go",
  authDomain: "myecom-853f1.firebaseapp.com",
  projectId: "myecom-853f1",
  storageBucket: "myecom-853f1.appspot.com",
  messagingSenderId: "883632185189",
  appId: "1:883632185189:web:981954837d4bd4afa48b8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }