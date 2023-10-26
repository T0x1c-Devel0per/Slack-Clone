import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; // Asegúrate de importar firestore

const firebaseConfig = {
    apiKey: "AIzaSyBqPoFjF9tZNVXsf4m57VH5qRj4fi79qK0",
    authDomain: "slack-clone-cdd36.firebaseapp.com",
    projectId: "slack-clone-cdd36",
    storageBucket: "slack-clone-cdd36.appspot.com",
    messagingSenderId: "843847724398",
    appId: "1:843847724398:web:c18e2b18bc877d1e23a57f",
    measurementId: "G-7E9F03N7R9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore(); // Ahora firestore() debería funcionar correctamente
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
