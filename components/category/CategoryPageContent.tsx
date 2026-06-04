"use client";

import React, { useState } from "react";
import { Tool } from "@/types";
import { ToolCard } from "@/components/home/ToolCard";
import { FilterSearchBar } from "@/components/shared/FilterSearchBar";
import { EmptyState } from "@/components/shared/EmptyState";

interface CategoryPageContentProps {
  categoryTools: Tool[];
}

export function CategoryPageContent({ categoryTools }: CategoryPageContentProps) {
  const [search, setSearch] = useState("");
  const filteredTools = categoryTools.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="mb-8 max-w-md">
        <FilterSearchBar
          placeholder="Search tools..."
          onSearch={setSearch}
        />
      </div>

      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No tools found"
          description="Try adjusting your search"
        />
      )}
    </>
  );
}
