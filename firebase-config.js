// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQLU1OJnfN1jnBJZM1pgvNLLrMTViKkVs",
  authDomain: "financeapp-6699f.firebaseapp.com",
  projectId: "financeapp-6699f",
  storageBucket: "financeapp-6699f.appspot.com",
  messagingSenderId: "757370956741",
  appId: "1:757370956741:web:6a5d9a9d54f61afe4ff9ac",
  measurementId: "G-34KM4XBDCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);