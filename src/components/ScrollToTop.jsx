/**
 * ScrollToTop.jsx
 * Small utility component that scrolls window to top when the route changes
 * Key features: smooth scroll on navigation
 * Used on: global layout (App)
 */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop
 * Scrolls the page to the top whenever `location.pathname` changes
 */
const ScrollToTop = () => {
  const location = useLocation()

  // Smoothly scroll to top on route changes to mimic native navigation behavior
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

export default ScrollToTop

