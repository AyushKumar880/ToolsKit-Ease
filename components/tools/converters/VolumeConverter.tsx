"use client";

import React from "react";
import { GenericUnitConverter } from "./GenericUnitConverter";
import { volumeUnits } from "@/lib/conversions/volumeUnits";

export default function VolumeConverter() {
  return (
    <GenericUnitConverter
      units={volumeUnits}
      defaultFromUnit="L"
      defaultToUnit="gal-us"
    />
  );
}
