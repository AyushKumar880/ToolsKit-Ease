export interface LengthUnit {
  label: string;
  value: string;
  toBase: number;
}

export const lengthUnits: LengthUnit[] = [
  { label: "Millimeter (mm)", value: "mm", toBase: 0.001 },
  { label: "Centimeter (cm)", value: "cm", toBase: 0.01 },
  { label: "Meter (m)", value: "m", toBase: 1 },
  { label: "Kilometer (km)", value: "km", toBase: 1000 },
  { label: "Inch (in)", value: "in", toBase: 0.0254 },
  { label: "Foot (ft)", value: "ft", toBase: 0.3048 },
  { label: "Yard (yd)", value: "yd", toBase: 0.9144 },
  { label: "Mile (mi)", value: "mi", toBase: 1609.344 },
];
