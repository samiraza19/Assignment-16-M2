import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyAv4qgyPb_4a-jb2X4WmPrehKOObIvXI2g",
  authDomain: "chat-app-a5687.firebaseapp.com",
  projectId: "chat-app-a5687",
  storageBucket: "chat-app-a5687.appspot.com",
  messagingSenderId: "353449476492",
  appId: "1:353449476492:web:2061e3d1eab05ff42ed6a9"
};

initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();

export { auth, provider, db };