
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC25jZt50r_taCugW4fzDRlWiEu1cxYViU",
  authDomain: "meu-app-86972.firebaseapp.com",
  projectId: "meu-app-86972",
  storageBucket: "meu-app-86972.firebasestorage.app",
  messagingSenderId: "772916198824",
  appId: "1:772916198824:web:8b538c46ac79c838e9719d"
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth (firebase);