import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import KodaMain from './result/kodaMain'
import Nav from './components/Nav'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <KodaMain />
  </StrictMode>,
)
