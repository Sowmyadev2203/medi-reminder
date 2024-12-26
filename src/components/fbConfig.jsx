// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBAz7_zGksJeD7CH8gMIf8RQwMH-tGKKr8",
  authDomain: "pro-routes.firebaseapp.com",
  projectId: "pro-routes",
  storageBucket: "pro-routes.firebasestorage.app",
  messagingSenderId: "842318476980",
  appId: "1:842318476980:web:8dc31c8a269fc7d8c9c9e1",
  measurementId: "G-HXGH6J29D0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
