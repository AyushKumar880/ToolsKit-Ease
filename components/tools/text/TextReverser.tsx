"use client";

import React, { useState } from "react";
import { LabeledTextarea } from "@/components/shared/LabeledTextarea";
import { LabeledSelect } from "@/components/shared/LabeledSelect";
import { ResultCard } from "@/components/shared/ResultCard";
import { CopyButton } from "@/components/shared/CopyButton";
import { reverseText, reverseWordOrder } from "@/lib/textUtils";

export default function TextReverser() {
  const [text, setText] = useState("");
  const [reverseMode, setReverseMode] = useState("characters");

  const result = reverseMode === "characters" ? reverseText(text) : reverseWordOrder(text);

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
          label="Reverse mode"
          value={reverseMode}
          onChange={setReverseMode}
          options={[
            { label: "Reverse characters", value: "characters" },
            { label: "Reverse word order", value: "words" },
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
