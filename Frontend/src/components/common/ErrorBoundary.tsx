import { Component, ReactNode } from "react";

import ErrorPage from "@/pages/ErrorPage";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error("Global Error:", error, errorInfo);
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: undefined,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPage error={this.state.error} resetError={this.resetError} />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
