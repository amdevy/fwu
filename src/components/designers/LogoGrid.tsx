import { Link } from '@/i18n/navigation'
import type { Designer } from '@/lib/types'

export default function LogoGrid({ designers }: { designers: Designer[] }) {
  return (
    <div className="logo-grid">
      {designers.map((d) => (
        <Link key={d.id} href={`/designers/${d.slug}`} className="logo-cell">
          <span className="logo-fallback">{d.brand}</span>
        </Link>
      ))}
    </div>
  )
}
