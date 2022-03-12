// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDrkamDd9ovU4cAxJg1t6YtT78KTaTRs8Y",
    authDomain: "clone-with-react-633d7.firebaseapp.com",
    databaseURL: "https://clone-with-react-633d7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "clone-with-react-633d7",
    storageBucket: "clone-with-react-633d7.appspot.com",
    messagingSenderId: "964547649872",
    appId: "1:964547649872:web:f25a9e4cf10fb249a90c55",
    measurementId: "G-381WBH7W6S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };