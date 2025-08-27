// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy_S7HbYEjtj-3LNVL4nVUkI5FLPSKMRA",
  authDomain: "crispy-potato-5e4a2.firebaseapp.com",
  projectId: "crispy-potato-5e4a2",
  storageBucket: "crispy-potato-5e4a2.firebasestorage.app",
  messagingSenderId: "1023842835218",
  appId: "1:1023842835218:web:54153c355f43f076ce31cb",
  measurementId: "G-VCX7XZS142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;