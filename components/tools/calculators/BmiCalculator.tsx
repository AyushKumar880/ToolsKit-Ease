"use client";

import React, { useState } from "react";
import { NumberInput } from "@/components/shared/NumberInput";
import { LabeledSelect } from "@/components/shared/LabeledSelect";
import { ResultCard } from "@/components/shared/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function BmiCalculator() {
  const [units, setUnits] = useState<string>("metric");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");

  let bmi: number | null = null;
  let category: string = "";

  if (height && weight) {
    const numHeight = Number(height);
    const numWeight = Number(weight);
    if (numHeight > 0 && numWeight > 0) {
      if (units === "metric") {
        const heightM = numHeight / 100;
        bmi = numWeight / (heightM * heightM);
      } else {
        bmi = (numWeight / (numHeight * numHeight)) * 703;
      }
      
      if (bmi < 18.5) category = "Underweight";
      else if (bmi < 25) category = "Normal";
      else if (bmi < 30) category = "Overweight";
      else category = "Obese";
    }
  }

  return (
    <>
      <div className="space-y-6">
        <LabeledSelect
          label="Units"
          value={units}
          onChange={setUnits}
          options={[
            { label: "Metric (cm/kg)", value: "metric" },
            { label: "Imperial (in/lbs)", value: "imperial" },
          ]}
        />
        <NumberInput
          label={units === "metric" ? "Height (cm)" : "Height (in)"}
          value={height}
          onChange={setHeight}
          min={0}
          step={0.1}
        />
        <NumberInput
          label={units === "metric" ? "Weight (kg)" : "Weight (lbs)"}
          value={weight}
          onChange={setWeight}
          min={0}
          step={0.1}
        />
      </div>

      <div className="space-y-4">
        {bmi !== null && (
          <>
            <ResultCard label="BMI" value={formatNumber(bmi, 2)} />
            <ResultCard label="Category" value={category} />
          </>
        )}
      </div>
    </>
  );
}
