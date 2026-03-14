'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const flyingLinks = [
  { href: '/flying',                 label: 'All Flying Services'    },
  { href: '/charter',                label: 'Helicopter Charter'     },
  { href: '/tours',                  label: 'Aerial Tours'           },
  { href: '/flying/special-events',  label: 'Special Events'         },
  { href: '/training',               label: 'Flight Training'        },
  { href: '/maintenance',            label: 'Maintenance'            },
]

export default function Nav() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [flyingOpen, setFlyingOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled || menuOpen ? 'bg-navy-dark shadow-xl' : 'bg-gradient-to-b from-black/70 to-transparent'
    }`}>

      {/* Sister company banner */}
      <div className="bg-navy-dark/80 border-b border-white/8">
        <div className="section-inner py-1.5 flex items-center justify-between">
          <span className="font-mono text-[9px] text-white/30 tracking-[0.18em] uppercase">
            FAA Part 135 · Robinson Authorized · Est. 2005
          </span>
          <a href="https://www.hrcharterservice.com" target="_blank" rel="noopener noreferrer"
             className="font-mono text-[9px] text-white/30 tracking-[0.18em] uppercase
                        hover:text-white/60 transition-colors duration-200">
            Aircraft Sales & Leasing →&nbsp;Hampton Roads Charter Service
          </a>
        </div>
      </div>

      <nav className="section-inner">
        <div className="flex items-center justify-between h-18">

          <Link href="/" className="group flex flex-col leading-none">
            <span className="font-display font-bold text-xl text-white tracking-wide
                             group-hover:text-white/80 transition-colors duration-200">
              Hampton Roads Helicopters
            </span>
            <span className="font-mono text-[9px] text-white/35 tracking-[0.2em] uppercase mt-0.5">
              Chesapeake, Virginia · Est. 2005
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/about" className="nav-item">About</Link>

            {/* Flying dropdown */}
            <div className="relative"
                 onMouseEnter={() => setFlyingOpen(true)}
                 onMouseLeave={() => setFlyingOpen(false)}>
              <Link href="/flying" className="nav-item flex items-center gap-1.5">
                Flying
                <svg width="9" height="6" viewBox="0 0 9 6" fill="none"
                     className={`transition-transform duration-200 ${flyingOpen ? 'rotate-180' : ''}`}>
                  <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Link>
              {flyingOpen && (
                <div className="absolute top-full left-0 pt-3 w-56">
                  <div className="bg-navy-dark border border-white/10 py-2 shadow-2xl">
                    {flyingLinks.map((link, i) => (
                      <div key={link.href}>
                        {i === 1 && <div className="border-t border-white/8 my-1" />}
                        <Link href={link.href}
                              className={`block px-5 py-2.5 font-body text-sm transition-colors duration-150
                                         hover:text-white hover:bg-white/5
                                         ${i === 0 ? 'text-white/40 text-xs tracking-wider' : 'text-white/60'}`}>
                          {link.label}
                        </Link>
                      </div>
                    ))}
                    <div className="border-t border-white/8 mt-1 pt-1">
                      <a href="https://www.hrcharterservice.com" target="_blank" rel="noopener noreferrer"
                         className="block px-5 py-2.5 font-body text-sm text-white/35
                                    hover:text-white/60 hover:bg-white/5 transition-colors duration-150">
                        Aircraft Sales ↗
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="nav-item">Contact</Link>
            <a href="tel:17574889044"
               className="font-mono text-xs text-white/40 tracking-wider
                          hover:text-white transition-colors duration-200">
              757-488-9044
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:hidden p-2 text-white" aria-label="Menu">
            <div className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <div className={`w-6 h-px bg-white mt-[5px] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-px bg-white mt-[5px] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden border-t border-white/10">
          <div className="section-inner py-6 flex flex-col gap-1">
            {[
              { href: '/about',                label: 'About'             },
              { href: '/flying',               label: 'Flying'            },
              { href: '/charter',              label: 'Helicopter Charter'},
              { href: '/tours',                label: 'Aerial Tours'      },
              { href: '/flying/special-events',label: 'Special Events'    },
              { href: '/training',             label: 'Flight Training'   },
              { href: '/maintenance',          label: 'Maintenance'       },
              { href: '/contact',              label: 'Contact'           },
            ].map(link => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                    className="font-body text-base text-white/70 hover:text-white
                               py-3 border-b border-white/8 transition-colors">
                {link.label}
              </Link>
            ))}
            <a href="https://www.hrcharterservice.com" target="_blank" rel="noopener noreferrer"
               className="font-body text-sm text-white/40 hover:text-white/70 py-3 transition-colors">
              Aircraft Sales — Hampton Roads Charter Service ↗
            </a>
            <a href="tel:17574889044"
               className="font-mono text-sm text-white/40 tracking-wider mt-2">
              757-488-9044
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
