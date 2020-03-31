import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const config = {
  apiKey: "AIzaSyDyPeyD6o9N4nfc5G0c5oe8Q6_oTajX7ME",
  authDomain: "generally-easy.firebaseapp.com",
  databaseURL: "https://generally-easy.firebaseio.com",
  projectId: "generally-easy",
  storageBucket: "generally-easy.appspot.com",
  messagingSenderId: "413633034814",
  appId: "1:413633034814:web:699e428e747034aa10ef6f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();

export const functions = firebase.functions()
