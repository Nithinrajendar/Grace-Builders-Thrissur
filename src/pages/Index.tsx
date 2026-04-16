import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Ever Grace Constructions | Premium Building & Construction Services in Thrissur, Kerala</title>
        <meta name="description" content="Ever Grace Constructions – Trusted construction company in Thrissur, Kerala. Specializing in residential, commercial, renovation, and interior projects. Call +91 97477 38919 for a free quote." />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TrustSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
