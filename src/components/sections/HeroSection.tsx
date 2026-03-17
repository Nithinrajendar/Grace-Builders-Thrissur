import { Link } from "react-router-dom";
import { ArrowRight, Award, ShieldCheck, Wrench, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const subStats = [
  { value: "120+", label: "Projects Completed" },
  { value: "15+", label: "Expert Engineers" },
  { value: "100%", label: "Client Satisfaction" },
];

const trustBadges = [
  { icon: ShieldCheck, label: "Certified Engineers" },
  { icon: GraduationCap, label: "Trained Professionals" },
  { icon: Wrench, label: "Quality Guaranteed" },
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
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in animation-delay-300">
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

          {/* Stats Panel */}
          <div className="animate-fade-in animation-delay-400 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
            {/* Big Featured Stat */}
            <div className="text-center py-8 px-6 border-b border-white/10">
              <div className="text-7xl md:text-8xl font-display font-bold text-white/20 leading-none mb-1">
                15+
              </div>
              <div className="text-base font-semibold text-primary-foreground/80 tracking-wide uppercase">
                Years of Construction Excellence
              </div>
            </div>

            {/* Sub Stats */}
            <div className="grid grid-cols-3 divide-x divide-white/10">
              {subStats.map((stat) => (
                <div key={stat.label} className="text-center py-6 px-4">
                  <div className="text-2xl md:text-3xl font-display font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-primary-foreground/60 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="border-t border-white/10 px-6 py-4">
              <p className="text-center text-xs text-primary-foreground/40 uppercase tracking-widest mb-3">
                Our Team
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 bg-white/8 border border-white/10 rounded-full px-4 py-1.5"
                  >
                    <badge.icon className="w-3.5 h-3.5 text-accent" />
                    <span className="text-xs text-primary-foreground/70 font-medium">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
