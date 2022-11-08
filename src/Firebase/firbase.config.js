// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYxTeVlL3eP2E4JqMYgcA-C-y-4xbyPkc",
  authDomain: "sunshine-server-a8c08.firebaseapp.com",
  projectId: "sunshine-server-a8c08",
  storageBucket: "sunshine-server-a8c08.appspot.com",
  messagingSenderId: "468812610151",
  appId: "1:468812610151:web:fab33d9e3208119f4c32c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;