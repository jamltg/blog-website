// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-website-c8a5a.firebaseapp.com",
  projectId: "blog-website-c8a5a",
  storageBucket: "blog-website-c8a5a.appspot.com",
  messagingSenderId: "791519505679",
  appId: "1:791519505679:web:b4617680b3cc07f4dfe27a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);