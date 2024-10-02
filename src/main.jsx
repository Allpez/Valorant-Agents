import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' //variable (createRoot) para referirnos al paquete (react-dom/client)
import AgentsApp from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AgentsApp />
  </StrictMode>,
)
