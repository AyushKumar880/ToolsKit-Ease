import React from "react";
import { Badge } from "@/components/ui/badge";

interface ToolHeaderProps {
  name: string;
  description: string;
  categoryName: string;
}

export function ToolHeader({ name, description, categoryName }: ToolHeaderProps) {
  return (
    <div className="mb-8">
      <Badge variant="secondary" className="mb-2">
        {categoryName}
      </Badge>
      <h1 className="text-3xl font-bold tracking-tight mb-2">{name}</h1>
      <p className="text-muted-foreground text-lg">{description}</p>
    </div>
  );
}
