import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSazWLTozUIeOtmd56_IpgKiOYnnWXUtw",
  authDomain: "assing-8faed.firebaseapp.com",
  projectId: "assing-8faed",
  storageBucket: "assing-8faed.firebasestorage.app",
  messagingSenderId: "658591345903",
  appId: "1:658591345903:web:339bfb8d94ed531a60bf1a",
  measurementId: "G-RVPGC79RQ6",
};

const app = initializeApp(firebaseConfig);

// Analytics (optional)
const analytics = getAnalytics(app);

// Firestore
export const db = getFirestore(app);

export default app;