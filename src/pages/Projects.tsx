import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { projects, statusLabels, type ProjectStatus } from "@/data/projects";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";

const statusTabs: ProjectStatus[] = ["completed", "ongoing"];

const Projects = () => {
  return (
    <Layout>
      <Helmet>
        <title>Our Projects | Residential & Commercial Construction in Thrissur – Ever Grace Constructions</title>
        <meta name="description" content="Explore completed and ongoing construction projects by Ever Grace Constructions in Thrissur, Kerala. Residential villas, commercial buildings, renovations, and interior work." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-16 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 animate-fade-in">
              Our Portfolio
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              Projects That Define Excellence
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed animate-fade-in animation-delay-200">
              Explore our diverse portfolio of completed and ongoing
              construction projects across Thrissur and Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs & Alternating Rows List */}
      <section className="pt-12 md:pt-16 pb-20 md:pb-28 lg:pb-32 bg-background">
        <div className="container-custom">
          <Tabs defaultValue="completed" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-16">
              {statusTabs.map((status) => (
                <TabsTrigger
                  key={status}
                  value={status}
                  className="px-6 py-3 rounded-full text-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-lg bg-secondary text-muted-foreground transition-all"
                >
                  {statusLabels[status]}
                </TabsTrigger>
              ))}
            </TabsList>

            {statusTabs.map((status) => {
              const filtered = projects.filter((p) => p.status === status);
              return (
                <TabsContent key={status} value={status}>
                  {filtered.length === 0 ? (
                    <p className="text-center text-muted-foreground py-16 text-lg">
                      No {statusLabels[status].toLowerCase()} projects at this time.
                    </p>
                  ) : (
                    <ProjectCarousel projects={filtered} status={status} />
                  )}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

// Extracted Carousel Component to manage state per tab easily
const ProjectCarousel = ({ projects, status }: { projects: typeof import("@/data/projects").projects, status: ProjectStatus }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const project = projects[currentIndex];

  if (!project) return null;

  return (
    <div className="relative w-full max-w-7xl mx-auto flex items-center">
      {/* Left Arrow */}
      {projects.length > 1 && (
        <button
          onClick={prevProject}
          className="absolute -left-4 lg:-left-12 z-10 p-3 rounded-full bg-background border border-border text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent shadow-md transition-all sm:flex hidden"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Main Project Card */}
      <div
        key={project.id} // Re-mounts animation when project changes
        className="w-full flex flex-col gap-10 lg:gap-16 items-center animate-fade-in lg:flex-row px-4 sm:px-12 lg:px-0"
      >
        {/* Project Image */}
        <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant group relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Mobile Arrows Inside Image container */}
          {projects.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-4 sm:hidden pointer-events-none">
              <button
                onClick={(e) => { e.stopPropagation(); prevProject(); }}
                className="pointer-events-auto p-2 rounded-full bg-background/80 backdrop-blur text-foreground shadow-md hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextProject(); }}
                className="pointer-events-auto p-2 rounded-full bg-background/80 backdrop-blur text-foreground shadow-md hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold tracking-wide rounded-full">
              {project.category}
            </span>
            <span className="inline-block px-4 py-1.5 bg-secondary text-muted-foreground text-sm font-medium tracking-wide rounded-full capitalize">
              {statusLabels[status]}
            </span>
            <span className="inline-block px-4 py-1.5 bg-background border border-border text-muted-foreground text-sm font-medium tracking-wide rounded-full">
              {currentIndex + 1} of {projects.length}
            </span>
          </div>
          
          <h3 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            {project.description}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-6 border-t border-border">
            <div>
              <span className="block text-muted-foreground text-sm uppercase tracking-wider mb-2">Location</span>
              <p className="font-semibold text-foreground">{project.location}</p>
            </div>
            <div>
              <span className="block text-muted-foreground text-sm uppercase tracking-wider mb-2">Year</span>
              <p className="font-semibold text-foreground">{project.year}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      {projects.length > 1 && (
        <button
          onClick={nextProject}
          className="absolute -right-4 lg:-right-12 z-10 p-3 rounded-full bg-background border border-border text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent shadow-md transition-all sm:flex hidden"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Projects;
