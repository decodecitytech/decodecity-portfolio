import {
  BuildingInfo,
  ServiceData,
  ProjectItem,
  PricingCategory,
  ProcessMilestone,
  TestimonialItem,
  NexProcessStep,
  NexPricingPlan,
  AlturaTestimonial,
  CityDistrict,
  CitySector,
  PortfolioProject,
} from "./types";

export const BUILDINGS: BuildingInfo[] = [
  {
    id: "web",
    name: "Web & Product Platform",
    code: "01 // WEB & PRODUCT",
    title: "High-Performance Digital Products",
    metric: "Next.js 16 · Sub-second TTFB · Precision UI",
    accentColor: "#F89D13",
    centerX: "25%",
    centerY: "28%",
    hudLeft: "26%",
    hudTop: "22%",
    points: "140,360 180,240 310,80 540,80 670,220 670,380 580,470 490,480 360,490 150,440",
    scopeText: "I want to build a high-performance Web & Product Platform."
  },
  {
    id: "crm",
    name: "CRM & Systems Architecture",
    code: "02 // CRM & SYSTEMS",
    title: "Unified Business Operations",
    metric: "Zero Data Silos · Pipeline Automation · Lead Sync",
    accentColor: "#8B5CF6",
    centerX: "50%",
    centerY: "26%",
    hudLeft: "50%",
    hudTop: "22%",
    points: "500,20 740,10 830,100 990,170 1020,430 930,550 730,550 660,420 650,220 500,150",
    scopeText: "We need an Enterprise CRM & Workflow Automation system."
  },
  {
    id: "automation",
    name: "Autonomous Workflows",
    code: "03 // AUTOMATION",
    title: "Event-Driven System Mesh",
    metric: "Multi-System Sync · 10x Velocity · Zero Manual Tasks",
    accentColor: "#F97316",
    centerX: "78%",
    centerY: "44%",
    hudLeft: "76%",
    hudTop: "28%",
    points: "960,230 1150,210 1250,260 1460,380 1460,650 1280,710 1080,680 980,540 960,380",
    scopeText: "Looking for autonomous workflows, background process automations, and system integration."
  },
  {
    id: "cloud",
    name: "Cloud Fabric & Data",
    code: "04 // CLOUD & DATA",
    title: "Resilient Cloud Infrastructure",
    metric: "99.99% SLA · Redis Caching · Autonomous CI/CD",
    accentColor: "#0071E3",
    centerX: "25%",
    centerY: "64%",
    hudLeft: "25%",
    hudTop: "52%",
    points: "130,560 180,490 350,470 490,490 620,560 630,760 550,860 320,850 140,720",
    scopeText: "We need resilient cloud infrastructure, databases, and microservices."
  },
  {
    id: "analytics",
    name: "Telemetry & Dashboards",
    code: "05 // TELEMETRY",
    title: "Real-time Executive Intelligence",
    metric: "Live Telemetry · Anomaly Detection · Actionable KPIs",
    accentColor: "#10B981",
    centerX: "67%",
    centerY: "73%",
    hudLeft: "67%",
    hudTop: "60%",
    points: "740,550 920,520 1260,570 1290,750 1260,900 1170,980 940,980 770,860 740,710",
    scopeText: "We need real-time data analytics dashboards and business intelligence telemetry."
  }
];

