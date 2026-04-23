"use client";

import React, { useState } from "react";
import { differenceInDays, differenceInMonths, differenceInYears } from "date-fns";
import { ResultCard } from "@/components/shared/ResultCard";

export default function DateDifferenceCalculator() {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  let results = null;
  let error = null;

  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      error = "Please select valid dates";
    } else if (end < start) {
      error = "End date must be after start date";
    } else {
      const totalDays = differenceInDays(end, start);
      const years = differenceInYears(end, start);
      const afterYears = new Date(start);
      afterYears.setFullYear(start.getFullYear() + years);
      const monthsRemaining = differenceInMonths(end, afterYears);
      const afterMonths = new Date(afterYears);
      afterMonths.setMonth(afterYears.getMonth() + monthsRemaining);
      const daysRemaining = differenceInDays(end, afterMonths);

      results = {
        totalDays,
        years,
        months: monthsRemaining,
        days: daysRemaining,
      };
    }
  }

  return (
    <>
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="start-date" className="text-sm font-medium">
            Start Date
          </label>
          <input
            id="start-date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="end-date" className="text-sm font-medium">
            End Date
          </label>
          <input
            id="end-date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>

      <div className="space-y-4">
        {results && (
          <>
            <ResultCard label="Total Days" value={results.totalDays} />
            <ResultCard
              label="Breakdown"
              value={`${results.years} years, ${results.months} months, ${results.days} days`}
            />
          </>
        )}
      </div>
    </>
  );
}
