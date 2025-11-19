import { Description } from "@radix-ui/react-toast";
import { ExternalLink, Key,ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "test1",
    image: "./Projects/project.jpg",
    Description: "test",
    url:"",
    tags: ["React", "Python", "SpringBoot"],
  },
  {
    id: 1,
    title: "test1",
    image: "./Projects/project.jpg",
    Description: "test",
     url:"",
    tags: ["React", "Python", "SpringBoot"],
  },
  {
    id: 1,
    title: "test1",
    image: "./Projects/project.jpg",
    Description: "test",
     url:"",
    tags: ["React", "Python", "SpringBoot"],
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-forground mb-12 max-w-2xl mx-auto">
          Here some of my recent projects.Each projects was carefully crafted
          with atttention to details,perfomance and experiance
        </p>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((projects, Key) => (
            <div key={Key} className="group bg-card rounded-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={projects.image}
                  alt={projects.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {projects.tags.map((tag)=>(
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary-foreground"> 
                            {tag}
                        </span>
                    ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{projects.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{projects.Description}</p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                    <a href={projects.url} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    <ExternalLink size={20}></ExternalLink>
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
         <div className="text-center mt-12">
            <a
              href="https://github.com/senithdakshina"
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check My Github <ArrowRight size={16} />
            </a>
          </div>
      </div>
    </section>
  );
};
