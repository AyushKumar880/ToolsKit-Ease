"use client";

import React, { useState } from "react";
import { LabeledTextarea } from "@/components/shared/LabeledTextarea";
import { LabeledSelect } from "@/components/shared/LabeledSelect";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/shared/CopyButton";

export default function UrlEncoderDecoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode");
  const [error, setError] = useState<string | null>(null);

  const handleConvert = () => {
    setError(null);
    try {
      if (mode === "encode") {
        setOutput(encodeURIComponent(input));
      } else {
        setOutput(decodeURIComponent(input));
      }
    } catch (e: any) {
      setError(`Invalid ${mode === "decode" ? "URL encoded" : "input"}: ${e.message}`);
      setOutput("");
    }
  };

  return (
    <>
      <div className="space-y-4">
        <LabeledTextarea
          label="Input"
          value={input}
          onChange={setInput}
          placeholder="Enter text to encode or URL encoded string to decode..."
          rows={10}
        />
        <div className="flex flex-col sm:flex-row gap-2">
          <LabeledSelect
            label="Mode"
            value={mode}
            onChange={setMode}
            options={[
              { label: "Encode", value: "encode" },
              { label: "Decode", value: "decode" },
            ]}
          />
          <div className="flex sm:ml-auto">
            <Button onClick={handleConvert} className="w-full sm:w-auto">
              Convert
            </Button>
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
