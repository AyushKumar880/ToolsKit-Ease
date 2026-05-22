import { Hero } from "@/components/home/Hero";
import { SearchBar } from "@/components/home/SearchBar";
import { CategoriesGrid } from "@/components/home/CategoriesGrid";
import { ToolCardsSection } from "@/components/home/ToolCardsSection";
import { RecentToolsSection } from "@/components/home/RecentToolsSection";
import { FavoritesSection } from "@/components/home/FavoritesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <RecentToolsSection />
      <FavoritesSection />
      <CategoriesGrid />
      <ToolCardsSection />
    </>
  );
}
