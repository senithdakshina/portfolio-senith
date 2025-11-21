import { cn } from "../lib/util";
import { useEffect, useState } from "react";
// Assuming you are using Lucide React or similar for icons
import { Menu, X } from "lucide-react";

const navItem = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skill", href: "#skill" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      setScrolled(window.scrollY > 10);
    };

    // Set initial state in case page is already scrolled
    handleScrolled();

    window.addEventListener("scroll", handleScrolled);
    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);

  // Closes the menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 left-0",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-primary flex items-center">
          <span className="relative z-10">
            <span className="text-glow text-foreground">Senith </span>Dakshina
          </span>
        </a>

        {/* desktop nav - Hidden on small screens */}
        <div className="hidden md:flex space-x-7">
          {navItem.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile button - Hidden on medium/large screens */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          // Use 'md:hidden' to only show this button on small screens
          className="md:hidden " 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {/* Corrected icon rendering, assuming imported Menu and X icons */}
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* mobile menu content - Hidden on medium/large screens */}
        <div 
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none" // Corrected pointer-none to pointer-events-none
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItem.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={handleLinkClick} // Use the new handler
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};