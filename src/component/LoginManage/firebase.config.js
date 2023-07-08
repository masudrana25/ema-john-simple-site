import { initializeApp } from "firebase/app";
import {FacebookAuthProvider, getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
   apiKey: "AIzaSyBvLTsGm-wLjT2bSFNGtnhVbNiWK-deIx0",
  authDomain: "ema-john-simple-site-masud.firebaseapp.com",
  projectId: "ema-john-simple-site-masud",
  storageBucket: "ema-john-simple-site-masud.appspot.com",
  messagingSenderId: "933321109878",
  appId: "1:933321109878:web:74464d89467952a6efca57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
export {auth, GoogleProvider, facebookProvider};