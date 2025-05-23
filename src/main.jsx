import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/normalize.css'
import App from './componentes/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
