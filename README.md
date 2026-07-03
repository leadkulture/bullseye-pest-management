# Bullseye Pest Management — Website

Mobile-first, SEO-optimized website for Bullseye Pest Management (Dallas / Fort Worth pest control). Built with Astro + Tailwind, deploys to Vercel.

## Stack

- **Framework:** Astro 5 (static output)
- **Styling:** Tailwind CSS 3
- **Sitemap:** `@astrojs/sitemap` (auto-generated)
- **Forms:** Web3Forms (host-agnostic, free tier)
- **Hosting:** Vercel
- **Domain (production):** bullseyepestmanagement.com

## Local development

```bash
npm install
npm run dev
```

Site runs on http://localhost:4321

## Build

```bash
npm run build
```

Output lands in `dist/`.

## Structure

```
src/
  data/
    business.ts          Canonical NAP / phone / hours / cert badges
    services.ts          The 8 service pages (content-as-data)
    service-areas.ts     The 5 city pages (content-as-data)
    posts.ts             Blog posts (content-as-data)
  layouts/
    BaseLayout.astro     Meta, Open Graph, LocalBusiness schema, header/footer
  components/
    Header.astro         Sticky header + mobile drawer
    Footer.astro         Full site map + credentials
    StickyMobileCTA.astro  Fixed bottom Call / Quote bar (mobile)
    LocalBusinessSchema.astro  JSON-LD schema for PestControlService
    Breadcrumbs.astro    Nav + BreadcrumbList schema
    FAQBlock.astro       FAQ accordion + FAQPage schema
    CTABand.astro        Reusable red CTA band
    ServiceCard.astro    Reusable service preview card
    TrustBadges.astro    Certification/credential row
  pages/
    index.astro          Home
    about.astro          Steve's story + credentials (E-E-A-T)
    contact.astro        Web3Forms contact + click-to-call
    thank-you.astro      Post-submit page (noindex)
    404.astro
    privacy.astro
    terms.astro
    services/
      index.astro        Services hub
      [slug].astro       Templated per-service page (8 pages)
    service-areas/
      index.astro        Service Areas hub
      [slug].astro       Templated per-city page (5 pages)
    blog/
      index.astro        Blog index
      [slug].astro       Templated per-post page (4 pillar posts)
public/
  images/
    logo.png
    team/                Steve on the job
    services/            Service hero images
    badges/              Termidor, Phantom, TPCA
  robots.txt
astro.config.mjs         Trailing slash, sitemap, prefetch
tailwind.config.mjs      Brand colors (Bullseye red + green), font stack
vercel.json              301 redirects from old URLs, security headers, cache-control
```

## Editing site content

Everything content-adjacent lives in `src/data/`. To change:

- **Phone, hours, cert badges → `src/data/business.ts`**
- **Add / edit a service → `src/data/services.ts`**
- **Add / edit a city → `src/data/service-areas.ts`**
- **Publish a blog post → `src/data/posts.ts`**

Structural changes go in `src/pages/*.astro` and `src/components/*.astro`.

## SEO features baked in

- LocalBusiness schema (`PestControlService` subtype) with `areaServed`, `hasOfferCatalog`, `openingHoursSpecification`
- `Service` schema on every service page with `provider` back-reference to LocalBusiness `@id`
- `Service` + `areaServed: City` schema on every city page
- `FAQPage` schema on Home, every service page, and every city page
- `BlogPosting` + `Person` (author) schema on every blog post — for E-E-A-T + AI Overview citations
- `BreadcrumbList` schema on every internal page
- `WebSite` schema with `SearchAction` on Home
- Canonical URLs on every page
- Open Graph + Twitter Card meta on every page
- Sitemap auto-generated at `/sitemap-index.xml`
- `robots.txt` blocks `/thank-you/` and `/404/`
- 301 redirects from every old-site URL in `vercel.json`
- Mobile-first responsive layout, 44px+ tap targets, sticky mobile CTA bar
- Hero images use `fetchpriority="high"` and preload for LCP <2.5s
- Font preconnect + preload for reduced CLS
- `viewport` and `theme-color` meta set correctly
- All images have `width`/`height` attributes (prevents CLS)

## Deployment (Vercel)

Auto-deploys from the `main` branch of this repo. Vercel picks up `vercel.json` for the redirects and security headers. The Astro build output at `dist/` is served as static HTML.

Framework preset: **Astro** (Vercel auto-detects).

## Pre-launch checklist

Before flipping DNS:

- [ ] Web3Forms access key added to `src/pages/contact.astro` (currently placeholder `WEB3FORMS_ACCESS_KEY`)
- [ ] `info@bullseyepestmanagement.com` email address set up and forwarding to Steve
- [ ] Google Business Profile audited (primary category = `Pest Control Service`, service areas + hours match this site, NAP byte-identical to `src/data/business.ts`)
- [ ] Real photos for termite-treatment, bed-bug-treatment, rodent-control, lawn-fertilization, weed-control (currently aliased to closest available)
- [ ] Google Analytics 4 or Plausible tag added to `BaseLayout.astro` head
- [ ] Google Search Console verified; sitemap submitted at `https://bullseyepestmanagement.com/sitemap-index.xml`
- [ ] Schema validated via Google Rich Results Test on Home, one Service page, one City page, one Blog post
- [ ] Real reviews imported from GBP into a Reviews section (optional but high-conversion)
- [ ] `AggregateRating` in `business.ts` set to real GBP rating (currently null — do not invent numbers)

## Credits

- Owner / Certified Applicator: Steve Moseley (TPCL 0609490)
- Website by Lead Kulture Solutions LLC
