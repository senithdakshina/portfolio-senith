import { Key } from "lucide-react";

const skills =
    [
  { name: "Python", level: 90, category: "backend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Bootstrap", level: 80, category: "frontend" },
  { name: "PHP", level: 85, category: "backend" },
  { name: "MySQL", level: 85, category: "database" },
  { name: "MongoDB", level: 75, category: "database" },
  { name: "Postman", level: 80, category: "tools" },
  { name: "AWS", level: 70, category: "cloud" },
  { name: "GitHub", level: 85, category: "tools" },
  { name: "Docker", level: 70, category: "devops" },
  { name: "Adobe PS", level: 75, category: "design" },
  { name: "Canva", level: 90, category: "design" },
  { name: "Java", level: 80, category: "backend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "HTML", level: 95, category: "frontend" },
  { name: "CSS", level: 90, category: "frontend" },
   { name: "CSS", level: 90, category: "frontend" },
    { name: "CSS", level: 90, category: "frontend" },
  
];




export const SkillSection =() =>{
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill,key)=>(
                    <div key={key} className="bg-card p-6 round-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}