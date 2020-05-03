import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC35wwJbIfRmrxOkh95LZP8_H-Ss3QUINY",
  authDomain: "crwn-db-64862.firebaseapp.com",
  databaseURL: "https://crwn-db-64862.firebaseio.com",
  projectId: "crwn-db-64862",
  storageBucket: "crwn-db-64862.appspot.com",
  messagingSenderId: "813987191292",
  appId: "1:813987191292:web:4260235a6dcf3be5abba79",
  measurementId: "G-PBJW7QQ1VD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
