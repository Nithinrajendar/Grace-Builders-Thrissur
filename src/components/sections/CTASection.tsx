import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden bg-primary">
      {/* Glowing accent orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0V0zm40 0h-1v40h1V0zM0 0v1h40V0H0zm0 40v-1h40v1H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Label */}
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-5">
            Let's Work Together
          </span>

          {/* Heading */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Build{" "}
            <span className="text-accent">Your Vision?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-white/70 mb-12 max-w-xl mx-auto leading-relaxed">
            Our certified engineering team is ready to turn your construction
            dreams into reality — with precision, quality, and care.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="xl"
              className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg shadow-accent/20 gap-2"
              asChild
            >
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 gap-2 font-semibold"
              asChild
            >
              <a href="tel:+919747738919">
                <Phone className="w-5 h-5" />
                +91 97477 38919
              </a>
            </Button>
          </div>

          {/* WhatsApp hint */}
          <p className="mt-8 text-white/40 text-sm flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4 text-green-400" />
            Also reachable on WhatsApp
          </p>

        </div>
      </div>
    </section>
  );
}
