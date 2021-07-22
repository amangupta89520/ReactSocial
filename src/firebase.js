import firebase from "firebase";

//These keys you can get from your firebase project website
const firebaseConfig = {
    apiKey: "AIzaSyCg0JGppYbBKkdgYTx7UisUlKDG19NdHl0",
    authDomain: "react-social-app-b2528.firebaseapp.com",
    projectId: "react-social-app-b2528",
    storageBucket: "react-social-app-b2528.appspot.com",
    messagingSenderId: "144527496247",
    appId: "1:144527496247:web:ce02f3b90237d6545cdbb2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };