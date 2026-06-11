"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";

interface FilterSearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  delay?: number;
}

export function FilterSearchBar({
  placeholder = "Search...",
  onSearch,
  delay = 300,
}: FilterSearchBarProps) {
  const [value, setValue] = React.useState("");
  const debouncedValue = useDebouncedValue(value, delay);

  React.useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="pl-10"
      />
    </div>
  );
}
