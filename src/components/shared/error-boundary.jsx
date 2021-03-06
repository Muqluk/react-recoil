import React from 'react';

import ErrorPane from './error-pane';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <ErrorPane />
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
