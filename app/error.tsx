"use client";

import React from "react";
import { ErrorBoundaryFallback } from "@/components/shared/ErrorBoundaryFallback";

interface AppErrorProps {
  error: Error;
  reset: () => void;
}

export default function AppError({ error, reset }: AppErrorProps) {
  return (
    <ErrorBoundaryFallback
      error={error}
      resetErrorBoundary={reset}
    />
  );
}
