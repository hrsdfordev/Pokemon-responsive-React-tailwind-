import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PokemonContextProvider } from './contexts/index.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonContextProvider>
      <App />
    </PokemonContextProvider>
  </React.StrictMode>,
)
