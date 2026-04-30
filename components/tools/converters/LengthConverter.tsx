"use client";

import React from "react";
import { GenericUnitConverter } from "./GenericUnitConverter";
import { lengthUnits } from "@/lib/conversions/lengthUnits";

export default function LengthConverter() {
  return (
    <GenericUnitConverter
      units={lengthUnits}
      defaultFromUnit="m"
      defaultToUnit="ft"
    />
  );
}
