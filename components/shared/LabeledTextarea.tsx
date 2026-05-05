"use client";

import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface LabeledTextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  showCounts?: boolean;
  rows?: number;
}

export function LabeledTextarea({
  label,
  value,
  onChange,
  placeholder = "",
  readOnly = false,
  showCounts = false,
  rows = 8,
}: LabeledTextareaProps) {
  const characterCount = value.length;
  const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0;

  return (
    <div className="space-y-2">
      <Label htmlFor={label}>{label}</Label>
      <Textarea
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={readOnly}
        rows={rows}
        className="resize-y"
      />
      {showCounts && (
        <div className="text-xs text-muted-foreground flex gap-4">
          <span>Words: {wordCount}</span>
          <span>Characters: {characterCount}</span>
        </div>
      )}
    </div>
  );
}
