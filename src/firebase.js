import {initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDoJskoLZ-maWVeTh6GDuBLfPTYy2HFs9c",
  authDomain: "edutech-7525e.firebaseapp.com",
  databaseURL: "https://edutech-7525e-default-rtdb.firebaseio.com",
  projectId: "edutech-7525e",
  storageBucket: "edutech-7525e.appspot.com",
  messagingSenderId: "783342310312",
  appId: "1:783342310312:web:f08525b75869ddac05039d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();