import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import './ejercicio1.jsx'
import './ejercicio2.jsx'
import './ejercicio3.jsx'
import './ejercicio4.jsx'
import './ejercicio5.jsx'
import './ejercicio6.jsx'
import './ejercicio7.jsx'
import './ejercicio8.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
