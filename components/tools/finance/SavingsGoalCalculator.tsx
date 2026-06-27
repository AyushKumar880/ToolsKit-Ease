"use client";

import React, { useState } from "react";
import { NumberInput } from "@/components/shared/NumberInput";
import { LabeledSelect } from "@/components/shared/LabeledSelect";
import { ResultCard } from "@/components/shared/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function SavingsGoalCalculator() {
  const [currency, setCurrency] = useState<string>("$");
  const [targetAmount, setTargetAmount] = useState<string>("");
  const [currentSavings, setCurrentSavings] = useState<string>("");
  const [monthlyContribution, setMonthlyContribution] = useState<string>("");
  const [annualReturnRate, setAnnualReturnRate] = useState<string>("0");

  let monthsNeeded = null, years = null;

  if (targetAmount && monthlyContribution) {
    const T = Number(targetAmount);
    let C = Number(currentSavings) || 0;
    const P = Number(monthlyContribution);
    const r = (Number(annualReturnRate) || 0) / 100 / 12; // monthly rate

    if (r === 0) {
      if (P <= 0) {
        monthsNeeded = null;
      } else {
        monthsNeeded = Math.max(0, Math.ceil((T - C) / P));
      }
    } else {
      if (P <= 0) {
        if (C >= T) {
          monthsNeeded = 0;
        } else {
          monthsNeeded = null;
        }
      } else {
        const numerator = Math.log((T * r + P) / (C * r + P));
        const denominator = Math.log(1 + r);
        monthsNeeded = Math.max(0, Math.ceil(numerator / denominator));
      }
    }

    if (monthsNeeded !== null) {
      years = monthsNeeded / 12;
    }
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
          label="Target Amount"
          value={targetAmount}
          onChange={setTargetAmount}
          min={0}
          step={0.01}
        />
        <NumberInput
          label="Current Savings"
          value={currentSavings}
          onChange={setCurrentSavings}
          min={0}
          step={0.01}
        />
        <NumberInput
          label="Monthly Contribution"
          value={monthlyContribution}
          onChange={setMonthlyContribution}
          min={0}
          step={0.01}
        />
        <NumberInput
          label="Expected Annual Return Rate (%)"
          value={annualReturnRate}
          onChange={setAnnualReturnRate}
          min={0}
          max={100}
          step={0.01}
        />
      </div>

      <div className="space-y-4">
        {monthsNeeded !== null && years !== null && (
          <>
            <ResultCard label="Months Needed" value={monthsNeeded} />
            <ResultCard label="Years Needed" value={formatNumber(years, 1)} />
          </>
        )}
      </div>
    </>
  );
}
