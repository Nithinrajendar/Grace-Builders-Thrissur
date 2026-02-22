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
              Building excellence since 1995. We transform visions into reality with unmatched craftsmanship and dedication to quality.
            </p>

            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
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
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
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
  );
}
