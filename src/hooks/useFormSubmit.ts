'use client'

import { useState } from 'react'

interface UseFormSubmitOptions {
  url: string
  onSuccess?: () => void
  onError?: (error: string) => void
}

interface UseFormSubmitReturn {
  submit: (data: Record<string, unknown>) => Promise<void>
  loading: boolean
  success: boolean
  error: string | null
  reset: () => void
}

export function useFormSubmit({ url, onSuccess, onError }: UseFormSubmitOptions): UseFormSubmitReturn {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (data: Record<string, unknown>) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error?.message || 'Щось пішло не так')
      }

      setSuccess(true)
      onSuccess?.()
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Щось пішло не так'
      setError(message)
      onError?.(message)
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setSuccess(false)
    setError(null)
  }

  return { submit, loading, success, error, reset }
}
