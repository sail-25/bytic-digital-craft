import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span style={{ 
            background: 'linear-gradient(135deg, hsl(var(--brand-blue-light)), hsl(var(--brand-blue-dark)))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Bytic Labs
          </span>
        </motion.button>

        <div className="flex items-center gap-8">
          <NavLink to="services">Services</NavLink>
          <NavLink to="why-us">Why Us</NavLink>
          <NavLink to="clients">Clients</NavLink>
          <NavLink to="showcase">Work</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
