"use client";

import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ResultCard } from "@/components/shared/ResultCard";
import { CopyButton } from "@/components/shared/CopyButton";
import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb } from "@/lib/devUtils";

export default function ColorConverter() {
  const [hex, setHex] = useState("#3b82f6");
  const [rgb, setRgb] = useState({ r: 59, g: 130, b: 246 });
  const [hsl, setHsl] = useState({ h: 217, s: 91, l: 60 });

  // Sync RGB/HSL when HEX changes
  useEffect(() => {
    const newRgb = hexToRgb(hex);
    if (newRgb) {
      setRgb(newRgb);
      setHsl(rgbToHsl(newRgb.r, newRgb.g, newRgb.b));
    }
  }, [hex]);

  const handleHexChange = (val: string) => {
    setHex(val);
  };

  const handleRgbChange = (rStr: string, gStr: string, bStr: string) => {
    const r = parseInt(rStr) || 0;
    const g = parseInt(gStr) || 0;
    const b = parseInt(bStr) || 0;
    const newRgb = { r, g, b };
    setRgb(newRgb);
    setHex(rgbToHex(r, g, b));
    setHsl(rgbToHsl(r, g, b));
  };

  const handleHslChange = (hStr: string, sStr: string, lStr: string) => {
    const h = parseInt(hStr) || 0;
    const s = parseInt(sStr) || 0;
    const l = parseInt(lStr) || 0;
    const newHsl = { h, s, l };
    setHsl(newHsl);
    const newRgb = hslToRgb(h, s, l);
    setRgb(newRgb);
    setHex(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
  };

  const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const hslString = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div
            className="w-24 h-24 rounded-lg border border-gray-200 dark:border-gray-700"
            style={{ backgroundColor: hex }}
          />
          <div className="flex-1">
            <Label htmlFor="color-picker">Pick a color</Label>
            <Input
              id="color-picker"
              type="color"
              value={hex}
              onChange={(e) => handleHexChange(e.target.value)}
              className="h-10 p-1"
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="hex-input">HEX</Label>
          <div className="flex gap-2">
            <Input
              id="hex-input"
              value={hex}
              onChange={(e) => handleHexChange(e.target.value)}
              placeholder="#000000"
            />
            <CopyButton text={hex} />
          </div>
        </div>

        <div className="space-y-3">
          <Label>RGB</Label>
          <div className="flex gap-2 items-center">
            <div className="flex-1 grid grid-cols-3 gap-2">
              <Input
                type="number"
                min="0"
                max="255"
                value={rgb.r}
                onChange={(e) =>
                  handleRgbChange(e.target.value, rgb.g.toString(), rgb.b.toString())
                }
                placeholder="R"
              />
              <Input
                type="number"
                min="0"
                max="255"
                value={rgb.g}
                onChange={(e) =>
                  handleRgbChange(rgb.r.toString(), e.target.value, rgb.b.toString())
                }
                placeholder="G"
              />
              <Input
                type="number"
                min="0"
                max="255"
                value={rgb.b}
                onChange={(e) =>
                  handleRgbChange(rgb.r.toString(), rgb.g.toString(), e.target.value)
                }
                placeholder="B"
              />
            </div>
            <CopyButton text={rgbString} />
          </div>
          <ResultCard label="" value={rgbString} />
        </div>

        <div className="space-y-3">
          <Label>HSL</Label>
          <div className="flex gap-2 items-center">
            <div className="flex-1 grid grid-cols-3 gap-2">
              <Input
                type="number"
                min="0"
                max="360"
                value={hsl.h}
                onChange={(e) =>
                  handleHslChange(e.target.value, hsl.s.toString(), hsl.l.toString())
                }
                placeholder="H"
              />
              <Input
                type="number"
                min="0"
                max="100"
                value={hsl.s}
                onChange={(e) =>
                  handleHslChange(hsl.h.toString(), e.target.value, hsl.l.toString())
                }
                placeholder="S"
              />
              <Input
                type="number"
                min="0"
                max="100"
                value={hsl.l}
                onChange={(e) =>
                  handleHslChange(hsl.h.toString(), hsl.s.toString(), e.target.value)
                }
                placeholder="L"
              />
            </div>
            <CopyButton text={hslString} />
          </div>
          <ResultCard label="" value={hslString} />
        </div>
      </div>
    </>
  );
}
