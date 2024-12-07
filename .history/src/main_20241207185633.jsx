import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/app.css'
import App from './App.jsx'
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
