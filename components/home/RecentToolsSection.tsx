"use client";

import React from "react";
import { ToolCard } from "./ToolCard";
import { useUserPreferences } from "@/context/UserPreferencesContext";
import { tools } from "@/lib/data/tools";

export function RecentToolsSection() {
  const { recentTools } = useUserPreferences();

  if (recentTools.length === 0) return null;

  const recentToolData = recentTools
    .map((rt) => tools.find((t) => t.slug === rt.slug))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Recent Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recentToolData.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
