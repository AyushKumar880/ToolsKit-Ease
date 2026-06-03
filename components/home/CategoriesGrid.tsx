import { CategoryCard } from "./CategoryCard";
import { categories } from "@/lib/data/categories";
import { tools } from "@/lib/data/tools";

export function CategoriesGrid() {
  return (
    <section id="categories" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} tools={tools} />
          ))}
        </div>
      </div>
    </section>
  );
}
