import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, statusLabels } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const ongoingProjects = projects.filter((p) => p.status === "ongoing").slice(0, 3);
  const upcomingProjects = projects.filter((p) => p.status === "upcoming").slice(0, 3);
  const completedProjects = projects.filter((p) => p.status === "completed").slice(0, 3);

  const sections = [
    { label: "Current / Ongoing Projects", items: ongoingProjects },
    { label: "Upcoming Projects", items: upcomingProjects },
    { label: "Completed Projects", items: completedProjects },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our diverse portfolio of ongoing, upcoming, and completed projects.
          </p>
        </div>

        {sections.map((section) => (
          section.items.length > 0 && (
            <div key={section.label} className="mb-16 last:mb-12">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-8 border-l-4 border-accent pl-4">
                {section.label}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((project, index) => (
                  <Link
                    key={project.id}
                    to="/projects"
                    className="group relative overflow-hidden rounded-2xl bg-card shadow-elegant animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full mb-3">
                        {project.category}
                      </span>
                      <h4 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                        {project.title}
                      </h4>
                      <p className="text-primary-foreground/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        ))}

        {/* View All Button */}
        <div className="text-center">
          <Button variant="gold-outline" size="lg" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
