import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent to-gold-light" />

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A1A2F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
        }}
      />

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
