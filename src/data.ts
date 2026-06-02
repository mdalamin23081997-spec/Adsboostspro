import { ServiceItem, CaseStudy, Testimonial, IndustryConfig } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'campaign-management',
    title: 'Ads Campaign Management',
    tagline: 'End-to-end strategy, setup, and scaling for sales, leads, and signups.',
    description: 'A comprehensive, data-driven Facebook & Instagram ads management service. We handle everything from competitor analysis and building multi-stage interest/lookalike funnels to creative split-testing and daily budget optimization.',
    features: [
      'Strategic funnel design (TOF, MOF, BOF)',
      'Lookalike, custom, and behavior-based targeting',
      'Advanced ad copy writing and creative direction',
      'Daily performance tracking and budget re-allocation',
      'A/B split-testing of hooks, creatives, and target markets',
      'Bi-weekly video calls and detailed transparent reporting'
    ],
    recommendedFor: 'E-commerce, Service Providers, Saas, and Lead-Gen Businesses',
    priceEstimate: 'Starts at $399/month',
    iconName: 'TrendingUp',
    badge: 'Popular Strategy'
  },
  {
    id: 'facebook-boosting',
    title: 'Professional Page Boosting',
    tagline: 'Maximize engagement, build brand awareness, and get instant inquiries.',
    description: 'Perfect for businesses looking to supercharge their social proof. We run high-engagement campaigns to boost your posts, increase viral organic reach, drive page likes/followers, and generate a steady stream of Messenger/WhatsApp inquiries directly from your posts.',
    features: [
      'Engagement-optimized budget distribution',
      'WhatsApp/Messenger CTA integration into posts',
      'High-quality local radius targeting (ideal for local businesses)',
      'Increase active, real page followers and page interactions',
      'Boost existing promos or design custom boosting calendars',
      'Cost-efficient cost-per-result (CPR) management'
    ],
    recommendedFor: 'Local Outlets, Retailers, Restaurants, and Personal Brands',
    priceEstimate: 'Starts at $149/month',
    iconName: 'Zap',
    badge: 'Fast Growth'
  },
  {
    id: 'retargeting-funnels',
    title: 'Advanced Retargeting & Custom Audiences',
    tagline: 'Recover abandoned carts and re-engage warm prospective buyers.',
    description: 'We build advanced remarketing structures to capture users who previously browsed your store, watched your videos, or interacted with your page. This maintains active consideration, overcomes buying objections, and yields the highest overall ROAS.',
    features: [
      'Dynamic Product Ads (DPA) dynamic catalog setup',
      'Custom customer list onboarding & segment hashing',
      'Video view custom retargeting (3s, 50%, 95% viewers)',
      'Page interaction & DM custom audience capturing',
      'Cart/checkout abandoner custom discount funnels',
      'Frequency capping control to avoid audience fatigue'
    ],
    recommendedFor: 'E-commerce brands with catalog assets and established traffic',
    priceEstimate: 'Starts at $249/month',
    iconName: 'Repeat',
    badge: 'Highest ROAS'
  },
  {
    id: 'pixel-capi-setup',
    title: 'Pixel & CAPI Setup (Attribution)',
    tagline: 'Accurate data tracking after iOS updates to measure absolute ROI.',
    description: 'Do not advertise blindly. We set up the Meta Pixel and Meta Conversions API (CAPI) server-side via Cloud Gateway or Shopify/WordPress integrations. This ensures 100% event attribution, bypasses ad-blockers, and gives Meta\'s AI the data to optimize.',
    features: [
      'Standard Facebook/Meta Pixel event mapping',
      'Conversions API (CAPI) server-side cloud gateway integration',
      'Advanced Event Matching optimization (Email, Phone hashing)',
      'iOS 14+ Aggregated Event Measurement setup',
      'Domain verification and custom browser event cleanup',
      'Deduplication diagnostics testing and verification'
    ],
    recommendedFor: 'All accounts wanting to track true conversions and cost-per-lead',
    priceEstimate: 'One-time setup fee' ,
    iconName: 'Activity'
  }
];

