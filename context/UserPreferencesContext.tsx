"use client";

import React, { createContext, useContext } from "react";
import { useFavorites } from "@/hooks/useFavorites";
import { useRecentTools } from "@/hooks/useRecentTools";

interface UserPreferencesContextType {
  favorites: string[];
  isFavorite: (slug: string) => boolean;
  toggleFavorite: (slug: string) => void;
  recentTools: { slug: string; visitedAt: number }[];
  addRecentTool: (slug: string) => void;
  clearAllData: () => void;
}

const UserPreferencesContext = createContext<
  UserPreferencesContextType | undefined
>(undefined);

interface UserPreferencesProviderProps {
  children: React.ReactNode;
}

export function UserPreferencesProvider({
  children,
}: UserPreferencesProviderProps) {
  const { favorites, isFavorite, toggleFavorite, clearFavorites } =
    useFavorites();
  const { recentTools, addRecentTool, clearRecentTools } = useRecentTools();

  const clearAllData = () => {
    clearFavorites();
    clearRecentTools();
  };

  return (
    <UserPreferencesContext.Provider
      value={{
        favorites,
        isFavorite,
        toggleFavorite,
        recentTools,
        addRecentTool,
        clearAllData,
      }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
}

export function useUserPreferences() {
  const context = useContext(UserPreferencesContext);
  if (context === undefined) {
    throw new Error(
      "useUserPreferences must be used within a UserPreferencesProvider"
    );
  }
  return context;
}
