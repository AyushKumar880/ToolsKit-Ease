"use client";

import React, { useState } from "react";
import { LabeledTextarea } from "@/components/shared/LabeledTextarea";
import { Button } from "@/components/ui/button";
import { ResultCard } from "@/components/shared/ResultCard";
import { CopyButton } from "@/components/shared/CopyButton";
import { removeDuplicateLines } from "@/lib/textUtils";

export default function DuplicateLineRemover() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleRemove = () => {
    setResult(removeDuplicateLines(text));
  };

  const originalLineCount = text ? text.split("\n").length : 0;
  const resultLineCount = result ? result.split("\n").length : 0;
  const linesRemoved = originalLineCount - resultLineCount;

  return (
    <>
      <div className="space-y-4">
        <LabeledTextarea
          label="Enter your text (one item per line)"
          value={text}
          onChange={setText}
          placeholder="Type or paste your text here..."
          rows={12}
        />
        <Button onClick={handleRemove} className="w-full">
          Remove Duplicate Lines
        </Button>
      </div>

      <div className="mt-6 space-y-2">
        {linesRemoved > 0 && (
          <div className="text-sm text-muted-foreground">
            Removed {linesRemoved} duplicate line{linesRemoved !== 1 ? "s" : ""}
          </div>
        )}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Result</h3>
          {result && <CopyButton text={result} />}
        </div>
        {result && <ResultCard label="" value={result} />}
      </div>
    </>
  );
}
