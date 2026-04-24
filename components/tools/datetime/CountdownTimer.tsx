"use client";

import React, { useState, useEffect } from "react";
import { ResultCard } from "@/components/shared/ResultCard";

export default function CountdownTimer() {
  const [targetDateTime, setTargetDateTime] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);

  const calculateTimeLeft = (target: Date) => {
    const now = new Date();
    const difference = target.getTime() - now.getTime();

    if (difference <= 0) {
      setIsTimeUp(true);
      setTimeLeft(null);
      return;
    }

    setIsTimeUp(false);
    setTimeLeft({
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    });
  };

  useEffect(() => {
    if (!targetDateTime) {
      setTimeLeft(null);
      setIsTimeUp(false);
      return;
    }

    const targetDate = new Date(targetDateTime);
    if (isNaN(targetDate.getTime())) {
      setTimeLeft(null);
      setIsTimeUp(false);
      return;
    }

    calculateTimeLeft(targetDate);

    const interval = setInterval(() => {
      calculateTimeLeft(targetDate);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDateTime]);

  return (
    <>
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="target-datetime" className="text-sm font-medium">
            Target Date & Time
          </label>
          <input
            id="target-datetime"
            type="datetime-local"
            value={targetDateTime}
            onChange={(e) => setTargetDateTime(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div className="space-y-4">
        {isTimeUp ? (
          <ResultCard label="Status" value="Time's up!" />
        ) : timeLeft ? (
          <>
            <ResultCard label="Days" value={timeLeft.days} />
            <ResultCard label="Hours" value={timeLeft.hours} />
            <ResultCard label="Minutes" value={timeLeft.minutes} />
            <ResultCard label="Seconds" value={timeLeft.seconds} />
          </>
        ) : (
          targetDateTime && <ResultCard label="Status" value="Please select a valid future date" />
        )}
      </div>
    </>
  );
}
