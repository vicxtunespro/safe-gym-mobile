// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6pgBZ918Fq2Tzeab8Yj0NBAvPedWFScE",
  authDomain: "safegym256.firebaseapp.com",
  projectId: "safegym256",
  storageBucket: "safegym256.firebasestorage.app",
  messagingSenderId: "989228136128",
  appId: "1:989228136128:web:45cb44a272e20378941f25",
  measurementId: "G-PCQ4J68GP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);