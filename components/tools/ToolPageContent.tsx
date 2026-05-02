"use client";

import React from "react";
import { FavoriteButton } from "@/components/shared/FavoriteButton";
import { RecentToolTracker } from "@/components/shared/RecentToolTracker";
import { ToolPageLayout } from "@/components/shared/ToolPageLayout";
import { BreadcrumbItem } from "@/types";

interface ToolPageContentProps {
  breadcrumbs: BreadcrumbItem[];
  toolName: string;
  toolDescription: string;
  categoryName: string;
  slug: string;
  Component: React.ComponentType;
}

export function ToolPageContent({
  breadcrumbs,
  toolName,
  toolDescription,
  categoryName,
  slug,
  Component,
}: ToolPageContentProps) {
  return (
    <>
      <RecentToolTracker slug={slug} />
      <ToolPageLayout
        breadcrumbs={breadcrumbs}
        toolName={toolName}
        toolDescription={toolDescription}
        categoryName={categoryName}
      >
        <div className="flex justify-end mb-4">
          <FavoriteButton slug={slug} />
        </div>
        <Component />
      </ToolPageLayout>
    </>
  );
}
