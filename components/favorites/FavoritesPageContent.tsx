"use client";

import React from "react";
import { ToolCard } from "@/components/home/ToolCard";
import { useUserPreferences } from "@/context/UserPreferencesContext";
import { tools } from "@/lib/data/tools";
import { EmptyState } from "@/components/shared/EmptyState";

export function FavoritesPageContent() {
  const { favorites } = useUserPreferences();

  const favoriteToolData = favorites
    .map((slug) => tools.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>
      {favoriteToolData.length === 0 ? (
        <EmptyState
          title="No favorites yet"
          description="Start exploring tools and add them to your favorites!"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteToolData.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}