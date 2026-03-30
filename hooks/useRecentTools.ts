"use client";

import { useLocalStorage } from "./useLocalStorage";

interface RecentTool {
  slug: string;
  visitedAt: number;
}

export function useRecentTools() {
  const [recentTools, setRecentTools] = useLocalStorage<RecentTool[]>(
    "recentTools",
    []
  );

  const addRecentTool = (slug: string) => {
    setRecentTools((prev) => {
      // Remove existing entry if any
      let updated = prev.filter((tool) => tool.slug !== slug);
      // Add new entry to front
      updated = [{ slug, visitedAt: Date.now() }, ...updated];
      // Keep only last 10
      return updated.slice(0, 10);
    });
  };

  const clearRecentTools = () => {
    setRecentTools([]);
  };

  return {
    recentTools,
    addRecentTool,
    clearRecentTools,
  };
}
