export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  pricePeriod?: string;
  tagline: string;
  badge?: string;
  features: string[];
  recommended?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  industry: string;
  location: string;
  badge: string; // e.g. "CONCEPT PROJECT"
  heroImage: string;
  designObjective: string;
  scope: string[];
  challenge: string;
  solution: string;
}

export interface CoreServiceItem {
  id: string;
  title: string;
  description: string;
}

export const siteConfig = {
  // Brand & Legal Identity
  brandName: "1UpSites",
  brandWordmark: "1UpSites",
  legalCompanyName: "Call Master LLC",
  dbaText: "Call Master LLC d/b/a 1UpSites",
  primaryTagline: "Level up your online presence.",
  tagline: "We build premium websites for local businesses that are ready to look better, earn more trust, and turn more visitors into customers.",
  subTagline: "We design premium, high-converting websites for local businesses that want to look established, earn more trust, and turn more visitors into customers.",
  heroHeadline: "Your business deserves a website that’s a level above.",
  trustLine: "Premium websites for contractors, service businesses, and growing local companies.",

  // Real Contact Information
  contact: {
    phoneDisplay: "203-444-5273",
    phoneTel: "+12034445273",
    email: "mike@1upsites.com",
    serviceArea: "Connecticut + Remote / Nationwide",
    businessHours: "Mon – Fri: 8:00 AM – 6:00 PM EST",
    locationDetail: "Based in Connecticut · Serving clients nationwide.",
  },

  // Color Palette Constants
  colors: {
    accent: "#c5a059", // Warm burnished brass / gold
    accentHover: "#b8934b",
    accentLight: "rgba(197, 160, 89, 0.12)",
    surfaceDark: "#0c0d0e",
    surfaceCard: "#141618",
    surfaceElevated: "#1a1c1f",
    textMuted: "#8e9196",
  },

  // Calls to Action
  cta: {
    primary: {
      label: "GET A FREE WEBSITE REVIEW",
      href: "/review",
    },
    secondary: {
      label: "VIEW OUR WORK",
      href: "/work",
    },
  },

  // Founder Information (Real owner)
  founder: {
    name: "Michael Caprio",
    role: "Founder & Lead Designer",
    image: "/images/owner.jpg",
    statement: "Your work is already good. Your website should prove it.",
    bio: "1UpSites was built around a simple idea: a strong business deserves an online presence that reflects the quality of the work behind it. I created 1UpSites to help local business owners upgrade that first impression without dealing with bloated agency processes, confusing tech jargon, or overpriced retainers. You work directly with me to build a clean, high-performing website that earns trust and wins customers.",
  },

  // Social Links
  socials: {
    linkedin: "https://linkedin.com",
    x: "https://x.com",
    instagram: "https://instagram.com",
  },

  // Analytics & Tracking Placeholders
  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX",
    googleTagManagerId: "GTM-XXXXXXX",
  },

  // Honest Process Steps (Streamlined)
  process: [
    {
      step: "01",
      name: "DISCOVER",
      summary: "We learn about your company, services, customers, competitors, and goals.",
    },
    {
      step: "02",
      name: "DESIGN",
      summary: "We build your website around the way customers actually evaluate your business.",
    },
    {
      step: "03",
      name: "REFINE",
      summary: "You review the site and we fine-tune the details together.",
    },
    {
      step: "04",
      name: "LEVEL UP",
      summary: "We connect your domain, test everything, and launch your new online presence.",
    },
  ],

  // 6 Concise Core Services for Homepage
  coreServices: [
    {
      id: "custom-design",
      title: "CUSTOM WEBSITE DESIGN",
      description: "Premium, custom-designed websites built around your company, customers, and services. No generic templates or clunky page builders.",
    },
    {
      id: "mobile-optimization",
      title: "MOBILE OPTIMIZATION",
      description: "Fast, intuitive experiences designed for customers browsing and calling from their phones. Tap-to-call headers and effortless navigation.",
    },
    {
      id: "lead-systems",
      title: "LEAD & ESTIMATE SYSTEMS",
      description: "Simple forms and clear calls to action that make reaching your company effortless, without overwhelming prospective clients.",
    },
    {
      id: "local-seo",
      title: "LOCAL SEO FOUNDATIONS",
      description: "Clean technical structure, service architecture, metadata, and local search fundamentals to help customers find you in your service area.",
    },
    {
      id: "copy-content",
      title: "COPY & CONTENT",
      description: "Clear messaging that communicates what you do, why customers should trust you, and what they should do next.",
    },
    {
      id: "hosting-support",
      title: "HOSTING & SUPPORT",
      description: "Reliable cloud hosting, maintenance, updates, and ongoing website support after launch so you never worry about downtime.",
    },
  ],

  // Compact Strip Industries
  compactIndustries: [
    "Landscaping & Hardscaping",
    "Home Improvement & Remodeling",
    "HVAC & Plumbing",
    "Electrical Contracting",
    "Tree & Outdoor Services",
    "Auto Services & Detailing",
    "Masonry & Concrete",
    "Roofing & Siding",
  ],

  // 3 Primary Selected Work Projects for Homepage (plus full collection for modal)
  portfolio: [
    {
      id: "apex-hardscapes",
      title: "Apex Hardscapes & Outdoor Living",
      industry: "Hardscaping & Landscape Architecture",
      location: "Fairfield County, CT",
      badge: "CONCEPT PROJECT",
      heroImage: "/images/portfolio_apex_hardscapes_1791207245088.jpg",
      designObjective: "Position the company as a premium outdoor-living specialist and make requesting an estimate effortless.",
      scope: ["Brand Refinement", "Custom Web Design", "Project Gallery", "Estimate Funnel"],
      challenge: "Word-of-mouth was strong, but an outdated digital presence failed to reflect their high-end stone and patio craftsmanship.",
      solution: "Engineered an architectural-style portfolio with clean project imagery, clear material breakdowns, and a 60-second estimate intake.",
    },
    {
      id: "timberline-tree",
      title: "Timberline Arborists & Crane Service",
      industry: "Tree Service & Emergency Arboriculture",
      location: "Litchfield County, CT",
      badge: "CONCEPT PROJECT",
      heroImage: "/images/portfolio_timberline_tree_1791207263143.jpg",
      designObjective: "Make emergency tree services immediately accessible while showcasing crane equipment, certifications, and completed work.",
      scope: ["Emergency Dispatch Header", "Crane Rigging Showcase", "Insurance Embed", "Town Pages"],
      challenge: "Homeowners in storm emergencies needed immediate reassurance that the crew was fully insured and equipped with heavy cranes.",
      solution: "Built a tap-to-call mobile header, hazard inspection upload, and prominent proof of insurance and safety credentials.",
    },
    {
      id: "vanguard-concrete",
      title: "Vanguard Architectural Concrete & Stone",
      industry: "Concrete & Masonry Contracting",
      location: "New Haven County, CT",
      badge: "CONCEPT PROJECT",
      heroImage: "/images/portfolio_vanguard_concrete_1791207253900.jpg",
      designObjective: "Differentiate commercial and architectural concrete work from basic handyman flatwork through clean structural presentation.",
      scope: ["Commercial Bid Form", "Engineering Portfolio", "Material Specs", "Review Integration"],
      challenge: "General contractors and architects were unsure whether Vanguard handled monolithic commercial pours or only basic walkways.",
      solution: "Created a minimalist portfolio highlighting architectural concrete finishes, tensile specs, and commercial project case studies.",
    },
    {
      id: "ironwood-fence",
      title: "Ironwood Fence & Deck Co.",
      industry: "Fencing & Deck Construction",
      location: "Fairfield County, CT",
      badge: "CONCEPT PROJECT",
      heroImage: "/images/hero_agency_showcase_1791207233978.jpg",
      designObjective: "Guide homeowners through cedar, aluminum, and composite decking options with transparent pricing expectations.",
      scope: ["Material Guide", "Estimate Automation", "Deck Visualizer", "Permit FAQs"],
      challenge: "The owner spent hours answering repetitive phone questions regarding material types from homeowners without clear budgets.",
      solution: "Built a guided project intake form and material catalog that educates homeowners and pre-qualifies incoming quote requests.",
    },
    {
      id: "precision-climate",
      title: "Precision Climate Solutions",
      industry: "HVAC & Heat Pump Specialists",
      location: "Hartford County, CT",
      badge: "CONCEPT PROJECT",
      heroImage: "/images/portfolio_apex_hardscapes_1791207245088.jpg",
      designObjective: "Demystify heat pump incentives and drive recurring maintenance club sign-ups with transparent flat-rate policies.",
      scope: ["Rebate Calculator", "Maintenance Membership", "Service Dispatch", "Financing Info"],
      challenge: "Homeowners were confused by complex state clean-energy rebates and wary of opaque contractor diagnostics.",
      solution: "Designed straightforward incentive breakdown cards and an intuitive online preventative maintenance plan sign-up.",
    },
    {
      id: "heritage-paint",
      title: "Heritage Fine Finishing & Paint",
      industry: "Luxury Painting Contractor",
      location: "Westport & Greenwich, CT",
      badge: "CONCEPT PROJECT",
      heroImage: "/images/portfolio_vanguard_concrete_1791207253900.jpg",
      designObjective: "Highlight dustless spray equipment and factory-grade cabinet finishes to command top-tier interior residential painting jobs.",
      scope: ["Cabinet Gallery", "Clean Home Standards", "Consultation Booking", "Color Portfolios"],
      challenge: "Affluent homeowners were hesitant to hire painters without seeing verified proof of immaculate dust protection and fine spray finishes.",
      solution: "Curated fine finish macro photography, HEPA containment details, and clear white-glove home protection guarantees.",
    },
  ],

  // 3 Compact Pricing Packages (~5 bullets each)
  pricing: [
    {
      id: "launch",
      name: "Launch",
      price: "$999",
      pricePeriod: "one-time",
      tagline: "Ideal for smaller local businesses that need a clean, professional online presence.",
      badge: "ESSENTIAL",
      features: [
        "Up to 5 custom-designed pages",
        "Responsive mobile-first design",
        "Lead & estimate contact form",
        "Google Reviews + trust integration",
        "Basic local SEO foundations",
      ],
      recommended: false,
    },
    {
      id: "growth",
      name: "Growth",
      price: "$1,499",
      pricePeriod: "one-time",
      tagline: "Engineered for established companies looking to stand out and capture higher-margin jobs.",
      badge: "MOST POPULAR",
      features: [
        "Up to 8 custom-designed pages",
        "Premium custom design & layout",
        "Conversion-focused copywriting",
        "Project gallery + client proof",
        "Analytics + local SEO foundations",
      ],
      recommended: true,
    },
    {
      id: "premium",
      name: "Premium",
      price: "Starting at $2,499",
      pricePeriod: "one-time",
      tagline: "For market leaders and multi-crew contractors looking for an undeniable competitive edge.",
      badge: "ENTERPRISE",
      features: [
        "10+ custom-designed pages",
        "Advanced custom design & animations",
        "Service-area & town landing architecture",
        "Advanced galleries & conversion strategy",
        "Expanded analytics & search optimization",
      ],
      recommended: false,
    },
  ],

  // Compact Recurring Service: 1Up Care
  siteCare: {
    name: "1Up Care",
    price: "Starting at $129",
    period: "per month",
    tagline: "Complete peace of mind. Your website managed, secured, and updated by experts.",
    description: "Hosting. Maintenance. Updates. Backups. Support.",
    features: [
      "Fast cloud hosting with automatic SSL",
      "Daily encrypted cloud backups",
      "Lead form delivery monitoring",
      "Routine text and photo updates included",
      "Direct phone & email support",
    ],
  },

  // 16 Targeted Industries List (for modal, footer & dropdowns)
  industries: [
    { id: "landscaping", title: "Landscaping & Lawn Care" },
    { id: "hardscaping", title: "Hardscaping & Outdoor Living" },
    { id: "tree-services", title: "Tree Services & Arborists" },
    { id: "concrete", title: "Concrete Contractors" },
    { id: "masonry", title: "Masonry & Stone Work" },
    { id: "fencing", title: "Fencing & Deck Builders" },
    { id: "painting", title: "Painting Contractors" },
    { id: "plumbing", title: "Plumbing Contractors" },
    { id: "hvac", title: "HVAC Specialists" },
    { id: "electrical", title: "Electrical Contractors" },
    { id: "roofing", title: "Roofing Companies" },
    { id: "paving", title: "Paving & Asphalt" },
    { id: "auto-services", title: "Auto Detailing & Specialty" },
    { id: "gyms", title: "Private Gyms & Studios" },
    { id: "cleaning", title: "Cleaning Companies" },
    { id: "general", title: "General Contractors & Remodelers" },
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: "How much does a website cost?",
      a: "Our fixed-price packages start at $999 for Launch, $1,499 for Growth (most popular for established companies), and starting at $2,499 for Premium. We provide clear upfront quotes with zero hidden fees.",
    },
    {
      q: "How does the process work?",
      a: "We start with a quick discovery session to understand your services, target customers, and goals. Next, we build your custom design, review it with you to fine-tune the details, and launch your upgraded site on your domain.",
    },
    {
      q: "Can you redesign my existing website?",
      a: "Yes. Many of our clients have an outdated WordPress, Wix, or GoDaddy site. We rebuild your online presence with clean modern code while preserving your domain name and search rankings.",
    },
    {
      q: "Will my website work well on phones?",
      a: "Yes. Mobile-first usability is our core benchmark. Every website features clean navigation, tap-to-call headers, and fast loading on smartphones.",
    },
    {
      q: "What is 1UP Care?",
      a: "1UP Care ($129/mo) provides peace of mind. We manage your cloud hosting, automatic SSL security certificates, encrypted backups, form monitoring, and routine text or photo updates.",
    },
    {
      q: "How do we get started?",
      a: "Request a Free Website Review or reach out directly by phone at 203-444-5273 or email at mike@1upsites.com. We will review your current site and show you what we'd improve.",
    },
  ],

  // Regional SEO Landing Pages
  seoLandingPages: [
    {
      slug: "web-design-connecticut",
      title: "1UpSites | Website Design in Connecticut for Local Contractors",
      metaDescription: "Premium custom web design for local service companies across Connecticut. Level up your online presence.",
      headline: "Connecticut's Premier Web Design for Trade & Service Businesses",
      region: "Connecticut",
      focusTrades: ["Landscaping", "Hardscaping", "Tree Service", "HVAC", "Plumbing", "Masonry"],
    },
    {
      slug: "web-design-fairfield-county",
      title: "1UpSites | Web Design Fairfield County CT – Contractor Websites",
      metaDescription: "High-converting web design for local service businesses in Fairfield County, CT.",
      headline: "Position Your Business for Fairfield County's High-Value Clients",
      region: "Fairfield County, CT",
      focusTrades: ["Luxury Hardscapes", "High-End Painting", "Custom Decks", "Architectural Concrete"],
    },
    {
      slug: "web-design-new-haven",
      title: "1UpSites | Web Design New Haven CT – Local Business Websites",
      metaDescription: "Bespoke websites for contractors across the greater New Haven area and shoreline.",
      headline: "Outshine Competitors in the Greater New Haven & Shoreline Market",
      region: "New Haven County, CT",
      focusTrades: ["Tree Care", "Roofing", "Electrical", "Paving", "Plumbing"],
    },
    {
      slug: "contractor-web-design",
      title: "1UpSites | Contractor Website Design – Built to Level Up Inquiries",
      metaDescription: "We build websites for general contractors and specialty trades that command higher prices.",
      headline: "Websites That Prove Your Craftsmanship Before You Pick Up the Phone",
      region: "National & Regional",
      focusTrades: ["General Contractors", "Remodelers", "Commercial Trades", "Home Services"],
    },
  ],
};
