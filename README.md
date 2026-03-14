# Hampton Roads Helicopters — Website

**Prototype by Jackson, Morin & Co. · SiteFlip · jacksonmorinco.com**

---

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom HRH design tokens
- **Forms:** Resend API
- **Deployment:** Vercel

## Structure

```
hrh-site/
├── app/
│   ├── layout.tsx          # Root layout (Nav + Footer)
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About / Team / Story
│   ├── charter/page.tsx    # Helicopter Charter
│   ├── tours/page.tsx      # Aerial Tours
│   ├── training/page.tsx   # Flight Training
│   ├── maintenance/page.tsx # Maintenance
│   ├── contact/page.tsx    # Contact
│   └── api/contact/route.ts # Form API
├── components/
│   ├── Nav.tsx             # Sticky navigation
│   ├── Footer.tsx          # Site footer
│   ├── PageHero.tsx        # Reusable page hero
│   ├── CTABand.tsx         # Reusable CTA section
│   ├── ContactForm.tsx     # Contact form (client)
│   └── TeamCard.tsx        # Team member card
├── data/
│   └── content.ts          # All site content (scraped + structured)
└── public/                 # Static assets
```

## Design Tokens

| Token | Value | Use |
|-------|-------|-----|
| `navy` | `#0B1F3A` | Primary brand navy |
| `navy-dark` | `#060F1C` | Hero / footer backgrounds |
| `red` | `#C8102E` | Accent — CTAs, highlights |
| `cream` | `#F5F7FA` | Page background |
| `display` | Barlow Condensed | All headings |
| `body` | Source Serif 4 | Body copy |
| `mono` | JetBrains Mono | Labels, stats, certs |

## Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deployment

```bash
# Push to GitHub, connect to Vercel
# Set environment variables in Vercel dashboard:
# RESEND_API_KEY=re_xxxx
```

## Content

All content is in `data/content.ts`. To update copy, team bios,
service descriptions, or contact info — edit that file. No other
files need to change for content updates.

---

*Prototype by Jackson, Morin & Co. · SiteFlip*
*Contact: info@jacksonmorinco.com · jacksonmorinco.com*
