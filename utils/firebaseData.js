import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

var config = {
  apiKey: "AIzaSyDm9FHVMxCPYG4kflm2CTtDOZyc659TQ2M",
  authDomain: "createur-52b8c.firebaseapp.com",
  projectId: "createur-52b8c",
  storageBucket: "createur-52b8c.appspot.com",
  messagingSenderId: "515350330177",
  appId: "1:515350330177:web:695a3759889e3cd0483fc0"
};


if (!firebase.apps.length) {
  firebase.initializeApp(config);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  
  
  const firestore = firebase.firestore()
  const storage = firebase.storage()
  const auth = firebase.auth()
  
  export { firestore, storage, auth, firebase}