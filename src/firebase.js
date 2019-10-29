import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCrTDzuP-_iZ9ELSpYzW6GXNK0TD_5OrQs",
  authDomain: "todos-lab.firebaseapp.com",
  databaseURL: "https://todos-lab.firebaseio.com",
  projectId: "todos-lab",
  storageBucket: "todos-lab.appspot.com",
  messagingSenderId: "402748353458",
  appId: "1:402748353458:web:08f9234f9138f7c6c512ab",
  measurementId: "G-9ZSYGS7F08"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
