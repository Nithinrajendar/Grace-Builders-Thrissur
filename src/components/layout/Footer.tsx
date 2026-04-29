import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logoImg from "@/assets/Logo.png";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Commercial Buildings",
  "Residential Construction",
  "Renovation & Remodeling",
  "Project Planning",
];

export function Footer() {
  return (
    <>
      <footer className="bg-primary text-primary-foreground">
        {/* Main Footer */}
        <div className="container-custom py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                {/* Full logo in white container */}
                <div className="bg-white rounded-xl shadow-md flex-shrink-0 flex items-center justify-center px-2 py-1 h-14">
                  <img
                    src={logoImg}
                    alt="EGC Logo"
                    className="h-full w-auto object-contain"
                  />
                </div>
                {/* Company name */}
                <div className="flex flex-col leading-none">
                  <span className="font-display font-bold text-xl tracking-wide text-primary-foreground">
                    EVER GRACE
                  </span>
                  <span className="font-display font-semibold text-xs tracking-[0.18em] uppercase text-accent">
                    CONSTRUCTIONS
                  </span>
                </div>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Building excellence since 2006. We transform visions into reality with unmatched craftsmanship and dedication to quality.
              </p>

              <div className="pt-2">
                <span className="text-accent font-semibold block mb-1 text-sm">Areas We Serve:</span>
                <span className="text-sm text-primary-foreground/70">
                  Thrissur, Palakkad, Ernakulam, and all across Kerala.
                </span>
              </div>

              <div className="flex gap-4">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/egcbuild", label: "Facebook" },
                  { Icon: Instagram, href: "https://www.instagram.com/ever_grace_constructions_/", label: "Instagram" }
                ].map(({ Icon, href, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 lg:justify-self-center">
              <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3 lg:justify-self-center">
              <h4 className="font-display text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-primary-foreground/80">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/80">
                    3rd Floor, Flamon Complex, Kuriachira, Thrissur-6, Kerala, India
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919747738919" className="text-primary-foreground/80 hover:text-accent transition-colors">
                      +91 97477 38919
                    </a>
                    <a href="tel:+919633691891" className="text-primary-foreground/80 hover:text-accent transition-colors">
                      +91 96336 91891
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <a href="mailto:egcbuild@gmail.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    egcbuild@gmail.com
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/80">
                    Mon - Sat: 9:00 AM - 5:30 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10">
          <div className="container-custom py-5 flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Ever Grace Constructions. All rights reserved.
            </p>
            <p className="text-primary-foreground/40 text-xs">
              Powered by{" "}
              <a
                href="https://opsmintech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent/70 hover:text-accent transition-colors underline-offset-2 hover:underline"
              >
                opsmintech.com
              </a>
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Floating Action Buttons ── */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3 items-end">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919747738919?text=Hello, I'm interested in your construction services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-2"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md whitespace-nowrap">
            Chat on WhatsApp
          </span>
          <div className="relative w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-green-400/30 animate-ping" />
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#25D366" />
              <path d="M22.5 9.5A9.1 9.1 0 0 0 7.3 20.7L6 26l5.5-1.4a9.1 9.1 0 0 0 11-14.9z" fill="white" />
              <path d="M20.5 18.7c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.2-.6.9-.8 1-.1.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.2-.5 0-.2-.7-1.7-.9-2.3-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.1 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.2-.2-.1-.4-.1-.7-.2z" fill="#25D366" />
            </svg>
          </div>
        </a>

        {/* Call */}
        <a
          href="tel:+919747738919"
          aria-label="Call Us"
          className="group flex items-center gap-2"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md whitespace-nowrap">
            +91 97477 38919
          </span>
          <div className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <svg className="w-7 h-7 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
          </div>
        </a>
      </div>
    </>
  );
}
