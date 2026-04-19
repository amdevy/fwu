import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Fashion West Ukraine'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0a0a0a',
          color: '#f5f1ea',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, letterSpacing: 4, textTransform: 'uppercase', opacity: 0.7 }}>
          <span>Editorial № —</span>
          <span>UA · EN</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 96, lineHeight: 1, letterSpacing: -2 }}>Fashion West</div>
          <div style={{ fontSize: 96, lineHeight: 1, letterSpacing: -2, fontStyle: 'italic' }}>Ukraine</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, letterSpacing: 4, textTransform: 'uppercase', opacity: 0.7 }}>
          <span>Uzhhorod · Lviv</span>
          <span>fashionwestukraine.com</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
