"use client";

import React, { useState } from "react";
import { addDays, addWeeks, addMonths, addYears, format } from "date-fns";
import { NumberInput } from "@/components/shared/NumberInput";
import { LabeledSelect } from "@/components/shared/LabeledSelect";
import { ResultCard } from "@/components/shared/ResultCard";

export default function AddSubtractDays() {
  const [startDate, setStartDate] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [unit, setUnit] = useState<string>("Days");

  let result = null;

  if (startDate && amount) {
    const date = new Date(startDate);
    const num = Number(amount);
    if (!isNaN(date.getTime()) && !isNaN(num)) {
      let newDate = date;
      if (unit === "Days") {
        newDate = addDays(date, num);
      } else if (unit === "Weeks") {
        newDate = addWeeks(date, num);
      } else if (unit === "Months") {
        newDate = addMonths(date, num);
      } else if (unit === "Years") {
        newDate = addYears(date, num);
      }
      result = format(newDate, "EEEE, MMMM d, yyyy");
    }
  }

  return (
    <>
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="addsub-date" className="text-sm font-medium">
            Starting Date
          </label>
          <input
            id="addsub-date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <NumberInput
          label="Amount (can be negative)"
          value={amount}
          onChange={setAmount}
          step={1}
        />
        <LabeledSelect
          label="Unit"
          value={unit}
          onChange={setUnit}
          options={[
            { label: "Days", value: "Days" },
            { label: "Weeks", value: "Weeks" },
            { label: "Months", value: "Months" },
            { label: "Years", value: "Years" },
          ]}
        />
      </div>

      <div className="space-y-4">
        {result ? (
          <ResultCard label="Result" value={result} />
        ) : (
          startDate && amount && <ResultCard label="Result" value="Please enter valid values" />
        )}
      </div>
    </>
  );
}
