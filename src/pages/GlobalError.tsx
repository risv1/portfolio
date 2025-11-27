import React from "react";

type State = {
    hasError: boolean;
    error?: Error;
};

class GlobalError extends React.Component<React.PropsWithChildren, State> {
    constructor(props: React.PropsWithChildren) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.error("Global error caught:", error, info);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: undefined });
        window.location.href = "/";
    };

    render() {
        if (this.state.hasError) {
            return (
                <main className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 p-8">
                    <div className="w-full max-w-2xl">
                        <div className="text-center mb-10">

                            <h1 className="text-4xl md:text-5xl font-bold text-neutral-950 dark:text-white mb-3">
                                Something went wrong
                            </h1>

                            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                                We're sorry, but something unexpected happened. Please try
                                again.
                            </p>
                        </div>

                        {this.state.error && (
                            <div className="mb-8 p-6 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
                                <h2 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2 uppercase tracking-wide">
                                    Error Details
                                </h2>
                                <pre className="text-sm text-red-700 dark:text-red-300 overflow-x-auto whitespace-pre-wrap break-words font-mono">
                                    {this.state.error.message}
                                </pre>
                            </div>
                        )}

                        <div className="space-y-4">
                            <button
                                onClick={this.handleReset}
                                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                            >
                                Go to Home
                            </button>

                            <button
                                onClick={() => window.location.reload()}
                                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
                            >
                                Reload Page
                            </button>
                        </div>

                        <p className="mt-8 text-xs text-center text-neutral-500 dark:text-neutral-500">
                            If this problem persists, please contact support.
                        </p>
                    </div>
                </main>
            );
        }

        return this.props.children;
    }
}

export default GlobalError;
