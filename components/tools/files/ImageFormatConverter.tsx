"use client"

import React, { useState, useRef, useEffect } from "react"
import { FileDropzone } from "@/components/shared/FileDropzone"
import { LabeledSelect } from "@/components/shared/LabeledSelect"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  loadImageFromFile,
  canvasToBlob,
  downloadBlob,
} from "@/lib/fileUtils"

export default function ImageFormatConverter() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [format, setFormat] = useState("png")
  const [resultBlob, setResultBlob] = useState<Blob | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  const handleFileSelect = async (file: File) => {
    setSelectedFile(file)
    setResultBlob(null)
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setPreviewUrl(null)
    const img = await loadImageFromFile(file)
    setImage(img)
  }

  const handleConvert = async () => {
    if (!image || !canvasRef.current) return
    const canvas = canvasRef.current
    canvas.width = image.width
    canvas.height = image.height
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    ctx.drawImage(image, 0, 0)
    const mimeType =
      format === "png"
        ? "image/png"
        : format === "jpeg"
        ? "image/jpeg"
        : "image/webp"
    const blob = await canvasToBlob(canvas, mimeType)
    setResultBlob(blob)
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setPreviewUrl(URL.createObjectURL(blob))
  }

  const handleDownload = () => {
    if (!resultBlob || !selectedFile) return
    const name = selectedFile.name.replace(/\.[^/.]+$/, "")
    downloadBlob(resultBlob, `${name}.${format}`)
  }

  return (
    <>
      <div className="space-y-6">
        <FileDropzone accept="image/*" onFileSelected={handleFileSelect} />
        {image && (
          <>
            <LabeledSelect
              label="Target Format"
              value={format}
              onChange={setFormat}
              options={[
                { label: "PNG", value: "png" },
                { label: "JPEG", value: "jpeg" },
                { label: "WebP", value: "webp" },
              ]}
            />
            <Button onClick={handleConvert} className="w-full">
              Convert Image
            </Button>
          </>
        )}
        {previewUrl && (
          <div className="space-y-2">
            <Label>Preview</Label>
            <img
              src={previewUrl}
              alt="Preview"
              className="max-w-full h-auto rounded-lg border border-neutral-200 dark:border-neutral-700"
            />
            <Button onClick={handleDownload} className="w-full">
              Download Converted Image
            </Button>
          </div>
        )}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </>
  )
}
