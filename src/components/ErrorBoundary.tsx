
import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  onError?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(error: any) {
    console.error("Component Error:", error);
    if (this.props.onError) {
      this.props.onError();
    }
  }
  
  render() {
    if (this.state.hasError) {
      return null;
    }
    
    return this.props.children;
  }
}

export default ErrorBoundary;
