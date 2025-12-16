import { Layout } from "@/components/layout/Layout";
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
  { year: "1995", title: "Company Founded", description: "Started as a small family business with a vision for excellence." },
  { year: "2002", title: "First Major Project", description: "Completed our first $10M commercial development." },
  { year: "2010", title: "Regional Expansion", description: "Expanded operations to cover the entire East Coast." },
  { year: "2015", title: "500 Projects Milestone", description: "Celebrated completing our 500th construction project." },
  { year: "2020", title: "Sustainability Focus", description: "Launched our green building initiative with LEED certification." },
  { year: "2024", title: "Industry Leader", description: "Recognized as a top-10 construction firm in the region." },
];

const team = [
  {
    name: "James Richardson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Director of Design",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 animate-fade-in">
              About Ever Grace
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              Building Excellence Since 1995
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed animate-fade-in animation-delay-200">
              From humble beginnings to industry leadership, our journey has been 
              defined by an unwavering commitment to quality, innovation, and 
              client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
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
                To be the most trusted name in construction, known for transforming 
                visions into reality with innovation, integrity, and excellence. We 
                aspire to shape skylines and communities for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-secondary">
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
      <section className="section-padding bg-background">
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
                  className={`flex items-center gap-8 animate-fade-in ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
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

      {/* Team */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Leadership
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
              Meet Our Team
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground">
                  {member.name}
                </h3>
                <p className="text-primary-foreground/70">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
