// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHXiqAbhnpXwx0WTZPCyv_CnCy5IxaElY",
  authDomain: "primeclone-55fe4.firebaseapp.com",
  projectId: "primeclone-55fe4",
  storageBucket: "primeclone-55fe4.appspot.com",
  messagingSenderId: "425339450762",
  appId: "1:425339450762:web:1081f4723eaa7350fe4473",
  measurementId: "G-R5VXCENH1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);