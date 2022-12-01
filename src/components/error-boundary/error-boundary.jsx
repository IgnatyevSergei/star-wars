import React, {Component} from 'react';
import Error from "../error";

class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <Error/>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;