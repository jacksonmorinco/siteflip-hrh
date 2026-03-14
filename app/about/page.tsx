import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTABand from '@/components/CTABand'
import { team, credibilitySignals, fleetHighlights } from '@/data/content'

export const metadata: Metadata = {
  title: 'About HRH',
  description: 'The story of Hampton Roads Helicopters — founded 2005, built on the Hynes family multi-generational aviation legacy.',
}

const HRH = 'https://hrheli.com/wp-content/uploads'

const teamPhotos: Record<string, string> = {
  'Dave Hynes':     `${HRH}/2023/06/Dave-Shanda-Hynes-800x600-1-300x225.png`,
  'Patrick Hynes':  `${HRH}/2023/06/august7-300x225.png`,
  'Mitchell Hynes': `${HRH}/2025/10/MHWebsitePhoto-734x1024.jpg`,
  'Greg Doloresco': `${HRH}/2023/06/greg-800x999-1-240x300.jpg`,
  'Peter Houk':     `${HRH}/2025/11/PeterHoukPhoto-2-275x300.jpg`,
  'Caleb Waite':    `${HRH}/2023/06/caleb-800x985-1-244x300.jpg`,
  'Dylan Borer':    `${HRH}/2023/06/cris-rotated-1-150x150.jpg`,
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About HRH"
        headline="Over 100 years of combined aviation experience."
        subhead="A full-service aviation company built on family, discipline, and an unwavering commitment to safe operations."
        photo={`${HRH}/2026/02/R44Flying-scaled.jpg`}
        photoAlt="HRH Robinson R44 in flight"
      />

      {/* Founding narrative */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-8">The Story</p>
              <h2 className="font-display text-display-md text-ink mb-10">
                Built on a legacy.<br />Carried forward<br />by a family.
              </h2>
              <div className="font-body text-ink/70 text-lg leading-[1.9] space-y-6">
                <p>
                  Hampton Roads Helicopters was founded in 2005 by Andy Gibbs — a man whose
                  goal was simple: safe flight operations, quality maintenance, expert advice,
                  and a personal touch. He found an ideal partner in Dave Hynes, a U.S. Air Force
                  Academy graduate who had flown VIPs in Learjets, completed international
                  missions in the C-5 Galaxy, and accumulated over 18,000 accident-free flight
                  hours — a man who also happened to have grown up in his father's helicopter
                  company in the 1970s and 80s.
                </p>
                <p>
                  When Andy Gibbs passed away in February 2013, his entrepreneurial spirit didn't
                  leave with him. It stayed in the hangar. The Hynes family stepped forward and
                  carried his vision forward, adding Dave's brother Patrick — who left American
                  Airlines to become Director of Maintenance, bringing airline-grade standards
                  to every aircraft in the fleet.
                </p>
                <p>
                  Mitchell Hynes, Dave's son, represents the third generation. He soloed both
                  helicopter and airplane on his 16th birthday, earned a computer science degree
                  from Virginia Tech while flying part-time, and is now HRH's Chief Instructor
                  and a Robinson Factory Approved Instructor Pilot. He flies over 30 different
                  aircraft types and holds a Gold Seal on his Instructor's Certificate.
                </p>
                <p className="text-ink/85">
                  What HRH has built is not a service company with a family story attached to it.
                  It is a family operation that happens to run one of the most capable aviation
                  companies in the Virginia Tidewater — with the discipline of a military unit,
                  the technical standards of a commercial carrier, and the kind of care that
                  comes naturally when your name is on every aircraft.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pt-20">
              {/* Three Hynes photo */}
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <Image
                  src={`${HRH}/2026/02/3Hynes.png`}
                  alt="Dave, Mitchell, and Patrick Hynes"
                  fill className="object-cover object-top"
                  unoptimized
                />
              </div>
              <p className="font-mono text-[10px] text-stone/60 tracking-widest uppercase">
                Dave, Mitchell & Patrick Hynes
              </p>

              {/* Timeline — minimal */}
              <div className="mt-14 space-y-6">
                <p className="eyebrow">Timeline</p>
                {[
                  { year: '2005', note: 'HRH founded by Andy Gibbs and Dave Hynes at Hampton Roads Executive Airport.' },
                  { year: '2013', note: 'Founder Andy Gibbs passes away. The Hynes family carries the legacy forward.' },
                  { year: '2014', note: 'Patrick Hynes joins from American Airlines as Director of Maintenance.' },
                  { year: '2026', note: 'AOPA Magazine March cover photograph taken from an HRH helicopter.' },
                ].map(item => (
                  <div key={item.year} className="flex gap-6">
                    <div className="font-mono text-sm text-red font-medium w-12 flex-shrink-0 pt-0.5">{item.year}</div>
                    <p className="font-body text-sm text-ink/60 leading-relaxed">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crew at Verticon photo */}
      <section className="relative h-[45vh] min-h-[300px] overflow-hidden">
        <Image
          src={`${HRH}/2026/02/9007151925166147451.jpg`}
          alt="HRH crew at Verticon 2025"
          fill className="object-cover object-top"
          unoptimized
        />
        <div className="absolute inset-0 bg-navy-dark/30" />
        <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-16">
          <p className="font-mono text-xs text-white/40 tracking-widest uppercase">HRH Crew · Verticon 2025</p>
        </div>
      </section>

      {/* Full team */}
      <section className="py-24 lg:py-32 bg-warm">
        <div className="section-inner">
          <p className="eyebrow mb-4">Our People</p>
          <h2 className="font-display text-display-md text-ink mb-16">The team.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-rule">
            {team.map(member => {
              const photo = teamPhotos[member.name]
              return (
                <div key={member.name} className="bg-warm hover:bg-white transition-colors duration-300 group">
                  {/* Photo */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                    {photo ? (
                      <Image src={photo} alt={member.name} fill
                             className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                             unoptimized />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-navy">
                        <span className="font-display font-bold text-4xl text-white/20">
                          {member.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="font-body font-semibold text-base text-ink mb-0.5">{member.name}</div>
                    <div className="font-mono text-[10px] text-red tracking-widest uppercase mb-3">{member.title}</div>
                    {member.hours && (
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="font-display font-bold text-2xl text-ink">{member.hours}</span>
                        <span className="font-mono text-[9px] text-stone uppercase tracking-widest leading-tight">accident-free hours</span>
                      </div>
                    )}
                    <div className="font-mono text-[9px] text-stone/60 uppercase tracking-widest mb-3 leading-relaxed">{member.credentials}</div>
                    <p className="font-body text-xs text-ink/55 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-20 bg-white border-t border-rule">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-4">Fleet</p>
              <h2 className="font-display text-display-md text-ink mb-6">The aircraft.</h2>
              <p className="font-body text-ink/60 text-lg leading-relaxed">
                HRH is a Robinson Factory Authorized Service Center and dealer. The fleet
                spans training helicopters, charter aircraft, and fixed-wing — all maintained
                to factory specification by Patrick Hynes and his team.
              </p>
            </div>
            <div className="space-y-px">
              {fleetHighlights.map(aircraft => (
                <div key={aircraft.model} className="flex gap-6 py-4 border-b border-rule last:border-0">
                  <div className="font-display font-semibold text-base text-ink w-32 flex-shrink-0">{aircraft.model}</div>
                  <div>
                    <div className="font-mono text-[10px] text-stone uppercase tracking-widest mb-1">{aircraft.type}</div>
                    <div className="font-body text-sm text-ink/55">{aircraft.notes}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand headline="Ready to fly with HRH?" subhead="20 years, 18,000+ accident-free hours, and a team that treats every flight like it matters." />
    </>
  )
}
