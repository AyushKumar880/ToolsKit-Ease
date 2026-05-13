"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tool, Category } from "@/types";
import { getLucideIcon } from "@/lib/icons";
import { categories } from "@/lib/data/categories";
import { FavoriteButton } from "@/components/shared/FavoriteButton";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const Icon = getLucideIcon(tool.icon || "HelpCircle");
  const category = categories.find((c) => c.slug === tool.categorySlug);

  return (
    <div className="relative">
      <Link href={`/tools/${tool.slug}`} className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg">
        <Card className="h-full transition-all hover:shadow-md hover:border-primary/20">
          <CardHeader className="flex flex-row items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-base mb-1">{tool.name}</CardTitle>
              {category && (
                <Badge variant="secondary" className="text-xs">
                  {category.name}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{tool.description}</p>
          </CardContent>
        </Card>
      </Link>
      <div className="absolute top-2 right-2">
        <FavoriteButton slug={tool.slug} />
      </div>
    </div>
  );
}
