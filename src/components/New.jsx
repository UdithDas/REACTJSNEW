import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUuxyc_9wnkTmDLI3MIfgKSiUaiYy3Frw",
  authDomain: "project7-4e1de.firebaseapp.com",
  databaseURL: "https://project7-4e1de-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project7-4e1de",
  storageBucket: "project7-4e1de.appspot.com",
  messagingSenderId: "773565902831",
  appId: "1:773565902831:web:7c47f65cb7ba88d54f901a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);