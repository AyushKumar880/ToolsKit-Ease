export interface VolumeUnit {
  label: string;
  value: string;
  toBase: number;
}

export const volumeUnits: VolumeUnit[] = [
  { label: "Milliliter (mL)", value: "mL", toBase: 0.001 },
  { label: "Liter (L)", value: "L", toBase: 1 },
  { label: "Cubic Meter (m³)", value: "m3", toBase: 1000 },
  { label: "US Fluid Ounce (fl oz)", value: "fl-oz-us", toBase: 0.0295735 },
  { label: "US Cup (c)", value: "cup-us", toBase: 0.236588 },
  { label: "US Pint (pt)", value: "pt-us", toBase: 0.473176 },
  { label: "US Quart (qt)", value: "qt-us", toBase: 0.946353 },
  { label: "US Gallon (gal)", value: "gal-us", toBase: 3.78541 },
  { label: "UK Fluid Ounce (fl oz)", value: "fl-oz-uk", toBase: 0.0284131 },
  { label: "UK Pint (pt)", value: "pt-uk", toBase: 0.568261 },
  { label: "UK Quart (qt)", value: "qt-uk", toBase: 1.13652 },
  { label: "UK Gallon (gal)", value: "gal-uk", toBase: 4.54609 },
];
