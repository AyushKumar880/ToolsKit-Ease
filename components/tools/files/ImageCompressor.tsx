"use client"

import React, { useState, useRef, useEffect } from "react"
import { FileDropzone } from "@/components/shared/FileDropzone"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ResultCard } from "@/components/shared/ResultCard"
import {
  formatBytes,
  loadImageFromFile,
  canvasToBlob,
  downloadBlob,
} from "@/lib/fileUtils"

export default function ImageCompressor() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [quality, setQuality] = useState([0.8])
  const [compressedBlob, setCompressedBlob] = useState<Blob | null>(null)
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
    setCompressedBlob(null)
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setPreviewUrl(null)
    const img = await loadImageFromFile(file)
    setImage(img)
  }

  const handleCompress = async () => {
    if (!image || !canvasRef.current) return
    const canvas = canvasRef.current
    canvas.width = image.width
    canvas.height = image.height
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    ctx.drawImage(image, 0, 0)
    const blob = await canvasToBlob(canvas, "image/jpeg", quality[0])
    setCompressedBlob(blob)
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setPreviewUrl(URL.createObjectURL(blob))
  }

  const handleDownload = () => {
    if (!compressedBlob || !selectedFile) return
    const name = selectedFile.name.replace(/\.[^/.]+$/, "")
    downloadBlob(compressedBlob, `${name}-compressed.jpg`)
  }

  return (
    <>
      <div className="space-y-6">
        <FileDropzone accept="image/*" onFileSelected={handleFileSelect} />
        {image && (
          <>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label>Quality: {Math.round(quality[0] * 100)}%</Label>
              </div>
              <Slider
                value={quality}
                onValueChange={setQuality}
                min={0.1}
                max={1}
                step={0.05}
              />
            </div>
            <Button onClick={handleCompress} className="w-full">
              Compress Image
            </Button>
          </>
        )}
        {selectedFile && compressedBlob && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResultCard
              label="Original Size"
              value={formatBytes(selectedFile.size)}
            />
            <ResultCard
              label="Compressed Size"
              value={formatBytes(compressedBlob.size)}
            />
          </div>
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
              Download Compressed Image
            </Button>
          </div>
        )}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </>
  )
}
