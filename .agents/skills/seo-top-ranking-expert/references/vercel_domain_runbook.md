# Vercel Custom Domain & Hosting Cutover Runbook

A guide for hosting Next.js projects on Vercel, attaching a custom production domain, configuring DNS records, enforcing SSL, and preventing canonical indexing conflicts.

---

## 1. Adding Your Domain in Vercel

1. Log into your [Vercel Dashboard](https://vercel.com/dashboard).
2. Select your project (`decodecity`).
3. Navigate to **Settings** ➔ **Domains**.
4. In the text field, enter your production domain: `decodecity.com`.
5. Vercel will ask how you want to configure `www`:
   - Recommended: **Redirect `www.decodecity.com` to `decodecity.com`** (or vice versa).
   - This ensures all traffic and link equity consolidates on one single canonical host.
6. Click **Add**.

---

## 2. DNS Configuration at Your Registrar (Namecheap, Cloudflare, GoDaddy, Google Domains)

In your DNS Management dashboard, add the following authoritative records:

### Method A: Recommended A & CNAME Records

| Type | Name / Host | Target / Value | Purpose |
| :--- | :--- | :--- | :--- |
| **A** | `@` (or leave blank) | `76.76.21.21` | Points apex domain directly to Vercel global edge |
| **CNAME** | `www` | `cname.vercel-dns.com` | Points www to Vercel auto-redirect edge |

### Method B: Cloudflare DNS Proxy (Special Considerations)
If you manage DNS through Cloudflare:
- You can leave Proxy status **DNS Only** (Grey Cloud) during initial Vercel SSL generation.
- Once Vercel issues the certificate, you can turn on **Proxied** (Orange Cloud).
- In Cloudflare SSL/TLS settings, set SSL mode to **Full (Strict)**.

---

## 3. SSL / TLS Certificate Provisioning

- Vercel automatically requests and provisions a free SSL certificate from **Let's Encrypt**.
- Validation occurs via the DNS records above.
- Typical issuance time: **1 to 5 minutes** after DNS records resolve.
- If status shows *"Invalid Configuration"*:
  - Use `dig decodecity.com +trace` or [whatsmydns.net](https://www.whatsmydns.net) to check global propagation.
  - Wait 5–10 minutes and click **Refresh** in the Vercel Domains tab.

---

## 4. Preventing Indexing of `*.vercel.app`

By default, Vercel creates a deployment URL like `decodecity-xyz.vercel.app`. You must prevent search engines from indexing this secondary domain.

### Option 1: Vercel Edge Headers in `next.config.ts`
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: process.env.VERCEL_ENV === "production" && !process.env.VERCEL_URL?.includes("decodecity.com")
              ? "noindex, nofollow"
              : "all",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### Option 2: Self-Referencing Canonical in Root Layout
Next.js `<link rel="canonical" href="https://decodecity.com" />` tells Google that even if a crawler stumbles upon `*.vercel.app`, the true canonical authority belongs solely to `https://decodecity.com`.

---

## 5. Security & Edge Headers for Quality Signals

Google ranks secure, modern HTTP/2 / HTTP/3 endpoints with clean headers higher. In `next.config.ts`, include security headers:

```typescript
const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
];
```
