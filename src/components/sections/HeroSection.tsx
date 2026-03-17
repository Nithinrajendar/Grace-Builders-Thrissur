import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Building2, Clock, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const stats = [
  { icon: Building2, value: "120+", label: "Projects Completed" },
  { icon: Users, value: "15+", label: "Experienced Team Members" },
  { icon: ThumbsUp, value: "20+", label: "Appreciation from Esteemed Clients" },
  { icon: Clock, value: "15", label: "Years of Experience" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern construction site at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float animation-delay-500" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Award-Winning Construction Excellence
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-in animation-delay-100">
            Building Tomorrow's{" "}
            <span className="text-accent">Landmarks</span>{" "}
            Today
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl animate-fade-in animation-delay-200">
            For over 15 years, we've been transforming visions into architectural
            masterpieces. From residential homes to commercial complexes, we deliver
            excellence in every project.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-in animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in animation-delay-400">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 text-accent mb-2" />
                <div className="text-3xl font-display font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
