import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Azure Tower",
    category: "Commercial",
    description: "A 45-story mixed-use tower featuring cutting-edge sustainable design with LEED Platinum certification. The building houses premium office spaces, luxury retail, and a rooftop garden.",
    location: "Manhattan, New York",
    year: "2023",
    value: "$180M",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Harmony Residences",
    category: "Residential",
    description: "Luxury waterfront apartments featuring panoramic city views, smart home technology, and resort-style amenities including infinity pools and private marina access.",
    location: "Miami, Florida",
    year: "2023",
    value: "$95M",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Metro Central Station",
    category: "Infrastructure",
    description: "A modern transit hub serving over 500,000 daily commuters with state-of-the-art facilities, retail spaces, and seamless multi-modal transportation connections.",
    location: "Chicago, Illinois",
    year: "2022",
    value: "$320M",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "The Pinnacle Office Complex",
    category: "Commercial",
    description: "LEED Platinum certified corporate headquarters featuring biophilic design, advanced air filtration, and flexible workspaces designed for the future of work.",
    location: "San Francisco, California",
    year: "2022",
    value: "$145M",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Riverside Villa Collection",
    category: "Residential",
    description: "A collection of 12 contemporary family homes with sustainable features including solar panels, geothermal heating, and rainwater harvesting systems.",
    location: "Austin, Texas",
    year: "2023",
    value: "$48M",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Heritage Mall Renovation",
    category: "Renovation",
    description: "Historic building transformed into modern retail and dining destination while preserving original architectural elements and achieving modern safety standards.",
    location: "Boston, Massachusetts",
    year: "2021",
    value: "$78M",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Sunrise Medical Center",
    category: "Commercial",
    description: "State-of-the-art healthcare facility with 500 beds, advanced diagnostic equipment, and healing gardens designed to promote patient recovery.",
    location: "Phoenix, Arizona",
    year: "2022",
    value: "$290M",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Innovation Campus",
    category: "Commercial",
    description: "Tech campus featuring collaborative workspaces, research labs, and amenities designed to foster innovation and attract top talent.",
    location: "Seattle, Washington",
    year: "2023",
    value: "$210M",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  },
];

const categories = ["All", "Commercial", "Residential", "Infrastructure", "Renovation"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 animate-fade-in">
              Our Portfolio
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              Projects That Define Excellence
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed animate-fade-in animation-delay-200">
              Explore our diverse portfolio of completed projects spanning residential, 
              commercial, and infrastructure developments across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "bg-secondary text-muted-foreground hover:bg-accent/10 hover:text-accent"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-primary-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm">
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:bg-background transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                {selectedProject.category}
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <span className="text-muted-foreground text-sm">Location</span>
                  <p className="font-semibold text-foreground">{selectedProject.location}</p>
                </div>
                <div>
                  <span className="text-muted-foreground text-sm">Year</span>
                  <p className="font-semibold text-foreground">{selectedProject.year}</p>
                </div>
                <div>
                  <span className="text-muted-foreground text-sm">Project Value</span>
                  <p className="font-semibold text-foreground">{selectedProject.value}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Projects;
