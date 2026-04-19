'use client'

import { useCart } from '@/components/providers/CartProvider'

export function Toast() {
  const { toast } = useCart()
  if (!toast) return null
  return <div className="toast">{toast}</div>
}
