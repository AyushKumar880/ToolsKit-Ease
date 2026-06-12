import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { ToolHeader } from "./ToolHeader";
import { BreadcrumbItem } from "@/types";

interface ToolPageLayoutProps {
  breadcrumbs: BreadcrumbItem[];
  toolName: string;
  toolDescription: string;
  categoryName: string;
  children: React.ReactNode;
  aboutSection?: React.ReactNode;
}

export function ToolPageLayout({
  breadcrumbs,
  toolName,
  toolDescription,
  categoryName,
  children,
  aboutSection,
}: ToolPageLayoutProps) {
  return (
    <div className="container py-10">
      <Breadcrumbs items={breadcrumbs} />
      <ToolHeader
        name={toolName}
        description={toolDescription}
        categoryName={categoryName}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {children}
      </div>
      {aboutSection && (
        <div className="mt-12 pt-8 border-t">{aboutSection}</div>
      )}
    </div>
  );
}
