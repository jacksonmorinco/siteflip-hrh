import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  title: 'Special Events',
  description: 'Helicopter special events with Hampton Roads Helicopters — gender reveals, weddings, golf ball drops, charity events, and more. Hampton Roads, Virginia.',
}

const HRH = 'https://hrheli.com/wp-content/uploads'

const events = [
  {
    title: 'Weddings',
    desc:  'Give the wedding couple a once-in-a-lifetime helicopter experience on their special day. Arrival, departure, or an aerial tour — we work with your wedding coordinator to make it seamless and unforgettable.',
    photo: `${HRH}/2023/11/129WM-on-Prime-Rose-1-scaled.jpg`,
  },
  {
    title: 'Gender Reveals',
    desc:  'A helicopter-delivered gender reveal is a moment nobody forgets. We coordinate with your crew on timing, location, and the reveal itself to make sure everything lands perfectly.',
    photo: `${HRH}/2023/11/R66-eclipse.jpg`,
  },
  {
    title: 'Charity Drops',
    desc:  'Golf ball drops, duck drops, Easter egg drops — HRH has worked with charity organizers across Hampton Roads to deliver aerial events that draw crowds and raise money. We handle the logistics.',
    photo: `${HRH}/2023/11/easter-eggs.jpg`,
  },
  {
    title: 'Custom Events',
    desc:  'Have an idea that doesn\'t fit a category? Call us. If it involves a helicopter and a memorable moment, we\'ve probably done something like it — or we\'ll figure it out together.',
    photo: `${HRH}/2023/11/WM-RIC-Poker-Run-scaled.jpg`,
  },
]

export default function SpecialEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Flying · Special Events"
        headline="Your special event is our specialty."
        subhead={'Let HRH help you put the "special" into your next special event — weddings, gender reveals, charity drops, and more.'}
        photo={`${HRH}/2023/11/129WM-on-Prime-Rose-1-scaled.jpg`}
        photoAlt="HRH helicopter at special event"
      />

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
            <div>
              <p className="eyebrow mb-8">What We Do</p>
              <h2 className="font-display text-display-md text-ink mb-8">
                Moments that don't<br />
                <em className="not-italic text-stone">happen twice.</em>
              </h2>
              <p className="font-body text-ink/70 text-lg leading-relaxed mb-6">
                HRH can help make your next special event a truly memorable one. We've
                worked with charity organizers for aerial drops, with couples planning
                wedding helicopter experiences, with families arranging gender reveals,
                and with event coordinators who needed something that would genuinely
                stop people in their tracks.
              </p>
              <p className="font-body text-ink/70 text-lg leading-relaxed">
                A helicopter changes the character of an event. It's not a detail —
                it's the moment everyone remembers. Call us with your ideas and we'll
                figure out how to make it work.
              </p>
            </div>

            {/* Quick contact */}
            <div className="lg:pt-16">
              <div className="bg-mist p-8">
                <p className="eyebrow mb-5">Tell Us About Your Event</p>
                <p className="font-body text-ink/65 text-base leading-relaxed mb-8">
                  Every special event is different. The best first step is a quick
                  conversation — tell us what you're planning and we'll tell you
                  what's possible.
                </p>
                <div className="flex flex-col gap-3">
                  <Link href="/contact" className="btn-dark w-full justify-center py-4">
                    Get in Touch →
                  </Link>
                  <a href="tel:17574889044"
                     className="btn-outline-dark w-full justify-center py-4">
                    Call 757-488-9044
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Events grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule">
            {events.map(event => (
              <div key={event.title}
                   className="bg-white group hover:bg-warm transition-colors duration-300">
                <div className="relative aspect-video overflow-hidden bg-mist">
                  <Image
                    src={event.photo}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="font-display font-semibold text-xl text-ink mb-4">
                    {event.title}
                  </h3>
                  <p className="font-body text-ink/60 text-base leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event photo strip */}
      <section className="py-4 bg-navy-dark">
        <div className="section-inner">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-1">
            {[
              `${HRH}/2023/11/IMG_0840.jpg`,
              `${HRH}/2023/11/august6.jpg`,
              `${HRH}/2023/11/WM-RIC-Poker-Run-scaled.jpg`,
              `${HRH}/2023/11/news-44.jpg`,
              `${HRH}/2023/06/129WM-Santa-5-150x150.jpg`,
              `${HRH}/2023/11/fiel.jpg`,
            ].map((photo, i) => (
              <div key={i} className="relative aspect-square overflow-hidden bg-navy-light">
                <Image
                  src={photo}
                  alt={`HRH special event ${i + 1}`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities note */}
      <section className="py-20 bg-white border-t border-rule">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Advanced Capabilities</p>
              <h2 className="font-display text-display-sm text-ink mb-5">
                More than events.
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed">
                HRH's flying capabilities extend well beyond standard tour and event operations.
                Air-to-air photography, boat and moving photography, chase aircraft support
                for manned and unmanned systems, disaster relief, shipboard operations —
                if it requires a skilled pilot and a capable helicopter, call us.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={`${HRH}/2026/02/MH-Photo-2-628GB-scaled.jpg`}
                alt="HRH cockpit view — advanced operations"
                fill className="object-cover" unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <CTABand
        headline="Have an event in mind?"
        subhead="Call us or send a message. We'll tell you what's possible."
        buttonText="Get in Touch"
      />
    </>
  )
}
