"use client";

import React, { useState, useMemo } from "react";
import { ArrowRightLeft } from "lucide-react";
import { NumberInput } from "@/components/shared/NumberInput";
import { LabeledSelect } from "@/components/shared/LabeledSelect";
import { ResultCard } from "@/components/shared/ResultCard";
import { formatNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface BaseUnit {
  label: string;
  value: string;
  toBase: number;
}

interface GenericUnitConverterProps {
  units: BaseUnit[];
  defaultFromUnit: string;
  defaultToUnit: string;
}

export function GenericUnitConverter({
  units,
  defaultFromUnit,
  defaultToUnit,
}: GenericUnitConverterProps) {
  const [value, setValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState<string>(defaultFromUnit);
  const [toUnit, setToUnit] = useState<string>(defaultToUnit);

  const result = useMemo(() => {
    if (!value) return null;
    const numValue = Number(value);
    if (isNaN(numValue)) return null;

    const fromUnitObj = units.find((u) => u.value === fromUnit);
    const toUnitObj = units.find((u) => u.value === toUnit);
    if (!fromUnitObj || !toUnitObj) return null;

    return (numValue * fromUnitObj.toBase) / toUnitObj.toBase;
  }, [value, fromUnit, toUnit, units]);

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <>
      <div className="space-y-4">
        <NumberInput label="Value" value={value} onChange={setValue} />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-end gap-4">
          <LabeledSelect
            label="From"
            value={fromUnit}
            onChange={setFromUnit}
            options={units}
          />
          <Button variant="outline" size="icon" onClick={handleSwap}>
            <ArrowRightLeft className="h-4 w-4" />
            <span className="sr-only">Swap units</span>
          </Button>
          <LabeledSelect
            label="To"
            value={toUnit}
            onChange={setToUnit}
            options={units}
          />
        </div>
      </div>
      <div className="space-y-4">
        {result !== null ? (
          <ResultCard label="Result" value={formatNumber(result, 8)} />
        ) : (
          <ResultCard label="Result" value="Please enter a value" />
        )}
      </div>
    </>
  );
}
