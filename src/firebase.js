import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCl1s7VTBcFKiZoEX3O6EVSPueedGeaM34",
    authDomain: "sangit-app.firebaseapp.com",
    projectId: "sangit-app",
    storageBucket: "sangit-app.appspot.com",
    messagingSenderId: "686807914346",
    appId: "1:686807914346:web:1d9148275889c781eef713",
    measurementId: "G-P7SW90ZHBN"
  };
const fire = firebase.initializeApp(firebaseConfig);
export default fire;

