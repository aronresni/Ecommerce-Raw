// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhFr2thoJWEkZmvkrKKgwVjXlcNMEkb94",
  authDomain: "raw-shop-c00a9.firebaseapp.com",
  projectId: "raw-shop-c00a9",
  storageBucket: "raw-shop-c00a9.appspot.com",
  messagingSenderId: "794252567644",
  appId: "1:794252567644:web:6483c34a3d111e8a01f299"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);