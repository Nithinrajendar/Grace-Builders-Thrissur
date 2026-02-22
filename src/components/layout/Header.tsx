import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/Logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Gallery", path: "/gallery" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass-effect shadow-elegant py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Full logo in a white pill container */}
            <div className={cn(
              "bg-white rounded-xl shadow-md flex-shrink-0 flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg px-2 py-1",
              isScrolled ? "h-12" : "h-14"
            )}>
              <img
                src={logoImg}
                alt="EGC Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            {/* Company name in Rajdhani */}
            <div className="flex flex-col leading-none">
              <span className={cn(
                "font-display font-bold tracking-wide transition-colors duration-300",
                isScrolled ? "text-foreground text-lg" : "text-white text-xl"
              )}>
                EVER GRACE
              </span>
              <span className="font-display font-semibold tracking-[0.18em] uppercase text-xs text-accent">
                CONSTRUCTIONS
              </span>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-300 py-2",
                  location.pathname === link.path
                    ? "text-accent"
                    : isScrolled
                      ? "text-foreground hover:text-accent"
                      : "text-primary-foreground/90 hover:text-primary-foreground",
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left",
                  location.pathname === link.path && "after:scale-x-100"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919747738919"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>+91 97477 38919</span>
            </a>
            <Button variant="gold" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="container-custom py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-lg font-medium py-2 transition-colors",
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Button variant="gold" className="w-full" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
