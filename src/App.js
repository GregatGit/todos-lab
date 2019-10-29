import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import red from '@material-ui/core/colors/red'
//import * as firebase from 'firebase'
import MainList from './components/MainList'
import TopBar from './components/TopBar'



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
