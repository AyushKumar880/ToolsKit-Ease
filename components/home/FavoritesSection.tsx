"use client";

import React from "react";
import { ToolCard } from "./ToolCard";
import { useUserPreferences } from "@/context/UserPreferencesContext";
import { tools } from "@/lib/data/tools";

export function FavoritesSection() {
  const { favorites } = useUserPreferences();

  if (favorites.length === 0) return null;

  const favoriteToolData = favorites
    .map((slug) => tools.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Your Favorites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteToolData.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
