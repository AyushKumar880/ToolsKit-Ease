"use client";

import React from "react";
import { LabeledSelect } from "@/components/shared/LabeledSelect";
import { useTheme } from "next-themes";
import { ClearDataButton } from "./ClearDataButton";

export function SettingsForm() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="max-w-md mx-auto space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Appearance</h2>
        <LabeledSelect
          label="Theme"
          value={theme || "system"}
          onChange={(val) => setTheme(val)}
          options={[
            { label: "System", value: "system" },
            { label: "Light", value: "light" },
            { label: "Dark", value: "dark" },
          ]}
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Data</h2>
        <p className="text-sm text-muted-foreground">
          Clear your favorites and recent tools history.
        </p>
        <ClearDataButton />
      </div>
    </div>
  );
}
