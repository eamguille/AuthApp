// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCX8vjsTowBmSkNwCMUgWpHLtv8xZEN6aY",
  authDomain: "authapp-4c57d.firebaseapp.com",
  projectId: "authapp-4c57d",
  storageBucket: "authapp-4c57d.firebasestorage.app",
  messagingSenderId: "245450904995",
  appId: "1:245450904995:web:769c45c89156b1e6357616"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

