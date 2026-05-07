"use client";

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUserPreferences } from "@/context/UserPreferencesContext";

interface FavoriteButtonProps {
  slug: string;
}

export function FavoriteButton({ slug }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useUserPreferences();
  const active = isFavorite(slug);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        toggleFavorite(slug);
      }}
      aria-label={
        active ? "Remove from favorites" : "Add to favorites"}
    >
      <Star
        className={active ? "fill-current" : ""} />
    </Button>
  );
}
