import Image from 'next/image'
import Link from 'next/link'
import { site, stats, services, team, credibilitySignals } from '@/data/content'

const HRH = 'https://hrheli.com/wp-content/uploads'

export default function Home() {
  return (
    <>
      {/* ── HERO — full bleed photo ── */}
      <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
        <Image
          src={`${HRH}/2026/02/SunOver944-scaled.jpg`}
          alt="HRH helicopter in flight at sunrise over Hampton Roads"
          fill
          priority
          className="object-cover object-center"
          unoptimized
        />
        {/* Gradient — bottom-heavy so text reads */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

        {/* Content — anchored to bottom */}
        <div className="section-inner relative z-10 pb-16 lg:pb-24 w-full">
          <div className="max-w-3xl">
            <p className="font-mono text-xs text-white/40 tracking-[0.2em] uppercase mb-6">
              Hampton Roads Executive Airport · Chesapeake, Virginia
            </p>
            <h1 className="font-display text-display-xl text-white mb-6 leading-[1.0]">
              A full-service<br />
              aviation company.
            </h1>
            <p className="font-body text-white/65 text-xl leading-relaxed max-w-xl mb-10">
              Charter flights, aerial tours, flight training, and factory-authorized
              maintenance — built on 20 years of safe operations and the kind of
              personal service a family-run operation can provide.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <Link href="/contact" className="btn-outline-light text-base px-8 py-3">
                Get in Touch →
              </Link>
              <a href="tel:17574889044" className="font-mono text-sm text-white/50 tracking-wider hover:text-white transition-colors duration-200">
                757-488-9044
              </a>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-navy-dark border-b border-white/8">
        <div className="section-inner py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map(stat => (
              <div key={stat.label} className="lg:px-10 first:lg:pl-0 last:lg:pr-0">
                <div className="font-display font-bold text-4xl text-white leading-none">{stat.value}</div>
                <div className="font-mono text-[10px] text-white/35 tracking-widest uppercase mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT INTRO — editorial two-column ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="eyebrow mb-8">About HRH</p>
              <h2 className="font-display text-display-lg text-ink mb-0 leading-[1.05]">
                Three generations.<br />
                <em className="not-italic text-stone">One family.</em>
              </h2>
            </div>
            <div className="lg:pt-16">
              <p className="font-body text-ink/70 text-lg leading-relaxed mb-6">
                Dave Hynes grew up around helicopters in the truest sense — in the 1970s and 80s,
                working for Brantly-Hynes Helicopters, his father's company. He went on to fly VIPs
                in Learjets and international missions in the C-5 Galaxy for the U.S. Air Force,
                accumulating over 18,000 accident-free flight hours before co-founding HRH in 2005.
              </p>
              <p className="font-body text-ink/70 text-lg leading-relaxed mb-8">
                His brother Patrick came from American Airlines. His son Mitchell soloed on his
                16th birthday and earned a computer science degree from Virginia Tech. What they've
                built together is an operation that flies with the discipline of a military unit
                and cares about customers the way a family business has to.
              </p>
              <Link href="/about" className="btn-text text-base">
                Read the full story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO BREAK — formation flight ── */}
      <section className="relative h-[50vh] min-h-[320px] overflow-hidden">
        <Image
          src={`${HRH}/2026/02/PXL_20250920_113606861-scaled.jpg`}
          alt="HRH Robinson R22 and R44 formation flight over Hampton Roads"
          fill
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-navy-dark/30" />
        <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-16">
          <p className="font-mono text-xs text-white/40 tracking-widest uppercase">
            R22 & R44 · Formation Flight
          </p>
        </div>
      </section>

      {/* ── SERVICES — prose-forward grid ── */}
      <section className="py-24 lg:py-32 bg-warm">
        <div className="section-inner">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-16">
            <div>
              <p className="eyebrow mb-4">What We Do</p>
              <h2 className="font-display text-display-lg text-ink">Services</h2>
            </div>
            <p className="font-body text-ink/55 text-base max-w-sm leading-relaxed lg:pt-12 lg:text-right">
              Every service HRH offers is delivered by the same team — the people you speak
              with are the people who fly and maintain your aircraft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule">
            {services.slice(0, 6).map((service, i) => (
              <Link key={service.slug} href={service.href}
                    className="group bg-warm hover:bg-white transition-colors duration-300 p-8 block">
                <div className="font-mono text-xs text-stone/50 tracking-widest mb-8">
                  {'0' + (i + 1)}
                </div>
                <h3 className="font-display font-semibold text-xl text-ink mb-4 group-hover:text-navy transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-ink/55 leading-relaxed mb-8">
                  {service.short}
                </p>
                <span className="font-body text-sm text-stone group-hover:text-ink transition-colors duration-200">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── AOPA MOMENT — quiet credibility ── */}
      <section className="py-20 bg-white border-y border-rule">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <p className="eyebrow mb-6">March 2026</p>
              <h2 className="font-display text-display-md text-ink mb-6">
                On the cover of <em>AOPA Magazine.</em>
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed">
                The cover photograph for the March 2026 issue of AOPA Magazine — the most-read
                general aviation publication in the United States — was taken from one of HRH's
                helicopters during a photo and chase support operation. It's a small detail that
                says something large about the caliber of what HRH does.
              </p>
            </div>
            <div className="relative aspect-[3/4] max-w-xs mx-auto lg:mx-0 lg:ml-auto">
              <Image
                src={`${HRH}/2026/02/AOPA-cover.png`}
                alt="AOPA Magazine March 2026 cover — photo taken from HRH helicopter"
                fill
                className="object-cover shadow-2xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM PREVIEW — three faces ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-inner">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
            <div>
              <p className="eyebrow mb-4">The Team</p>
              <h2 className="font-display text-display-lg text-ink">
                The people behind<br />every flight.
              </h2>
            </div>
            <Link href="/about" className="btn-text mb-2">
              View full team →
            </Link>
          </div>

          {/* Three Hynes — photo + text */}
          <div className="relative mb-16">
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image
                src={`${HRH}/2026/02/3Hynes.png`}
                alt="Dave, Mitchell, and Patrick Hynes — the HRH family"
                fill
                className="object-cover object-top"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12">
                <p className="font-mono text-xs text-white/50 tracking-widest uppercase mb-2">
                  Left to Right
                </p>
                <p className="font-display text-white text-xl font-medium">
                  Dave, Mitchell & Patrick Hynes
                </p>
                <p className="font-mono text-xs text-white/40 tracking-wide mt-1">
                  President · Chief Instructor · Director of Maintenance
                </p>
              </div>
            </div>
          </div>

          {/* Other team members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-rule">
            {[
              { name: 'Greg Doloresco', title: 'Operations Coordinator',  photo: `${HRH}/2023/06/greg-800x999-1-240x300.jpg` },
              { name: 'Peter Houk',     title: 'Helicopter Instructor',   photo: `${HRH}/2025/11/PeterHoukPhoto-2-275x300.jpg` },
              { name: 'Mitchell Hynes', title: 'Chief Instructor',        photo: `${HRH}/2025/10/MHWebsitePhoto-734x1024.jpg` },
              { name: 'Caleb Waite',    title: 'Instructor & Pilot',      photo: `${HRH}/2023/06/caleb-800x985-1-244x300.jpg` },
            ].map(member => (
              <div key={member.name} className="bg-white group">
                <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-5 border-t border-rule">
                  <div className="font-body font-semibold text-sm text-ink">{member.name}</div>
                  <div className="font-mono text-[10px] text-stone tracking-wider uppercase mt-1">{member.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COCKPIT PHOTO BREAK ── */}
      <section className="relative h-[45vh] min-h-[300px] overflow-hidden">
        <Image
          src={`${HRH}/2026/02/MH-Photo-2-628GB-scaled.jpg`}
          alt="View from HRH cockpit during operations over Hampton Roads"
          fill
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-navy-dark/25" />
        <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-16">
          <p className="font-mono text-xs text-white/35 tracking-widest uppercase">
            HRH · Advanced Operations · Hampton Roads
          </p>
        </div>
      </section>

      {/* ── CONTACT STRIP — understated ── */}
      <section className="py-20 bg-white border-t border-rule">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-display-md text-ink mb-4">
                Ready to fly?
              </h2>
              <p className="font-body text-ink/60 text-lg leading-relaxed">
                Call us to discuss travel locations, get an estimate, or book a flight.
                We look forward to partnering with you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/contact" className="btn-dark px-8 py-3">
                Get in Touch →
              </Link>
              <a href="tel:17574889044"
                 className="btn-outline-dark px-8 py-3 text-center">
                757-488-9044
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
