import React from "react";

// Official X (formerly Twitter) Icon SVG
export const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Official LinkedIn Icon SVG
export const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.67 1.67 0 0 0-1.67 1.67 1.67 1.67 0 0 0 1.67 1.67 1.67 1.67 0 0 0 1.67-1.67c0-.92-.75-1.67-1.67-1.67z" />
  </svg>
);

// Tech Stack Brand Logos
export function TechLogo({ name }: { name: string }) {
  if (name.includes("Next.js")) {
    return (
      <svg width="18" height="18" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="90" fill="#000000" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#nextG1)" />
        <path d="M115 54H127V126H115V54Z" fill="url(#nextG2)" />
        <defs>
          <linearGradient id="nextG1" x1="109.5" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nextG2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (name.includes("TypeScript")) {
    return (
      <svg width="18" height="18" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#3178C6" />
        <path d="M72 78.4c2.2 3.6 5.6 5.8 10.2 5.8 4.4 0 7.2-2.2 7.2-5.4 0-3.6-2.8-5-7.8-7.2l-4.2-1.8c-8.6-3.8-12.8-8.8-12.8-16.6 0-10.2 7.8-17.2 20.4-17.2 8.4 0 14.6 2.8 19 8.6l-8.6 6.2c-2.4-3.4-5.2-4.8-9.6-4.8-4.4 0-6.8 2.2-6.8 5 0 3.2 2.6 4.6 7.4 6.6l4.2 1.8c9.6 4.2 13.8 9.2 13.8 17.2 0 11.2-8.6 18-21.6 18-10.8 0-18.4-4-23-11.4l10.2-6.8zm-44-38.4h42v10.6h-14.8v59.4h-12.4v-59.4h-14.8v-10.6z" fill="#FFFFFF" />
      </svg>
    );
  }
  if (name.includes("PostgreSQL")) {
    return (
      <svg width="18" height="18" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#336791" />
        <path d="M64 24c-22 0-38 16-38 38 0 14 8 26 20 32v14l16-6v-8h4c22 0 38-16 38-38s-16-32-40-32zm0 12c16 0 28 10 28 24 0 13-10 24-25 24h-3v10l-10 4v-14h-2c-10 0-16-8-16-18 0-17 12-30 28-30z" fill="#FFFFFF" />
      </svg>
    );
  }
  if (name.includes("Tailwind")) {
    return (
      <svg width="18" height="18" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#0F172A" />
        <path d="M64 42c-10 0-16 5-18 15 4-5 9-7 15-5 4 1 6 4 9 7 5 5 11 11 24 11 10 0 16-5 18-15-4 5-9 7-15 5-4-1-6-4-9-7-5-5-11-11-24-11zm-24 24c-10 0-16 5-18 15 4-5 9-7 15-5 4 1 6 4 9 7 5 5 11 11 24 11 10 0 16-5 18-15-4 5-9 7-15 5-4-1-6-4-9-7-5-5-11-11-24-11z" fill="#38BDF8" />
      </svg>
    );
  }
  if (name.includes("Python")) {
    return (
      <svg width="18" height="18" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#20232A" />
        <path d="M63.5 24c-18 0-17 8-17 8l.02 8h17.5v2.5h-24.5s-11.5 1.3-11.5 17c0 15.6 10 15 10 15h6v-8.5c0-10 8.5-9.5 8.5-9.5h16.5s8 .2 8-8v-17s1.2-8-17-8zm-9 5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm10 75c18 0 17-8 17-8l-.02-8h-17.5v-2.5h24.5s11.5-1.3 11.5-17c0-15.6-10-15-10-15h-6v8.5c0 10-8.5 9.5-8.5 9.5h-16.5s-8-.2-8 8v17s-1.2 8 17 8zm9-5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="#FFD43B" />
      </svg>
    );
  }
  if (name.includes("AWS")) {
    return (
      <svg width="18" height="18" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#232F3E" />
        <path d="M38 52l6 18h6l-9-26h-6l-9 26h6l6-18zm26 0l4 18h6l-8-26h-5l-8 26h6l5-18zm24-8h-6l-6 26h6l4-18 5 18h5l7-26h-6l-4 17-5-17zm-52 42c18 10 38 10 56 0 2-1 3 1 1 2-20 12-42 12-60 0-2-1 1-3 3-2z" fill="#FF9900" />
      </svg>
    );
  }
  if (name.includes("Docker")) {
    return (
      <svg width="18" height="18" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#0db7ed" />
        <path d="M36 54h10v10H36zm14 0h10v10H50zm14 0h10v10H64zm14 0h10v10H78zm-28-14h10v10H50zm14 0h10v10H64zm14 0h10v10H78zm-14-14h10v10H64zM24 74c2 18 16 32 40 32 30 0 46-16 46-30 0-2-2-4-4-4h-7c-2-6-8-10-14-10-2 0-4 1-5 2-3-8-12-14-22-14H24v24z" fill="#FFFFFF" />
      </svg>
    );
  }
  if (name.includes("Redis")) {
    return (
      <svg width="18" height="18" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#D82C20" />
        <path d="M64 34L32 48l32 14 32-14L64 34zm-32 26l32 14 32-14v12L64 86 32 72V60zm0 20l32 14 32-14v12L64 106 32 92V80z" fill="#FFFFFF" />
      </svg>
    );
  }
  if (name.includes("ClickHouse")) {
    return (
      <svg width="18" height="18" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#FAFAFA" />
        <path d="M26 30h10v68H26zm16 14h10v40H42zm16-20h10v80H58zm16 26h10v28H74zm16-16h10v60H90zm16 20h10v20h-10z" fill="#F89D13" />
      </svg>
    );
  }
  if (name.includes("Stripe")) {
    return (
      <svg width="18" height="18" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#635BFF" />
        <path d="M57 52c-7-2-11-4-11-8 0-4 4-7 10-7 8 0 14 3 17 8l9-7c-6-7-14-11-26-11-13 0-22 7-22 18 0 12 8 16 19 19 8 2 11 5 11 9 0 5-4 8-11 8-9 0-16-4-20-10l-9 7c6 9 16 14 29 14 14 0 23-7 23-19 0-12-8-17-20-20z" fill="#FFFFFF" />
      </svg>
    );
  }
  if (name.includes("Shopify")) {
    return (
      <svg width="18" height="18" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#95BF47" />
        <path d="M84 36c-1-3-3-5-6-5h-4c-1-6-5-11-10-11-6 0-10 5-11 11h-4c-3 0-5 2-6 5l-11 52c-1 3 1 6 4 6h46c3 0 5-3 4-6L84 36zm-20-8c2 0 4 3 5 8h-10c1-5 3-8 5-8zm-5 28c3 4 8 7 13 7 4 0 7-2 7-5 0-7-18-6-18-17 0-6 5-11 12-11 5 0 9 2 12 5l-3 4c-3-2-6-3-9-3-4 0-6 2-6 5 0 7 18 6 18 17 0 6-5 11-13 11-6 0-11-3-15-7l4-5z" fill="#FFFFFF" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 128 128">
      <rect width="128" height="128" rx="20" fill="#111827" />
      <path d="M64 36a28 28 0 100 56 28 28 0 000-56zm0 10a18 18 0 110 36 18 18 0 010-36zm0 10a8 8 0 100 16 8 8 0 000-16z" fill="#F89D13" />
    </svg>
  );
}
