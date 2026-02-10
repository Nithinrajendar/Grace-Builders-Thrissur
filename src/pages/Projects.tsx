import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { projects, statusLabels, type ProjectStatus } from "@/data/projects";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const statusTabs: ProjectStatus[] = ["ongoing", "upcoming", "completed"];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
              Explore our diverse portfolio spanning current, upcoming, and completed
              developments across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs & Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <Tabs defaultValue="ongoing" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-12">
              {statusTabs.map((status) => (
                <TabsTrigger
                  key={status}
                  value={status}
                  className="px-6 py-3 rounded-full text-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-lg bg-secondary text-muted-foreground"
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filtered.map((project, index) => (
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
                                loading="lazy"
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
                  )}
                </TabsContent>
              );
            })}
          </Tabs>
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
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                  {selectedProject.category}
                </span>
                <span className="inline-block px-3 py-1 bg-secondary text-muted-foreground text-sm font-medium rounded-full capitalize">
                  {statusLabels[selectedProject.status]}
                </span>
              </div>
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
