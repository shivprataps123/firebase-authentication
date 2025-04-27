// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPAY8DncCRs4h87jwId5HveO9b6_2_D7c",
  authDomain: "react-auth-project-e1347.firebaseapp.com",
  projectId: "react-auth-project-e1347",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
