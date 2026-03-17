import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background — deep navy to warm charcoal diagonal */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, hsl(220,90%,12%) 0%, hsl(220,80%,20%) 45%, hsl(28,40%,16%) 100%)"
      }} />

      {/* Subtle diagonal line pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #ffffff,
            #ffffff 1px,
            transparent 1px,
            transparent 32px
          )`,
        }}
      />

      {/* Accent glow spots */}
      <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ background: "hsl(220,85%,40%)" }} />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15" style={{ background: "hsl(28,60%,40%)" }} />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground mb-6">
            Ready to Build Your Vision?
          </h2>
          <p className="text-xl text-accent-foreground/80 mb-10 max-w-2xl mx-auto">
            Let's discuss your project. Our team of experts is ready to turn your
            construction dreams into reality with precision and excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="navy" size="xl" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="xl"
              className="bg-white/15 border-2 border-white text-white hover:bg-white/25 gap-2 font-semibold backdrop-blur-sm"
              asChild
            >
              <a href="tel:+919747738919">
                <Phone className="w-5 h-5" />
                +91 97477 38919
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
