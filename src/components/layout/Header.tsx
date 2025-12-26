import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
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
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-display font-bold text-lg">EG</span>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-display font-bold text-xl leading-none transition-colors",
                isScrolled ? "text-black" : "text-white"
              )}>
                Ever Grace
              </span>
              <span className={cn(
                "text-xs tracking-[0.2em] uppercase transition-colors",
                isScrolled ? "text-black/60" : "text-white/70"
              )}>
                Construction
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
                    ? isScrolled ? "text-black" : "text-white"
                    : isScrolled
                    ? "text-black/70 hover:text-black"
                    : "text-white/90 hover:text-white",
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left",
                  isScrolled ? "after:bg-black" : "after:bg-white",
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
              href="tel:+1234567890"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isScrolled ? "text-black" : "text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-890</span>
            </a>
            <Button className="bg-black text-white hover:bg-black/90" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              isScrolled ? "text-black" : "text-white"
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
                    ? "text-black"
                    : "text-black/70 hover:text-black"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Button className="w-full bg-black text-white hover:bg-black/90" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
