import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative scale-90">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3>Passionate Web Developer</h3>
            <p className="text-muted-foreground">
              I quickly learn new technologies and thrive in both independent
              and team environments, consistently aiming to deliver positive
              outcomes. Eager to contribute to innovative projects and expand my
              technical skills, I am committed to making a meaningful impact in
              the IT industry while working toward my goal of becoming a
              software engineer
            </p>

            <p className="text-muted-foreground">
              I quickly learn new technologies and thrive in both independent
              and team environments, consistently aiming to deliver positive
              outcomes. Eager to contribute to innovative projects and expand my
              technical skills, I am committed to making a meaningful impact in
              the IT industry while working toward my goal of becoming a
              software engineer
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 scale-90">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"></Code>
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    A web app description is a document that outlines the design
                    and functionality of a web3 application, including its
                    purpose, target audience, and technical specifications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary"></User>
                  </div>

                  <div className="text-left">
                    <h4 className="text-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">
                      A web app description is a document that outlines the
                      design and functionality of a web3 application, including
                      its purpose, target audience, and technical
                      specifications.
                    </p>
                  </div>
                </div>
              
            </div>
           
              <div className="gradient-border p-6 card-hover">
              
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary"></Briefcase>
                  </div>

                  <div className="text-left">
                    <h4 className="text-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">
                      A web app description is a document that outlines the
                      design and functionality of a web3 application, including
                      its purpose, target audience, and technical
                      specifications.
                    </p>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
