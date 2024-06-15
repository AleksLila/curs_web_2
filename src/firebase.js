// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLhNJseO2wh7pfCzZzFoU18UabftyiyiY",
  authDomain: "fir-web-daefb.firebaseapp.com",
  projectId: "fir-web-daefb",
  storageBucket: "fir-web-daefb.appspot.com",
  messagingSenderId: "918249410749",
  appId: "1:918249410749:web:bd00cabd8b5f79661667d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);