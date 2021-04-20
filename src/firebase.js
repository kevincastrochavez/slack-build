import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD4zh9hjG9o6WZfHHpfNTNiz-FPLuRmJzM",
  authDomain: "slack-dbdd1.firebaseapp.com",
  projectId: "slack-dbdd1",
  storageBucket: "slack-dbdd1.appspot.com",
  messagingSenderId: "646686810935",
  appId: "1:646686810935:web:5d78d0fb86f3d567e470b2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, firestore };
