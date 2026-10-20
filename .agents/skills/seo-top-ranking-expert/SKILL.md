---
name: seo-top-ranking-expert
description: >-
  Elite Technical SEO, Google Search Console indexing, and top-ranking optimization specialist.
  Use this skill whenever setting up, auditing, or optimizing SEO, metadata, canonical URLs,
  sitemaps (sitemap.ts), robots.txt (robots.ts), schema markup (JSON-LD), Core Web Vitals,
  Vercel custom domain hosting redirects, DNS configuration, and Google Search Console (GSC)
  verification and rapid indexing for #1 search rankings.
---

# Elite Technical SEO, Fast Indexing & Top Ranking Playbook

> *"Google doesn't rank websites; it ranks answers that load instantaneously, display impeccable authority, and provide flawless semantic clarity."*

This skill transforms you into a world-class Technical SEO Architect, Vercel Infrastructure Specialist, and Search Console Indexing Expert. It provides end-to-end protocols for taking modern web applications (particularly Next.js App Router on Vercel) from pre-launch code to verified, rapidly indexed, top-ranking search results.

---

## 1. The 4-Phase Indexing & Ranking Lifecycle

```
┌────────────────────────┐      ┌────────────────────────┐
│  Phase 1: Code Architecture │ ────> │ Phase 2: Vercel & Domain │
│  - Semantic HTML & H1       │      │  - Apex / WWW Redirect  │
│  - sitemap.ts & robots.ts   │      │  - Noindex Preview URL  │
│  - Dynamic Meta & OpenGraph │      │  - Clean Edge Headers   │
└────────────────────────┘      └────────────────────────┘
            │                                 │
            ▼                                 ▼
┌────────────────────────┐      ┌────────────────────────┐
│  Phase 3: GSC & Indexing    │ ────> │ Phase 4: Top-1 Ranking  │
│  - DNS TXT Verification    │      │  - Search Intent Match  │
│  - Live Inspection & Crawl │      │  - Core Web Vitals LCP  │
│  - Indexing API Trigger    │      │  - Authority & CTR Hooks│
└────────────────────────┘      └────────────────────────┘
```

---

## 2. Phase 1: Next.js App Router Technical Architecture

### 2.1 Dynamic & Type-Safe Metadata (`layout.tsx` / `page.tsx`)
Never leave metadata incomplete. Google demands canonical consistency, clear keyword hierarchy, and rich social tags.

```typescript
// src/app/layout.tsx or page.tsx
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://decodecity.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DecodeCity Tech Innovations — High-Velocity Web & Custom Software",
    template: "%s | DecodeCity Tech Innovations"
  },
  description: "DecodeCity engineers high-velocity Web Platforms, enterprise CRMs, autonomous Process Pipelines, and real-time Telemetry Dashboards for ambitious startups and global enterprises.",
  keywords: [
    "Next.js Development Agency",
    "Custom CRM Development",
    "Workflow Automation Engineering",
    "Real-Time Telemetry Dashboards",
    "High-Performance Web Products",
    "Bangalore Tech Innovations Studio"
  ],
  alternates: {
    canonical: "/"
  },
  authors: [{ name: "DecodeCity Tech Innovations", url: SITE_URL }],
  creator: "DecodeCity Tech Innovations",
  publisher: "DecodeCity Tech Innovations",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "DecodeCity Tech Innovations — Digital Systems, CRMs, Automations & Dashboards",
    description: "High-velocity Web Platforms, enterprise CRMs, autonomous Process Pipelines, and real-time Telemetry Dashboards engineered right the first time.",
    url: SITE_URL,
    siteName: "DecodeCity Tech Innovations",
    images: [
      {
        url: "/og_image.jpg",
        width: 1200,
        height: 630,
        alt: "DecodeCity Tech Innovations Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DecodeCity Tech Innovations — Digital Systems & Custom Software",
    description: "High-velocity Web Platforms, enterprise CRMs, autonomous Process Pipelines, and real-time Telemetry Dashboards.",
    images: ["/og_image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
```

### 2.2 Next.js Native Sitemap Engine (`src/app/sitemap.ts`)
Create dynamic, automatically cached sitemaps that Google can parse instantly.

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://decodecity.com";
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}#services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}#work`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}#process`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}#pricing`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}#contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
```

### 2.3 Next.js Native Robots Directive (`src/app/robots.ts`)
```typescript
// src/app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://decodecity.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
```

### 2.4 Rich Schema.org (JSON-LD) Injection
Google uses Structured Data to award Rich Snippets, Knowledge Graph cards, and stellar search presence.
Inject structured data directly into `<head>` or the Root Layout:

```tsx
// Component or script in layout.tsx
export function JsonLdSchema() {
  const siteUrl = "https://decodecity.com";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "DecodeCity Tech Innovations",
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/logo.png`,
          "width": 2056,
          "height": 765
        },
        "sameAs": [
          "https://github.com/decodecity",
          "https://www.linkedin.com/company/decodecity",
          "https://twitter.com/decodecity"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "contact@decodecity.com",
          "areaServed": "Worldwide",
          "availableLanguage": ["English", "Hindi", "Kannada"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Outer Ring Road, Tech Corridor",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560092",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        "name": "DecodeCity Tech Innovations",
        "parentOrganization": { "@id": `${siteUrl}/#organization` },
        "url": siteUrl,
        "image": `${siteUrl}/og_image.jpg`,
        "priceRange": "$$$$",
        "telephone": "+91-9880000000",
        "description": "High-velocity Web Platforms, enterprise CRMs, autonomous Process Pipelines, and real-time Telemetry Dashboards.",
        "areaServed": ["United States", "European Union", "India", "Global"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Engineering Capabilities",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "High-Conversion Web & Headless Products"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom CRM & Operations Hubs"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Autonomous Workflows & Event Mesh"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Real-Time Telemetry & Executive BI"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

---

## 3. Phase 2: Vercel Hosting & Custom Domain Cutover Protocol

### 3.1 Preventing Duplicate Content on Vercel Preview Domains
When deploying on Vercel, by default both `yourapp.vercel.app` and `yourdomain.com` exist.
> ⚠️ **CRITICAL PENALTY RISK**: If Google indexes `*.vercel.app`, your primary domain will suffer a canonical penalty.

**Prevention Rules in `next.config.ts`**:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "(?<subdomain>.*)\\.vercel\\.app",
          },
        ],
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Force apex domain or www (choose one primary):
      // Redirect www to apex domain permanently (308)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.decodecity.com" }],
        destination: "https://decodecity.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

