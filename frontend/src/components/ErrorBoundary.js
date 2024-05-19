import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate the error
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error here
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error message or component to display
      return <div>Oops! Something went wrong.</div>;
    }

    // If no error, render children as normal
    return this.props.children;
  }
}

export default ErrorBoundary;
