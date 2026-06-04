import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Category, Tool } from "@/types";
import { getLucideIcon } from "@/lib/icons";

interface CategoryCardProps {
  category: Category;
  tools: Tool[];
}

export function CategoryCard({ category, tools }: CategoryCardProps) {
  const Icon = getLucideIcon(category.icon || "HelpCircle");
  const toolCount = tools.filter(
    (tool) => tool.categorySlug === category.slug
  ).length;

  return (
    <Link href={`/category/${category.slug}`} className="group">
      <Card className="h-full transition-all hover:shadow-md hover:border-primary/20">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg">{category.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            {category.description}
          </p>
          <p className="text-sm font-medium">
            {toolCount} {toolCount === 1 ? "Tool" : "Tools"}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
