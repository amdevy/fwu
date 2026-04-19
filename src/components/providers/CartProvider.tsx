'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type CartLine = {
  key: string
  productId: string
  size: string
  qty: number
}

type Ctx = {
  cart: CartLine[]
  cartCount: number
  add: (productId: string, size: string, qty?: number) => void
  remove: (key: string) => void
  setQty: (key: string, qty: number) => void
  clear: () => void
  toast: string | null
  showToast: (msg: string) => void
}

const CartContext = createContext<Ctx | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([])
  const [toast, setToast] = useState<string | null>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('fw_cart')
      if (raw) setCart(JSON.parse(raw))
    } catch {}
  }, [])

  useEffect(() => {
    localStorage.setItem('fw_cart', JSON.stringify(cart))
  }, [cart])

  const add: Ctx['add'] = (productId, size, qty = 1) => {
    const k = `${productId}-${size}`
    setCart((prev) => {
      const ex = prev.find((x) => x.key === k)
      if (ex) return prev.map((x) => (x.key === k ? { ...x, qty: x.qty + qty } : x))
      return [...prev, { key: k, productId, size, qty }]
    })
  }

  const showToast: Ctx['showToast'] = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 3000)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount: cart.reduce((a, b) => a + b.qty, 0),
        add,
        remove: (key) => setCart((prev) => prev.filter((x) => x.key !== key)),
        setQty: (key, qty) =>
          setCart((prev) => prev.map((x) => (x.key === key ? { ...x, qty: Math.max(1, qty) } : x))),
        clear: () => setCart([]),
        toast,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
