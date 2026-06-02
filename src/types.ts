/**
 * Type declarations for the Facebook Ads & Boosting Services website
 */

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  recommendedFor: string;
  priceEstimate: string;
  iconName: string; // Dynamic icon name referencing Lucide icons
  badge?: string;
}

export interface Metric {
  label: string;
  value: string;
  improvement: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  logoText: string;
  industry: string;
  campaignType: 'Lead Generation' | 'E-commerce Conversion' | 'Boosting & Engagement' | 'Retargeting Funnel';
  summary: string;
  overview: string;
  strategy: string[];
  metrics: Metric[];
  chartData: { name: string; conversions: number; ctr: number; roas: number }[];
  duration: string;
  totalSpend: string;
  totalRevenue?: string;
  roasResult?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
  quote: string;
  rating: number;
  resultsAchieved: string;
  isVerified: boolean;
}

export interface IndustryConfig {
  name: string;
  estimatedCtr: number; // in percentage, e.g. 1.8
  estimatedCpc: number; // in USD, e.g. 0.45
  conversionRate: number; // in percentage, e.g. 2.5
  avgOrderValue: number; // in USD, e.g. 45
}
