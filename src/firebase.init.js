// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLQ1Su4i-ShYjxGrvlWz1SkvHfCt9sqF0",
  authDomain: "genius-car-service-1efee.firebaseapp.com",
  projectId: "genius-car-service-1efee",
  storageBucket: "genius-car-service-1efee.appspot.com",
  messagingSenderId: "1006203274034",
  appId: "1:1006203274034:web:84d7bc7051989f99afcd2b",

  //  apiKey:process.evn.REACT_APP_apiKey,
  //  authDomain:process.evn.REACT_APP_authDomain,
  //  projectId:process.evn.REACT_APP_projectId,
  //  storageBucket:process.evn.REACT_APP_storageBucket,
  //  messagingSenderId:process.evn.REACT_APP_messagingSenderId,
  //  appId:process.evn.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
