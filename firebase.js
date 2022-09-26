import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9MhyRx_1o7iKMzRxnx8NeR_-_BwpVXUU",
  authDomain: "car-fare.firebaseapp.com",
  projectId: "car-fare",
  storageBucket: "car-fare.appspot.com",
  messagingSenderId: "845465212992",
  appId: "1:845465212992:web:1f96032395d5549c5b67a5",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