export const PORTFOLIO_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'wear-and-co',
    clientName: 'Wear & Co.',
    logoText: 'W&C',
    industry: 'Fashion Apparel',
    campaignType: 'E-commerce Conversion',
    summary: 'Achieved a spectacular 4.85x ROAS scale from a cold start, generating $28,400 in trackable monthly sales.',
    overview: 'Wear & Co. is an indie apparel label struggling with high customer acquisition costs and low repeat purchases. Our objective was to implement a rigorous cold-interest structure paired with dynamic catalog retargeting.',
    strategy: [
      'Built custom Lookalikes of past purchasers at 1%, 2%, and 5% strengths.',
      'Implemented UGC (User Generated Content) video ads in vertical Reels formats.',
      'Configured Dynamic Product Ads (DPAs) for visitors who abandoned carts in 7 days.',
      'Installed server-side Conversions API to recover lost checkout signals.'
    ],
    metrics: [
      { label: 'Ad Spend', value: '$5,850', improvement: 'optimized' },
      { label: 'Attributed Sales', value: '$28,400', improvement: '+385%' },
      { label: 'Average ROAS', value: '4.85x', improvement: 'Previously 1.9x' },
      { label: 'Click-Through Rate', value: '3.12%', improvement: '+140% above baseline' }
    ],
    chartData: [
      { name: 'Week 1', conversions: 42, ctr: 1.45, roas: 2.1 },
      { name: 'Week 2', conversions: 89, ctr: 1.89, roas: 3.2 },
      { name: 'Week 3', conversions: 164, ctr: 2.45, roas: 4.1 },
      { name: 'Week 4', conversions: 248, ctr: 3.12, roas: 4.85 }
    ],
    duration: '30 Days',
    totalSpend: '$5,850',
    totalRevenue: '$28,400',
    roasResult: '4.85x'
  },
  {
    id: 'apex-living',
    clientName: 'Apex Residential group',
    logoText: 'ARG',
    industry: 'Real Estate Developer',
    campaignType: 'Lead Generation',
    summary: 'Captured 342 high-intent homebuyer leads at $4.10 CPL, leading to $2.4M in closed property sales pipeline.',
    overview: 'Apex Residential was relying on expensive offline portals yielding low-intent spam leads. We built an on-Facebook Instant Lead Form funnel utilizing customized qualifying questions.',
    strategy: [
      'Designed architectural rendering carousel highlights.',
      'Created qualifying form questions (timeframe, pre-approvals, budget).',
      'Configured localized geofencing to target high-income areas.',
      'Integrated Zapier to feed leads instantly to their sales CRM.'
    ],
    metrics: [
      { label: 'Ad Spend', value: '$1,402', improvement: 'controlled' },
      { label: 'Qualified Leads', value: '342', improvement: '+410%' },
      { label: 'Avg. Lead Cost', value: '$4.10', improvement: '67% drop' },
      { label: 'Sales Value Gen', value: '$2.4M', improvement: 'Direct trackable' }
    ],
    chartData: [
      { name: 'Week 1', conversions: 48, ctr: 0.98, roas: 1.5 },
      { name: 'Week 2', conversions: 112, ctr: 1.25, roas: 2.2 },
      { name: 'Week 3', conversions: 232, ctr: 1.68, roas: 3.5 },
      { name: 'Week 4', conversions: 342, ctr: 2.15, roas: 4.9 }
    ],
    duration: '4 Weeks',
    totalSpend: '$1,402',
    totalRevenue: '$2.4M',
    roasResult: 'High ROI'
  },
  {
    id: 'bistro-junction',
    clientName: 'The Gourmet Junction',
    logoText: 'TGJ',
    industry: 'Premium Steakhouse & Bistro',
    campaignType: 'Boosting & Engagement',
    summary: 'Generated 520+ table reservation inquiries via WhatsApp from local foodies via active page boosting.',
    overview: 'The Gourmet Junction wanted to boost local weekday traffic and promote their new evening artisanal menu. We focused on local radius boosting targeted directly at gastronomy seekers.',
    strategy: [
      'Published premium food flatlays and video-reels showing the chef in action.',
      'Selected post-boosting option optimizing specifically for "Send message to WhatsApp".',
      'Isolated geographic coordinates matching a 12km radius around the bistro.',
      'Tested lookalikes of people who checked-in or interacted with the page.'
    ],
    metrics: [
      { label: 'Ad Spend', value: '$350', improvement: 'cost-effective' },
      { label: 'Reaches', value: '74,000+', improvement: 'Local saturation' },
      { label: 'WhatsApp DMs', value: '524', improvement: 'New record' },
      { label: 'Bistro Visitors', value: '290+', improvement: '+45% weekday boost' }
    ],
    chartData: [
      { name: 'Week 1', conversions: 65, ctr: 2.1, roas: 3.0 },
      { name: 'Week 2', conversions: 180, ctr: 2.8, roas: 3.8 },
      { name: 'Week 3', conversions: 340, ctr: 3.4, roas: 4.5 },
      { name: 'Week 4', conversions: 524, ctr: 4.2, roas: 5.5 }
    ],
    duration: '14 Days',
    totalSpend: '$350',
    roasResult: '12x Revenue'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    author: 'Sarah Jenkins',
    role: 'Marketing Director',
    company: 'Solene Cosmetics',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    quote: "Working with this team changed the game for our e-commerce acquisition. They scaled our daily budget from $50 to $800 while maintaining a strict 4.2x ROAS. Communication is outstandingly clear and data-focused.",
    rating: 5,
    resultsAchieved: '4.2x Scaled ROAS & $120k sales',
    isVerified: true
  },
  {
    id: 't2',
    author: 'Rahat Chowdhury',
    role: 'Founder',
    company: 'Apex Tech Academy',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
    quote: "Very impressed with the Boosting results! Our local IT consulting workshops were failing to gather registrations. Within 12 days of high-converting boosting, we fully booked all 40 seminar seats. Highly recommended for any fast service growth.",
    rating: 5,
    resultsAchieved: '100% Sold-out seminars within 12 Days',
    isVerified: true
  },
  {
    id: 't3',
    author: 'Michael Chang',
    role: 'Co-Founder',
    company: 'FitFlow Gym Gear',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80',
    quote: "We spent months throwing money away on amateur boosting. Having this team set up the correct Conversion API and dynamic catalog target filters completely turned our metrics around. Our CPA fell by a massive 52%!",
    rating: 5,
    resultsAchieved: '52% Decrease in CPA in 3 weeks',
    isVerified: true
  }
];

export const INDUSTRIES_CONFIG: IndustryConfig[] = [
  {
    name: 'E-commerce & Retail',
    estimatedCtr: 2.10,
    estimatedCpc: 0.38,
    conversionRate: 2.8,
    avgOrderValue: 48
  },
  {
    name: 'Professional & Business Services',
    estimatedCtr: 1.85,
    estimatedCpc: 0.95,
    conversionRate: 6.5, // form lead conversion rate
    avgOrderValue: 180 // value of a lead pipeline
  },
  {
    name: 'Real Estate & Properties',
    estimatedCtr: 1.40,
    estimatedCpc: 0.80,
    conversionRate: 4.2, // form signup
    avgOrderValue: 850 // commission/qualified pipeline value
  },
  {
    name: 'Local Food & Bistros',
    estimatedCtr: 3.20,
    estimatedCpc: 0.22,
    conversionRate: 12.0, // WhatsApp reservation click conversion rate
    avgOrderValue: 24 // average spending
  },
  {
    name: 'Coaching, Consulting & EdTech',
    estimatedCtr: 2.40,
    estimatedCpc: 0.65,
    conversionRate: 4.8,
    avgOrderValue: 75
  }
];
