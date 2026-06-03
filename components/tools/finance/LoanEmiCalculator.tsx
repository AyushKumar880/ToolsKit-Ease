"use client";

import React, { useState } from "react";
import { NumberInput } from "@/components/shared/NumberInput";
import { LabeledSelect } from "@/components/shared/LabeledSelect";
import { ResultCard } from "@/components/shared/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function LoanEmiCalculator() {
  const [currency, setCurrency] = useState<string>("$");
  const [principal, setPrincipal] = useState<string>("");
  const [annualRate, setAnnualRate] = useState<string>("");
  const [tenure, setTenure] = useState<string>("");
  const [tenureUnit, setTenureUnit] = useState<string>("years");

  let emi = null, totalInterest = null, totalPayment = null;

  if (principal && annualRate && tenure) {
    const P = Number(principal);
    const R = Number(annualRate) / 100 / 12; // monthly rate
    let n = Number(tenure);
    if (tenureUnit === "years") {
      n = n * 12;
    }

    if (R === 0) {
      emi = P / n;
    } else {
      const pow = Math.pow(1 + R, n);
      emi = (P * R * pow) / (pow - 1);
    }
    totalPayment = emi * n;
    totalInterest = totalPayment - P;
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
        <div className="grid grid-cols-2 gap-4">
          <NumberInput
            label="Loan Tenure"
            value={tenure}
            onChange={setTenure}
            min={1}
            step={1}
          />
          <LabeledSelect
            label="Unit"
            value={tenureUnit}
            onChange={setTenureUnit}
            options={[
              { label: "Years", value: "years" },
              { label: "Months", value: "months" },
            ]}
          />
        </div>
      </div>

      <div className="space-y-4">
        {emi !== null && totalInterest !== null && totalPayment !== null && (
          <>
            <ResultCard
              label="Monthly EMI"
              value={`${currency}${formatNumber(emi, 2)}`}
            />
            <ResultCard
              label="Total Interest Payable"
              value={`${currency}${formatNumber(totalInterest, 2)}`}
            />
            <ResultCard
              label="Total Payment"
              value={`${currency}${formatNumber(totalPayment, 2)}`}
            />
          </>
        )}
      </div>
    </>
  );
}
