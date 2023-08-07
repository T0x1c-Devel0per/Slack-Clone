import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; // Asegúrate de importar firestore

const firebaseConfig = {
    apiKey: "AIzaSyAsB3F_VRKFNNk9rx1XyMAWk0xYE82v254",
    authDomain: "slack-clone-d74d5.firebaseapp.com",
    projectId: "slack-clone-d74d5",
    storageBucket: "slack-clone-d74d5.appspot.com",
    messagingSenderId: "856192509977",
    appId: "1:856192509977:web:d15155873924c721642288",
    measurementId: "G-ZYQZVQZ35H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore(); // Ahora firestore() debería funcionar correctamente
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
