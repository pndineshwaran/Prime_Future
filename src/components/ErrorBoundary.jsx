/**
 * ErrorBoundary.jsx
 * React error boundary to catch rendering errors and show a fallback UI
 * Key features: captures exceptions, logs them, allows retry (reload)
 * Used on: wrap top-level app components (optional)
 */

import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    // hasError tracks whether an error was caught
    this.state = { hasError: false }
  }

  // When an error is thrown in a child component, set state to show fallback UI
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  // Log error details for monitoring (console here, but can integrate with Sentry)
  componentDidCatch(error, info) {
    console.error('Application error:', error, info)
  }

  // Retry handler resets error state and reloads the page
  handleRetry = () => {
    this.setState({ hasError: false })
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI shown when an error occurs
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white text-center text-primary">
          <h1 className="text-3xl font-semibold">Something went wrong</h1>
          <p className="mt-4 max-w-md text-primary/70">
            Please refresh the page or try again later. Our team has been notified.
          </p>
          <button
            type="button"
            onClick={this.handleRetry}
            className="mt-6 rounded-full bg-primary px-6 py-3 text-white"
          >
            Reload Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

