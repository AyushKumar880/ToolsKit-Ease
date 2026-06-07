"use client";

import React, { useState } from "react";
import { NumberInput } from "@/components/shared/NumberInput";
import { ResultCard } from "@/components/shared/ResultCard";
import { formatNumber } from "@/lib/utils";

export default function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState<string>("");
  const [discount, setDiscount] = useState<string>("");

  let discountAmount = 0, finalPrice = 0;
  if (originalPrice && discount) {
    const numPrice = Number(originalPrice);
    const numDiscount = Number(discount);
    discountAmount = (numDiscount / 100) * numPrice;
    finalPrice = numPrice - discountAmount;
  }

  return (
    <>
      <div className="space-y-6">
        <NumberInput
          label="Original Price"
          value={originalPrice}
          onChange={setOriginalPrice}
          min={0}
          step={0.01}
        />
        <NumberInput
          label="Discount (%)"
          value={discount}
          onChange={setDiscount}
          min={0}
          max={100}
          step={0.01}
        />
      </div>

      <div className="space-y-4">
        {originalPrice && discount && (
          <>
            <ResultCard label="Discount Amount" value={formatNumber(discountAmount, 2)} />
            <ResultCard label="Final Price" value={formatNumber(finalPrice, 2)} />
          </>
        )}
      </div>
    </>
  );
}
