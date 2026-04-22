"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { ResultCard } from "@/components/shared/ResultCard";

export default function DayOfWeekFinder() {
  const [selectedDate, setSelectedDate] = useState<string>("");

  let result = null;

  if (selectedDate) {
    const date = new Date(selectedDate);
    if (!isNaN(date.getTime())) {
      const dayOfWeek = format(date, "EEEE");
      const formattedDate = format(date, "MMMM d, yyyy");
      result = `${dayOfWeek}, ${formattedDate}`;
    }
  }

  return (
    <>
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="dow-date" className="text-sm font-medium">
            Select Date
          </label>
          <input
            id="dow-date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div className="space-y-4">
        {result ? (
          <ResultCard label="Day of the Week" value={result} />
        ) : selectedDate ? (
          <ResultCard label="Day of the Week" value="Please select a valid date" />
        ) : null}
      </div>
    </>
  );
}
