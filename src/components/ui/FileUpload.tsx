'use client'

import { cn } from '@/lib/utils'
import { Upload, X } from 'lucide-react'
import { useRef, useState } from 'react'

interface FileUploadProps {
  label?: string
  error?: string
  accept?: string
  multiple?: boolean
  maxFiles?: number
  maxSizeMB?: number
  onChange?: (files: File[]) => void
}

export function FileUpload({
  label,
  error,
  accept = 'image/*,.pdf',
  multiple = false,
  maxFiles = 5,
  maxSizeMB = 5,
  onChange,
}: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([])
  const [localError, setLocalError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return
    setLocalError(null)

    const fileArray = Array.from(newFiles)

    if (files.length + fileArray.length > maxFiles) {
      setLocalError(`Максимум ${maxFiles} файлів`)
      return
    }

    const maxBytes = maxSizeMB * 1024 * 1024
    const oversized = fileArray.find((f) => f.size > maxBytes)
    if (oversized) {
      setLocalError(`Файл "${oversized.name}" перевищує ${maxSizeMB}MB`)
      return
    }

    const updated = [...files, ...fileArray]
    setFiles(updated)
    onChange?.(updated)
  }

  const removeFile = (index: number) => {
    const updated = files.filter((_, i) => i !== index)
    setFiles(updated)
    onChange?.(updated)
  }

  const displayError = error || localError

  return (
    <div className="w-full">
      {label && <p className="mb-1.5 text-sm font-medium text-black">{label}</p>}
      <div
        onClick={() => inputRef.current?.click()}
        className={cn(
          'flex cursor-pointer flex-col items-center justify-center border border-dashed px-4 py-8 transition-colors duration-200 hover:border-wine hover:bg-wine/5',
          displayError ? 'border-wine' : 'border-light-gray'
        )}
      >
        <Upload className="mb-2 h-6 w-6 text-sage" />
        <p className="text-sm text-sage">Натисніть для завантаження</p>
        <p className="mt-1 text-xs text-sage">Максимум {maxSizeMB}MB на файл</p>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />
      </div>

      {files.length > 0 && (
        <div className="mt-2 space-y-1">
          {files.map((file, i) => (
            <div key={i} className="flex items-center justify-between bg-sand/30 px-3 py-1.5 text-sm">
              <span className="truncate">{file.name}</span>
              <button type="button" onClick={() => removeFile(i)} className="ml-2 text-sage hover:text-wine">
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {displayError && <p className="mt-1 text-xs text-wine">{displayError}</p>}
    </div>
  )
}
