// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth}  from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDym3a-ktnI8go2tKwh7S0XdrkuEGCOJRc",
  authDomain: "muvi-b281b.firebaseapp.com",
  projectId: "muvi-b281b",
  storageBucket: "muvi-b281b.appspot.com",
  messagingSenderId: "215125388445",
  appId: "1:215125388445:web:42eb658932b291982ab874",
  measurementId: "G-7DQQ66DG97"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const  FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const db = getFirestore();
export const docRef = doc(db, "muvi", "0BeBE6Ds13JzmnSdd6A3");

export const getData = async() =>  {
  try {
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  } catch (error) {
    console.error("Error fetching document:", error);
  }
}
