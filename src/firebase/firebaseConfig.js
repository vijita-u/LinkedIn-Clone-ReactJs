import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD_ZMQCNm0OAkDEw-q4FMwSW-EX-9R2OOg",
	authDomain: "linkedin-clone-using-reactjs.firebaseapp.com",
	projectId: "linkedin-clone-using-reactjs",
	storageBucket: "linkedin-clone-using-reactjs.appspot.com",
	messagingSenderId: "1012204732456",
	appId: "1:1012204732456:web:734bc9ab1ec428f068f51d",
	measurementId: "G-YTTC474395",
};

// initialize app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize db
const db = firebaseApp.firestore();

// authentication variable
const auth = firebase.auth();

export { db, auth };
