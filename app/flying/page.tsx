import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Flying',
  description: 'Hampton Roads Helicopters provides helicopter charter, aerial tours, special events, and flight training. Based at Hampton Roads Executive Airport, Chesapeake VA.',
}

const HRH = 'https://hrheli.com/wp-content/uploads'

const flyingServices = [
  {
    title:    'Helicopter Charter',
    desc:     'Door-to-door private helicopter transport anywhere on the East Coast. FAA Part 135 certified. DC in 90 minutes, Outer Banks in 40.',
    href:     '/charter',
    photo:    `${HRH}/2026/02/MH-Photo-2-628GB-scaled.jpg`,
    photoAlt: 'View from HRH cockpit over Hampton Roads',
  },
  {
    title:    'Aerial Tours',
    desc:     'The number one aerial tour provider in the Hampton Roads area. Virginia Beach, Norfolk, James River, Dismal Swamp, and seasonal tours.',
    href:     '/tours',
    photo:    `${HRH}/2023/11/va-beach-e1503884359166.jpg`,
    photoAlt: 'Aerial view of Virginia Beach',
  },
  {
    title:    'Special Events',
    desc:     'Golf ball drops, gender reveals, wedding flights, charity events. Let HRH add an unforgettable helicopter experience to your next event.',
    href:     '/flying/special-events',
    photo:    `${HRH}/2023/11/129WM-DH-DShoals-Light-11-2012-scaled.jpg`,
    photoAlt: 'HRH helicopter at special event',
  },
  {
    title:    'Flight Training',
    desc:     'FAA Part 61 helicopter training from Private Pilot through ATP. Robinson fleet, factory-authorized instructors, 40+ years serving aviation training.',
    href:     '/training',
    photo:    `${HRH}/2026/02/FuturePilot-scaled.jpg`,
    photoAlt: 'HRH flight training',
  },
]

export default function FlyingPage() {
  return (
    <>
      <PageHero
        eyebrow="Flying"
        headline="Meeting all your helicopter flying needs."
        subhead="Charter, tours, special events, and flight training — operated from Hampton Roads Executive Airport and serving the entire East Coast."
        photo={`${HRH}/2026/02/MH-Photo-3-ICE-scaled.jpg`}
        photoAlt="HRH Pilatus cockpit view"
      />

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <p className="eyebrow mb-8">Our Flying Services</p>
              <h2 className="font-display text-display-md text-ink mb-8">
                One operation.<br />
                <em className="not-italic text-stone">Every mission.</em>
              </h2>
            </div>
            <div className="lg:pt-16">
              <p className="font-body text-ink/70 text-lg leading-relaxed mb-5">
                Hampton Roads Helicopters provides a full range of helicopter flight services —
                from private charter and sightseeing tours to special event support and professional
                flight instruction. All flying operations are conducted in Robinson R-22, R-44, and
                R-66 helicopters.
              </p>
              <p className="font-body text-ink/70 text-lg leading-relaxed">
                HRH is affiliated with Hampton Roads Charter Service (Certificate #H4RA894W)
                to provide FAA Part 135 certified charter services in the Hampton Roads area and
                wherever our customers' needs take us — up and down the East Coast, across the
                U.S., and internationally.
              </p>
            </div>
          </div>

          {/* Service panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule">
            {flyingServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block relative overflow-hidden"
              >
                {/* Photo */}
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src={service.photo}
                    alt={service.photoAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Label overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide mb-2">
                      {service.title}
                    </h3>
                    <p className="font-body text-white/65 text-sm leading-relaxed max-w-sm">
                      {service.desc}
                    </p>
                    <div className="mt-4 font-mono text-xs text-white/50 tracking-wider
                                    group-hover:text-white transition-colors duration-200">
                      Learn more →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cockpit photo break */}
      <section className="relative h-[40vh] min-h-[280px] overflow-hidden">
        <Image
          src={`${HRH}/2026/02/MH-Photo-2-628GB-scaled.jpg`}
          alt="View from HRH cockpit over Hampton Roads"
          fill className="object-cover object-center" unoptimized
        />
        <div className="absolute inset-0 bg-navy-dark/40" />
        <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-16">
          <p className="font-mono text-xs text-white/35 tracking-widest uppercase">
            HRH · Hampton Roads · Virginia Tidewater
          </p>
        </div>
      </section>

      {/* Service area */}
      <section className="py-20 bg-white border-t border-rule">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Service Area</p>
              <h2 className="font-display text-display-sm text-ink mb-5">
                Hampton Roads and far beyond.
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed">
                Ideally located at Hampton Roads Executive Airport, HRH serves the entire
                Virginia Tidewater — Chesapeake, Suffolk, Norfolk, Portsmouth, Virginia Beach,
                Hampton, and Newport News. Our capabilities extend up and down the entire
                East Coast, across the U.S., and internationally to Canada, Mexico, Central
                and South America, Europe, Russia, and the Pacific.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/contact" className="btn-dark px-8 py-3">Book a Flight →</Link>
              <a href="tel:17574889044" className="btn-outline-dark px-8 py-3 text-center">
                757-488-9044
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
