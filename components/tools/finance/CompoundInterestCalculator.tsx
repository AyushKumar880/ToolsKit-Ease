"use client";

import React, { useState } from "react";
import { NumberInput } from "@/components/shared/NumberInput";
import { LabeledSelect } from "@/components/shared/LabeledSelect";
import { ResultCard } from "@/components/shared/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function CompoundInterestCalculator() {
  const [currency, setCurrency] = useState<string>("$");
  const [principal, setPrincipal] = useState<string>("");
  const [annualRate, setAnnualRate] = useState<string>("");
  const [timeYears, setTimeYears] = useState<string>("");
  const [compoundingFreq, setCompoundingFreq] = useState<string>("annual");

  let finalAmount = null, totalInterest = null;

  if (principal && annualRate && timeYears) {
    const P = Number(principal);
    const R = Number(annualRate) / 100;
    const T = Number(timeYears);
    let n = 1;

    if (compoundingFreq === "semi-annual") n = 2;
    else if (compoundingFreq === "quarterly") n = 4;
    else if (compoundingFreq === "monthly") n = 12;

    finalAmount = P * Math.pow(1 + R / n, n * T);
    totalInterest = finalAmount - P;
  }

  return (
    <>
      <div className="space-y-6">
        <LabeledSelect
          label="Currency"
          value={currency}
          onChange={setCurrency}
          options={[
            { label: "$ (USD)", value: "$" },
            { label: "€ (EUR)", value: "€" },
            { label: "£ (GBP)", value: "£" },
            { label: "₹ (INR)", value: "₹" },
          ]}
        />
        <NumberInput
          label="Principal Amount"
          value={principal}
          onChange={setPrincipal}
          min={0}
          step={0.01}
        />
        <NumberInput
          label="Annual Interest Rate (%)"
          value={annualRate}
          onChange={setAnnualRate}
          min={0}
          max={100}
          step={0.01}
        />
        <NumberInput
          label="Time (Years)"
          value={timeYears}
          onChange={setTimeYears}
          min={1}
          step={0.1}
        />
        <LabeledSelect
          label="Compounding Frequency"
          value={compoundingFreq}
          onChange={setCompoundingFreq}
          options={[
            { label: "Annually", value: "annual" },
            { label: "Semi-Annually", value: "semi-annual" },
            { label: "Quarterly", value: "quarterly" },
            { label: "Monthly", value: "monthly" },
          ]}
        />
      </div>

      <div className="space-y-4">
        {finalAmount !== null && totalInterest !== null && (
          <>
            <ResultCard
              label="Final Amount"
              value={`${currency}${formatNumber(finalAmount, 2)}`}
            />
            <ResultCard
              label="Total Interest Earned"
              value={`${currency}${formatNumber(totalInterest, 2)}`}
            />
          </>
        )}
      </div>
    </>
  );
}
