import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Fashion West Ukraine'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/** Editorial photo — brand palette; lives in `public/`. */
const PREVIEW_BG = join(process.cwd(), 'public', 'fwu-editorial-brand-palette.png')

const paper = '#f5f5f4'

const bodoniNormal = fetch(
  'https://fonts.gstatic.com/s/bodonimoda/v28/aFT67PxzY382XsXX63LUYL6GYFcan6NJrKp-VPjfJMShrpsGFUt8oXzawIA.ttf',
).then((r) => r.arrayBuffer())

export default async function Image() {
  const [bodoniN, bgBuf] = await Promise.all([bodoniNormal, readFile(PREVIEW_BG)])
  const bgSrc = `data:image/png;base64,${bgBuf.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
        }}
      >
        <img
          alt=""
          src={bgSrc}
          width={1200}
          height={630}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background:
              'linear-gradient(180deg, rgba(26, 31, 27, 0.35) 0%, rgba(26, 31, 27, 0.72) 100%)',
          }}
        >
          <div
            style={{
              fontFamily: '"Bodoni Moda", serif',
              fontSize: 76,
              fontWeight: 500,
              letterSpacing: -2,
              lineHeight: 1.05,
              color: paper,
              textAlign: 'center',
              padding: '0 56px',
            }}
          >
            Fashion West Ukraine
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Bodoni Moda', data: bodoniN, style: 'normal', weight: 500 }],
    },
  )
}
