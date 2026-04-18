"use client";

import React, { useState } from "react";
import { LabeledTextarea } from "@/components/shared/LabeledTextarea";
import { LabeledSelect } from "@/components/shared/LabeledSelect";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/shared/CopyButton";
import { formatJson } from "@/lib/devUtils";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [indent, setIndent] = useState("2");

  const handleFormat = () => {
    const indentNum = indent === "tab" ? -1 : parseInt(indent);
    const res = formatJson(input, indentNum);
    setOutput(res.result);
    setError(res.error);
  };

  const handleMinify = () => {
    const res = formatJson(input, -1);
    setOutput(res.result);
    setError(res.error);
  };

  return (
    <>
      <div className="space-y-4">
        <LabeledTextarea
          label="JSON Input"
          value={input}
          onChange={setInput}
          placeholder='{"key": "value"}'
          rows={10}
        />
        <div className="flex flex-col sm:flex-row gap-2">
          <LabeledSelect
            label="Indentation"
            value={indent}
            onChange={setIndent}
            options={[
              { label: "2 Spaces", value: "2" },
              { label: "4 Spaces", value: "4" },
              { label: "Tab", value: "tab" },
            ]}
          />
          <div className="flex gap-2 sm:ml-auto">
            <Button onClick={handleFormat}>Format</Button>
            <Button onClick={handleMinify}>Minify</Button>
          </div>
        </div>
        {error && (
          <div className="text-red-500 text-sm bg-red-50 dark:bg-red-950/30 p-3 rounded-md">
            {error}
          </div>
        )}
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Result</h3>
          {output && <CopyButton text={output} />}
        </div>
        <LabeledTextarea
          label=""
          value={output}
          onChange={() => {}}
          readOnly
          rows={10}
        />
      </div>
    </>
  );
}
