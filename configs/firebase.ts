import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBiX8dzlW3S1NMS17j1hVsXgJ_IDL2ukO8",
  authDomain: "r-it-b4934.firebaseapp.com",
  projectId: "r-it-b4934",
  storageBucket: "r-it-b4934.appspot.com",
  messagingSenderId: "504997703909",
  appId: "1:504997703909:web:6f83524b03deaa6837a40c",
};
const app = initializeApp(firebaseConfig);
export const appAuthentication = getAuth(app);