### 3.2 DNS Records for Domain Registrar (Cloudflare, Namecheap, GoDaddy)
Configure authoritative DNS in Vercel:
1. **Apex (`@` or `decodecity.com`)**:
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21` (Vercel IP)
2. **Subdomain (`www`)**:
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`
3. In Vercel Project Settings ➔ **Domains**:
   - Add `decodecity.com` (Set as Primary Domain).
   - Add `www.decodecity.com` (Vercel will offer to auto-redirect to `decodecity.com`).
   - Enable **Automatic SSL Certificate** (Let's Encrypt).

---

## 4. Phase 3: Google Search Console (GSC) Verification & Rapid Indexing

### 4.1 Verification Methods (Order of Preference)
1. **DNS TXT Record (Best & Covers all subdomains)**:
   - In GSC: Select **Domain Property** (`decodecity.com`).
   - Copy the verification token: `google-site-verification=XXXXXXXXXXXXXXXXXXXX`.
   - Add a DNS `TXT` record at your registrar:
     - Name: `@`
     - Value: `google-site-verification=XXXXXXXXXXXXXXXXXXXX`
   - Click **Verify**.
2. **HTML Tag Fallback (In Next.js Metadata)**:
   - Add to `src/app/layout.tsx`:
     ```typescript
     verification: {
       google: "XXXXXXXXXXXXXXXXXXXX",
     }
     ```

### 4.2 Immediate Sitemap Submission
1. In GSC left navigation ➔ **Sitemaps**.
2. Under "Add a new sitemap", type: `sitemap.xml`.
3. Click **Submit**.
4. Status should immediately show **Success** (Green) with parsed URL count.

### 4.3 Instant URL Inspection & Manual Priority Crawl
Do not wait days for Googlebot to discover the new domain:
1. Top Search Bar in GSC: Enter `https://decodecity.com/` and press Enter.
2. If it states *"URL is not on Google"*:
   - Click **Test Live URL** (Wait 60s for Googlebot smartphone emulation).
   - Verify:
     - ✅ HTTP 200 OK
     - ✅ Page is indexable (Refer to live screenshot in GSC)
     - ✅ Structured Data (Organization, ProfessionalService) detected with 0 errors.
   - Click **Request Indexing**.
3. Repeat for key canonical routes: `/`, `/#work`, `/#services`, `/#pricing`.
4. URL moves into the High-Priority Crawl Queue (typically crawled within 4 to 24 hours).

---

## 5. Phase 4: Top-1 Ranking Formula

### 5.1 Core Web Vitals (CWV) Targets (Passing All 3 is a Direct Ranking Factor)
| Metric | Threshold | Technique |
| :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | `< 1.2s` | Set `priority` on hero image; use modern WebP/AVIF; Next.js edge font optimization (`next/font`). |
| **INP (Interaction to Next Paint)** | `< 100ms` | Keep heavy client JS out of the main thread; use React Server Components (RSC) by default. |
| **CLS (Cumulative Layout Shift)** | `< 0.05` | Always provide explicit `width` & `height` on images; prevent unsized banner injection. |

### 5.2 Search Intent & Keyword Hierarchy
- **Primary Keyword**: Put in `<title>`, `<h1>`, the first 100 words of copy, and image alt text.
- **Secondary Intent Keywords**: Use as `<h2>` subheadings (e.g. *"Next.js & Headless Web Products"*, *"Custom B2B CRM Pipelines"*).
- **CTR Title Tag Formula**:
  `[Primary Keyword] — [Compelling Value Proposition / Differentiator] | [Brand]`
  *Example:* `Custom CRM & High-Velocity Web Engineering — DecodeCity Tech Innovations`

---

## 6. Reference Documentation Included in Skill

- Detailed checklists and runbooks are available in the [`references/`](./references/) folder:
  - [`technical_seo_checklist.md`](./references/technical_seo_checklist.md): Comprehensive pre-launch and launch day audit.
  - [`gsc_indexing_playbook.md`](./references/gsc_indexing_playbook.md): Diagnostics for indexing statuses and crawl issue resolution.
  - [`vercel_domain_runbook.md`](./references/vercel_domain_runbook.md): DNS records, SSL troubleshooting, and 308 canonical redirection.
