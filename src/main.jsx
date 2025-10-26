import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import StairsGsap from './components/common/StairsGsap.jsx'
import NavContext from './components/context/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <StairsGsap>
      <NavContext >
      <App />
      </NavContext>
    </StairsGsap>
    </BrowserRouter>
  </StrictMode>,
)
