export interface NavItem {
  label: string;
  href: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  stars: number;
  content: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  nav: NavItem[];
  social: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}
