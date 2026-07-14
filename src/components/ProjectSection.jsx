import { ArrowRight, ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "NoteSync",
    subtitle: "MERN note-taking application",
    image: "./Projects/NoteSync.jpg",
    description:
      "A polished notes platform with secure REST APIs, rate limiting, responsive UI, and a clean full-stack architecture.",
    url: "https://www.linkedin.com/posts/senith-dakshina_excited-to-share-my-latest-project-notesync-activity-7396983091312934912-EInu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgLMkIBYHMRjftwo685t0-ymjYvk-FDdl0",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    impact: ["REST API design", "Responsive dashboard", "Rate limiting"],
    featured: true,
  },
  {
    id: 2,
    title: "Jewelry E-Commerce Platform",
    subtitle: "Client project with virtual try-on",
    image: "./Projects/Wave Mirissa pr.png",
    description:
      "A real-client commerce solution with questionnaire-based necklace recommendations and image-based virtual try-on placement.",
    url: "https://github.com/senithdakshina",
    tags: ["Spring Boot", "React", "PostgreSQL", "Python"],
    impact: ["NLP recommendation flow", "Face and neck landmarks", "Product visualization"],
    featured: true,
  },
  {
    id: 3,
    title: "VocaAI",
    subtitle: "AI-powered voice project",
    image: "./Projects/vocaAI.png",
    description:
      "An AI-focused project exploring voice interaction workflows and practical user-facing automation.",
    url: "https://github.com/senithdakshina",
    tags: ["AI", "React", "Automation"],
    impact: ["Voice workflow", "AI interaction", "User experience"],
  },
  {
    id: 4,
    title: "LifeLine",
    subtitle: "Donation management system",
    image: "./Projects/lifeline.png",
    description:
      "A transparent donation platform connecting donors with people seeking financial support for medical operations.",
    url: "https://www.linkedin.com/posts/senith-dakshina_lifeline-healthtech-webapp-activity-7314344203667288065-m6t7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgLMkIBYHMRjftwo685t0-ymjYvk-FDdl0",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    impact: ["Donation workflow", "Secure payment direction", "Real-time engagement"],
  },
  {
    id: 5,
    title: "Real Estate Management System",
    subtitle: "Property workflow platform",
    image: "./Projects/Realstate.jpeg",
    description:
      "A structured platform for organizing property listings, user interactions, and admin management workflows.",
    url: "https://www.linkedin.com/posts/raees-ahmedh_django-react-fullstackdevelopment-activity-7390737161819574272--fQG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgLMkIBYHMRjftwo685t0-ymjYvk-FDdl0",
    tags: ["Django", "React", "Full Stack"],
    impact: ["Listing management", "Admin workflows", "User-facing UI"],
  },
  {
    id: 6,
    title: "Solar Power Forecasting",
    subtitle: "Deep learning research project",
    image: "./Projects/ceb.jpg",
    description:
      "A forecasting approach for solar generation with peak, valley, and curtailment-risk period identification for Sri Lanka.",
    url: "https://github.com/senithdakshina",
    tags: ["Python", "TensorFlow", "Keras"],
    impact: ["Energy forecasting", "Deep learning model", "Grid stability context"],
  },
];

const featuredProjects = projects.filter((project) => project.featured);
const supportingProjects = projects.filter((project) => !project.featured);

export const ProjectSection = () => {
  return (
    <section id="projects" className="section-band relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-end gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="text-left">
            <p className="section-kicker">Projects</p>
            <h2 className="mt-3 text-balance text-3xl font-black md:text-5xl">
              Work that shows product thinking, not just code.
            </h2>
          </div>
          <p className="text-lg leading-8 text-muted-foreground">
            Each project was chosen to show a different strength: full-stack systems,
            client-focused features, management workflows, and applied machine learning.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article key={project.id} className="group premium-panel overflow-hidden">
              <div className="relative h-72 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1 text-xs font-black text-primary backdrop-blur">
                  <Sparkles size={14} /> Featured
                </div>
              </div>

              <div className="p-6 text-left md:p-7">
                <p className="text-sm font-bold text-primary">{project.subtitle}</p>
                <h3 className="mt-2 text-2xl font-black">{project.title}</h3>
                <p className="mt-4 leading-8 text-muted-foreground">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {project.impact.map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-border bg-primary/10 px-3 py-3 text-sm font-bold text-primary"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-black text-primary transition-colors hover:underline"
                >
                  View case link <ExternalLink size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {supportingProjects.map((project) => (
            <article key={project.id} className="group gradient-border overflow-hidden card-hover">
              <div className="h-44 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 text-left">
                <p className="text-xs font-black uppercase tracking-wide text-primary">
                  {project.subtitle}
                </p>
                <h3 className="mt-2 text-xl font-black">{project.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 font-black text-primary transition-colors hover:underline"
                >
                  View project <ExternalLink size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-lg border border-border bg-card p-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-2xl font-black">Want to see more implementation work?</h3>
            <p className="mt-2 text-muted-foreground">
              My GitHub includes experiments, coursework, and ongoing project improvements.
            </p>
          </div>
          <a
            href="https://github.com/senithdakshina"
            className="cosmic-button shrink-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit GitHub <Github size={18} /> <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
