import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcFG56SVrKjyUkmCPiirh3rv-Lzbk1Gao",
  authDomain: "video-9dcbb.firebaseapp.com",
  projectId: "video-9dcbb",
  storageBucket: "video-9dcbb.appspot.com",
  messagingSenderId: "338249068286",
  appId: "1:338249068286:web:a94efbbb10e15fe864ffaf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;