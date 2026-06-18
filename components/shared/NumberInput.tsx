"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface NumberInputProps {
  label?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  min?: number;
  max?: number;
  step?: number;
  error?: string;
  helperText?: string;
}

export function NumberInput({
  label,
  placeholder,
  value,
  onChange,
  min,
  max,
  step,
  error,
  helperText,
}: NumberInputProps) {
  const id = React.useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^-?\d*\.?\d*$/.test(val)) {
      onChange?.(val);
    }
  };

  const isOutOfRange = () => {
    if (value === "" || value === undefined || value === null) return false;
    const num = Number(value);
    if (isNaN(num)) return false;
    if (min !== undefined && num < min) return true;
    if (max !== undefined && num > max) return true;
    return false;
  };

  const hasError = error || isOutOfRange();

  return (
    <div className="space-y-2">
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        inputMode="decimal"
        className={hasError ? "border-destructive" : ""}
      />
      {(helperText || hasError) && (
        <p
          className={
            hasError ? "text-sm text-destructive" : "text-sm text-muted-foreground"
          }
        >
          {hasError
            ? error ||
              (min !== undefined && max !== undefined
                ? `Value must be between ${min} and ${max}`
                : min !== undefined
                ? `Value must be at least ${min}`
                : max !== undefined
                ? `Value must be at most ${max}`
                : "")
            : helperText}
        </p>
      )}
    </div>
  );
}
