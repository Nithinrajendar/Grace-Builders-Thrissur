import { Link } from "react-router-dom";
import { Building2, Home, Wrench, FileText, HardHat, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes designed and built to exceed your expectations, from modern minimalist to classic elegance.",
    link: "/services#residential",
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    description: "State-of-the-art commercial spaces that optimize functionality while making a bold architectural statement.",
    link: "/services#commercial",
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    description: "Transform your existing space with our expert renovation services, breathing new life into any structure.",
    link: "/services#renovation",
  },
  {
    icon: FileText,
    title: "Project Planning",
    description: "Comprehensive planning and consulting services to ensure your project succeeds from concept to completion.",
    link: "/services#planning",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Construction Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to completion, we provide end-to-end construction solutions 
            tailored to meet your unique requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className={cn(
                "group bg-card rounded-2xl p-8 lg:p-10 shadow-elegant hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent font-medium text-sm">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
