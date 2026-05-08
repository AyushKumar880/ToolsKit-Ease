"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export function ErrorBoundaryFallback({
  error,
  resetErrorBoundary,
}: ErrorBoundaryFallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 space-y-4 text-center">
      <h2 className="text-2xl font-semibold">Oops, something went wrong!</h2>
      <p className="text-neutral-600 dark:text-neutral-400">
        {error.message}
      </p>
      {process.env.NODE_ENV === "development" && (
        <pre className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-xs overflow-x-auto">
          {error.stack}
        </pre>
      )}
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  );
}
