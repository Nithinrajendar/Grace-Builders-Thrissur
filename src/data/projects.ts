export type ProjectStatus = "ongoing" | "completed";

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
  // ── Completed Projects ──
  {
    id: 1,
    title: "Premium Villa at Poothole",
    category: "Residential",
    status: "completed",
    description: "A beautifully crafted 4-bedroom luxury villa with modern architecture, premium interiors, and landscaped garden. Designed for comfort and elegance with customized modular kitchen and spacious living areas.",
    location: "Poothole, Thrissur",
    year: "2023",
    value: "₹85 Lakhs",
    image: "/Images/Res01.jpeg",
  },
  {
    id: 2,
    title: "Contemporary Home at Kuriachira",
    category: "Residential",
    status: "completed",
    description: "A 3-bedroom contemporary family home featuring open floor plan, modern kitchen, and energy-efficient design. Built with premium materials and delivered ahead of schedule.",
    location: "Kuriachira, Thrissur",
    year: "2024",
    value: "₹65 Lakhs",
    image: "/Images/Res06.jpeg",
  },
  {
    id: 3,
    title: "Commercial Complex at Thrissur",
    category: "Commercial",
    status: "completed",
    description: "A multi-floor commercial building with modern office spaces, retail outlets on the ground floor, and dedicated parking. Designed for maximum natural lighting and ventilation.",
    location: "Thrissur City",
    year: "2023",
    value: "₹2.5 Crore",
    image: "/Images/Commercial001.jpeg",
  },
  {
    id: 4,
    title: "Luxury Interiors – Villa Project",
    category: "Interior",
    status: "completed",
    description: "Complete interior design and execution for a premium villa, including modular kitchen, custom wardrobes, false ceiling, and premium flooring work throughout.",
    location: "Thrissur",
    year: "2024",
    value: "₹28 Lakhs",
    image: "/Images/Inter01.jpeg",
  },
  {
    id: 5,
    title: "Residential Renovation at Ollur",
    category: "Renovation",
    status: "completed",
    description: "Full renovation of a 20-year-old family home including structural reinforcement, modern bathroom upgrades, new electrical wiring, and exterior beautification.",
    location: "Ollur, Thrissur",
    year: "2024",
    value: "₹35 Lakhs",
    image: "/Images/Reno01.jpg",
  },
  {
    id: 6,
    title: "Church Renovation Project",
    category: "Others",
    status: "completed",
    description: "Sacred space renovation with careful attention to heritage preservation. Included structural reinforcement, interior painting, lighting upgrades, and new flooring work.",
    location: "Thrissur District",
    year: "2023",
    value: "₹45 Lakhs",
    image: "/Images/Curch01.jpg",
  },

  // ── Ongoing Projects ──
  {
    id: 7,
    title: "Duplex Villa at Ayyanthole",
    category: "Residential",
    status: "ongoing",
    description: "A premium duplex villa with 5 bedrooms, home theatre, modular kitchen, and rooftop terrace. Currently in the finishing stage with interior work in progress.",
    location: "Ayyanthole, Thrissur",
    year: "2025–2026",
    value: "₹1.2 Crore",
    image: "/Images/Res03.jpeg",
  },
  {
    id: 8,
    title: "Commercial Building at Wadakkanchery",
    category: "Commercial",
    status: "ongoing",
    description: "A 4-floor commercial building with modern office spaces, elevator facility, and ample parking. Structural work completed, currently in the interior finishing phase.",
    location: "Wadakkanchery, Thrissur",
    year: "2025–2026",
    value: "₹1.8 Crore",
    image: "/Images/Commercial003.jpeg",
  },

];

export const statusLabels: Record<ProjectStatus, string> = {
  completed: "Completed",
  ongoing: "Current / Ongoing",
};
