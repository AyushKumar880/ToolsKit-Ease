"use client"

import React, { useState, useRef, useEffect } from "react"
import { FileDropzone } from "@/components/shared/FileDropzone"
import { NumberInput } from "@/components/shared/NumberInput"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { loadImageFromFile, canvasToBlob, downloadBlob } from "@/lib/fileUtils"

// First, create LabeledCheckbox component since we don't have that yet
function LabeledCheckbox({
  label,
  checked,
  onChange,
}: {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id="aspect-ratio"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4"
      />
      <Label htmlFor="aspect-ratio">{label}</Label>
    </div>
  )
}

export default function ImageResizer() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [maintainAspect, setMaintainAspect] = useState(true)
  const [resultBlob, setResultBlob] = useState<Blob | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
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
    setWidth(img.width.toString())
    setHeight(img.height.toString())
  }

  const handleWidthChange = (val: string) => {
    setWidth(val)
    if (maintainAspect && image) {
      const aspect = image.width / image.height
      const newHeight = Math.round(parseInt(val) / aspect)
      setHeight(newHeight.toString())
    }
  }

  const handleHeightChange = (val: string) => {
    setHeight(val)
    if (maintainAspect && image) {
      const aspect = image.width / image.height
      const newWidth = Math.round(parseInt(val) * aspect)
      setWidth(newWidth.toString())
    }
  }

  const handleResize = async () => {
    if (!image || !canvasRef.current) return
    const w = parseInt(width) || image.width
    const h = parseInt(height) || image.height
    const canvas = canvasRef.current
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    ctx.drawImage(image, 0, 0, w, h)
    const blob = await canvasToBlob(canvas, "image/png")
    setResultBlob(blob)
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setPreviewUrl(URL.createObjectURL(blob))
  }

  const handleDownload = () => {
    if (!resultBlob || !selectedFile) return
    const name = selectedFile.name.replace(/\.[^/.]+$/, "")
    downloadBlob(resultBlob, `${name}-resized.png`)
  }

  return (
    <>
      <div className="space-y-6">
        <FileDropzone accept="image/*" onFileSelected={handleFileSelect} />
        {image && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <NumberInput
                label="Width (px)"
                value={width}
                onChange={handleWidthChange}
                min={1}
              />
              <NumberInput
                label="Height (px)"
                value={height}
                onChange={handleHeightChange}
                min={1}
              />
            </div>
            <LabeledCheckbox
              label="Maintain aspect ratio"
              checked={maintainAspect}
              onChange={setMaintainAspect}
            />
            <Button onClick={handleResize} className="w-full">
              Resize Image
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
              Download Resized Image
            </Button>
          </div>
        )}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </>
  )
}
