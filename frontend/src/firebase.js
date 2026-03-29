import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxPnBRpKv8LTUBB8lc9nb79AAiXkVQjWE",
  authDomain: "stroke-detection-ai.firebaseapp.com",
  projectId: "stroke-detection-ai",
  storageBucket: "stroke-detection-ai.firebasestorage.app",
  messagingSenderId: "294255916266",
  appId: "1:294255916266:web:1177d2db06189bca05d393",
  measurementId: "G-D8KZZV5FH7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});