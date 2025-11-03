export interface PortfolioItem {
  id: string;
  year: string;
  category: string;
  hero: { uri: string };
  thumb: { uri: string };
  client?: string;
  alt?: string;
  titleKey: string;
  detailsKey: string;
}

export const DATA: PortfolioItem[] = [
  {
    id: "wallet",
    year: "2024",
    category: "Entertainment / Fintech",
    hero: { uri: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80" },
    thumb: { uri: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=400&q=60" },
    titleKey: "projects.items.wallet.title",
    detailsKey: "projects.items.wallet.details",
  },
  {
    id: "courier",
    year: "2023",
    category: "Logistics",
    hero: { uri: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80" },
    thumb: { uri: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=60" },
    titleKey: "projects.items.courier.title",
    detailsKey: "projects.items.courier.details",
  },
  {
    id: "compliance",
    year: "2023",
    category: "Security",
    hero: { uri: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" },
    thumb: { uri: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=60" },
    titleKey: "projects.items.compliance.title",
    detailsKey: "projects.items.compliance.details",
  },
  {
    id: "analytics",
    year: "2024",
    category: "Data / UX",
    hero: { uri: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" },
    thumb: { uri: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=60" },
    titleKey: "projects.items.analytics.title",
    detailsKey: "projects.items.analytics.details",
  },
  {
    id: "travel",
    year: "2022",
    category: "Mobile / UI",
    hero: { uri: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80" },
    thumb: { uri: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=60" },
    titleKey: "projects.items.travel.title",
    detailsKey: "projects.items.travel.details",
  },
  {
    id: "ecommerce",
    year: "2024",
    category: "Retail / Optimization",
    hero: { uri: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" },
    thumb: { uri: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=60" },
    titleKey: "projects.items.ecommerce.title",
    detailsKey: "projects.items.ecommerce.details",
  },
];
