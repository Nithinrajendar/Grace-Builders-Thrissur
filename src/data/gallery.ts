export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  height: "tall" | "medium" | "short";
}

export const galleryCategories = ["All", "Commercial", "Residential", "Infrastructure", "Renovation", "Interior"];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&fit=crop",
    alt: "Modern commercial building exterior",
    category: "Commercial",
    height: "tall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&fit=crop",
    alt: "Luxury waterfront apartments",
    category: "Residential",
    height: "medium",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&fit=crop",
    alt: "Transit station construction",
    category: "Infrastructure",
    height: "short",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&fit=crop",
    alt: "Historic building renovation",
    category: "Renovation",
    height: "tall",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&fit=crop",
    alt: "Contemporary family home",
    category: "Residential",
    height: "medium",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&fit=crop",
    alt: "Corporate office building",
    category: "Commercial",
    height: "short",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&fit=crop",
    alt: "Modern office interior",
    category: "Interior",
    height: "tall",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&fit=crop",
    alt: "Medical facility construction",
    category: "Commercial",
    height: "medium",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&fit=crop",
    alt: "Modern luxury villa",
    category: "Residential",
    height: "short",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&fit=crop",
    alt: "Elegant living room interior",
    category: "Interior",
    height: "medium",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&fit=crop",
    alt: "Highway overpass construction",
    category: "Infrastructure",
    height: "tall",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&fit=crop",
    alt: "Renovated heritage building facade",
    category: "Renovation",
    height: "medium",
  },
];
