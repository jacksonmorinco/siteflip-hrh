import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTABand from '@/components/CTABand'
import { services } from '@/data/content'

export const metadata: Metadata = {
  title: 'Helicopter Charter',
  description: 'Private helicopter charter from Hampton Roads. Door-to-door under FAA Part 135. DC in 90 minutes, Outer Banks in 40.',
}

const charter = services.find(s => s.slug === 'charter')!
const HRH = 'https://hrheli.com/wp-content/uploads'

export default function CharterPage() {
  return (
    <>
      <PageHero
        eyebrow="Helicopter Charter"
        headline="Where do you need to go?"
        subhead="Door-to-door private helicopter transport, conducted under FAA Part 135. The drive that takes three hours takes forty minutes."
        photo={`${HRH}/2023/06/abc1-1024x683-1.jpg`}
        photoAlt="HRH helicopter in flight"
      />

      <section className="py-24 lg:py-32 bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <div className="lg:col-span-7">
              <p className="eyebrow mb-8">The Service</p>
              <h2 className="font-display text-display-md text-ink mb-8">
                Stress-free travel.<br />Every time.
              </h2>
              <div className="font-body text-ink/70 text-lg leading-[1.9] space-y-5 mb-12">
                <p>{charter.body}</p>
              </div>

              {/* FAA note — understated */}
              <div className="border-l-2 border-rule pl-6 py-2">
                <p className="font-mono text-[10px] text-stone uppercase tracking-widest mb-2">FAA Part 135 · Certificate H4RA894W</p>
                <p className="font-body text-sm text-ink/55 leading-relaxed">
                  All charter flights are conducted by Hampton Roads Charter Service under strict
                  FAA Part 135 regulations. Our pilots complete annual recurrent training and checkouts.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              {/* Travel times */}
              <div className="mb-10">
                <p className="eyebrow mb-6">Travel Times · From Norfolk</p>
                <div className="space-y-0">
                  {charter.travelTimes!.map(route => (
                    <div key={route.destination} className="flex items-center justify-between py-4 border-b border-rule last:border-0">
                      <span className="font-body text-base text-ink">{route.destination}</span>
                      <span className="font-mono text-sm text-stone tracking-wider">{route.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aircraft */}
              <div className="bg-mist p-8">
                <p className="eyebrow mb-4">Charter Aircraft</p>
                <div className="font-display font-semibold text-xl text-ink mb-3">Robinson R44</div>
                <p className="font-body text-sm text-ink/60 leading-relaxed mb-6">
                  Four seats. One passenger beside the pilot, two in the rear. All seats have unobstructed views through four cabin doors. Air conditioned, heated, with headsets for all passengers.
                </p>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`${HRH}/2026/02/R44Flying-scaled.jpg`}
                    alt="Robinson R44 in flight"
                    fill className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3">
                <Link href="/contact" className="btn-dark w-full justify-center py-4">Book a Charter →</Link>
                <a href="tel:17574889044" className="btn-outline-dark w-full justify-center py-4">757-488-9044</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand headline="Ready to skip the drive?" subhead="Tell us your destination. We'll get you there." buttonText="Book a Charter" />
    </>
  )
}
