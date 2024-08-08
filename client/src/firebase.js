// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // different check it if found any error !!!
  authDomain: "mern-estate-1eaa8.firebaseapp.com",
  projectId: "mern-estate-1eaa8",
  storageBucket: "mern-estate-1eaa8.appspot.com",
  messagingSenderId: "815179416697",
  appId: "1:815179416697:web:027e58899b2f38103d00a8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
