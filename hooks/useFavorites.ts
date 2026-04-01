"use client";

import { useLocalStorage } from "./useLocalStorage";

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", []);

  const isFavorite = (slug: string) => favorites.includes(slug);

  const toggleFavorite = (slug: string) => {
    if (isFavorite(slug)) {
      setFavorites(favorites.filter((fav) => fav !== slug));
    } else {
      setFavorites([...favorites, slug]);
    }
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    clearFavorites,
  };
}
