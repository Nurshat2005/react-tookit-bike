import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD9skTSIIMZdUntQMSXEk0y2UovTEV7-H0",
  authDomain: "auth-ad60c.firebaseapp.com",
  projectId: "auth-ad60c",
  storageBucket: "auth-ad60c.appspot.com",
  messagingSenderId: "993171383512",
  appId: "1:993171383512:web:a7a468c69baba3683da3ad"
};

const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app)
 export default app