export const SERVICES_DATA: ServiceData[] = [
  {
    id: "web",
    num: "01",
    title: "High-Conversion Web & Headless Products",
    desc: "0.38s page loads that convert casual traffic into committed accounts. Next.js 15, edge caching, and mobile touch ergonomics.",
    category: "NEXT.JS 15 / HEADLESS STOREFRONTS / SUB-SECOND TTFB",
    linkText: "Scope Web Application",
    mockupImage: "/mockup_web_card_2x.png",
    scope: "Web & Headless Products"
  },
  {
    id: "crm",
    num: "02",
    title: "Custom CRM & Operations Hubs",
    desc: "Eliminate 92% of manual spreadsheets. Relational PostgreSQL pipelines, custom deal stages, and automated lead triage.",
    category: "RELATIONAL POSTGRESQL / CUSTOM DEAL PIPELINES / ZERO DATA SILOS",
    linkText: "Scope Custom CRM",
    mockupImage: "/mockup_crm_card.png",
    scope: "CRM & Operations Infrastructure"
  },
  {
    id: "automation",
    num: "03",
    title: "Autonomous Workflows & Event Mesh",
    desc: "Connect payment webhooks, customer onboarding, and back-office sync with zero human bottlenecks.",
    category: "ASYNC EVENT BUS / WEBHOOK IDEMPOTENCY / AI AGENT PIPELINES",
    linkText: "Scope Workflow Automation",
    mockupImage: "/mockup_automation_card.png",
    scope: "Autonomous Workflow Mesh"
  },
  {
    id: "cloud",
    num: "04",
    title: "High-Availability Cloud Fabric",
    desc: "Engineered for 99.99% uptime. Automated database failover, in-memory Redis caching, and zero-downtime container builds.",
    category: "AWS CLOUD / REDIS SPEED / MULTI-REGION SOC2 SECURITY",
    linkText: "Scope Cloud Infrastructure",
    mockupImage: "/mockup_cloud_card.png",
    scope: "Cloud Architecture & Data Replication"
  },
  {
    id: "analytics",
    num: "05",
    title: "Real-Time Telemetry & Executive BI",
    desc: "Sub-120ms live data streams and executive KPI visualization. Instant decision-making without waiting on weekly reports.",
    category: "CLICKHOUSE TELEMETRY / REAL-TIME STREAMING / ACTIONABLE KPIS",
    linkText: "Scope Telemetry Observatory",
    mockupImage: "/mockup_analytics_card.png",
    scope: "Telemetry & Executive Dashboards"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "apex-logistics",
    index: "01",
    category: "OPERATIONS & DISPATCH PLATFORM",
    filter: "automation",
    client: "Apex Fleet Global",
    title: "Autonomous Fleet Dispatch & Live Operations",
    lead: "We replaced a tangled legacy dispatch portal with an autonomous operations engine. Driver matching is now automated in milliseconds, lifting dispatch velocity by 340% and reclaiming $1.8M in annual operational overhead.",
    metricPrimary: { value: "+340%", label: "Dispatch Velocity" },
    metricSecondary: { value: "$1.8M", label: "Annual Saved" },
    tags: ["Next.js", "Go Microservices", "WebSockets", "Mapbox"],
    image: "/case_apex_logistics.jpg",
    scopeText: "Project Inquiry: Apex Logistics Fleet Engine"
  },
  {
    id: "vanguard-capital",
    index: "02",
    category: "FINTECH & REAL-TIME TELEMETRY",
    filter: "analytics",
    client: "Nexus Capital",
    title: "Real-Time Fund Telemetry & Investor Portal",
    lead: "We engineered an institutional portfolio portal monitoring $1.4B in active client positions with sub-second data feeds, automated yield projections, and instant risk alerts.",
    metricPrimary: { value: "$1.4B", label: "Monitored Assets" },
    metricSecondary: { value: "<120ms", label: "Feed Latency" },
    tags: ["TypeScript", "ClickHouse", "TradingView", "SOC2 Compliant"],
    image: "/case_vanguard_capital.jpg",
    scopeText: "Project Inquiry: Nexus Capital Telemetry Portal"
  },
  {
    id: "nordic-retail",
    index: "03",
    category: "HEADLESS COMMERCE & WEB PRODUCT",
    filter: "web",
    client: "Nordic Modern",
    title: "Headless E-Commerce & Instant Checkout",
    lead: "We rebuilt a slow legacy store into a high-fashion headless shopping experience with 0.38s page loads and an instant checkout drawer, lifting conversions by 48.6%.",
    metricPrimary: { value: "+48.6%", label: "Checkout Conversion" },
    metricSecondary: { value: "0.38s", label: "Page Load Speed" },
    tags: ["Next.js 15", "Shopify Storefront", "Edge CDN", "Stripe"],
    image: "/case_nordic_retail.jpg",
    scopeText: "Project Inquiry: Nordic Modern Headless Commerce"
  },
  {
    id: "synapse-crm",
    index: "04",
    category: "CUSTOM CRM & WORKFLOW ENGINE",
    filter: "crm",
    client: "Synapse Enterprise",
    title: "Custom Sales CRM & Automated Pipeline",
    lead: "We replaced messy spreadsheets with a custom B2B CRM and automated onboarding engine, qualifying incoming leads instantly and cutting manual data entry by 92%.",
    metricPrimary: { value: "+24%", label: "Monthly Deal Growth" },
    metricSecondary: { value: "-92%", label: "Manual Data Entry" },
    tags: ["Custom CRM", "PostgreSQL", "Redis Event Bus", "Twilio API"],
    image: "/case_synapse_crm.jpg",
    scopeText: "Project Inquiry: Synapse Enterprise CRM"
  }
];

