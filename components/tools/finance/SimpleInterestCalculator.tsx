"use client";

import React, { useState } from "react";
import { NumberInput } from "@/components/shared/NumberInput";
import { LabeledSelect } from "@/components/shared/LabeledSelect";
import { ResultCard } from "@/components/shared/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function SimpleInterestCalculator() {
  const [currency, setCurrency] = useState<string>("$");
  const [principal, setPrincipal] = useState<string>("");
  const [annualRate, setAnnualRate] = useState<string>("");
  const [timeYears, setTimeYears] = useState<string>("");

  let simpleInterest = null, totalAmount = null;

  if (principal && annualRate && timeYears) {
    const P = Number(principal);
    const R = Number(annualRate) / 100;
    const T = Number(timeYears);
    simpleInterest = P * R * T;
    totalAmount = P + simpleInterest;
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
      </div>

      <div className="space-y-4">
        {simpleInterest !== null && totalAmount !== null && (
          <>
            <ResultCard
              label="Simple Interest"
              value={`${currency}${formatNumber(simpleInterest, 2)}`}
            />
            <ResultCard
              label="Total Amount"
              value={`${currency}${formatNumber(totalAmount, 2)}`}
            />
          </>
        )}
      </div>
    </>
  );
}
