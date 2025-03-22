import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainRouter from './MainRouter'
import { ContextProvider } from './ContextProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <MainRouter />
    </ContextProvider>
  </StrictMode>,
)
