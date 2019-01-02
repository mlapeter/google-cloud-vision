import Environment from "../config/environment";
import * as firebase from "firebase";

firebase.initializeApp({
  apiKey: Environment["FIREBASE_API_KEY"],
  authDomain: Environment["FIREBASE_AUTH_DOMAIN"],
  databaseURL: Environment["FIREBASE_DATABASE_URL"],
  projectId: Environment["FIREBASE_PROJECT_ID"],
  storageBucket: Environment["FIREBASE_STORAGE_BUCKET"],
  messagingSenderId: Environment["FIREBASE_MESSAGING_SENDER_ID"]
});

export default firebase;
