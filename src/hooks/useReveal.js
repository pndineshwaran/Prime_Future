/**
 * useReveal.js
 * Custom hook to reveal components when they enter the viewport
 * Key features: returns a ref to attach to elements and animation controls (framer-motion)
 * Used on: pages and components to trigger entrance animations on scroll
 */

import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

/**
 * useReveal
 * Returns: [ref, controls]
 * - ref: attach to an element to observe its viewport visibility
 * - controls: framer-motion animation controls to start animations when visible
 */
export const useReveal = (options = {}) => {
  const controls = useAnimation()
  // Intersection observer that triggers once when element is visible
  const [observerRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    ...options,
  })

  // When the element is in view, start the entrance animation
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
      })
    }
  }, [controls, inView])

  return [observerRef, controls]
}

