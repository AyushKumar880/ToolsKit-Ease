"use client";

import React, { useState } from "react";
import { LabeledTextarea } from "@/components/shared/LabeledTextarea";
import { LabeledSelect } from "@/components/shared/LabeledSelect";
import { ResultCard } from "@/components/shared/ResultCard";
import { CopyButton } from "@/components/shared/CopyButton";
import { toTitleCase, toCamelCase, toSnakeCase, toKebabCase } from "@/lib/textUtils";

export default function CaseConverter() {
  const [text, setText] = useState("");
  const [targetCase, setTargetCase] = useState("upper");

  let result = "";
  switch (targetCase) {
    case "upper":
      result = text.toUpperCase();
      break;
    case "lower":
      result = text.toLowerCase();
      break;
    case "title":
      result = toTitleCase(text);
      break;
    case "camel":
      result = toCamelCase(text);
      break;
    case "snake":
      result = toSnakeCase(text);
      break;
    case "kebab":
      result = toKebabCase(text);
      break;
    case "sentence":
      result = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      break;
  }

  return (
    <>
      <div className="space-y-4">
        <LabeledTextarea
          label="Enter your text"
          value={text}
          onChange={setText}
          placeholder="Type or paste your text here..."
        />
        <LabeledSelect
          label="Target case"
          value={targetCase}
          onChange={setTargetCase}
          options={[
            { label: "UPPERCASE", value: "upper" },
            { label: "lowercase", value: "lower" },
            { label: "Title Case", value: "title" },
            { label: "Sentence case", value: "sentence" },
            { label: "camelCase", value: "camel" },
            { label: "snake_case", value: "snake" },
            { label: "kebab-case", value: "kebab" },
          ]}
        />
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Result</h3>
          {result && <CopyButton text={result} />}
        </div>
        <ResultCard label="" value={result} />
      </div>
    </>
  );
}
