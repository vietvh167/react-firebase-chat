// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKUXOgOaWPYPncZeByx5razScP-1qDugw",
  authDomain: "react-chat-7d339.firebaseapp.com",
  projectId: "react-chat-7d339",
  storageBucket: "react-chat-7d339.appspot.com",
  messagingSenderId: "414788328703",
  appId: "1:414788328703:web:2a2e02dcadafbe7b1740ca",
  measurementId: "G-3J3YHTWPTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()