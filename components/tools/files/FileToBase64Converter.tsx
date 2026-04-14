"use client"

import React, { useState } from "react"
import { FileDropzone } from "@/components/shared/FileDropzone"
import { LabeledTextarea } from "@/components/shared/LabeledTextarea"
import { CopyButton } from "@/components/shared/CopyButton"

export default function FileToBase64Converter() {
  const [base64, setBase64] = useState("")

  const handleFileSelect = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      setBase64(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  return (
    <>
      <div className="space-y-6">
        <FileDropzone accept="*" onFileSelected={handleFileSelect} />
        <p className="text-xs text-neutral-500">
          Note: Very large files will produce very long Base64 strings.
        </p>
        {base64 && (
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium">Base64 Result</h3>
              <CopyButton text={base64} />
            </div>
            <LabeledTextarea
              label=""
              value={base64}
              onChange={() => {}}
              readOnly
              rows={10}
            />
          </div>
        )}
      </div>
    </>
  )
}
