export function countWords(text: string): number {
  if (!text.trim()) return 0;
  return text.split(/\s+/).filter(word => word.length > 0).length;
}

export function countCharacters(text: string, includeSpaces: boolean = true): number {
  if (!text) return 0;
  if (includeSpaces) {
    return text.length;
  } else {
    return text.replace(/\s/g, "").length;
  }
}

export function countSentences(text: string): number {
  if (!text.trim()) return 0;
  return text.split(/[.!?]/).filter(sentence => sentence.trim().length > 0).length;
}

export function countParagraphs(text: string): number {
  if (!text.trim()) return 0;
  return text.split(/\n\n+/).filter(para => para.trim().length > 0).length;
}

export function toTitleCase(text: string): string {
  return text.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}

export function toCamelCase(text: string): string {
  return text
    .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : "")
    .replace(/^[A-Z]/, c => c.toLowerCase());
}

export function toSnakeCase(text: string): string {
  return text
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[-_\s]+/g, "_")
    .toLowerCase();
}

export function toKebabCase(text: string): string {
  return text
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[-_\s]+/g, "-")
    .toLowerCase();
}

export function reverseText(text: string): string {
  return text.split("").reverse().join("");
}

export function reverseWordOrder(text: string): string {
  return text.split(/\s+/).reverse().join(" ");
}

export function removeDuplicateLines(text: string): string {
  if (!text) return "";
  const lines = text.split("\n");
  const seen = new Set<string>();
  const result: string[] = [];
  
  for (const line of lines) {
    if (!seen.has(line)) {
      seen.add(line);
      result.push(line);
    }
  }
  
  return result.join("\n");
}

const LOREM_WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea",
  "commodo", "consequat", "duis", "aute", "irure", "dolor", "in", "reprehenderit",
  "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla",
  "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident",
  "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"
];

export function generateLoremIpsum(paragraphs: number, wordsPerParagraph: number): string {
  const result: string[] = [];
  let wordIndex = 0;

  for (let p = 0; p < paragraphs; p++) {
    const paraWords: string[] = [];
    for (let w = 0; w < wordsPerParagraph; w++) {
      paraWords.push(LOREM_WORDS[wordIndex % LOREM_WORDS.length]);
      wordIndex++;
    }
    let para = paraWords.join(" ");
    para = para.charAt(0).toUpperCase() + para.slice(1);
    if (para) para += ".";
    result.push(para);
  }

  return result.join("\n\n");
}
