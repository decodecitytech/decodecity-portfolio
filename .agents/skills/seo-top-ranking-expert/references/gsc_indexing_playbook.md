# Google Search Console (GSC) Rapid Indexing Playbook

A tactical manual for verifying your domain in Google Search Console, submitting sitemaps, triggering priority indexing, and resolving common crawl statuses.

---

## 1. Domain Property Setup & Verification

Always verify as a **Domain Property** (e.g. `decodecity.com`) rather than a URL Prefix property. A Domain Property covers `https://`, `http://`, `www.`, and all subdomains automatically.

### Step-by-Step DNS Verification:
1. Open [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property** in the top-left dropdown.
3. Select **Domain** (left card) and type: `decodecity.com` (without `https://` or trailing slashes).
4. Google will generate a DNS TXT record:
   ```
   google-site-verification=AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
   ```
5. Log into your Domain Registrar or DNS Manager (e.g., Cloudflare, Namecheap, GoDaddy):
   - Add Record:
     - **Type**: `TXT`
     - **Name / Host**: `@` (or `decodecity.com`)
     - **Content / Value**: `google-site-verification=AbCdEfGhIjKlMnOpQrStUvWxYz1234567890`
     - **TTL**: Auto or 300 seconds
6. Return to Google Search Console and click **Verify**.
   *(If it doesn't verify immediately, allow 2–5 minutes for DNS propagation).*

---

## 2. Sitemap Submission & Validation

1. In GSC, click **Sitemaps** under the **Indexing** section in the left sidebar.
2. Under **Add a new sitemap**, type: `sitemap.xml`.
3. Click **Submit**.
4. Expected outcome:
   - **Status**: `Success` (Green).
   - **Discovered pages**: Matches your active pages.

> 💡 **Troubleshooting "Couldn't fetch" error**:
> - Confirm `https://decodecity.com/sitemap.xml` returns HTTP 200 in your browser or with `curl -I`.
> - Check that your Next.js sitemap route has `export const dynamic = 'force-dynamic'` or returns valid XML headers `Content-Type: application/xml`.
> - Re-submit the sitemap after 1 hour if Vercel deployment just completed.

---

## 3. High-Priority Manual Indexing Request

Don't wait for Google's organic crawl cycle. Force an immediate inspection:

1. Click the top search bar: **"Inspect any URL in 'decodecity.com'"**.
2. Enter the canonical homepage URL: `https://decodecity.com/` and press **Enter**.
3. It will display the live index state. Click **Test Live URL** (wait 30–60 seconds).
4. Check the results:
   - **URL is available to Google**: Yes ✅
   - **Crawl allowed**: Yes ✅
   - **Page fetch**: Successful ✅
   - **Canonical**: User-declared matches Google-selected ✅
   - **Structured data**: Valid schemas detected ✅
5. Click **Request Indexing**.
6. Repeat this process for secondary major landing pages (e.g., service pages, case study pages).

---

## 4. Diagnosing & Fixing GSC Indexing Statuses

### Status 1: "Discovered – currently not indexed"
- **Meaning**: Google found the URL (via sitemap or link) but hasn't crawled it yet due to crawl budget or perceived priority.
- **Fix**:
  1. Internal linking: Link to this page directly from the homepage or main navigation.
  2. Test Live URL in GSC and click **Request Indexing**.
  3. Build 2–3 high-quality external social/directory signals (e.g., Product Hunt, GitHub repo URL, LinkedIn company page).

### Status 2: "Crawled – currently not indexed"
- **Meaning**: Google visited and parsed the page, but decided not to add it to the search index.
- **Root Cause**: Low content quality, duplicate content, thin copy, or poor search intent alignment.
- **Fix**:
  1. Enrich page copy with deep, original domain expertise (case studies, metrics, technical schemas).
  2. Increase word count and specificity (replace generic marketing claims with concrete benchmarks).
  3. Ensure page is not nearly identical to another page on the site.

### Status 3: "Duplicate without user-selected canonical"
- **Meaning**: Google saw the same content on multiple URLs (e.g., `decodecity.com` vs `www.decodecity.com` vs `decodecity.vercel.app`).
- **Fix**:
  1. In `src/app/layout.tsx`, ensure `metadataBase` and `alternates: { canonical: '/' }` are declared.
  2. In `next.config.ts`, verify that `www` redirects to apex with a permanent 308 redirect.
  3. Verify that preview deployments send `X-Robots-Tag: noindex`.

### Status 4: "Page with redirect"
- **Meaning**: Google tried to index a URL that returns 301/308 (e.g., `http://` or `www.`).
- **Fix**: Normal for non-canonical variations. Ensure your `sitemap.xml` **ONLY** lists the final 200 OK canonical destinations, never redirected URLs.
