import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const highlights = [
  { label: "Applied projects", value: "5+" },
  { label: "Leadership reach", value: "200+" },
  { label: "Primary focus", value: "Full-stack" },
];

const stack = ["React", "Spring Boot", "Node.js", "Python", "MySQL", "MongoDB"];

export const Herosection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-28"
    >
      <div className="container z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-8 text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold text-primary opacity-0 animate-fade-in">
            <Sparkles size={16} />
            Software Engineering Internship Candidate
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-balance text-4xl font-black leading-tight tracking-tight opacity-0 animate-fade-in-delay-1 md:text-6xl">
              I build polished, reliable web products from idea to working software.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground opacity-0 animate-fade-in-delay-2 md:text-xl">
              I am Senith Dakshina, a Computer Science and Technology undergraduate
              focused on full-stack engineering, clean interfaces, practical AI features,
              and systems that feel simple for real users.
            </p>
          </div>

          <div className="flex flex-col gap-3 opacity-0 animate-fade-in-delay-3 sm:flex-row">
            <a href="#projects" className="cosmic-button">
              Explore My Work <ArrowRight size={18} />
            </a>
            <a
              href="CV pdf/E_G_Senith_Dakshina_UWU_CST_21_087.pdf"
              download="E_G_Senith_Dakshina_UWU_CST_21_087"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Download size={18} /> Download CV
            </a>
          </div>

          <div className="grid max-w-2xl grid-cols-3 gap-3 opacity-0 animate-fade-in-delay-4">
            {highlights.map((item) => (
              <div key={item.label} className="border-l border-border pl-4">
                <p className="text-2xl font-black text-foreground md:text-3xl">{item.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="premium-panel opacity-0 animate-fade-in-delay-4">
          <div className="border-b border-border/80 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Candidate snapshot</p>
                <h2 className="mt-1 text-2xl font-black">Senith Dakshina</h2>
              </div>
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-black text-primary-foreground">
                Available
              </span>
            </div>
          </div>

          <div className="space-y-5 p-5 md:p-6">
            <div className="shine-line rounded-lg border border-border bg-background/70 p-5">
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-primary/10 p-3 text-primary">
                  <BriefcaseBusiness className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold">Open to internship roles</p>
                  <p className="mt-2 leading-7 text-muted-foreground">
                    Looking for teams where I can contribute to production-quality web
                    applications and learn from experienced engineers.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-4">
                <Code2 className="mb-3 h-5 w-5 text-primary" />
                <p className="font-bold">Full-stack delivery</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  React interfaces, REST APIs, databases, and deployment-minded workflow.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <ShieldCheck className="mb-3 h-5 w-5 text-primary" />
                <p className="font-bold">Quality mindset</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Clear structure, secure flows, responsive layouts, and maintainable code.
                </p>
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-bold text-muted-foreground">Core tools</p>
              <div className="flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 border-t border-border pt-5 sm:grid-cols-2">
              <a
                href="mailto:senithdakshina@gmail.com"
                className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
              >
                <Mail size={18} /> Email me
              </a>
              <span className="inline-flex items-center gap-2 font-semibold text-muted-foreground">
                <MapPin size={18} /> Panadura, Sri Lanka
              </span>
              <a
                href="https://www.linkedin.com/in/senith-dakshina/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-muted-foreground transition hover:text-primary"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/senithdakshina"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-muted-foreground transition hover:text-primary"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center animate-bounce md:flex">
        <span className="mb-2 text-sm text-muted-foreground">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
