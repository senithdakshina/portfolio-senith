import { ArrowRight, Key } from "lucide-react";
import { cn } from "../lib/util";
import { useState } from "react";

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
const category =["all","frontend","backend","tools"]



export const SkillSection =() =>{
    const [activeCategory,setActiveCategory] = useState("all");
    const filterSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return (
      <section id="skill" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {category.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                  activeCategory == category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bd-secondary"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterSkills.map((skill, key) => (
              <div
                key={key}
                className="bg-card p-6 round-lg shadow-xs card-hover"
              >
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>

         
        </div>
      </section>
    );
}