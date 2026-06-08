"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function BasicCalculator() {
  const [display, setDisplay] = useState<string>("0");
  const [prev, setPrev] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const handleDot = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleOperator = (op: string) => {
    const current = parseFloat(display);
    if (prev !== null && operator) {
      const result = calculate(prev, current, operator);
      setDisplay(result.toString());
      setPrev(result);
    } else {
      setPrev(current);
    }
    setOperator(op);
    setWaitingForOperand(true);
  };

  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b !== 0 ? a / b : 0;
      default:
        return b;
    }
  };

  const handleEquals = () => {
    if (prev !== null && operator) {
      const result = calculate(prev, parseFloat(display), operator);
      setDisplay(result.toString());
      setPrev(null);
      setOperator(null);
      setWaitingForOperand(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPrev(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const handleBackspace = () => {
    if (waitingForOperand) return;
    setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-muted rounded-lg p-4 mb-4 text-right">
        <div className="text-3xl font-bold">{display}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <Button variant="secondary" onClick={handleClear}>
          C
        </Button>
        <Button variant="secondary" onClick={handleBackspace}>
          ←
        </Button>
        <Button variant="secondary" onClick={() => handleOperator("/")}>
          /
        </Button>
        <Button variant="secondary" onClick={() => handleOperator("*")}>
          ×
        </Button>
        <Button onClick={() => handleDigit("7")}>7</Button>
        <Button onClick={() => handleDigit("8")}>8</Button>
        <Button onClick={() => handleDigit("9")}>9</Button>
        <Button variant="secondary" onClick={() => handleOperator("-")}>
          -
        </Button>
        <Button onClick={() => handleDigit("4")}>4</Button>
        <Button onClick={() => handleDigit("5")}>5</Button>
        <Button onClick={() => handleDigit("6")}>6</Button>
        <Button variant="secondary" onClick={() => handleOperator("+")}>
          +
        </Button>
        <Button onClick={() => handleDigit("1")}>1</Button>
        <Button onClick={() => handleDigit("2")}>2</Button>
        <Button onClick={() => handleDigit("3")}>3</Button>
        <Button variant="secondary" onClick={handleEquals} className="col-span-1">
          =
        </Button>
        <Button onClick={() => handleDigit("0")} className="col-span-2">
          0
        </Button>
        <Button onClick={handleDot}>.</Button>
      </div>
    </div>
  );
}
