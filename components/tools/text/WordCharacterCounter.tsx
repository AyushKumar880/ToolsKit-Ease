"use client";

import React, { useState } from "react";
import { LabeledTextarea } from "@/components/shared/LabeledTextarea";
import { ResultCard } from "@/components/shared/ResultCard";
import { LabeledSelect } from "@/components/shared/LabeledSelect";
import { countWords, countCharacters, countSentences, countParagraphs } from "@/lib/textUtils";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";

export default function WordCharacterCounter() {
  const [text, setText] = useState("");
  const [includeSpaces, setIncludeSpaces] = useState("yes");
  const debouncedText = useDebouncedValue(text, 300);

  const wordCount = countWords(debouncedText);
  const charCount = countCharacters(debouncedText, includeSpaces === "yes");
  const sentenceCount = countSentences(debouncedText);
  const paragraphCount = countParagraphs(debouncedText);

  return (
    <>
      <div className="space-y-4">
        <LabeledTextarea
          label="Enter your text"
          value={text}
          onChange={setText}
          placeholder="Type or paste your text here..."
          showCounts
        />
        <LabeledSelect
          label="Include spaces in character count"
          value={includeSpaces}
          onChange={setIncludeSpaces}
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <ResultCard label="Words" value={wordCount} />
        <ResultCard label="Characters" value={charCount} />
        <ResultCard label="Sentences" value={sentenceCount} />
        <ResultCard label="Paragraphs" value={paragraphCount} />
      </div>
    </>
  );
}
