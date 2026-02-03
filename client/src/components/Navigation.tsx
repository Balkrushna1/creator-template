import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Instagram, Twitter, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Services", to: "services" },
  { name: "Portfolio", to: "portfolio" },
  { name: "Testimonials", to: "testimonials" },
  { name: "Pricing", to: "pricing" },
  { name: "FAQ", to: "faq" },
  { name: "Contact", to: "contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold font-display cursor-pointer flex items-center gap-2"
        >
          <span className="text-gradient">SocialGrow</span>
        </ScrollLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg hover:bg-primary/90 transition-all cursor-pointer"
          >
            Let's Talk
          </ScrollLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground/80 py-2 border-b border-border/50"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <div className="flex gap-4 mt-4 justify-center">
                <a href="#" className="p-2 bg-muted rounded-full hover:text-primary transition-colors"><Instagram size={20} /></a>
                <a href="#" className="p-2 bg-muted rounded-full hover:text-primary transition-colors"><Twitter size={20} /></a>
                <a href="#" className="p-2 bg-muted rounded-full hover:text-primary transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
