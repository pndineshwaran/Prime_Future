/**
 * NotFound.jsx
 * Simple 404 page when a route is not found
 * Used on: fallback route (*)
 */

import { Link } from 'react-router-dom'

/**
 * NotFound
 * Displays a friendly message and a link back to home
 */
const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-primary">
    <p className="text-sm uppercase tracking-[0.4em] text-primary/60">404</p>
    <h1 className="mt-4 text-4xl font-semibold">Page Not Found</h1>
    <p className="mt-4 max-w-md text-primary/70">
      The page you are looking for might have been removed or is temporarily unavailable.
    </p>
    <Link to="/" className="mt-8 rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white">
      Back to Home
    </Link>
  </div>
)

export default NotFound

