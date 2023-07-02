import React, { type ReactNode, type ErrorInfo } from 'react'
import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<
ErrorBoundaryProps,
ErrorBoundaryState
> {
  constructor (props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: Error) {
    console.log(error)
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch (error: Error, info: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, info)
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <PageError />
    }

    return this.props.children
  }
}
