# Comprehensive Technical SEO Checklist

A battle-tested audit checklist for Next.js applications deployed to Vercel targeting #1 organic search rankings.

---

## 1. On-Page HTML & Semantic Structure

- [ ] **Single H1 Tag**: Ensure exactly one `<h1>` exists per page containing the primary keyword (e.g., *"Custom Software, High-Velocity Web & CRM Systems"*).
- [ ] **Heading Order**: Strictly follow `<h1>` ➔ `<h2>` ➔ `<h3>`. Never skip levels for visual sizing (use CSS classes for sizing instead).
- [ ] **HTML Lang Attribute**: Ensure `<html lang="en">` is present in root `layout.tsx`.
- [ ] **Viewport Tag**: Verified responsive viewport meta tag with `width=device-width, initial-scale=1`.
- [ ] **Semantic Elements**: Proper use of `<main>`, `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, and `<footer>`.
- [ ] **Image Optimization**:
  - [ ] Every image has a descriptive, keyword-rich `alt` attribute.
  - [ ] Above-the-fold hero image marked with `priority` attribute.
  - [ ] All images have defined `width` and `height` to prevent Cumulative Layout Shift (CLS).
  - [ ] Next.js automatic WebP/AVIF format serving verified.

---

## 2. Metadata & Meta Tags

- [ ] **Title Tag**:
  - [ ] Length: 50–60 characters.
  - [ ] Formula: `[Primary Keyword] — [Unique Value Proposition] | [Brand Name]`.
  - [ ] Keyword front-loaded (near the beginning of the title).
- [ ] **Meta Description**:
  - [ ] Length: 145–158 characters.
  - [ ] Includes target keyword naturally.
  - [ ] Contains a clear Call-To-Action (e.g. *"Explore case studies and sprint pricing."*).
- [ ] **Canonical URL**:
  - [ ] Explicitly declared with `alternates: { canonical: "/" }` or full URL.
  - [ ] Self-referencing canonical to avoid duplicate content penalties.
- [ ] **OpenGraph (Facebook / LinkedIn / WhatsApp)**:
  - [ ] `og:title`, `og:description`, `og:url`, `og:site_name`, `og:type` (`website`).
  - [ ] `og:image`: High-contrast 1200×630 image with `alt` description.
- [ ] **Twitter Card**:
  - [ ] `twitter:card`: `summary_large_image`.
  - [ ] `twitter:title`, `twitter:description`, `twitter:image`.
- [ ] **Favicons & Touch Icons**:
  - [ ] Multi-resolution `favicon.ico` (16×16, 32×32, 48×48).
  - [ ] `icon.png` (512×512 PNG).
  - [ ] `apple-icon.png` (180×180 PNG).

---

## 3. Structured Data (Schema.org / JSON-LD)

- [ ] **Organization Schema**: Company name, logo URL, website URL, sameAs social links, contact point, address.
- [ ] **ProfessionalService / LocalBusiness / WebSite Schema**: Price range, service catalog, descriptions, telephone, area served.
- [ ] **Validation**: Tested in [Google Rich Results Test](https://search.google.com/test/rich-results) with **0 errors and 0 warnings**.

---

## 4. Crawling & Indexation Configuration

- [ ] **Dynamic Sitemap (`src/app/sitemap.ts`)**:
  - [ ] Returns valid XML at `/sitemap.xml`.
  - [ ] Canonical URLs only (no redirects, no 404s, no noindex URLs).
  - [ ] Includes `lastModified`, `changeFrequency`, and `priority`.
- [ ] **Robots File (`src/app/robots.ts`)**:
  - [ ] Accessible at `/robots.txt`.
  - [ ] Allows `User-agent: *` for public pages.
  - [ ] Points to canonical `/sitemap.xml`.
  - [ ] Disallows internal API routes (`/api/`) and build internals (`/_next/`).
- [ ] **Noindex on Staging**: Ensure preview environments (`*.vercel.app`) send `X-Robots-Tag: noindex`.

---

## 5. Performance & Core Web Vitals (CWV)

- [ ] **Lighthouse Performance Score**: > 95/100 on desktop, > 90/100 on mobile.
- [ ] **Largest Contentful Paint (LCP)**: < 1.2s.
- [ ] **Interaction to Next Paint (INP)**: < 100ms.
- [ ] **Cumulative Layout Shift (CLS)**: < 0.05.
- [ ] **Font Delivery**: Using `next/font` with `display: 'swap'` to avoid FOIT (Flash of Invisible Text).
