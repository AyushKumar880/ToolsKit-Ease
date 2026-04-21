"use client";

import React, { useState } from "react";
import { LabeledSelect } from "@/components/shared/LabeledSelect";
import { ResultCard } from "@/components/shared/ResultCard";
import { timezones } from "@/lib/data/timezones";

export default function TimeZoneConverter() {
  const [dateTime, setDateTime] = useState<string>("");
  const [fromTz, setFromTz] = useState<string>("UTC");
  const [toTz, setToTz] = useState<string>("America/New_York");

  let convertedTime = null;

  if (dateTime) {
    try {
      const date = new Date(dateTime);
      if (!isNaN(date.getTime())) {
        const formatter = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: toTz,
          timeZoneName: "short",
        });
        convertedTime = formatter.format(date);
      }
    } catch (e) {
      // Ignore invalid timezone errors
    }
  }

  return (
    <>
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="tz-datetime" className="text-sm font-medium">
            Date & Time
          </label>
          <input
            id="tz-datetime"
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <LabeledSelect
          label="From Time Zone"
          value={fromTz}
          onChange={setFromTz}
          options={timezones}
        />
        <LabeledSelect
          label="To Time Zone"
          value={toTz}
          onChange={setToTz}
          options={timezones}
        />
      </div>

      <div className="space-y-4">
        {convertedTime ? (
          <ResultCard label="Converted Time" value={convertedTime} />
        ) : dateTime ? (
          <ResultCard label="Converted Time" value="Please select a valid date/time" />
        ) : null}
      </div>
    </>
  );
}
