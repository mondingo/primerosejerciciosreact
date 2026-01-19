import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import './ejercicio1.js'
import './ejercicio2.js'
import './ejercicio3.js'
import './ejercicio4.js'
import './ejercicio5.js'
import './ejercicio6.js'
import './ejercicio7.js'
import './ejercicio8.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
