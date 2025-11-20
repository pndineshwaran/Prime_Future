/**
 * main.jsx
 * App entry point: mounts React tree and provides global providers
 * Key features: HelmetProvider for head tags, BrowserRouter for routing, ErrorBoundary wrapper
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'
import 'swiper/css'
import 'swiper/css/pagination'
import ErrorBoundary from './components/ErrorBoundary.jsx'

// Mount the application and wrap with providers for routing and head management
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
