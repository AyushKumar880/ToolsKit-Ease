import React from "react";
import type { Metadata } from "next";
import { FavoritesPageContent } from "@/components/favorites/FavoritesPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Your Favorites",
  description: "View your favorite tools",
  path: "/favorites",
  noindex: true,
});

export default function FavoritesPage() {
  return <FavoritesPageContent />;
}
