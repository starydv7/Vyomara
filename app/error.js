'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log error to monitoring service in production
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div className="container mx-auto max-w-2xl space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-red-600">Error</h1>
          <h2 className="text-3xl font-semibold">Something went wrong!</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            An unexpected error occurred. Please try again or contact support if the problem
            persists.
          </p>
          {error.digest && (
            <p className="text-sm text-gray-500">
              Error ID: <code className="rounded bg-gray-100 px-2 py-1">{error.digest}</code>
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={reset}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}


