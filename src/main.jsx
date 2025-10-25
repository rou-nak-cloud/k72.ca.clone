import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import StairsGsap from './components/common/StairsGsap.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <StairsGsap>
      <App />
    </StairsGsap>
    </BrowserRouter>
  </StrictMode>,
)
