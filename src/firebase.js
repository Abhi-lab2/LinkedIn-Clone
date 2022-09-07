// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAP7y03WznxZv3YCKj4bPmqrYMwrUAxKxs",
//   authDomain: "linkedin-clone-20c26.firebaseapp.com",
//   projectId: "linkedin-clone-20c26",
//   storageBucket: "linkedin-clone-20c26.appspot.com",
//   messagingSenderId: "560256258098",
//   appId: "1:560256258098:web:05e61489070001394dac2b",
//   measurementId: "G-GGNFKCK3JS",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBfATbhGHaUqnyBUM4QhFVQDoB_LLAiceY",
  authDomain: "linkedin-clone-9999.firebaseapp.com",
  projectId: "linkedin-clone-9999",
  storageBucket: "linkedin-clone-9999.appspot.com",
  messagingSenderId: "378730102095",
  appId: "1:378730102095:web:a54b10798d2df7d57fd93a",
  measurementId: "G-KF509K92T5",
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
const db = getFirestore();
const auth = getAuth();
//google authentification
const provider = new GoogleAuthProvider();
const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {})
    .catch((error) => {
      alert("Failed to login witn Google", error);
    });
};
export default firebaseApp;
export { auth, db, signInWithGoogle };
