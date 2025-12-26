import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Residential Construction",
  "Commercial Buildings",
  "Renovation & Remodeling",
  "Infrastructure Development",
  "Project Planning",
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-display font-bold text-xl">EG</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none">Ever Grace</span>
                <span className="text-xs tracking-[0.2em] uppercase text-primary-foreground/70">
                  Construction
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Building excellence since 1995. We transform visions into reality with unmatched craftsmanship and dedication to quality.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                  aria-label="Social media link"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
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
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-white/70 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  123 Construction Avenue, Building District, NY 10001
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-white/70 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-white/70 flex-shrink-0" />
              <a href="mailto:info@evergrace.com" className="text-primary-foreground/80 hover:text-white transition-colors">
                  info@evergrace.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-white/70 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Mon - Fri: 8:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Ever Grace Construction. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
