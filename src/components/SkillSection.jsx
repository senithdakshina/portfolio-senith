import { useState } from "react";
import { cn } from "../lib/util";
import { Blocks, Cloud, Code2, Database, Layers3, Wrench } from "lucide-react";

const skills = [
  { name: "React", category: "frontend", level: "Advanced" },
  { name: "Tailwind CSS", category: "frontend", level: "Advanced" },
  { name: "HTML", category: "frontend", level: "Advanced" },
  { name: "CSS", category: "frontend", level: "Advanced" },
  { name: "Bootstrap", category: "frontend", level: "Strong" },
  { name: "Node.js", category: "backend", level: "Strong" },
  { name: "Express", category: "backend", level: "Strong" },
  { name: "Spring Boot", category: "backend", level: "Strong" },
  { name: "PHP", category: "backend", level: "Strong" },
  { name: "Python", category: "backend", level: "Advanced" },
  { name: "Java", category: "backend", level: "Strong" },
  { name: "MySQL", category: "database", level: "Advanced" },
  { name: "MongoDB", category: "database", level: "Strong" },
  { name: "PostgreSQL", category: "database", level: "Strong" },
  { name: "GitHub", category: "tools", level: "Advanced" },
  { name: "Docker", category: "tools", level: "Working" },
  { name: "Postman", category: "tools", level: "Advanced" },
  { name: "AWS", category: "tools", level: "Working" },
  { name: "Figma", category: "tools", level: "Strong" },
];

const categories = ["all", "frontend", "backend", "database", "tools"];

const capabilityGroups = [
  {
    icon: Layers3,
    title: "Frontend engineering",
    copy: "Responsive React interfaces with polished interaction, strong layout control, and maintainable component structure.",
  },
  {
    icon: Blocks,
    title: "Backend foundations",
    copy: "REST APIs, server-side logic, authentication-aware flows, and clean integration between client and data layers.",
  },
  {
    icon: Database,
    title: "Data and persistence",
    copy: "Relational and document database experience across project systems, dashboards, and management platforms.",
  },
  {
    icon: Cloud,
    title: "Delivery workflow",
    copy: "GitHub, Docker fundamentals, API testing, cloud basics, and documentation-minded project execution.",
  },
];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_0.9fr]">
          <div className="text-left">
            <p className="section-kicker">Skills</p>
            <h2 className="mt-3 text-balance text-3xl font-black md:text-5xl">
              A practical stack for building complete web applications.
            </h2>
          </div>
          <p className="text-lg leading-8 text-muted-foreground">
            My tools are grouped around the work they help deliver: clean interfaces,
            useful APIs, reliable data handling, and project workflows that teams can trust.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {capabilityGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
            <div key={group.title} className="gradient-border p-5 text-left card-hover">
              <div className="mb-4 inline-flex rounded-md bg-primary/10 p-3 text-primary">
                <GroupIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-black">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{group.copy}</p>
            </div>
            );
          })}
        </div>

        <div className="mt-12 premium-panel p-5 md:p-6">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div className="text-left">
              <div className="flex items-center gap-3">
                <Code2 className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-black">Technology toolkit</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                Filter by category to see the core tools behind my project work.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-bold capitalize transition-colors duration-300",
                    activeCategory === category
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:border-primary hover:text-primary"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-between gap-4 rounded-lg border border-border bg-background/75 px-4 py-3 text-left"
              >
                <div>
                  <h4 className="font-bold">{skill.name}</h4>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {skill.category}
                  </p>
                </div>
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-black text-accent-foreground dark:text-accent">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 rounded-lg border border-border bg-primary/10 px-4 py-3 text-left text-sm font-semibold text-primary">
            <Wrench className="h-5 w-5 shrink-0" />
            Comfortable learning new frameworks quickly when a project calls for them.
          </div>
        </div>
      </div>
    </section>
  );
};
