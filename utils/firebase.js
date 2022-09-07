
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyC-OHudkvOUTpAFRxUSurcosblnBSsCIto",
  authDomain: "stimply-8fbfb.firebaseapp.com",
  projectId: "stimply-8fbfb",
  storageBucket: "stimply-8fbfb.appspot.com",
  messagingSenderId: "425609205359",
  appId: "1:425609205359:web:637da98a32ab3227df1f9a",
  measurementId: "G-LNJRDELYQP"
};


// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig)
// }

export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)