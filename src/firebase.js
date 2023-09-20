// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRIWBwsjLzVD7QNF0_1rKMSRc6aq-nMCA",
  authDomain: "mywebpage-d21e7.firebaseapp.com",
  projectId: "mywebpage-d21e7",
  storageBucket: "mywebpage-d21e7.appspot.com",
  messagingSenderId: "758212965891",
  appId: "1:758212965891:web:8f8e8ee507b64ecfd78036",
  measurementId: "G-KE14Q23PBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();