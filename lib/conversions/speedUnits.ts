export interface SpeedUnit {
  label: string;
  value: string;
  toBase: number;
}

export const speedUnits: SpeedUnit[] = [
  { label: "Meter per second (m/s)", value: "mps", toBase: 1 },
  { label: "Kilometer per hour (km/h)", value: "kmph", toBase: 0.277778 },
  { label: "Mile per hour (mph)", value: "mph", toBase: 0.44704 },
  { label: "Foot per second (ft/s)", value: "fps", toBase: 0.3048 },
  { label: "Knot (kn)", value: "knot", toBase: 0.514444 },
];
