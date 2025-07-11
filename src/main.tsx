import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './assets/Components/Header.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />  
  </StrictMode>,
)
