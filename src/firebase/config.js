import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_apiKey,
  authDomain: process.env.NEXT_FIREBASE_authDomain,
  projectId: process.env.NEXT_FIREBASE_projectId,
  storageBucket: process.env.NEXT_FIREBASE_storageBucket,
  messagingSenderId: process.env.NEXT_FIREBASE_messagingSenderId,
  appId: process.env.NEXT_FIREBASE_appId,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { app, auth };
