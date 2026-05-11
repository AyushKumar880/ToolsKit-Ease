"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useUserPreferences } from "@/context/UserPreferencesContext";

export function ClearDataButton() {
  const { clearAllData } = useUserPreferences();
  const [confirming, setConfirming] = useState(false);

  return (
    <div className="space-y-2">
      {!confirming ? (
        <Button
          variant="destructive"
          onClick={() => setConfirming(true)}
        >
          Clear All Local Data
        </Button>
      ) : (
        <div className="flex gap-2">
          <Button
            variant="destructive"
            onClick={() => {
              clearAllData();
              setConfirming(false);
            }}
          >
            Confirm Clear
          </Button>
          <Button
            variant="secondary"
            onClick={() => setConfirming(false)}
          >
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
}
