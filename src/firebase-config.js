// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3-bQch9fKG5ETze54n6xhcMN1axCNTU8",
  authDomain: "productlist-aee49.firebaseapp.com",
  projectId: "productlist-aee49",
  storageBucket: "productlist-aee49.appspot.com",
  messagingSenderId: "43733162062",
  appId: "1:43733162062:web:84c87aa4010e68b4e9cb1f",
  measurementId: "G-QD1NFRNSSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);