import React from "react";
import type { Metadata } from "next";
import { SettingsPageContent } from "@/components/settings/SettingsPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Settings",
  description: "Manage your preferences and clear local data",
  path: "/settings",
  noindex: true,
});

export default function SettingsPage() {
  return <SettingsPageContent />;
}
