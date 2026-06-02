import { ToolCard } from "./ToolCard";
import { tools } from "@/lib/data/tools";

export function ToolCardsSection() {
  const popularTools = tools.slice(0, 8);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center">Popular Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
