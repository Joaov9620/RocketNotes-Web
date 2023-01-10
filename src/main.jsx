import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components' //promover um tema
import  GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/auth'; //IMPORTANDO O CONTEXTO

import theme from "./styles/theme"

import {Routes} from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <AuthProvider>
        <Routes/>
      </AuthProvider> 
    </ThemeProvider>
  </React.StrictMode>
)
