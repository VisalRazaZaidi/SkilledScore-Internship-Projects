// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "skilledscore-mern-blog-project.firebaseapp.com",
  projectId: "skilledscore-mern-blog-project",
  storageBucket: "skilledscore-mern-blog-project.firebasestorage.app",
  messagingSenderId: "1069928834774",
  appId: "1:1069928834774:web:fe7744e5a960c40ac9cb77",
  measurementId: "G-RPCTHKTXBG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


/* 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogpulse-c6b4b.firebaseapp.com",
  projectId: "blogpulse-c6b4b",
  storageBucket: "blogpulse-c6b4b.appspot.com",
  messagingSenderId: "293813127314",
  appId: "1:293813127314:web:221852c8e2a8761fa0fe4b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


*/
