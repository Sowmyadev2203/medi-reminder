
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBAz7_zGksJeD7CH8gMIf8RQwMH-tGKKr8",
  authDomain: "pro-routes.firebaseapp.com",
  projectId: "pro-routes",
  storageBucket: "pro-routes.firebasestorage.app",
  messagingSenderId: "842318476980",
  appId: "1:842318476980:web:8dc31c8a269fc7d8c9c9e1",
  measurementId: "G-HXGH6J29D0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
