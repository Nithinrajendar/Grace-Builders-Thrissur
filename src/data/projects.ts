export type ProjectStatus = "ongoing" | "upcoming";

export interface Project {
  id: number;
  title: string;
  category: string;
  status: ProjectStatus;
  description: string;
  location: string;
  year: string;
  value: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Azure Tower",
    category: "Commercial",
    status: "ongoing",
    description: "A 45-story mixed-use tower featuring cutting-edge sustainable design with LEED Platinum certification. The building houses premium office spaces, luxury retail, and a rooftop garden.",
    location: "Manhattan, New York",
    year: "2024–2026",
    value: "$180M",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Harmony Residences",
    category: "Residential",
    status: "ongoing",
    description: "Luxury waterfront apartments featuring panoramic city views, smart home technology, and resort-style amenities including infinity pools and private marina access.",
    location: "Miami, Florida",
    year: "2024–2026",
    value: "$95M",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
  },


  {
    id: 7,
    title: "Sunrise Medical Center",
    category: "Commercial",
    status: "upcoming",
    description: "State-of-the-art healthcare facility with 500 beds, advanced diagnostic equipment, and healing gardens designed to promote patient recovery.",
    location: "Phoenix, Arizona",
    year: "2026–2028",
    value: "$290M",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Innovation Campus",
    category: "Commercial",
    status: "upcoming",
    description: "Tech campus featuring collaborative workspaces, research labs, and amenities designed to foster innovation and attract top talent.",
    location: "Seattle, Washington",
    year: "2027–2029",
    value: "$210M",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  },
];

export const statusLabels: Record<ProjectStatus, string> = {
  ongoing: "Current / Ongoing",
  upcoming: "Upcoming",
};
