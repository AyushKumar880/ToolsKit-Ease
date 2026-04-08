"use client";

import React, { useState } from "react";
import { NumberInput } from "@/components/shared/NumberInput";
import { Button } from "@/components/ui/button";
import { ResultCard } from "@/components/shared/ResultCard";
import { CopyButton } from "@/components/shared/CopyButton";
import { generateLoremIpsum } from "@/lib/textUtils";

export default function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState("3");
  const [wordsPerParagraph, setWordsPerParagraph] = useState("50");
  const [result, setResult] = useState("");

  const handleGenerate = () => {
    const paraCount = parseInt(paragraphs) || 1;
    const wordCount = parseInt(wordsPerParagraph) || 10;
    setResult(generateLoremIpsum(paraCount, wordCount));
  };

  return (
    <>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NumberInput
            label="Number of paragraphs"
            value={paragraphs}
            onChange={setParagraphs}
            min={1}
            max={20}
            step={1}
          />
          <NumberInput
            label="Words per paragraph"
            value={wordsPerParagraph}
            onChange={setWordsPerParagraph}
            min={5}
            max={200}
            step={5}
          />
        </div>
        <Button onClick={handleGenerate} className="w-full">
          Generate Lorem Ipsum
        </Button>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Result</h3>
          {result && <CopyButton text={result} />}
        </div>
        {result && <ResultCard label="" value={result} />}
      </div>
    </>
  );
}
