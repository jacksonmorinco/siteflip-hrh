import Image from 'next/image'

interface PageHeroProps {
  eyebrow?: string
  headline: string
  subhead?: string
  photo?: string
  photoAlt?: string
  photoPosition?: string
}

export default function PageHero({
  eyebrow, headline, subhead,
  photo, photoAlt = '', photoPosition = 'object-center'
}: PageHeroProps) {
  return (
    <section className="relative pt-44 pb-20 overflow-hidden bg-navy-dark">
      {photo && (
        <>
          <Image
            src={photo} alt={photoAlt} fill
            className={`object-cover ${photoPosition} opacity-35`}
            unoptimized priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/60 via-navy-dark/50 to-navy-dark/80" />
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/60 to-navy-dark/95 pointer-events-none" />

      <div className="section-inner relative z-10">
        {eyebrow && (
          <p className="font-mono text-xs text-white/35 tracking-[0.2em] uppercase mb-6">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-display-lg text-white mb-5 max-w-3xl">
          {headline}
        </h1>
        {subhead && (
          <p className="font-body text-white/55 text-lg max-w-2xl leading-relaxed">
            {subhead}
          </p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/8" />
    </section>
  )
}
