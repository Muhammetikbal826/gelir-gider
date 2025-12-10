import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH-J7bcMAMWx7WXY0fpPA5DnqhZlA-wFs",
  authDomain: "muratkaya-f3332.firebaseapp.com",
  projectId: "muratkaya-f3332",
  storageBucket: "muratkaya-f3332.firebasestorage.app",
  messagingSenderId: "87509413036",
  appId: "1:87509413036:web:1aad49bf7017e878b6c309"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
