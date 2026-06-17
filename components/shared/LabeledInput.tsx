"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LabeledInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  helperText?: string;
  type?: "text" | "email" | "password" | "tel" | "url";
}

export function LabeledInput({
  label,
  placeholder,
  value,
  onChange,
  error,
  helperText,
  type = "text",
}: LabeledInputProps) {
  const id = React.useId();

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={error ? "border-destructive" : ""}
      />
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