export const TECH_STACKS = [
  { name: "Next.js 15", role: "Fullstack Architecture" },
  { name: "TypeScript", role: "End-to-End Type Safety" },
  { name: "PostgreSQL", role: "Relational Database" },
  { name: "Tailwind CSS", role: "Modern Design Tokens" },
  { name: "Python / AI", role: "Automations & LLMs" },
  { name: "ClickHouse", role: "Real-Time Telemetry" },
  { name: "AWS Cloud", role: "High-Availability Mesh" },
  { name: "Redis", role: "In-Memory Speed" },
  { name: "Docker", role: "Zero-Downtime Containers" },
  { name: "WebSockets", role: "Sub-Second Live Sync" },
  { name: "Stripe", role: "Global Enterprise Payments" },
  { name: "Shopify Storefront", role: "Headless Commerce" }
];

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: "web",
    label: "Web & Products",
    subtitle: "High-performance consumer and B2B web applications engineered on Next.js 15.",
    tiers: [
      {
        id: "web-mvp",
        popular: false,
        badge: "7-10 DAY SPRINT",
        name: "MVP Launch Sprint",
        timeline: "7 to 10 Days Delivery",
        priceINR: "₹49,000",
        priceUSD: "$590",
        billingINR: "Fixed milestone delivery",
        billingUSD: "Fixed milestone delivery",
        description: "For startups needing to validate and launch a product with fast turnaround and clean architecture.",
        features: [
          "Next.js 15 App Router & TypeScript",
          "Responsive mobile-first UI with custom tokens",
          "Secure Supabase/PostgreSQL database schema",
          "User authentication & session management",
          "Payment checkout integration (Stripe / Razorpay)",
          "Zero-downtime CI/CD deployment on Vercel",
          "Complete GitHub repo & 100% IP ownership"
        ],
        ctaText: "Start MVP Sprint",
        scope: "Tier: MVP Launch Sprint (Web & Products)"
      },
      {
        id: "web-scale",
        popular: true,
        badge: "MOST POPULAR",
        name: "Fullscale Web Platform",
        timeline: "2 to 3 Weeks",
        priceINR: "₹95,000",
        priceUSD: "$1,150",
        billingINR: "Milestone-backed delivery",
        billingUSD: "Milestone-backed delivery",
        description: "For high-growth businesses requiring advanced multi-tenant SaaS architecture.",
        features: [
          "Everything in MVP Launch Sprint",
          "Multi-role user permissions (RBAC) & teams",
          "Complex dashboard workflows & data tables",
          "Real-time notifications & activity logs",
          "Third-party API integrations (CRMs, Email, Webhooks)",
          "Sub-second Redis caching & search indexes",
          "30 days post-launch warranty & engineering handover"
        ],
        ctaText: "Build Full Platform",
        scope: "Tier: Fullscale Web Platform"
      },
      {
        id: "web-commerce",
        popular: false,
        badge: "HEADLESS SCALE",
        name: "Headless Storefront",
        timeline: "3 to 4 Weeks",
        priceINR: "₹1,65,000",
        priceUSD: "$1,980",
        billingINR: "Milestone-backed delivery",
        billingUSD: "Milestone-backed delivery",
        description: "Ultra-fast headless Shopify/Medusa store with instant checkout drawer and 0.38s load times.",
        features: [
          "Headless Next.js storefront architecture",
          "Instant slide-over checkout & cart drawer",
          "Shopify Storefront API / Medusa backend wiring",
          "Dynamic internationalization & currency support",
          "High-volume catalog filtering & instant search",
          "98+ Google Lighthouse performance guarantee",
          "Integrated analytics, telemetry & pixel tracking"
        ],
        ctaText: "Launch Headless Store",
        scope: "Tier: Headless Storefront"
      }
    ]
  },
  {
    id: "crm",
    label: "Custom CRM & Systems",
    subtitle: "Custom internal operating systems that replace spreadsheets, manual tasks, and rigid SaaS.",
    tiers: [
      {
        id: "crm-workflow",
        popular: false,
        badge: "AUTOMATION ENGINE",
        name: "Workflow Engine & Portal",
        timeline: "10 to 14 Days",
        priceINR: "₹59,000",
        priceUSD: "$690",
        billingINR: "Fixed project price",
        billingUSD: "Fixed project price",
        description: "Automate manual lead capture, team tasks, and client onboarding into one clean portal.",
        features: [
          "Custom internal admin dashboard & portal",
          "Automated lead qualification & pipeline tracking",
          "Webhook connectors (Twilio, Slack, WhatsApp, Zapier)",
          "Document upload & client verification flows",
          "PostgreSQL audit trail for every action",
          "Role-based access for staff and managers",
          "Source code & environment keys transfer"
        ],
        ctaText: "Automate Workflow",
        scope: "Tier: Workflow Engine & Portal"
      },
      {
        id: "crm-enterprise",
        popular: true,
        badge: "RECOMMENDED",
        name: "Custom Sales CRM & OS",
        timeline: "3 Weeks",
        priceINR: "₹1,25,000",
        priceUSD: "$1,490",
        billingINR: "Milestone-backed delivery",
        billingUSD: "Milestone-backed delivery",
        description: "Tailor-made B2B CRM designed exactly around your team's deal stages and approval hierarchies.",
        features: [
          "Everything in Workflow Engine",
          "Custom pipeline deal stages & visual Kanban board",
          "Two-way email & call logging integration",
          "Automated commission & revenue calculation",
          "Granular permission matrix (Admins, Reps, Viewers)",
          "Real-time telemetry reports & exportable CSV/PDFs",
          "45-day SLA maintenance & team training sessions"
        ],
        ctaText: "Build Custom CRM",
        scope: "Tier: Custom Sales CRM & OS"
      },
      {
        id: "crm-erp",
        popular: false,
        badge: "ENTERPRISE",
        name: "Full Business ERP / Hub",
        timeline: "4 to 5 Weeks",
        priceINR: "₹2,20,000",
        priceUSD: "$2,650",
        billingINR: "Phased milestone sprints",
        billingUSD: "Phased milestone sprints",
        description: "An end-to-end proprietary operating system uniting inventory, sales, accounting, and staff.",
        features: [
          "Centralized ERP uniting all business operations",
          "Inventory tracking, purchase orders & vendor sync",
          "Custom billing engine & recurring invoice generation",
          "Sub-second reporting across database tables",
          "Dedicated staging and production cloud clusters",
          "SOC2-compliant security standards & automated backups",
          "60 days dedicated post-launch support & SLA"
        ],
        ctaText: "Build Enterprise ERP",
        scope: "Tier: Full Business ERP / Hub"
      }
    ]
  },
  {
    id: "squad",
    label: "Dedicated Tech Squad",
    subtitle: "On-demand senior engineers, architects, and designers shipping weekly features with zero payroll burden.",
    tiers: [
      {
        id: "squad-fractional",
        popular: false,
        badge: "FRACTIONAL LEAD",
        name: "Fractional Tech Lead",
        timeline: "Monthly Retainer",
        priceINR: "₹45,000",
        priceUSD: "$550",
        billingINR: "per month • cancel anytime",
        billingUSD: "per month • cancel anytime",
        description: "Senior technical leadership to unblock your engineers, review architecture, and guide tech strategy.",
        features: [
          "Direct senior tech architect guidance",
          "Architecture reviews & code quality audits",
          "Database query tuning & infrastructure optimization",
          "Tech stack selection & hiring technical assessments",
          "Private Slack channel access with 4h response time",
          "Weekly 1-on-1 sprint planning calls",
          "No long-term contracts; cancel anytime"
        ],
        ctaText: "Retain Tech Lead",
        scope: "Tier: Fractional Tech Lead"
      },
      {
        id: "squad-fullstack",
        popular: true,
        badge: "MOST REQUESTED",
        name: "Dedicated Fullstack Pod",
        timeline: "Monthly Sprint Cycles",
        priceINR: "₹1,15,000",
        priceUSD: "$1,390",
        billingINR: "per month • cancel anytime",
        billingUSD: "per month • cancel anytime",
        description: "Dedicated fullstack engineer + UI designer shipping high-priority features into production weekly.",
        features: [
          "Senior fullstack engineer + UI/UX designer",
          "Continuous weekly feature releases in production",
          "Fullstack Next.js, TypeScript, PostgreSQL execution",
          "Prioritized backlog queue with unlimited requests",
          "Daily async updates & live demo staging links",
          "99.9% uptime monitoring & fast bug resolution",
          "Zero recruitment overhead, payroll tax, or severance"
        ],
        ctaText: "Hire Engineering Pod",
        scope: "Tier: Dedicated Fullstack Pod"
      },
      {
        id: "squad-enterprise",
        popular: false,
        badge: "FULL TEAM",
        name: "Autonomous Growth Squad",
        timeline: "Monthly Sprint Cycles",
        priceINR: "₹2,10,000",
        priceUSD: "$2,500",
        billingINR: "per month • cancel anytime",
        billingUSD: "per month • cancel anytime",
        description: "Full multi-disciplinary squad (2 fullstack engineers, 1 designer, 1 DevOps architect) for rapid scaling.",
        features: [
          "2 Senior fullstack engineers + 1 designer + 1 DevOps",
          "Daily deployments & automated test suites",
          "Cloud architecture management (AWS / Vercel / Cloudflare)",
          "Dedicated high-velocity sprint manager",
          "Instant incident response with 1-hour SLA",
          "Seamless integration into your existing Jira/GitHub",
          "Weekly executive roadmap alignment"
        ],
        ctaText: "Deploy Growth Squad",
        scope: "Tier: Autonomous Growth Squad"
      }
    ]
  }
];

