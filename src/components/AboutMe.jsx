import { Briefcase, Code, PersonStanding, Trophy, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative scale-90">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3>CERTIFICATIONS</h3>
            <p className="text-muted-foreground">
              Docker Foundations Professional Certificate | LinkedIn Learning
            </p>
            <p className="text-muted-foreground">
              AWS Essential Training for Developers | LinkedIn Learning
            </p>
            <p className="text-muted-foreground">
              Python Programming Course | University of Moratuwa (CODL)
            </p>
            <p className="text-muted-foreground">Advanced React | coursera</p>
            <p className="text-muted-foreground">
              Microsoft Azure AI Essentials: Workloads and Machine Learning on
              Azure | LinkedIn Learning
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
                href="CV pdf/E_G_Senith_Dakshina_UWU_CST_21_087.pdf"
                download={"E_G_Senith_Dakshina_UWU_CST_21_087"}
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
                  <PersonStanding className="h-6 w-6 text-primary"></PersonStanding>
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">Volunteering</h4>
                  <p className="text-muted-foreground">
                    Main Coordinator – CST LAN Challenge, Uva Wellassa
                    University
                  </p>
                  <p className="text-muted-foreground">
                    Led the planning and execution of a university-level eSports competition hosted by the Department
 of Computer Science and Technology, managing a team of 10+ members.
                    Successfully organized the event for 200+ participants,
                    demonstrating leadership, project management, and team
                    collaboration skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Trophy className="h-6 w-6 text-primary"></Trophy>
                </div>

                <div className="text-left">
                  <h4 className="text-semibold text-lg">
                    Extra Curricular Activities{" "}
                  </h4>
                  <p className="text-muted-foreground">
                    Achieved 1st place in the Boys’ D Division Badminton
                    Championship organized by the Sri Lanka Schools Badminton
                    Association, showcasing teamwork, dedication, and strong
                    competitive performance
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
                  <h4 className="text-semibold text-lg">Soft skills</h4>
                  <p className="text-muted-foreground">
                    Creative and logical thinker with strong communication, effective time management, and team management skills.
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
