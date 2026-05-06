"use client"

import React, { useState, useRef } from "react"
import { Upload } from "lucide-react"
import { Label } from "@/components/ui/label"
import { formatBytes } from "@/lib/fileUtils"

interface FileDropzoneProps {
  accept?: string
  onFileSelected?: (file: File) => void
  onFilesSelected?: (files: File[]) => void
  multiple?: boolean
}

export function FileDropzone({
  accept,
  onFileSelected,
  onFilesSelected,
  multiple = false,
}: FileDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = Array.from(e.dataTransfer.files)
    if (multiple) {
      setSelectedFiles(files)
      onFilesSelected?.(files)
    } else if (files.length > 0) {
      setSelectedFile(files[0])
      onFileSelected?.(files[0])
    }
  }

  const handleClick = () => {
    inputRef.current?.click()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (multiple) {
      setSelectedFiles(files)
      onFilesSelected?.(files)
    } else if (files.length > 0) {
      setSelectedFile(files[0])
      onFileSelected?.(files[0])
    }
  }

  return (
    <div className="space-y-2">
      <Label>Select File{multiple ? "s" : ""}</Label>
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${
          isDragging
            ? "border-blue-500 bg-blue-50 dark:bg-blue-950/30"
            : "border-neutral-300 dark:border-neutral-700 hover:border-blue-400"
        }`}
      >
        <Upload className="h-10 w-10 text-neutral-400" />
        <p className="text-sm text-neutral-500">
          Drag & drop here, or click to browse
        </p>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          className="hidden"
        />
      </div>
      {multiple && selectedFiles.length > 0 && (
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          Selected {selectedFiles.length} file{selectedFiles.length !== 1 ? "s" : ""}
        </div>
      )}
      {!multiple && selectedFile && (
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          Selected: {selectedFile.name} ({formatBytes(selectedFile.size)})
        </div>
      )}
    </div>
  )
}
