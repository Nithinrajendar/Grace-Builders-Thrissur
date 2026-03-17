import { CheckCircle, HardHat, Clock, Star } from "lucide-react";

const trustIndicators = [
  {
    icon: HardHat,
    title: "Certified Engineer Team",
    description: "Our in-house engineers are certified and trained to deliver precision in every build",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "98% of projects completed on or ahead of schedule",
  },
  {
    icon: Star,
    title: "Quality Guaranteed",
    description: "Every project meets the highest standards of craftsmanship and durability",
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description: "No hidden costs, detailed estimates provided upfront",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Building Trust Through{" "}
              <span className="text-accent">Excellence</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              For over 15 years, we've earned the trust of homeowners, developers,
              and corporations by consistently delivering exceptional results. Our
              certified engineers and commitment to quality set us apart.
            </p>

            {/* Trust Indicators */}
            <div className="grid sm:grid-cols-2 gap-6">
              {trustIndicators.map((indicator, index) => (
                <div
                  key={indicator.title}
                  className="flex gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <indicator.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{indicator.title}</h4>
                    <p className="text-primary-foreground/70 text-sm">
                      {indicator.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-accent/5 rounded-3xl -rotate-3 scale-105" />

            <div className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary-foreground/10">
              {/* Big Stat */}
              <div className="text-center mb-10">
                <div className="text-7xl md:text-8xl font-display font-bold text-accent mb-2">
                  15+
                </div>
                <div className="text-xl text-primary-foreground/80">
                  Years of Construction Excellence
                </div>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "120+", label: "Projects Completed" },
                  { value: "98%", label: "Client Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center bg-primary-foreground/5 rounded-2xl py-6">
                    <div className="text-3xl font-display font-bold text-accent mb-1">{stat.value}</div>
                    <div className="text-sm text-primary-foreground/60">{stat.label}</div>
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
