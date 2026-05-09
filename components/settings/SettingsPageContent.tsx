"use client";

import React from "react";
import { SettingsForm } from "@/components/settings/SettingsForm";

export function SettingsPageContent() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <SettingsForm />
    </div>
  );
}