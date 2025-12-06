import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    handleReset = () => {
        if (confirm("This will clear your local data to fix the crash. Are you sure?")) {
            localStorage.clear();
            window.location.reload();
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center p-6 bg-red-50 text-red-900 font-sans">
                    <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-red-100">
                        <h1 className="text-2xl font-bold mb-4 text-red-600">Something went wrong.</h1>
                        <p className="mb-4 text-sm text-gray-600">The application crashed. This is usually due to corrupted local data.</p>

                        <div className="bg-gray-100 p-4 rounded-lg overflow-auto text-xs font-mono mb-6 max-h-48 border">
                            {this.state.error && this.state.error.toString()}
                            <br />
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => window.location.reload()}
                                className="flex-1 py-3 px-4 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold transition-colors"
                            >
                                Reload Page
                            </button>
                            <button
                                onClick={this.handleReset}
                                className="flex-1 py-3 px-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-colors"
                            >
                                Reset Data
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
