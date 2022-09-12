import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "victorchtl-portfolio.firebaseapp.com",
    databaseURL: "https://victorchtl-portfolio-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "victorchtl-portfolio",
    storageBucket: "victorchtl-portfolio.appspot.com",
    messagingSenderId: "1025658845027",
    appId: "1:1025658845027:web:6250f680be0cc40c700556"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export {db}