import { Tool } from "@/types";
import { tools } from "./data/tools";

// Export component map without lazy loading
import PercentageCalculator from "@/components/tools/calculators/PercentageCalculator";
import BmiCalculator from "@/components/tools/calculators/BmiCalculator";
import AgeCalculator from "@/components/tools/calculators/AgeCalculator";
import BasicCalculator from "@/components/tools/calculators/BasicCalculator";
import DiscountCalculator from "@/components/tools/calculators/DiscountCalculator";
import LoanEmiCalculator from "@/components/tools/finance/LoanEmiCalculator";
import CompoundInterestCalculator from "@/components/tools/finance/CompoundInterestCalculator";
import SimpleInterestCalculator from "@/components/tools/finance/SimpleInterestCalculator";
import SavingsGoalCalculator from "@/components/tools/finance/SavingsGoalCalculator";
import FlatTaxCalculator from "@/components/tools/finance/FlatTaxCalculator";
import LengthConverter from "@/components/tools/converters/LengthConverter";
import WeightConverter from "@/components/tools/converters/WeightConverter";
import TemperatureConverter from "@/components/tools/converters/TemperatureConverter";
import VolumeConverter from "@/components/tools/converters/VolumeConverter";
import SpeedConverter from "@/components/tools/converters/SpeedConverter";
import DateDifferenceCalculator from "@/components/tools/datetime/DateDifferenceCalculator";
import CountdownTimer from "@/components/tools/datetime/CountdownTimer";
import TimeZoneConverter from "@/components/tools/datetime/TimeZoneConverter";
import DayOfWeekFinder from "@/components/tools/datetime/DayOfWeekFinder";
import AddSubtractDays from "@/components/tools/datetime/AddSubtractDays";
import WordCharacterCounter from "@/components/tools/text/WordCharacterCounter";
import CaseConverter from "@/components/tools/text/CaseConverter";
import TextReverser from "@/components/tools/text/TextReverser";
import DuplicateLineRemover from "@/components/tools/text/DuplicateLineRemover";
import LoremIpsumGenerator from "@/components/tools/text/LoremIpsumGenerator";
import JsonFormatter from "@/components/tools/dev/JsonFormatter";
import Base64Tool from "@/components/tools/dev/Base64Tool";
import UrlEncoderDecoder from "@/components/tools/dev/UrlEncoderDecoder";
import ColorConverter from "@/components/tools/dev/ColorConverter";
import UuidGenerator from "@/components/tools/dev/UuidGenerator";
import ImageCompressor from "@/components/tools/files/ImageCompressor";
import ImageFormatConverter from "@/components/tools/files/ImageFormatConverter";
import FileSizeCalculator from "@/components/tools/files/FileSizeCalculator";
import ImageResizer from "@/components/tools/files/ImageResizer";
import FileToBase64Converter from "@/components/tools/files/FileToBase64Converter";

const toolComponents: Record<string, React.ComponentType> = {
  "percentage-calculator": PercentageCalculator,
  "bmi-calculator": BmiCalculator,
  "age-calculator": AgeCalculator,
  "basic-calculator": BasicCalculator,
  "discount-calculator": DiscountCalculator,
  "loan-emi-calculator": LoanEmiCalculator,
  "compound-interest-calculator": CompoundInterestCalculator,
  "simple-interest-calculator": SimpleInterestCalculator,
  "savings-goal-calculator": SavingsGoalCalculator,
  "flat-tax-calculator": FlatTaxCalculator,
  "length-converter": LengthConverter,
  "weight-converter": WeightConverter,
  "temperature-converter": TemperatureConverter,
  "volume-converter": VolumeConverter,
  "speed-converter": SpeedConverter,
  "date-difference-calculator": DateDifferenceCalculator,
  "countdown-timer": CountdownTimer,
  "timezone-converter": TimeZoneConverter,
  "day-of-week-finder": DayOfWeekFinder,
  "add-subtract-days": AddSubtractDays,
  "word-character-counter": WordCharacterCounter,
  "case-converter": CaseConverter,
  "text-reverser": TextReverser,
  "duplicate-line-remover": DuplicateLineRemover,
  "lorem-ipsum-generator": LoremIpsumGenerator,
  "json-formatter": JsonFormatter,
  "base64-converter": Base64Tool,
  "url-encoder-decoder": UrlEncoderDecoder,
  "color-converter": ColorConverter,
  "uuid-generator": UuidGenerator,
  "image-compressor": ImageCompressor,
  "image-format-converter": ImageFormatConverter,
  "file-size-calculator": FileSizeCalculator,
  "image-resizer": ImageResizer,
  "file-to-base64-converter": FileToBase64Converter,
};

export function getToolBySlug(slug: string): (Tool & { Component: React.ComponentType }) | null {
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return null;
  const Component = toolComponents[slug];
  if (!Component) return null;
  return { ...tool, Component };
}
