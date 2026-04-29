"use client";

import React from "react";
import { GenericUnitConverter } from "./GenericUnitConverter";
import { speedUnits } from "@/lib/conversions/speedUnits";

export default function SpeedConverter() {
  return (
    <GenericUnitConverter
      units={speedUnits}
      defaultFromUnit="kmph"
      defaultToUnit="mph"
    />
  );
}
