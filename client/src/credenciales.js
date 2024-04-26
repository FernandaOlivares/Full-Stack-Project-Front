import { initializeApp } from "firebase/app";

// Desestructuración de las variables de entorno
const { VITE_FIREBASE_API_KEY,
      VITE_FIREBASE_AUTH_DOMAIN, 
      VITE_FIREBASE_PROJECT_ID, 
      VITE_FIREBASE_STORAGE_BUCKET, 
      VITE_FIREBASE_MESSAGING_SENDER_ID, 
      VITE_FIREBASE_APP_ID } = import.meta.env;
console.log(VITE_FIREBASE_API_KEY,
      VITE_FIREBASE_AUTH_DOMAIN, 
      VITE_FIREBASE_PROJECT_ID, 
      VITE_FIREBASE_STORAGE_BUCKET, 
      VITE_FIREBASE_MESSAGING_SENDER_ID, 
      VITE_FIREBASE_APP_ID);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_FIREBASE_AUTH_DOMAIN,
  projectId: VITE_FIREBASE_PROJECT_ID,
  storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
