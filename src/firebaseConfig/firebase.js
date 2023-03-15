// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAubVIwCCBeR_roBf0cdm43gXH4k6CnEw8",
  authDomain: "sofias-e50a3.firebaseapp.com",
  projectId: "sofias-e50a3",
  storageBucket: "sofias-e50a3.appspot.com",
  messagingSenderId: "65444798300",
  appId: "1:65444798300:web:1f9ea183d030a645626b99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)