// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkdBISg2xU2IWtXpqx3yKyTBls9HKeGbk",
    authDomain: "simple-firebase-authenti-355a6.firebaseapp.com",
    projectId: "simple-firebase-authenti-355a6",
    storageBucket: "simple-firebase-authenti-355a6.appspot.com",
    messagingSenderId: "728796628515",
    appId: "1:728796628515:web:c0ef6e5d66c2bbf3a6d396",
    measurementId: "G-Z5ESE2N29E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;