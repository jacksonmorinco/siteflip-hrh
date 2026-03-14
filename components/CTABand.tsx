import Link from 'next/link'

interface CTABandProps {
  headline: string
  subhead?: string
  buttonText?: string
  buttonHref?: string
}

export default function CTABand({ headline, subhead, buttonText = 'Get in Touch', buttonHref = '/contact' }: CTABandProps) {
  return (
    <section className="py-20 bg-white border-t border-rule">
      <div className="section-inner">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-display text-display-sm text-ink mb-3">{headline}</h2>
            {subhead && <p className="font-body text-ink/55 text-base leading-relaxed">{subhead}</p>}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href={buttonHref} className="btn-dark px-8 py-3">{buttonText} →</Link>
            <a href="tel:17574889044" className="btn-outline-dark px-8 py-3 text-center">757-488-9044</a>
          </div>
        </div>
      </div>
    </section>
  )
}
