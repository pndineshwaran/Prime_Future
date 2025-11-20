/**
 * BackToTopButton.jsx
 * Floating button that appears after scrolling to quickly return to top
 * Key features: appears after threshold, smooth scroll to top, animated entrance
 * Used on: global layout (App)
 */

import { useEffect, useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

/**
 * BackToTopButton
 * Shows a floating button after the user scrolls past a threshold
 */
const BackToTopButton = () => {
  // Visibility of the button when scrolled past threshold
  const [visible, setVisible] = useState(false)

  // Listen for scroll events to toggle visibility
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to top when clicked
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <Motion.button
          type="button"
          onClick={handleClick}
          className="fixed bottom-6 right-4 z-40 rounded-full bg-primary p-3 text-white shadow-elevation"
          // Slide + fade animation when appearing/disappearing
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          aria-label="Back to top"
        >
          <FiArrowUp className="h-5 w-5" />
        </Motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTopButton

