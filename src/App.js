import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'

import MainList from './components/MainList'
import TopBar from './components/TopBar'

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
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
