import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Target, Eye, Users, Award, Clock } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue the highest standards in every project, never compromising on quality.",
  },
  {
    icon: CheckCircle,
    title: "Integrity",
    description: "Transparent communication and honest dealings form the foundation of our relationships.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as partners with our clients, architects, and subcontractors.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "On-time delivery and budget adherence are commitments we take seriously.",
  },
];

const timeline = [
  { year: "2006", title: "Company Founded", description: "Started as a family-driven construction firm in Thrissur with a vision for quality and excellence." },
  { year: "2012", title: "First Major Project", description: "Successfully completed our first major commercial project in Thrissur, marking a strong beginning." },
  { year: "2016", title: "Regional Expansion", description: "Expanded our services across key regions of Kerala, serving a wider client base." },
  { year: "2022", title: "100 Projects Milestone", description: "Achieved the milestone of completing over 100 construction projects across various sectors." },
  { year: "2024", title: "Sustainability Focus", description: "Adopted eco-friendly construction practices to promote energy efficiency and responsible building." },
  { year: "2026", title: "Growing Recognition", description: "Continuing to strengthen our reputation as a trusted construction partner in Kerala." },
];

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us | Ever Grace Constructions – Trusted Builders in Thrissur Since 2006</title>
        <meta name="description" content="Learn about Ever Grace Constructions – a trusted construction company in Thrissur, Kerala since 2006. 20 years of excellence in residential, commercial, and renovation projects." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-16 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 animate-fade-in">
              About Ever Grace
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              Building Excellence Since 2006
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed animate-fade-in animation-delay-200">
              From humble beginnings in Thrissur to becoming a trusted name across Kerala,
              our journey has been defined by an unwavering commitment to quality,
              innovation, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="pt-10 md:pt-12 pb-12 md:pb-16 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant animate-fade-in">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional construction services that exceed expectations,
                while maintaining the highest standards of safety, sustainability, and
                craftsmanship. We build not just structures, but lasting relationships
                with our clients and communities.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant animate-fade-in animation-delay-200">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted name in construction across Kerala, known for
                transforming visions into reality with innovation, integrity, and
                excellence. We aspire to shape communities for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Our Foundation
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-6 text-center shadow-elegant hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pt-16 pb-20 md:pb-28 lg:pb-32 bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex items-center gap-8 animate-fade-in ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-card rounded-2xl p-6 shadow-elegant inline-block">
                      <span className="text-accent font-display text-2xl font-bold">
                        {item.year}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-foreground mt-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-4 h-4 rounded-full bg-accent border-4 border-background shadow-lg" />
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
