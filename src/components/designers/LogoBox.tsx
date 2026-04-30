'use client'

import { useState } from 'react'

type Shape = 'square' | 'wide' | 'tall'

export default function LogoBox({ src, brand }: { src?: string; brand: string }) {
  const [failed, setFailed] = useState(false)
  const [shape, setShape] = useState<Shape>('square')

  if (!src || failed) {
    return (
      <div className="logo-box logo-box-fallback">
        <span>{brand}</span>
      </div>
    )
  }
  return (
    <div className={`logo-box logo-box-${shape}`}>
      <img
        src={src}
        alt={brand}
        onLoad={(e) => {
          const img = e.currentTarget
          const r = img.naturalWidth / img.naturalHeight
          setShape(r > 1.4 ? 'wide' : r < 0.75 ? 'tall' : 'square')
        }}
        onError={() => setFailed(true)}
      />
    </div>
  )
}
