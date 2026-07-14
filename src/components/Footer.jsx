import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card px-4 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Senith Dakshina. All rights reserved.
        </p>
        <a
          href="#home"
          className="rounded-full bg-primary/10 p-3 text-primary transition-colors hover:bg-primary/20"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
