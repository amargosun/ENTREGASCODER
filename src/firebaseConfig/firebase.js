// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYypr2YoxNoNwtFQefwOVHI5HVt-hLLDs",
  authDomain: "crudcoder39535-227de.firebaseapp.com",
  projectId: "crudcoder39535-227de",
  storageBucket: "crudcoder39535-227de.appspot.com",
  messagingSenderId: "564319567673",
  appId: "1:564319567673:web:aee0d48fed89037f2f32e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)