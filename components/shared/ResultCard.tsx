import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "./CopyButton";

interface ResultCardProps {
  label: string;
  value: string | number;
  unit?: string;
}

export function ResultCard({ label, value, unit }: ResultCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{label}</CardTitle>
        <CopyButton text={String(value)} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {value}
          {unit && <span className="text-muted-foreground ml-2">{unit}</span>}
        </div>
      </CardContent>
    </Card>
  );
}
