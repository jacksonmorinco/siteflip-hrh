import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTABand from '@/components/CTABand'
import { services } from '@/data/content'

export const metadata: Metadata = {
  title: 'Aerial Tours',
  description: 'Helicopter aerial tours of Hampton Roads, Virginia Beach, Norfolk, and the Great Dismal Swamp. The #1 aerial tour provider in Hampton Roads.',
}

const toursService = services.find(s => s.slug === 'tours')!
const HRH = 'https://hrheli.com/wp-content/uploads'

const tourPhotos = [
  `${HRH}/2023/11/va-beach-e1503884359166.jpg`,
  `${HRH}/2023/11/norfolk.jpg`,
  `${HRH}/2023/11/Fort-Monroe.jpg`,
  `${HRH}/2023/11/12186846_623445087759289_3255385734202062872_o.jpg`,
  `${HRH}/2023/11/tourschristmas.jpg`,
]

export default function ToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Aerial Tours"
        headline="See Hampton Roads the way it was meant to be seen."
        subhead="The number one provider of aerial tours and flight-seeing experiences in the Hampton Roads area."
        photo={`${HRH}/2023/11/va-beach-e1503884359166.jpg`}
        photoAlt="Aerial view of Virginia Beach from HRH helicopter"
        photoPosition="object-bottom"
      />

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
            <div>
              <p className="eyebrow mb-6">The Experience</p>
              <h2 className="font-display text-display-md text-ink mb-6">Four seats.<br />Unobstructed views.</h2>
              <p className="font-body text-ink/70 text-lg leading-relaxed">{toursService.body}</p>
            </div>
            <div className="relative aspect-video overflow-hidden mt-4 lg:mt-12">
              <Image src={`${HRH}/2026/02/PXL_20250920_113606861-scaled.jpg`} alt="HRH R44 in flight over Hampton Roads"
                     fill className="object-cover" unoptimized />
            </div>
          </div>

          {/* Tours */}
          <p className="eyebrow mb-10">Popular Area Tours</p>
          <div className="space-y-0">
            {toursService.tours!.map((tour, i) => (
              <div key={tour.name} className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-t border-rule last:border-b">
                <div className="lg:col-span-1">
                  <div className="font-mono text-xs text-stone/40 tracking-widest">{'0' + (i + 1)}</div>
                </div>
                <div className="lg:col-span-5">
                  <div className="flex items-start gap-4 mb-3">
                    <h3 className="font-display font-semibold text-xl text-ink">{tour.name}</h3>
                    {tour.seasonal && (
                      <span className="font-mono text-[9px] text-red border border-red/30 px-2 py-1 tracking-widest uppercase flex-shrink-0 mt-1">
                        Seasonal
                      </span>
                    )}
                  </div>
                  {tour.seasonal && (
                    <p className="font-mono text-[10px] text-stone tracking-widest uppercase mb-3">{tour.seasonNote}</p>
                  )}
                </div>
                <div className="lg:col-span-5">
                  <p className="font-body text-ink/60 text-base leading-relaxed">{tour.desc}</p>
                </div>
                {tourPhotos[i] && (
                  <div className="lg:col-span-1 hidden lg:block">
                    <div className="relative aspect-square overflow-hidden bg-mist">
                      <Image src={tourPhotos[i]} alt={tour.name} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" unoptimized />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Custom tour */}
          <div className="mt-16 bg-navy-dark p-10 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-mono text-xs text-white/35 tracking-widest uppercase mb-4">Custom Tours Available</p>
                <h3 className="font-display text-display-sm text-white mb-4">Don't see what you're looking for?</h3>
                <p className="font-body text-white/55 leading-relaxed">Ask our staff to help you design a custom aerial tour. Any route, any occasion, any perspective.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link href="/contact" className="btn-outline-light px-8 py-3">Plan a Custom Tour →</Link>
                <a href="tel:17574889044" className="btn-outline-light px-8 py-3 text-center">Call Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand headline="Ready to see Hampton Roads from above?" subhead="Book online or call us to schedule your tour." buttonText="Book a Tour" />
    </>
  )
}
