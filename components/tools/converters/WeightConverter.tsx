"use client";

import React from "react";
import { GenericUnitConverter } from "./GenericUnitConverter";
import { weightUnits } from "@/lib/conversions/weightUnits";

export default function WeightConverter() {
  return (
    <GenericUnitConverter
      units={weightUnits}
      defaultFromUnit="kg"
      defaultToUnit="lb"
    />
  );
}
