"use client"

import React, { useState } from "react"
import { FileDropzone } from "@/components/shared/FileDropzone"
import { ResultCard } from "@/components/shared/ResultCard"
import { formatBytes } from "@/lib/fileUtils"

export default function FileSizeCalculator() {
  const [files, setFiles] = useState<File[]>([])

  const totalSize = files.reduce((sum, file) => sum + file.size, 0)

  return (
    <>
      <div className="space-y-6">
        <FileDropzone
          onFilesSelected={setFiles}
          multiple
        />
        {files.length > 0 && (
          <>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Selected Files</h3>
              <ul className="space-y-1 text-sm">
                {files.map((file, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-2 border border-neutral-200 dark:border-neutral-700 rounded-md"
                  >
                    <span className="truncate flex-1 mr-2">{file.name}</span>
                    <span className="text-neutral-500">
                      {formatBytes(file.size)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <ResultCard label="Total Size" value={formatBytes(totalSize)} />
          </>
        )}
      </div>
    </>
  )
}
