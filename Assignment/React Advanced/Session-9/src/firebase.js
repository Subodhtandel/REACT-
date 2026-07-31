import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDBFEHqoK1rAQXZcyVgAJCLc8jPKTrZB1o",
  authDomain: "e-com-4412e.firebaseapp.com",
  projectId: "e-com-4412e",
  storageBucket: "e-com-4412e.firebasestorage.app",
  messagingSenderId: "495384449766",
  appId: "1:495384449766:web:2978b3e9e2d573eca7a127",
  measurementId: "G-36YKYWLVWX"
}
const app = initializeApp(firebaseConfig)

export default app