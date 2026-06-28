"use client";

import React, { useState } from "react";
import { NumberInput } from "@/components/shared/NumberInput";
import { LabeledSelect } from "@/components/shared/LabeledSelect";
import { ResultCard } from "@/components/shared/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function FlatTaxCalculator() {
  const [currency, setCurrency] = useState<string>("$");
  const [grossIncome, setGrossIncome] = useState<string>("");
  const [taxRate, setTaxRate] = useState<string>("");
  const [deductions, setDeductions] = useState<string>("0");

  let taxableIncome = null, taxOwed = null, netIncome = null;

  if (grossIncome && taxRate) {
    const G = Number(grossIncome);
    const R = Number(taxRate) / 100;
    const D = Number(deductions) || 0;

    taxableIncome = Math.max(0, G - D);
    taxOwed = taxableIncome * R;
    netIncome = G - taxOwed;
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
          label="Gross Income"
          value={grossIncome}
          onChange={setGrossIncome}
          min={0}
          step={0.01}
        />
        <NumberInput
          label="Flat Tax Rate (%)"
          value={taxRate}
          onChange={setTaxRate}
          min={0}
          max={100}
          step={0.01}
        />
        <NumberInput
          label="Deductions (Optional)"
          value={deductions}
          onChange={setDeductions}
          min={0}
          step={0.01}
        />
        <p className="text-sm text-muted-foreground">
          Disclaimer: This is a simplified flat-rate estimate only and does not
          constitute real tax advice.
        </p>
      </div>

      <div className="space-y-4">
        {taxableIncome !== null &&
          taxOwed !== null &&
          netIncome !== null && (
            <>
              <ResultCard
                label="Taxable Income"
                value={`${currency}${formatNumber(taxableIncome, 2)}`}
              />
              <ResultCard
                label="Tax Owed"
                value={`${currency}${formatNumber(taxOwed, 2)}`}
              />
              <ResultCard
                label="Net Income"
                value={`${currency}${formatNumber(netIncome, 2)}`}
              />
            </>
          )}
      </div>
    </>
  );
}
