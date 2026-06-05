"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tool } from "@/types";
import { tools } from "@/lib/data/tools";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Tool[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const debouncedSearch = useCallback(
    (value: string) => {
      if (!value.trim()) {
        setResults([]);
        setIsOpen(false);
        return;
      }
      const filtered = tools
        .filter((tool) =>
          tool.name.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 5);
      setResults(filtered);
      setIsOpen(true);
    },
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      debouncedSearch(query);
    }, 300);
    return () => clearTimeout(timeout);
  }, [query, debouncedSearch]);

  return (
    <div className="container mb-16 relative">
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="text"
          placeholder="Search for tools (e.g., Percentage Calculator)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 h-12 text-lg"
        />
        {isOpen && results.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg z-50">
            <div className="p-2">
              {results.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.slug}`}
                  onClick={() => {
                    setQuery("");
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 p-3 rounded-md hover:bg-muted transition-colors"
                >
                  <span className="font-medium">{tool.name}</span>
                  <span className="text-sm text-muted-foreground">
                    - {tool.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
