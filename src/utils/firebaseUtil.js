// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgKc06oFHCUJon7NAFvcvhz66geV6nJXo",
  authDomain: "eden-app1.firebaseapp.com",
  projectId: "eden-app1",
  storageBucket: "eden-app1.appspot.com",
  messagingSenderId: "526788164918",
  appId: "1:526788164918:web:b5f61f1b285705114dc797",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
