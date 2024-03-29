import firebase from "firebase/compat/app";
import {
  getAuth,
  GoogleAuthProvider,
  // signInWithPopup,
  signInWithRedirect,
  FacebookAuthProvider,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const googleAuth = googleProvider;
export const facebookAuth = facebookProvider;
export const popup = signInWithRedirect;
export const auth = getAuth(app);
export default app;
