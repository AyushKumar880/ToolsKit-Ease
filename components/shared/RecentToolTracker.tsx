"use client";

import { useEffect } from "react";
import { useUserPreferences } from "@/context/UserPreferencesContext";

interface RecentToolTrackerProps {
  slug: string;
}

export function RecentToolTracker({ slug }: RecentToolTrackerProps) {
  const { addRecentTool } = useUserPreferences();

  useEffect(() => {
    addRecentTool(slug);
  }, [slug, addRecentTool]);

  return null;
}
