// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0hjdUPNFQwwnZR38f7yaH1PfCz3Gfhj4",
  authDomain: "book-auth-807a3.firebaseapp.com",
  projectId: "book-auth-807a3",
  storageBucket: "book-auth-807a3.appspot.com",
  messagingSenderId: "399848609367",
  appId: "1:399848609367:web:b41ffc07c648670900f512"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);