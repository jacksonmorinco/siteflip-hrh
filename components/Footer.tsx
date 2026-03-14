import Link from 'next/link'
import { site } from '@/data/content'

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="section-inner py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="lg:col-span-2">
            <div className="font-display font-bold text-xl text-white mb-2">Hampton Roads Helicopters</div>
            <div className="font-mono text-[9px] text-white/30 tracking-[0.2em] uppercase mb-6">
              A Full Service Aviation Company
            </div>
            <p className="font-body text-sm text-white/40 leading-relaxed max-w-xs mb-8">
              Based at Hampton Roads Executive Airport, Chesapeake, Virginia.
              Helicopter charter, aerial tours, flight training, and Robinson-authorized maintenance since 2005.
            </p>
            <div className="flex flex-wrap gap-3">
              {['FAA Part 135', 'Robinson Authorized', 'Est. 2005'].map(badge => (
                <span key={badge} className="font-mono text-[9px] tracking-widest uppercase text-white/25 border border-white/10 px-3 py-1.5">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-white/25 mb-6">Services</div>
            <div className="flex flex-col gap-3">
              {[
                { href: '/charter',     label: 'Helicopter Charter' },
                { href: '/tours',       label: 'Aerial Tours'       },
                { href: '/training',    label: 'Flight Training'    },
                { href: '/maintenance', label: 'Maintenance'        },
                { href: '/about',       label: 'About HRH'          },
              ].map(link => (
                <Link key={link.href} href={link.href}
                      className="font-body text-sm text-white/45 hover:text-white transition-colors duration-150">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-white/25 mb-6">Contact</div>
            <div className="space-y-4 font-body text-sm">
              <div>
                <div className="text-white/25 font-mono text-[9px] uppercase tracking-wider mb-1">Phone</div>
                <a href="tel:17574889044" className="text-white hover:text-white/70 transition-colors">{site.phone}</a>
              </div>
              <div>
                <div className="text-white/25 font-mono text-[9px] uppercase tracking-wider mb-1">Email</div>
                <a href={`mailto:${site.email}`} className="text-white/50 hover:text-white transition-colors">{site.email}</a>
              </div>
              <div>
                <div className="text-white/25 font-mono text-[9px] uppercase tracking-wider mb-1">Location</div>
                <address className="not-italic text-white/40 leading-relaxed">
                  {site.address}<br />{site.city}<br />
                  <span className="text-white/25 text-xs">{site.airport}</span>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="section-inner py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-mono text-[10px] text-white/20 tracking-wide">
            © {new Date().getFullYear()} Hampton Roads Helicopters · {site.partnerName} · Cert. {site.partnerCert}
          </div>
          <div className="font-mono text-[10px] text-white/20 tracking-wide">
            Prototype by{' '}
            <a href="https://home.jacksonmorinco.com" className="hover:text-white/40 transition-colors">
              Jackson, Morin &amp; Co.
            </a>
            {' '}· SiteFlip
          </div>
        </div>
      </div>
    </footer>
  )
}
