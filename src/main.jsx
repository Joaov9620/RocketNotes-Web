import React from 'react'
import ReactDOM from 'react-dom/client'
import {Details} from './pages/Details'
import {ThemeProvider} from 'styled-components' //promover um tema
import theme from "./styles/theme"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Details />
    </ThemeProvider>
  </React.StrictMode>
)
