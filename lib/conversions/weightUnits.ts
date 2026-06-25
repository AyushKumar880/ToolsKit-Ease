export interface WeightUnit {
  label: string;
  value: string;
  toBase: number;
}

export const weightUnits: WeightUnit[] = [
  { label: "Gram (g)", value: "g", toBase: 0.001 },
  { label: "Kilogram (kg)", value: "kg", toBase: 1 },
  { label: "Metric Ton (t)", value: "t", toBase: 1000 },
  { label: "Ounce (oz)", value: "oz", toBase: 0.0283495 },
  { label: "Pound (lb)", value: "lb", toBase: 0.453592 },
  { label: "Stone (st)", value: "st", toBase: 6.35029 },
];
