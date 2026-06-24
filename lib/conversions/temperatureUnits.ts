export interface TemperatureUnit {
  label: string;
  value: string;
}

export const temperatureUnits: TemperatureUnit[] = [
  { label: "Celsius (°C)", value: "celsius" },
  { label: "Fahrenheit (°F)", value: "fahrenheit" },
  { label: "Kelvin (K)", value: "kelvin" },
];

// Conversion functions
export const celsiusToFahrenheit = (c: number): number => (c * 9) / 5 + 32;
export const fahrenheitToCelsius = (f: number): number => ((f - 32) * 5) / 9;
export const celsiusToKelvin = (c: number): number => c + 273.15;
export const kelvinToCelsius = (k: number): number => k - 273.15;
export const fahrenheitToKelvin = (f: number): number =>
  celsiusToKelvin(fahrenheitToCelsius(f));
export const kelvinToFahrenheit = (k: number): number =>
  celsiusToFahrenheit(kelvinToCelsius(k));

// Helper to convert between any two temperature units
export const convertTemperature = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  if (fromUnit === toUnit) return value;

  if (fromUnit === "celsius") {
    if (toUnit === "fahrenheit") return celsiusToFahrenheit(value);
    if (toUnit === "kelvin") return celsiusToKelvin(value);
  } else if (fromUnit === "fahrenheit") {
    if (toUnit === "celsius") return fahrenheitToCelsius(value);
    if (toUnit === "kelvin") return fahrenheitToKelvin(value);
  } else if (fromUnit === "kelvin") {
    if (toUnit === "celsius") return kelvinToCelsius(value);
    if (toUnit === "fahrenheit") return kelvinToFahrenheit(value);
  }

  return value;
};
