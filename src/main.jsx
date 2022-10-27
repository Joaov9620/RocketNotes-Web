import React from 'react'
import ReactDOM from 'react-dom/client'
import {Details} from './pages/Details'
import {ThemeProvider} from 'styled-components' //promover um tema
import  GlobalStyle from './styles/global'
import theme from "./styles/theme"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/> 
      <Details />
    </ThemeProvider>
  </React.StrictMode>
)
