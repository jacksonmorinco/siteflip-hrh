import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import { site } from '@/data/content'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Hampton Roads Helicopters. Book a charter flight, schedule maintenance, or inquire about flight training. Located at Hampton Roads Executive Airport, Chesapeake VA.',
}

const contactReasons = [
  { label: 'Helicopter Charter',  desc: 'Get a travel time estimate and rate quote for your destination.' },
  { label: 'Aerial Tours',        desc: 'Book one of our popular area tours or design a custom route.' },
  { label: 'Flight Training',     desc: 'Discuss certificates, scheduling, and training rates.' },
  { label: 'Maintenance',         desc: 'Schedule a service appointment or request a field call.' },
  { label: 'Special Events',      desc: 'Add an unforgettable helicopter experience to your event.' },
  { label: 'General Inquiry',     desc: 'Anything else — we look forward to hearing from you.' },
]

const directions = [
  { from: 'Northern Virginia (Richmond, Williamsburg, Newport News)', steps: 'Take I-64 East to I-664 South. Exit 13A to 58 West.' },
  { from: 'Eastern Virginia (Virginia Beach, Norfolk)', steps: 'Take I-264 West to I-664 North. Exit 13A to 58 West.' },
  { from: 'Southern Virginia (Chesapeake, Outer Banks)', steps: 'Take I-64 to I-664 North. Exit 13A to 58 West.' },
  { from: 'Western Virginia', steps: 'Take 58 East.' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        headline="Let's Talk Flying"
        subhead="Call us, email us, or fill out the form below. We look forward to partnering with you."
      />

      {/* Main contact grid */}
      <section className="py-24 bg-cream">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Left — contact info */}
            <div className="lg:col-span-1">

              {/* Primary contact */}
              <div className="mb-10">
                <div className="font-mono text-[10px] text-slate-hrh tracking-widest uppercase mb-6">
                  Contact Information
                </div>
                <div className="space-y-5">
                  <div>
                    <div className="font-mono text-[9px] text-red tracking-widest uppercase mb-1">
                      Phone
                    </div>
                    <a href={`tel:${site.phone.replace(/\./g, '')}`}
                       className="font-display font-bold text-2xl text-navy hover:text-red
                                  transition-colors duration-200 tracking-wide">
                      {site.phone}
                    </a>
                  </div>
                  <div>
                    <div className="font-mono text-[9px] text-red tracking-widest uppercase mb-1">
                      Fax
                    </div>
                    <div className="font-display font-semibold text-lg text-navy/60">
                      {site.fax}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[9px] text-red tracking-widest uppercase mb-1">
                      Email
                    </div>
                    <a href={`mailto:${site.email}`}
                       className="font-body text-navy hover:text-red transition-colors duration-200">
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-navy p-6 mb-6">
                <div className="font-mono text-[9px] text-white/30 tracking-widest uppercase mb-3">
                  Location
                </div>
                <address className="not-italic font-body text-white/70 leading-relaxed">
                  {site.address}<br />
                  {site.city}
                </address>
                <div className="font-mono text-[9px] text-red tracking-widest uppercase mt-3">
                  {site.airport}
                </div>
              </div>

              {/* What we handle */}
              <div>
                <div className="font-mono text-[10px] text-slate-hrh tracking-widest uppercase mb-5">
                  How Can We Help?
                </div>
                <div className="space-y-px">
                  {contactReasons.map(reason => (
                    <div key={reason.label}
                         className="bg-white border border-rule p-4 hover:border-navy/20
                                    hover:bg-cream transition-all duration-200">
                      <div className="font-display font-semibold text-sm text-navy uppercase tracking-wide mb-1">
                        {reason.label}
                      </div>
                      <p className="font-body text-navy/55 text-xs leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-20 bg-navy text-white">
        <div className="section-inner">
          <div className="section-label mb-4">
            <span className="eyebrow-light">Finding Us</span>
          </div>
          <h2 className="font-display font-black text-display-md text-white uppercase mb-4">
            Directions to HRH
          </h2>
          <p className="font-body text-white/55 mb-10 max-w-xl">
            Off Highway 58: Turn into Hampton Roads Executive Airport main entrance,
            take an immediate left down the access road, at the stop sign turn right.
            HRH is the <strong className="text-white">4th hangar on the right</strong> —
            look for the three blue awnings with "HRH" on them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {directions.map(dir => (
              <div key={dir.from} className="bg-navy-light p-6">
                <div className="font-mono text-[9px] text-red tracking-widest uppercase mb-2">
                  From
                </div>
                <div className="font-display font-semibold text-base text-white uppercase tracking-wide mb-3">
                  {dir.from}
                </div>
                <p className="font-body text-white/55 text-sm leading-relaxed">
                  {dir.steps} Then off Highway 58 into Hampton Roads Executive Airport.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-navy-dark border border-white/10 inline-block">
            <span className="font-mono text-xs text-white/40 tracking-wider">
              Hampton Roads Executive Airport (PVG) · 5196 W Military Hwy, Chesapeake, VA 23321
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
