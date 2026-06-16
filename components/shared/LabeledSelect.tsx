"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface LabeledSelectProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: { label: string; value: string }[];
  error?: string;
  helperText?: string;
}

export function LabeledSelect({
  label,
  placeholder,
  value,
  onChange,
  options,
  error,
  helperText,
}: LabeledSelectProps) {
  const id = React.useId();

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id={id} className={error ? "border-destructive" : ""}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {(helperText || error) && (
        <p
          className={
            error ? "text-sm text-destructive" : "text-sm text-muted-foreground"
          }
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
}
