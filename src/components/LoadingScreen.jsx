import { motion as Motion, AnimatePresence } from 'framer-motion'

/**
 * LoadingScreen.jsx
 * Full-screen loading overlay shown while app initializes
 * Key features: centered branding, subtle animated progress bar
 * Used on: global App (during app load)
 */

/**
 * LoadingScreen
 * Simple overlay that appears while `isLoading` is true
 * Features: fade out on exit and repeating scale animation for emphasis
 */
const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <Motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary text-white"
          // Keep the overlay visible initially and fade out when removed
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          aria-label="Loading PrimeFuture Education"
        >
          <Motion.div
            className="flex flex-col items-center gap-4 text-center"
            // Pulsing scale animation to draw attention while loading
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <div className="text-3xl font-semibold tracking-wide">PrimeFuture Education</div>
            <div className="text-sm uppercase tracking-[0.4em]">Shape Your Future Globally</div>
            {/* Progress bar animation - scales X back-and-forth */}
            <Motion.span
              className="h-1 w-32 rounded-full bg-white/90"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: 'mirror' }}
            />
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen

