import { CheckCircle, Shield, Clock, Award } from "lucide-react";

const trustIndicators = [
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description: "Complete peace of mind with comprehensive coverage",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "98% of projects completed on or ahead of schedule",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Industry-leading 10-year structural warranty",
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description: "No hidden costs, detailed estimates provided upfront",
  },
];

const certifications = [
  "ISO 9001:2015",
  "OSHA Certified",
  "LEED Accredited",
  "BBB A+ Rating",
  "Licensed Contractor",
];

export function TrustSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-white/70 font-semibold text-sm tracking-wider uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Building Trust Through{" "}
              <span className="text-white/80">Excellence</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              For nearly three decades, we've earned the trust of homeowners, developers, 
              and corporations by consistently delivering exceptional results. Our commitment 
              to quality, safety, and customer satisfaction sets us apart.
            </p>

            {/* Trust Indicators */}
            <div className="grid sm:grid-cols-2 gap-6">
              {trustIndicators.map((indicator, index) => (
                <div
                  key={indicator.title}
                  className="flex gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <indicator.icon className="w-6 h-6 text-white" />
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

          {/* Right Content - Stats & Certifications */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-white/5 rounded-3xl -rotate-3 scale-105" />
            
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
              {/* Big Stat */}
              <div className="text-center mb-10">
                <div className="text-7xl md:text-8xl font-display font-bold text-white mb-2">
                  28+
                </div>
                <div className="text-xl text-primary-foreground/80">
                  Years of Construction Excellence
                </div>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { value: "500+", label: "Projects" },
                  { value: "$2B+", label: "Value Built" },
                  { value: "98%", label: "Client Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-display font-bold">{stat.value}</div>
                    <div className="text-sm text-primary-foreground/60">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-sm font-semibold text-primary-foreground/60 uppercase tracking-wider mb-4 text-center">
                  Certifications & Accreditations
                </h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-4 py-2 bg-primary-foreground/10 rounded-full text-sm font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
