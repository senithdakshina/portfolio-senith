import { cn } from "../lib/util";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItem = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
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

    handleScrolled();

    window.addEventListener("scroll", handleScrolled);
    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 left-0",
        isScrolled ? "py-3 bg-background/88 backdrop-blur-xl border-b border-border shadow-sm" : "py-5"
      )}
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center text-xl font-black text-primary">
          <span className="relative z-10">
            <span className="text-glow text-foreground">Senith </span>Dakshina
          </span>
        </a>

        <div className="hidden rounded-full border border-border bg-card/72 px-2 py-2 shadow-sm backdrop-blur md:flex">
          {navItem.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-foreground/75 transition-colors duration-300 hover:bg-primary/10 hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-50 rounded-full border border-border bg-card p-2 shadow-sm md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div 
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItem.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="font-bold text-foreground/80 transition-colors duration-300 hover:text-primary"
                onClick={handleLinkClick}
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
