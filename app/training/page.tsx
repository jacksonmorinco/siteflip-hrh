import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTABand from '@/components/CTABand'
import { services, team, fleetHighlights } from '@/data/content'

export const metadata: Metadata = {
  title: 'Flight Training',
  description: 'FAA Part 61 helicopter flight training in Hampton Roads, Virginia. Private Pilot through ATP. Robinson fleet. Instructors with thousands of hours.',
}

const training = services.find(s => s.slug === 'training')!
const HRH = 'https://hrheli.com/wp-content/uploads'
const instructors = team.filter(m => m.title.toLowerCase().includes('instructor') || m.name === 'Dave Hynes')
const teamPhotos: Record<string, string> = {
  'Dave Hynes':     `${HRH}/2023/06/Dave-Shanda-Hynes-800x600-1-300x225.png`,
  'Mitchell Hynes': `${HRH}/2025/10/MHWebsitePhoto-734x1024.jpg`,
  'Peter Houk':     `${HRH}/2025/11/PeterHoukPhoto-2-275x300.jpg`,
  'Caleb Waite':    `${HRH}/2023/06/caleb-800x985-1-244x300.jpg`,
}

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Flight Training"
        headline="World-class training for world-class pilots."
        subhead="HRH has been training pilots since 2005. Our instructors have been serving aviation training for over 40 years."
        photo={`${HRH}/2026/02/FuturePilot-scaled.jpg`}
        photoAlt="Student pilot with HRH instructor"
      />

      <section className="py-24 lg:py-32 bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-8">The Program</p>
              <h2 className="font-display text-display-md text-ink mb-8">40 years of experience.<br />Modern fleet.</h2>
              <div className="font-body text-ink/70 text-lg leading-[1.9] space-y-5 mb-12">
                <p>{training.body}</p>
              </div>
              <div className="border-l-2 border-rule pl-6 py-2">
                <p className="font-mono text-[10px] text-stone uppercase tracking-widest mb-2">{training.regulation}</p>
                <p className="font-body text-sm text-ink/55 leading-relaxed">
                  All training programs conducted under FAA Part 61 Rotorcraft — Helicopter regulations.
                  Our instructors hold Gold Seal certificates and Robinson Factory Approved Instructor designations.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <p className="eyebrow mb-6">Certificates & Ratings</p>
              <div className="space-y-0">
                {training.certificates!.map((cert, i) => (
                  <div key={cert} className="flex items-center gap-5 py-4 border-b border-rule last:border-0">
                    <div className="font-mono text-xs text-stone/40 w-6 flex-shrink-0">{String(i+1).padStart(2,'0')}</div>
                    <div className="font-body text-base text-ink">{cert}</div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-3">
                <Link href="/contact" className="btn-dark w-full justify-center py-4">Request Training Info →</Link>
                <a href="tel:17574889044" className="btn-outline-dark w-full justify-center py-4">757-488-9044</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-20 bg-warm border-y border-rule">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Training Fleet</p>
              <h2 className="font-display text-display-md text-ink mb-6">The world's safest training helicopters.</h2>
              <p className="font-body text-ink/60 text-lg leading-relaxed mb-6">
                HRH is a Robinson Factory Authorized Service Center. Every training aircraft is maintained
                to factory specification by Patrick Hynes and his team — the same standards that keep commercial airliners flying.
              </p>
            </div>
            <div>
              <div className="relative aspect-video overflow-hidden mb-4">
                <Image src={`${HRH}/2026/02/FFAR44-scaled.jpg`} alt="HRH Robinson R44 in flight" fill className="object-cover" unoptimized />
              </div>
              <div className="grid grid-cols-3 gap-px bg-rule">
                {fleetHighlights.slice(0,3).map(a => (
                  <div key={a.model} className="bg-warm p-4">
                    <div className="font-body font-semibold text-sm text-ink">{a.model}</div>
                    <div className="font-mono text-[9px] text-stone uppercase tracking-widest mt-1">{a.type.split(' ')[0]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-24 bg-white">
        <div className="section-inner">
          <p className="eyebrow mb-4">Instructors</p>
          <h2 className="font-display text-display-md text-ink mb-14">Your instructors.</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-rule">
            {instructors.map(m => {
              const photo = teamPhotos[m.name]
              return (
                <div key={m.name} className="bg-white group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                    {photo ? (
                      <Image src={photo} alt={m.name} fill className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" unoptimized />
                    ) : (
                      <div className="w-full h-full bg-navy flex items-center justify-center">
                        <span className="font-display font-bold text-3xl text-white/20">{m.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 border-t border-rule">
                    <div className="font-body font-semibold text-sm text-ink">{m.name}</div>
                    <div className="font-mono text-[9px] text-red tracking-widest uppercase mt-1">{m.title}</div>
                    <p className="font-body text-xs text-ink/50 leading-relaxed mt-3 line-clamp-4">{m.bio}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABand headline="Ready to start flying?" subhead="From first flight to ATP — HRH has the instructors and aircraft to get you there." buttonText="Request Training Info" />
    </>
  )
}
