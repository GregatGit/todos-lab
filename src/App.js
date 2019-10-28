import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import indigo from '@material-ui/core/colors/indigo'
import red from '@material-ui/core/colors/red'
//import * as firebase from 'firebase'
import MainList from './components/MainList'
import TopBar from './components/TopBar'

// var firebaseConfig = {
//   apiKey: 'AIzaSyCrTDzuP-_iZ9ELSpYzW6GXNK0TD_5OrQs',
//   authDomain: 'todos-lab.firebaseapp.com',
//   databaseURL: 'https://todos-lab.firebaseio.com',
//   projectId: 'todos-lab',
//   storageBucket: 'todos-lab.appspot.com',
//   messagingSenderId: '402748353458',
//   appId: '1:402748353458:web:08f9234f9138f7c6c512ab',
//   measurementId: 'G-9ZSYGS7F08',
// }
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig)
// const db = firebase.database()
// db.collection('todos').get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log(doc.id, '=>', doc.data());
//     });
//   })
//   .catch((err) => {
//     console.log('Error getting documents', err);
//   });

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: red,
  },
  status: {
    danger: 'orange',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <MainList />
    </ThemeProvider>
  )
}

export default App
