import {
  Award,
  Briefcase,
  CheckCircle2,
  Download,
  GraduationCap,
  Target,
  Trophy,
  Users,
} from "lucide-react";

const certifications = [
  "Docker Foundations Professional Certificate",
  "AWS Essential Training for Developers",
  "Python Programming Course - University of Moratuwa",
  "Advanced React",
  "Microsoft Azure AI Essentials",
];

const strengths = [
  "Full-stack project delivery",
  "Clean UI implementation",
  "API and database fundamentals",
  "Fast learning and team ownership",
];

const moments = [
  {
    icon: Users,
    title: "Event leadership",
    detail:
      "Main Coordinator for CST LAN Challenge at Uva Wellassa University, leading a 10+ member team for an event with 200+ participants.",
  },
  {
    icon: Trophy,
    title: "Competitive discipline",
    detail:
      "1st place in the Boys' D Division Badminton Championship organized by the Sri Lanka Schools Badminton Association.",
  },
  {
    icon: Briefcase,
    title: "Professional habits",
    detail:
      "Strong communication, time management, logical thinking, and a practical approach to solving problems with software.",
  },
];

export const AboutMe = () => {
  return (
    <section id="about" className="section-band relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-end gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="text-left">
            <p className="section-kicker">About</p>
            <h2 className="mt-3 text-balance text-3xl font-black md:text-5xl">
              A software engineer in progress with the habits teams look for.
            </h2>
          </div>
          <p className="text-lg leading-8 text-muted-foreground">
            I am a Computer Science and Technology undergraduate at Uva Wellassa
            University. I care about building interfaces that feel polished, APIs that
            are understandable, and project work that moves from idea to usable result.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="premium-panel p-6 text-left md:p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-md bg-primary/10 p-3 text-primary">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <p className="section-kicker">Profile</p>
                <h3 className="mt-2 text-2xl font-black">
                  Computer Science and Technology Undergraduate
                </h3>
                <p className="mt-4 leading-8 text-muted-foreground">
                  I learn quickly, communicate clearly, and like being close to the
                  details: data models, user flows, implementation quality, and the small
                  product decisions that make software feel reliable.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background/70 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="cosmic-button">
                Start a Conversation
              </a>
              <a
                href="CV pdf/E_G_Senith_Dakshina_UWU_CST_21_087.pdf"
                download="E_G_Senith_Dakshina_UWU_CST_21_087"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-6 py-3 font-bold text-primary transition-colors duration-300 hover:bg-primary/10"
              >
                <Download size={18} /> Download CV
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <div className="gradient-border p-6 text-left card-hover">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-black">Certifications</h3>
              </div>
              <div className="mt-5 grid gap-3">
                {certifications.map((item) => (
                  <p
                    key={item}
                    className="rounded-md border border-border bg-background/60 px-4 py-3 font-semibold text-muted-foreground"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="gradient-border p-6 text-left card-hover">
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-black">What I bring</h3>
              </div>
              <div className="mt-5 space-y-5">
                {moments.map((moment) => {
                  const MomentIcon = moment.icon;

                  return (
                    <div key={moment.title} className="flex gap-4">
                      <div className="mt-1 h-9 w-9 shrink-0 rounded-md bg-primary/10 p-2 text-primary">
                        <MomentIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold">{moment.title}</h4>
                        <p className="mt-1 leading-7 text-muted-foreground">
                          {moment.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
