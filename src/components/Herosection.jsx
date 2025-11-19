import { ArrowDown } from "lucide-react";
export const Herosection =()=>{
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
              Highly motivated and dedicated Computer Science undergraduate with a solid foundation of 
              theoretical and practical knowledge. A quick learner of new technologies, adept at thriving 
              in both independent and team environments to deliver positive outcomes. Eager to contribute to
               innovative projects, expand technical skills, and committed to making a meaningful impact in the
                IT industry while working toward the goal of becoming a Software Engineer.
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
}