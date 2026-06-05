"use client";

import React, { useState } from "react";
import { NumberInput } from "@/components/shared/NumberInput";
import { LabeledSelect } from "@/components/shared/LabeledSelect";
import { ResultCard } from "@/components/shared/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function PercentageCalculator() {
  const [mode, setMode] = useState<string>("what-percent");
  const [x, setX] = useState<string>("");
  const [y, setY] = useState<string>("");

  let result = "";

  if (mode === "what-percent" && x && y) {
    const numX = Number(x);
    const numY = Number(y);
    if (numY !== 0) {
      result = formatNumber((numX / numY) * 100, 2);
    }
  } else if (mode === "percent-of" && x && y) {
    const numX = Number(x);
    const numY = Number(y);
    result = formatNumber((numX / 100) * numY, 2);
  }

  return (
    <>
      <div className="space-y-6">
        <LabeledSelect
          label="Calculation Mode"
          value={mode}
          onChange={setMode}
          options={[
            { label: "X is what % of Y?", value: "what-percent" },
            { label: "What is X% of Y?", value: "percent-of" },
          ]}
        />
        <NumberInput
          label={mode === "what-percent" ? "X" : "X (%)"}
          value={x}
          onChange={setX}
          min={0}
          step={0.01}
        />
        <NumberInput
          label="Y"
          value={y}
          onChange={setY}
          min={0}
          step={0.01}
        />
      </div>

      <div className="space-y-4">
        {result && (
          <ResultCard
            label={
              mode === "what-percent" ? "Result" : "Result"
            }
            value={result}
            unit={mode === "what-percent" ? "%" : ""}
          />
        )}
      </div>
    </>
  );
}
