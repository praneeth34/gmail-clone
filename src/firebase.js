import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBsG1AeJGqoGQjSGUm-hAqS5K4lW-QJaTs",
  authDomain: "clone-41144.firebaseapp.com",
  projectId: "clone-41144",
  storageBucket: "clone-41144.appspot.com",
  messagingSenderId: "266335976252",
  appId: "1:266335976252:web:aea7e29eed9273ef587c39",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
