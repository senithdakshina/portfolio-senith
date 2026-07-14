import { useState } from "react";
import { cn } from "../lib/util";
import { Blocks, Cloud, Code2, Database, Layers3, Wrench } from "lucide-react";

const skills = [
  { name: "Python", level: 90, category: "backend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Bootstrap", level: 80, category: "frontend" },
  { name: "PHP", level: 85, category: "backend" },
  { name: "MySQL", level: 85, category: "tools" },
  { name: "MongoDB", level: 75, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
  { name: "GitHub", level: 85, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Adobe PS", level: 75, category: "design" },
  { name: "Canva", level: 90, category: "design" },
  { name: "Java", level: 80, category: "backend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "HTML", level: 95, category: "frontend" },
  { name: "CSS", level: 90, category: "frontend" },
  ,
];
const category = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
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
            My tools are grouped around the work they help deliver: clean
            interfaces, useful APIs, reliable data handling, and project
            workflows that teams can trust.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {capabilityGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <div
                key={group.title}
                className="gradient-border p-5 text-left card-hover"
              >
                <div className="mb-4 inline-flex rounded-md bg-primary/10 p-3 text-primary">
                  <GroupIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {group.copy}
                </p>
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
                      : "border-border bg-background text-foreground hover:border-primary hover:text-primary",
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
            Comfortable learning new frameworks quickly when a project calls for
            them.
          </div>
        </div>
      </div>
    </section>
  );
};
