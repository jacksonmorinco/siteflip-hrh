import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTABand from '@/components/CTABand'
import { services, team } from '@/data/content'

export const metadata: Metadata = {
  title: 'Helicopter Maintenance',
  description: 'Robinson Factory Authorized Service Center in Chesapeake, Virginia. Scheduled maintenance, field service, and expert Robinson helicopter repair.',
}

const HRH = 'https://hrheli.com/wp-content/uploads'
const patrick = team.find(m => m.name === 'Patrick Hynes')!

export default function MaintenancePage() {
  return (
    <>
      <PageHero
        eyebrow="Maintenance"
        headline="Your Robinson Factory Authorized Service Center."
        subhead="Airline-grade standards. Personal service. On-site at Hampton Roads Executive Airport."
        photo={`${HRH}/2023/11/IMG_3469-scaled.jpg`}
        photoAlt="HRH maintenance hangar"
      />

      <section className="py-24 lg:py-32 bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-8">The Service</p>
              <h2 className="font-display text-display-md text-ink mb-8">
                Airline-grade standards.<br />Personal service.
              </h2>
              <div className="font-body text-ink/70 text-lg leading-[1.9] space-y-5 mb-10">
                <p>HRH's exceptionally skilled technicians take pride in their work and are dedicated to keeping your aircraft flying safely. Whether routine scheduled maintenance at our facility, or on-the-road service calls to help you get back in the air — you can count on HRH for all your Robinson helicopter maintenance needs.</p>
                <p>Director of Maintenance Patrick Hynes brings over a decade of American Airlines experience combined with a lifetime in the industry — he grew up working at Brantly-Hynes Helicopters, served as an Army helicopter maintenance specialist, and ran his own Robinson maintenance company before joining HRH. That background means your aircraft receives the same rigorous standards that keep commercial airliners in the air.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule mb-10">
                {['Scheduled Maintenance','Field Service Calls','Annual Inspections','Component Overhaul','Robinson Service Bulletins','Airworthiness Compliance'].map(s => (
                  <div key={s} className="bg-white p-5 border border-rule">
                    <div className="w-1 h-3 bg-red mb-3" />
                    <div className="font-body font-medium text-sm text-ink">{s}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              {/* Robinson badge */}
              <div className="bg-mist p-8 mb-8">
                <p className="eyebrow mb-4">Certification</p>
                <div className="font-display font-semibold text-lg text-ink mb-4 leading-tight">Robinson Factory Authorized Service Center</div>
                <p className="font-body text-sm text-ink/55 leading-relaxed mb-6">
                  HRH is one of a select number of Robinson Factory Authorized Service Centers in the region.
                  This designation requires meeting Robinson Helicopter Company's strict standards for tools, training, facilities, and technical capability.
                </p>
                <a href="https://www.robinsonheli.com/publications" target="_blank" rel="noopener noreferrer"
                   className="font-mono text-xs text-red tracking-wider hover:text-red-dark transition-colors">
                  Robinson Service Bulletins →
                </a>
              </div>

              {/* DOM */}
              <div className="border border-rule p-6 mb-8">
                <p className="eyebrow mb-5">Director of Maintenance</p>
                <div className="flex gap-5">
                  <div className="relative w-20 h-24 flex-shrink-0 overflow-hidden bg-mist">
                    <Image src={`${HRH}/2023/06/august7-300x225.png`} alt="Patrick Hynes" fill className="object-cover object-top" unoptimized />
                  </div>
                  <div>
                    <div className="font-body font-semibold text-base text-ink">{patrick.name}</div>
                    <div className="font-mono text-[9px] text-red tracking-widest uppercase mt-1 mb-2">{patrick.title}</div>
                    <p className="font-body text-xs text-ink/55 leading-relaxed">{patrick.bio}</p>
                  </div>
                </div>
              </div>

              {/* Photo */}
              <div className="relative aspect-video overflow-hidden">
                <Image src={`${HRH}/2023/11/Maintenance11.jpg`} alt="HRH maintenance work in progress" fill className="object-cover" unoptimized />
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Link href="/contact" className="btn-dark w-full justify-center py-4">Schedule Service →</Link>
                <a href="tel:17574889044" className="btn-outline-dark w-full justify-center py-4">757-488-9044</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand headline="Keep your aircraft flying safely." subhead="Schedule your next inspection or service with HRH's Robinson-authorized team." buttonText="Schedule Service" />
    </>
  )
}
