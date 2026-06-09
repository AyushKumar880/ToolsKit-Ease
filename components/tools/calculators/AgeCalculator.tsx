"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ResultCard } from "@/components/shared/ResultCard";
import { differenceInYears, differenceInMonths, differenceInDays, parseISO } from "date-fns";

export default function AgeCalculator() {
  const [dob, setDob] = useState<string>("");

  let years = 0, months = 0, days = 0, totalDays = 0;
  if (dob) {
    const birthDate = parseISO(dob);
    const today = new Date();
    if (birthDate <= today) {
      years = differenceInYears(today, birthDate);
      const withoutYears = new Date(birthDate);
      withoutYears.setFullYear(today.getFullYear());
      if (withoutYears > today) withoutYears.setFullYear(today.getFullYear() - 1);
      months = differenceInMonths(today, withoutYears);
      const withoutMonths = new Date(withoutYears);
      withoutMonths.setMonth(today.getMonth());
      if (withoutMonths > today) withoutMonths.setMonth(today.getMonth() - 1);
      days = differenceInDays(today, withoutMonths);
      totalDays = differenceInDays(today, birthDate);
    }
  }

  return (
    <>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input id="dob" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </div>
      </div>

      <div className="space-y-4">
        {dob && (
          <>
            <ResultCard label="Years" value={years} />
            <ResultCard label="Months" value={months} />
            <ResultCard label="Days" value={days} />
            <ResultCard label="Total Days" value={totalDays} />
          </>
        )}
      </div>
    </>
  );
}
