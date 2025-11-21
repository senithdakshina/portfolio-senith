import { ArrowDown } from "lucide-react";
export const Herosection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col item-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Senith
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Dakshina
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am senith dakshina, passionate and dedicated undergraduate in Computer science
            with strong theoretical and practical knowledge. I quickly learn new
            technologies and thrive in both independent and team environments,
            consistently aiming to deliver positive outcomes. Eager to contribute to innovative projects and expand my technical skills, I
            am committed to making a meaningful impact in the IT industry while
            working toward my goal of becoming a software engineer.
          </p>
        </div>

        <div className=" pt-4 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce ">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
      </div>
    </section>
  );
};
