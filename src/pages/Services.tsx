import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Home, Wrench, FileText, HardHat, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Buildings",
    description: "We create commercial spaces that inspire productivity and make lasting impressions. Our portfolio includes office buildings, retail centers, and mixed-use developments.",
    features: [
      "Office buildings & corporate HQs",
      "Retail & shopping centers",
      "Hotels & hospitality",
      "Healthcare facilities",
      "Educational institutions",
    ],
    image: "/Images/Commercial001.jpeg",
  },
  {
    id: "residential",
    icon: Home,
    title: "Residential Construction",
    description: "We build custom homes that reflect your unique vision and lifestyle. From modern minimalist designs to classic architectural styles, our team delivers exceptional craftsmanship in every detail.",
    features: [
      "Custom home design and construction",
      "Luxury estate development",
      "Multi-family housing",
      "Smart home integration",
      "Energy-efficient building",
    ],
    image: "/Images/Res06.jpeg",
  },
  {
    id: "renovation",
    icon: Wrench,
    title: "Renovation & Remodeling",
    description: "Transform your existing space with our expert renovation services. We breathe new life into structures while preserving their character and enhancing functionality.",
    features: [
      "Complete building renovations",
      "Historic preservation",
      "Interior remodeling",
      "Structural upgrades",
      "ADA compliance updates",
    ],
    image: "/Images/reno0001.jpeg",
  },
  {
    id: "planning",
    icon: FileText,
    title: "Project Planning",
    description: "Our comprehensive planning services ensure your project succeeds from concept to completion. We handle everything from feasibility studies to permit acquisition.",
    features: [
      "Feasibility studies",
      "Budget development",
      "Permit acquisition",
      "Contractor selection",
      "Project scheduling",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
];

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Our Services | Construction, Renovation & Interior Design – Ever Grace Constructions Thrissur</title>
        <meta name="description" content="Explore our construction services in Thrissur, Kerala – residential homes, commercial buildings, renovation & remodeling, and project planning. Get a free quote today!" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-16 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 animate-fade-in">
              Our Services
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              Comprehensive Construction Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed animate-fade-in animation-delay-200">
              From residential homes to large-scale infrastructure, we provide 
              end-to-end construction services tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pt-16 pb-20 md:pb-28 lg:pb-32 bg-background">
        <div className="container-custom space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="gold" asChild>
                  <Link to="/contact">
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background — deep navy to warm charcoal diagonal */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, hsl(220,90%,12%) 0%, hsl(220,80%,20%) 45%, hsl(28,40%,16%) 100%)"
        }} />
        {/* Subtle diagonal line pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #ffffff, #ffffff 1px, transparent 1px, transparent 32px)`,
          }}
        />
        {/* Glow spots */}
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ background: "hsl(220,85%,40%)" }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15" style={{ background: "hsl(28,60%,40%)" }} />

        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote.
          </p>
          <Button variant="navy" size="xl" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
