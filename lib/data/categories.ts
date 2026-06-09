import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "calculators",
    name: "Calculators",
    slug: "calculators",
    description: "Math, percentage, and quick calculation tools",
    icon: "Calculator",
  },
  {
    id: "finance",
    name: "Finance Tools",
    slug: "finance",
    description: "Loan, EMI, and financial calculators",
    icon: "DollarSign",
  },
  {
    id: "unit-converter",
    name: "Unit Converter",
    slug: "unit-converter",
    description: "Convert between different units of measurement",
    icon: "Ruler",
  },
  {
    id: "date-time",
    name: "Date & Time Tools",
    slug: "date-time",
    description: "Age calculators, date differences, and more",
    icon: "Clock",
  },
  {
    id: "text-utilities",
    name: "Text Utilities",
    slug: "text-utilities",
    description: "Word counters, case converters, and text formatters",
    icon: "Type",
  },
  {
    id: "developer-utilities",
    name: "Developer Utilities",
    slug: "developer-utilities",
    description: "JSON formatters, base64 converters, and more",
    icon: "Code2",
  },
  {
    id: "file-utilities",
    name: "File Utilities",
    slug: "file-utilities",
    description: "Image compressors, PDF tools, and more",
    icon: "File",
  },
];
