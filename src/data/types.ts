export type BuildingId = "web" | "crm" | "automation" | "cloud" | "analytics";

export interface BuildingInfo {
  id: BuildingId;
  name: string;
  code: string;
  title: string;
  metric: string;
  accentColor: string;
  centerX: string;
  centerY: string;
  hudLeft: string;
  hudTop: string;
  points: string;
  scopeText: string;
}

export interface ServiceData {
  id: string;
  num: string;
  title: string;
  desc: string;
  category: string;
  linkText: string;
  mockupImage: string;
  scope: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  category: string;
  filter: "all" | "web" | "crm" | "automation" | "analytics";
  client: string;
  title: string;
  lead: string;
  metricPrimary: { value: string; label: string };
  metricSecondary: { value: string; label: string };
  tags: string[];
  image: string;
  scopeText: string;
}

export interface PricingTier {
  id: string;
  popular: boolean;
  badge: string;
  name: string;
  timeline: string;
  priceINR: string;
  priceUSD: string;
  billingINR: string;
  billingUSD: string;
  description: string;
  features: string[];
  ctaText: string;
  scope: string;
}

export interface PricingCategory {
  id: "web" | "crm" | "squad";
  label: string;
  subtitle: string;
  tiers: PricingTier[];
}

export interface ProcessMilestone {
  step: string;
  days: string;
  tag: string;
  category: string;
  headline: string[];
  subtext: string;
  deliverables: string[];
  artifact: string;
  specs: { label: string; val: string }[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  metricPrimary: { value: string; label: string };
  metricSecondary: { value: string; label: string };
  quote: string;
  projectTag: string;
}

export interface NexProcessStep {
  step: string;
  stepTag: string;
  title: string;
  cardDesc: string;
  longDesc: string;
  image: string;
  icon: "search" | "strategy" | "design" | "develop";
}

export interface NexPricingPlan {
  id: string;
  name: string;
  badge: string;
  audience: string;
  popular?: boolean;
  price: {
    INR: string;
    USD: string;
    EUR: string;
  };
  unit?: string;
  subPricing: {
    INR: string;
    USD: string;
    EUR: string;
  };
  features: string[];
  ctaText: string;
  scope: string;
}

export interface AlturaTestimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarText: string;
}

export interface CityDistrict {
  id: string;
  num: string;
  name: string;
  scope: string;
  leadArchitect: string;
  coords: string;
  stack: string;
  deliverable: string;
}

export interface CitySector {
  id: string;
  num: string;
  name: string;
  desc: string;
  category: string;
  status: string;
  tag: string;
}

export interface PortfolioProject {
  id: string;
  index: string;
  name: string;
  category: string;
  description: string;
  websiteUrl: string;
  embedUrl: string;
  image: string;
  isYouTube?: boolean;
  tags: string[];
}
