import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDm61PtrJP9VKzm5Tuevqw8NaTLBQ5Vmo8",
    authDomain: "pharm-sim.firebaseapp.com",
    databaseURL: "https://pharm-sim.firebaseio.com",
    projectId: "pharm-sim",
    storageBucket: "pharm-sim.appspot.com",
    messagingSenderId: "899689639845",
    appId: "1:899689639845:web:b674e91b9714b9c3a9c24c",
    measurementId: "G-2CF368SXWH"
  };
firebase.initializeApp(config);
export default firebase;