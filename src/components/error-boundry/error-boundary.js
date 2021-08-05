import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
    // return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}


// static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.    
//         return { hasError: true };
//     }