import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA4Ol-MuP2zJDh4A57sDkAQGzjUUjw1CiU",
  authDomain: "clone-3aa3d.firebaseapp.com",
  databaseURL: "https://clone-3aa3d.firebaseio.com",
  projectId: "clone-3aa3d",
  storageBucket: "clone-3aa3d.appspot.com",
  messagingSenderId: "1014488177674",
  appId: "1:1014488177674:web:533507644a372c8d1fd3f3",
  measurementId: "G-GXXPX8CL3H",
});

const auth = firebase.auth();

export { auth };
