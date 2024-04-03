// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGiHTuMW0BT77MTLjaLWdY2KsOvgLYvu4",
  authDomain: "mern-boook-inventory.firebaseapp.com",
  projectId: "mern-boook-inventory",
  storageBucket: "mern-boook-inventory.appspot.com",
  messagingSenderId: "845421370203",
  appId: "1:845421370203:web:7512794f7513413e07587e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;