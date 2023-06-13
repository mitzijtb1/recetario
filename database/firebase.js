// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ9JWDHhb1RMJwzsLyN4d-agX9nGmi2IU",
  authDomain: "react-native-firebase-e96f7.firebaseapp.com",
  projectId: "react-native-firebase-e96f7",
  storageBucket: "react-native-firebase-e96f7.appspot.com",
  messagingSenderId: "716826073679",
  appId: "1:716826073679:web:c2b832d00fb4367ddae83a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};