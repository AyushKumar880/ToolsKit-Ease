"use client";

import React, { useState } from "react";
import { NumberInput } from "@/components/shared/NumberInput";
import { Button } from "@/components/ui/button";
import { LabeledTextarea } from "@/components/shared/LabeledTextarea";
import { CopyButton } from "@/components/shared/CopyButton";
import { generateUuidV4 } from "@/lib/devUtils";

export default function UuidGenerator() {
  const [count, setCount] = useState("5");
  const [uuids, setUuids] = useState<string[]>([]);

  const handleGenerate = () => {
    const num = Math.min(Math.max(parseInt(count) || 1, 1), 50);
    const newUuids: string[] = [];
    for (let i = 0; i < num; i++) {
      newUuids.push(generateUuidV4());
    }
    setUuids(newUuids);
  };

  const uuidsString = uuids.join("\n");

  return (
    <>
      <div className="space-y-4">
        <NumberInput
          label="Number of UUIDs (1-50)"
          value={count}
          onChange={setCount}
          min={1}
          max={50}
          step={1}
        />
        <Button onClick={handleGenerate} className="w-full">
          Generate UUIDs
        </Button>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Generated UUIDs</h3>
          {uuids.length > 0 && <CopyButton text={uuidsString} />}
        </div>
        <LabeledTextarea
          label=""
          value={uuidsString}
          onChange={() => {}}
          readOnly
          rows={10}
        />
      </div>
    </>
  );
}
