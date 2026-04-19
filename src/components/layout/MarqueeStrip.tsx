import { getLocale } from 'next-intl/server'

export async function MarqueeStrip() {
  const locale = await getLocale()
  const items =
    locale === 'ua'
      ? [
          'Закарпаття — Львів — Івано-Франківськ — Чернівці',
          'Нова капсула весна / літо',
          '20 дизайнерів у платформі',
          'Fashion West Ukraine — з 2024',
        ]
      : [
          'Transcarpathia — Lviv — Ivano-Frankivsk — Chernivtsi',
          'New spring / summer capsule',
          '20 designers on the platform',
          'Fashion West Ukraine — since 2024',
        ]
  const line = [...items, ...items, ...items, ...items]
  return (
    <div className="strip">
      <div className="strip-track">
        {line.map((x, i) => (
          <span key={i}>{x}</span>
        ))}
      </div>
    </div>
  )
}