export const PROCESS_MILESTONES: ProcessMilestone[] = [
  {
    step: "01",
    days: "Days 1 — 3",
    tag: "01 / FOUNDATIONS & SPECIFICATION",
    category: "DATA SCHEMAS / API CONTRACTS / FIGMA",
    headline: ["Relational.", "Architecture.", "Zero Ambiguity."],
    subtext: "We map your relational data models, PostgreSQL foreign keys, API contracts, and user flows before writing a single line of code. You receive a locked sprint contract with guaranteed milestones.",
    deliverables: [
      "Relational schema & PostgreSQL table specs",
      "OpenAPI contracts & webhook idempotency rules",
      "High-fidelity design tokens & component system",
      "Locked milestone sprint contract with zero scope creep"
    ],
    artifact: "Architecture Blueprint Spec v1.0",
    specs: [
      { label: "Target Database", val: "PostgreSQL 16 Relational" },
      { label: "API Protocol", val: "REST & Server Actions" },
      { label: "Scope Lock", val: "Milestone Contract Signed" }
    ]
  },
  {
    step: "02",
    days: "Days 4 — 7",
    tag: "02 / INTERACTIVE RUNTIME",
    category: "CLICKABLE STAGING / VIEWPORTS / UX",
    headline: ["Interactive.", "Staging Link.", "Validated UX."],
    subtext: "We deploy clickable, responsive Next.js frontend interfaces to private staging. You click through real user journeys and validate UX ergonomics on mobile and desktop before backend wiring begins.",
    deliverables: [
      "Private live staging preview URL for stakeholders",
      "Pixel-perfect responsive desktop & mobile screens",
      "Micro-animations, loading skeletons & error states",
      "Stakeholder user journey validation & UI sign-off"
    ],
    artifact: "Interactive Staging Release Candidate",
    specs: [
      { label: "Framework", val: "Next.js 16 + React 19" },
      { label: "Deploy Target", val: "Edge CDN Staging Link" },
      { label: "Lighthouse Score", val: "98+ Performance Standard" }
    ]
  },
  {
    step: "03",
    days: "Days 8 — 12",
    tag: "03 / FULLSTACK ENGINE",
    category: "TYPE-SAFE NEXT.JS / REDIS / QUEUES",
    headline: ["Type-Safe.", "Sub-Second DB.", "Worker Queues."],
    subtext: "We engineer type-safe TypeScript backend workflows backed by PostgreSQL, Redis caching, event queues, and sub-12ms database queries with end-to-end automated test suites.",
    deliverables: [
      "Type-safe TypeScript & Next.js server actions",
      "PostgreSQL schemas with optimized indexes (<12ms)",
      "Webhook idempotency & async background workers",
      "End-to-end integration test suites & CI/CD pipeline"
    ],
    artifact: "Production-Hardened System Build",
    specs: [
      { label: "Query Speed", val: "<12ms Average Execution" },
      { label: "Event Bus", val: "Redis Queue Architecture" },
      { label: "Test Coverage", val: "E2E Integration Passed" }
    ]
  },
  {
    step: "04",
    days: "Days 13 — 14",
    tag: "04 / ACTIVATION & HANDOVER",
    category: "ZERO DOWNTIME / SOC2 / 100% IP",
    headline: ["Zero Downtime.", "Live Activation.", "100% IP Transfer."],
    subtext: "We execute SOC2 security audits, edge SSL hardening, Lighthouse 98+ audits, and run zero-downtime DNS cutover. All GitHub repositories, cloud keys, and IP belong 100% to you.",
    deliverables: [
      "Zero-downtime DNS cutover & edge caching setup",
      "Lighthouse 98+ performance & security audit passed",
      "100% GitHub repo ownership and cloud keys transfer",
      "30-day post-launch warranty & direct architect SLA"
    ],
    artifact: "Live Production Software & Full IP Handover",
    specs: [
      { label: "DNS Cutover", val: "0.00s Downtime Transition" },
      { label: "IP Ownership", val: "100% Client Transferred" },
      { label: "Architect SLA", val: "30-Day Direct Warranty" }
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "1",
    name: "Marcus Vance",
    role: "VP of Engineering",
    company: "Apex Fleet Global",
    metricPrimary: { value: "+340%", label: "Dispatch Velocity" },
    metricSecondary: { value: "$1.8M", label: "Annual Saved" },
    quote: "DecodeCity replaced our tangled legacy dispatch portal with an autonomous operations engine in under 3 weeks. Dispatch speed increased by 340%, saving over $1.8M in annual manual overhead. Their architectural discipline is unmatched.",
    projectTag: "Custom Logistics Platform"
  },
  {
    id: "2",
    name: "Elena Rostova",
    role: "Founder & CEO",
    company: "Nordic Modern",
    metricPrimary: { value: "+48.6%", label: "Checkout Conversion" },
    metricSecondary: { value: "0.38s", label: "Page Load Speed" },
    quote: "The headless Next.js storefront DecodeCity built lowered our page load to 0.38 seconds and increased mobile checkout conversion by 48.6%. Sub-second response times and flawless customer experience.",
    projectTag: "Headless E-Commerce"
  },
  {
    id: "3",
    name: "Devin Zhao",
    role: "Chief Technology Officer",
    company: "Synapse Enterprise",
    metricPrimary: { value: "-92%", label: "Manual Workload" },
    metricSecondary: { value: "+24%", label: "Monthly Deal Growth" },
    quote: "DecodeCity engineered our custom B2B sales CRM and automated pipeline on PostgreSQL and Redis. It eliminated 92% of manual data entry and enabled our sales team to close 24% more deals each month.",
    projectTag: "Enterprise Sales OS"
  }
];

export const NEX_PROCESS_STEPS: NexProcessStep[] = [
  {
    step: "01",
    stepTag: "● STEP 01 // FOUNDATIONS",
    title: "Discover & Schema Lock",
    cardDesc: "We map your relational data models, user flows, and API contracts. Zero guesswork, zero scope creep before code.",
    longDesc: "We dissect your operational bottlenecks, interview stakeholders, and lock relational PostgreSQL schemas before writing code. You receive a guaranteed sprint contract with fixed milestone deliverables and an immutable delivery date.",
    image: "/process_step_01_schema.jpg",
    icon: "search"
  },
  {
    step: "02",
    stepTag: "● STEP 02 // RUNTIME PROTOTYPE",
    title: "Interactive Staging Release",
    cardDesc: "We deploy clickable Next.js interfaces to a private preview URL. Validate UX ergonomics on real devices before backend wiring.",
    longDesc: "No static PDF wireframes. You get a live, clickable staging URL to test real user journeys, mobile touch ergonomics, and layout density. We align on feel and functionality before database persistence begins.",
    image: "/process_step_02_staging.jpg",
    icon: "strategy"
  },
  {
    step: "03",
    stepTag: "● STEP 03 // FULLSTACK ENGINE",
    title: "Production Hardening",
    cardDesc: "Type-safe TypeScript backends, PostgreSQL schemas, and sub-12ms queries with automated test coverage.",
    longDesc: "We engineer high-throughput systems on Next.js 15, PostgreSQL, and Redis caching. Webhook idempotency, automated regression tests, and zero-downtime containerized builds engineered to never fail at 3 AM.",
    image: "/process_step_03_hardening.jpg",
    icon: "design"
  },
  {
    step: "04",
    stepTag: "● STEP 04 // LIVE ACTIVATION",
    title: "DNS Cutover & 100% IP Handover",
    cardDesc: "Zero-downtime live activation, edge security audit, and 100% GitHub code & cloud keys transferred directly to you.",
    longDesc: "We execute Lighthouse 98+ audits, edge CDN SSL hardening, and seamless DNS cutover. Every line of source code, repository rights, and cloud credentials belong 100% to you, backed by a 30-day direct warranty.",
    image: "/process_step_04_handover.jpg",
    icon: "develop"
  }
];

export const NEX_PRICING_PLANS: NexPricingPlan[] = [
  {
    id: "mvp-sprint",
    name: "MVP SPRINT",
    badge: "FAST VALIDATION",
    audience: "Professional website & MVP at accessible low cost for founders driving rapid business growth",
    price: {
      INR: "₹5,000",
      USD: "$99",
      EUR: "€89"
    },
    unit: "/ onwards",
    subPricing: {
      INR: "Professional Landing: ₹5K–₹8K · Headless Store: ₹8K–₹12K · Custom Tool: ₹10K",
      USD: "Professional Landing: $99–$149 · Headless Store: $149–$249 · Custom Tool: $199",
      EUR: "Professional Landing: €89–€139 · Headless Store: €139–€229 · Custom Tool: €189"
    },
    features: [
      "Next.js 15 App Router & mobile touch viewports",
      "Custom Swiss typographic hierarchy & zero layout shift",
      "100% on-page technical SEO & structured schema markup",
      "Interactive lead capture with instant email/webhook sync",
      "Zero-downtime deployment on Vercel / Edge CDN",
      "Lighthouse 98+ performance standard (<0.5s TTFB)",
      "Complete GitHub repository & 100% IP ownership transferred",
      "30-day post-launch technical warranty with direct architect SLA"
    ],
    ctaText: "Claim MVP Sprint Slot →",
    scope: "Tier: MVP Sprint Plan"
  },
  {
    id: "scale-platform",
    name: "SCALE PLATFORM",
    badge: "MOST REQUESTED",
    audience: "For high-growth businesses needing custom SaaS & unified systems",
    popular: true,
    price: {
      INR: "₹10K – ₹20K",
      USD: "$249 – $499",
      EUR: "€229 – €469"
    },
    unit: "/ milestone",
    subPricing: {
      INR: "Includes multi-tenant database, payment checkout & custom CRM hub",
      USD: "Includes multi-tenant database, payment checkout & custom CRM hub",
      EUR: "Includes multi-tenant database, payment checkout & custom CRM hub"
    },
    features: [
      "Everything in MVP Sprint plus fullstack database engine",
      "Relational PostgreSQL schema with sub-12ms optimized queries",
      "Custom role-based permissions (RBAC) & executive admin portal",
      "Payment checkout integration (Stripe / Razorpay) with webhook idempotency",
      "Sub-second in-memory Redis caching & real-time activity logs",
      "Third-party API mesh (WhatsApp, Twilio, SendGrid, custom ERP)",
      "Automated CI/CD testing pipeline & automated database backups",
      "60-day post-launch architectural support & team onboarding"
    ],
    ctaText: "Deploy Scale Platform →",
    scope: "Tier: Scale Platform (Most Requested)"
  },
  {
    id: "autonomous-squad",
    name: "AUTONOMOUS SQUAD",
    badge: "BESPOKE SQUAD",
    audience: "For scaling tech companies needing a senior multidisciplinary pod",
    price: {
      INR: "Let's Talk",
      USD: "Let's Talk",
      EUR: "Let's Talk"
    },
    unit: "",
    subPricing: {
      INR: "Custom architectural scope, dedicated architects & fixed escrow",
      USD: "Custom architectural scope, dedicated architects & fixed escrow",
      EUR: "Custom architectural scope, dedicated architects & fixed escrow"
    },
    features: [
      "Senior fullstack architect + UI designer + DevOps engineer",
      "Continuous weekly feature releases directly into production",
      "Event-driven microservices & automated background worker queues",
      "Real-time ClickHouse telemetry & executive KPI dashboards",
      "High-availability AWS cloud mesh with 99.99% uptime guarantee",
      "Mutual NDA & guaranteed zero intellectual property leaks",
      "Private Slack channel access with 1-hour priority incident response",
      "Weekly executive roadmap alignment & sprint velocity reports"
    ],
    ctaText: "Book Architecture Scoping →",
    scope: "Tier: Autonomous Dedicated Squad"
  }
];

export const ALTURA_TESTIMONIALS: AlturaTestimonial[] = [
  {
    id: "1",
    quote: '"We had 40+ legacy spreadsheets and lost 6 hours a day reconciling fleet dispatch. DecodeCity replaced the whole mess with an autonomous Next.js & Go operations hub in under 3 weeks. Dispatch speed jumped by 340%, reclaiming $1.8M in annual manual overhead. Their architectural discipline is unmatched."',
    author: "Rohan & Priya Mehta",
    role: "Founders, Apex Fleet Global",
    avatarText: "RPM"
  },
  {
    id: "2",
    quote: '"Most dev shops hide behind technical jargon and miss sprint deadlines. DecodeCity operated like a senior internal engineering team. Their custom sales CRM automated lead qualification, eliminated 92% of manual data entry, and drove +24% monthly deal velocity with zero technical debt."',
    author: "Vikram Malhotra",
    role: "VP of Engineering, Synapse Enterprise",
    avatarText: "VM"
  },
  {
    id: "3",
    quote: '"Our previous storefront lost mobile shoppers before the page even finished loading. DecodeCity re-engineered our entire architecture on Next.js 15: page load dropped to 0.38 seconds, and mobile checkout conversion surged by 48.6%. It paid for itself in the first 30 days."',
    author: "Elena Rostova",
    role: "Managing Director, Nordic Modern",
    avatarText: "ER"
  }
];

export const CITY_SECTORS: CitySector[] = [
  {
    id: "web",
    num: "01",
    name: "Websites & Digital Products",
    desc: "Next.js 15, headless e-commerce, and high-conversion client web applications.",
    category: "01 // WEB & PRODUCT PLATFORM",
    status: "Active Deployment",
    tag: "Next.js 16 / TypeScript / Edge"
  },
  {
    id: "crm",
    num: "02",
    name: "CRM & Operating Systems",
    desc: "Proprietary sales CRM, relational hubs, and custom staff ERP software.",
    category: "02 // CRM & SYSTEMS ARCHITECTURE",
    status: "Active Architecture",
    tag: "PostgreSQL / Redis / Auth"
  },
  {
    id: "automation",
    num: "03",
    name: "Workflow Automation",
    desc: "Background event queues, automated lead pipelines, and zero-touch workflows.",
    category: "03 // AUTONOMOUS WORKFLOWS",
    status: "High Throughput",
    tag: "Event Bus / Webhooks / AI"
  },
  {
    id: "cloud",
    num: "04",
    name: "Cloud & Infrastructure",
    desc: "Resilient cloud architecture, database replication, and SOC2-ready security.",
    category: "04 // CLOUD FABRIC & DATA",
    status: "99.99% SLA Uptime",
    tag: "AWS / Cloudflare / Docker"
  },
  {
    id: "analytics",
    num: "05",
    name: "Analytics & Dashboards",
    desc: "Executive business intelligence, live KPI feeds, and real-time data streaming.",
    category: "05 // TELEMETRY & DASHBOARDS",
    status: "Sub-Second Latency",
    tag: "Real-time BI / Charts / KPIs"
  }
];

export const CITY_DISTRICTS: CityDistrict[] = [
  {
    id: "web",
    num: "01",
    name: "Web Platform & Experience Spire",
    scope: "01 Web & Products",
    leadArchitect: "Vikram R. (Principal Frontend)",
    coords: "12.9716° N, 77.5946° E · District North",
    stack: "Next.js 15 · Edge CDN · TypeScript",
    deliverable: "Sub-second TTFB, headless e-commerce, and high-conversion UI systems"
  },
  {
    id: "crm",
    num: "02",
    name: "CRM & Systems Operations Hub",
    scope: "02 CRM & Systems",
    leadArchitect: "Ananya M. (Lead Systems Architect)",
    coords: "12.9720° N, 77.5950° E · District Central",
    stack: "PostgreSQL · Redis · Multi-Tenant Auth",
    deliverable: "Custom relational CRM, deal pipeline engine, and automated enterprise portals"
  },
  {
    id: "automation",
    num: "03",
    name: "Autonomous Workflows Grid",
    scope: "03 Automation",
    leadArchitect: "Rohan S. (Event Automation Lead)",
    coords: "12.9712° N, 77.5940° E · District East",
    stack: "Event Queues · Webhooks · Async Workers",
    deliverable: "Zero-touch background pipelines, webhook sync, and autonomous dispatch"
  },
  {
    id: "cloud",
    num: "04",
    name: "Resilient Cloud Fabric",
    scope: "04 Cloud Fabric",
    leadArchitect: "Karthik P. (Cloud Infrastructure Lead)",
    coords: "12.9725° N, 77.5938° E · District West",
    stack: "AWS · Cloudflare · Docker · SOC2 Clearance",
    deliverable: "99.99% uptime, multi-region failover, automated DB replicas & SOC2 compliance"
  },
  {
    id: "analytics",
    num: "05",
    name: "Telemetry & BI Observatory",
    scope: "05 Telemetry & BI",
    leadArchitect: "Divya N. (Data & Telemetry Lead)",
    coords: "12.9718° N, 77.5960° E · District South",
    stack: "Sub-Second BI · Live KPIs · Realtime Streaming",
    deliverable: "Executive business intelligence, live KPI feeds, and operational telemetry streams"
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "legacy-construction",
    index: "01",
    name: "Legacy Construction",
    category: "HEAVY INFRASTRUCTURE & CONSTRUCTION",
    description: "Heavy civil engineering and industrial construction showcase featuring active machinery telemetry, project tracking, and equipment deployment timelines.",
    websiteUrl: "https://www.youtube.com/watch?v=sMhU-C2V4c0",
    embedUrl: "https://www.youtube.com/embed/sMhU-C2V4c0?autoplay=1",
    image: "/projects/legacy-construction.jpg",
    isYouTube: true,
    tags: ["Civil Engineering", "Fleet Tracking", "Video Showcase"]
  },
  {
    id: "air-jordan",
    index: "02",
    name: "Air Jordan",
    category: "HEADLESS COMMERCE & LUXURY APPAREL",
    description: "Immersive sneakerhead experience with kinetic 3D footwear presentation, fluid transitions, and sub-second headless checkout.",
    websiteUrl: "https://air-jordan-plum.vercel.app/",
    embedUrl: "https://air-jordan-plum.vercel.app/",
    image: "/projects/air-jordan.jpg",
    tags: ["Next.js 15", "Kinetic UI", "Sub-0.4s TTFB"]
  },
  {
    id: "lumina-botanical",
    index: "03",
    name: "Lumina Botanical",
    category: "SUSTAINABLE APOTHECARY & WELLNESS",
    description: "Sensory botanical apothecary platform featuring plant bio-chemistry profiles, organic formulations, and sustainable checkout journeys.",
    websiteUrl: "https://lumina-botanical.vercel.app/",
    embedUrl: "https://lumina-botanical.vercel.app/",
    image: "/projects/lumina-botanical.jpg",
    tags: ["Apothecary", "Organic Formulations", "Headless Store"]
  },
  {
    id: "tiyara",
    index: "04",
    name: "Tiyara",
    category: "COUTURE FASHION & COMMERCE",
    description: "Editorial fashion house storefront featuring tactile fabric zooms, dynamic sizing intelligence, and an instant slide-over cart drawer.",
    websiteUrl: "https://tiyara-shopify.vercel.app/",
    embedUrl: "https://tiyara-shopify.vercel.app/",
    image: "/projects/tiyara.jpg",
    tags: ["Shopify Storefront", "Fluid Cart", "Editorial UI"]
  },
  {
    id: "atelier",
    index: "05",
    name: "Atelier",
    category: "ARTISANAL DENIM & BESPOKE CRAFT",
    description: "Bespoke handcrafted denim studio presenting raw Japanese selvedge weaves, custom tailoring dimensions, and artisanal fitting workflows.",
    websiteUrl: "https://atelier-premium-geans.vercel.app/",
    embedUrl: "https://atelier-premium-geans.vercel.app/",
    image: "/projects/atelier.jpg",
    tags: ["Selvedge Craft", "Custom Fit OS", "Micro-Interactions"]
  },
  {
    id: "air-walk",
    index: "06",
    name: "Air Walk",
    category: "ATHLETIC GEAR & SPEED COMMERCE",
    description: "High-performance urban athletic footwear engine with instant filter caches, edge optimization, and frictionless checkout.",
    websiteUrl: "https://airwalk-shopify.vercel.app/",
    embedUrl: "https://airwalk-shopify.vercel.app/",
    image: "/projects/air-walk.jpg",
    tags: ["Shopify Headless", "Instant Filter", "Sub-0.4s TTFB"]
  },
  {
    id: "vantage-arch",
    index: "07",
    name: "Vantage Arch.",
    category: "SPATIAL ARCHITECTURE & DESIGN",
    description: "Monolithic architectural portfolio displaying brutalist spatial structures, high-resolution photography, and client blue-line blueprints.",
    websiteUrl: "https://vantage-architectural-excellence.vercel.app/",
    embedUrl: "https://vantage-architectural-excellence.vercel.app/",
    image: "/projects/vantage-arch.jpg",
    tags: ["Monolith Design", "Blueprint Viewer", "Swiss Grid"]
  },
  {
    id: "neon-suture",
    index: "08",
    name: "Neon Suture",
    category: "DIGITAL SOUND LAB & VISUAL MEDIA",
    description: "Avant-garde cyberpunk digital record label with interactive waveform synthesis, release drops, and artist discography.",
    websiteUrl: "https://neon-suture.vercel.app/",
    embedUrl: "https://neon-suture.vercel.app/",
    image: "/projects/neon-suture.jpg",
    tags: ["Audio Stems", "Cyberpunk Dark UI", "WebGL Audio"]
  },
  {
    id: "icarus-jewellery",
    index: "09",
    name: "Icarus Fine Jewellery",
    category: "HAUTE JOAILLERIE & PRIVATE LUXURY",
    description: "Haute joaillerie digital salon with custom carat selector, gemstone refractive previews, and private VIP client suite.",
    websiteUrl: "https://icarus-jewellery.vercel.app/",
    embedUrl: "https://icarus-jewellery.vercel.app/",
    image: "/projects/icarus-jewellery.jpg",
    tags: ["High Jewellery", "Gemstone Configurator", "Concierge"]
  },
  {
    id: "prime-living",
    index: "10",
    name: "Prime Living Real Estate",
    category: "PRIME RESIDENTIAL ESTATES",
    description: "Ultra-prime residential property showcase featuring 4K spatial tours, yield metrics, floorplan schematics, and direct broker advisory.",
    websiteUrl: "https://realestate2-three.vercel.app/",
    embedUrl: "https://realestate2-three.vercel.app/",
    image: "/projects/prime-living.jpg",
    tags: ["Luxury Real Estate", "Interactive Floorplans", "Investor Portal"]
  },
  {
    id: "horizon-estates",
    index: "11",
    name: "Horizon Estates",
    category: "COASTAL RESIDENCES & ESTATES",
    description: "Coastal Mediterranean villas and private peninsula residences with land parcel telemetry and regional market indices.",
    websiteUrl: "https://horixon-realesate.vercel.app/",
    embedUrl: "https://horixon-realesate.vercel.app/",
    image: "/projects/horizon-estates.jpg",
    tags: ["Peninsula Villas", "Market Indices", "Private Brokerage"]
  },
  {
    id: "lumere-lights",
    index: "12",
    name: "Lumēre Lighting Studio",
    category: "ARCHITECTURAL ILLUMINATION",
    description: "Architectural luminaire atelier engineering minimalist brass pendants, ambient optical diffusers, and commercial lux calculations.",
    websiteUrl: "https://lumere-lights.vercel.app/",
    embedUrl: "https://lumere-lights.vercel.app/",
    image: "/projects/lumere-lights.jpg",
    tags: ["Luminaire Design", "Photometric Engine", "B2B Trade Portal"]
  },
  {
    id: "nexaroha",
    index: "13",
    name: "Nexaroha Creative Studio",
    category: "CREATIVE ENGINEERING & BRAND LAB",
    description: "Elite brand identity and design engineering laboratory crafting high-conviction digital products for tech disruptors.",
    websiteUrl: "https://nexaroha.vercel.app/",
    embedUrl: "https://nexaroha.vercel.app/",
    image: "/projects/nexaroha.jpg",
    tags: ["Design Engineering", "Brand Systems", "Awwwards Winner"]
  },
  {
    id: "lumina-flora",
    index: "14",
    name: "Lumina Botanical Flora",
    category: "CONSERVATORY BOTANICAL ARCHIVE",
    description: "Rare flora conservatory and greenhouse botanical index featuring microclimate conditions and botanical archive documentation.",
    websiteUrl: "https://lumina-botanical.vercel.app/",
    embedUrl: "https://lumina-botanical.vercel.app/",
    image: "/projects/lumina-flora.jpg",
    tags: ["Greenhouse Flora", "Species Registry", "Living Archive"]
  }
];
