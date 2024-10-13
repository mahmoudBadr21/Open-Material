import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreConextProvider from './assets/context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StoreConextProvider>
        <App />
      </StoreConextProvider>
    </BrowserRouter>
  </StrictMode>,
)
