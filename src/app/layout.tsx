import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://decodecity.com"),
  title: {
    default: "DecodeCity — Custom Software, CRMs & Web Systems",
    template: "%s | DecodeCity",
  },
  description:
    "DecodeCity engineers high-velocity web platforms, custom enterprise CRMs, and autonomous workflow pipelines for ambitious startups and growing businesses.",
  keywords: [
    "DecodeCity",
    "Decode City",
    "DecodeCity Bangalore",
    "DecodeCity Bengaluru",
    "DecodeCity Software",
    "DecodeCity Near Me",
    "Decodcity Tech",
    "Decodecity Techinovations",
    "DecodeCity Techinnovations",
    "DecodeCity Tech Innovations",
    "Decode City Software",
    "DecodeCity Software Bangalore",
    "website at low cost",
    "low cost website",
    "affordable website development",
    "professional website",
    "webiste professional",
    "professional web design",
    "CRM",
    "custom CRM",
    "CRM software",
    "CRM for business",
    "automation",
    "autmartion",
    "workflow automation",
    "business process automation",
    "business growth",
    "businesss growth",
    "software for business growth",
    "digital systems for business growth",
    "Tech Startup Bangalore",
    "Web Development Bangalore",
    "Next.js Development Agency",
    "CRM Development",
    "Workflow Automation Engineering",
    "Analytics Dashboards",
    "Swiss Style Design",
  ],
  authors: [{ name: "DecodeCity Tech Innovations", url: "https://decodecity.com" }],
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
  alternates: {
    canonical: "https://decodecity.com",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  openGraph: {
    title: "DecodeCity — Custom Software, CRMs & Web Systems",
    description:
      "High-velocity web platforms, custom enterprise CRMs, and autonomous workflow pipelines engineered for real business growth.",
    url: "https://decodecity.com",
    siteName: "DecodeCity Tech Innovations",
    images: [
      {
        url: "/og_image.jpg",
        width: 1200,
        height: 630,
        alt: "DecodeCity Tech Innovations — Custom Software & Digital Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DecodeCity — Custom Software, CRMs & Web Systems",
    description:
      "High-velocity web platforms, custom enterprise CRMs, and autonomous workflow pipelines.",
    images: ["/og_image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://decodecity.com/#website",
      url: "https://decodecity.com",
      name: "DecodeCity Tech Innovations",
      alternateName: "DecodeCity",
      description:
        "High-velocity web platforms, enterprise CRMs, and autonomous workflow pipelines.",
      publisher: {
        "@id": "https://decodecity.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://decodecity.com/#organization",
      name: "DecodeCity Tech Innovations",
      alternateName: [
        "Decode City",
        "DecodeCity Software",
        "DecodeCity Bangalore",
        "DecodeCity Bengaluru",
        "DecodeCity Near Me",
        "DecodeCity Tech",
        "Decodcity Tech",
        "Decodecity Techinovations",
        "DecodeCity Techinnovations",
        "DecodeCity Tech Innovations",
        "Decode City Software",
      ],
      url: "https://decodecity.com",
      logo: {
        "@type": "ImageObject",
        url: "https://decodecity.com/logo.png",
        width: 2056,
        height: 765,
      },
      sameAs: [
        "https://github.com/decodecity",
        "https://linkedin.com/company/decodecity",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "decodecitytech@gmail.com",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Hindi", "Kannada"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "BLOCK-G, 1202, Peenya Main Rd, Platinum City, Phase -1, Yeswanthpur",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560022",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "13.0355",
        longitude: "77.5331",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://decodecity.com/#service",
      name: "DecodeCity Tech Innovations",
      alternateName: ["Decode City Software", "DecodeCity Bangalore", "Decodcity Tech"],
      parentOrganization: { "@id": "https://decodecity.com/#organization" },
      url: "https://decodecity.com",
      image: "https://decodecity.com/og_image.jpg",
      priceRange: "$$$$",
      telephone: "+91-9880000000",
      description:
        "High-velocity Web Platforms, enterprise CRMs, autonomous Process Pipelines, and real-time Telemetry Dashboards.",
      areaServed: ["United States", "European Union", "India", "Global"],
      knowsAbout: [
        "Professional Website Development",
        "Website at Low Cost and High Velocity",
        "Custom CRM Systems",
        "Workflow Automation & AI BPM",
        "Software Engineering for Business Growth",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Engineering Capabilities",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Professional Websites at Accessible Sprint Cost",
              description: "High-conversion, fast-loading professional websites engineered to drive business growth."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom CRM & Lead Pipeline Systems",
              description: "Custom relational CRM software to eliminate manual spreadsheets and automate client onboarding."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Autonomous Workflow Automation",
              description: "Event-driven workflow automations, API integration meshes, and background worker pipelines."
            }
          }
        ]
      }
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
