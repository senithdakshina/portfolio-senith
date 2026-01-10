import { Description } from "@radix-ui/react-toast";
import { ExternalLink, Key,ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "NoteSync, a full-featured Note Taker Web Application built with the MERN Stack!",
    image: "./Projects/NoteSync.jpg",
    Description: " Secure & scalable REST API architecture,Upstash Redis rate limiting for performance and securit,Fully responsive UI built with React + Tailwind CSS",
    url:"https://www.linkedin.com/posts/senith-dakshina_excited-to-share-my-latest-project-notesync-activity-7396983091312934912-EInu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgLMkIBYHMRjftwo685t0-ymjYvk-FDdl0",
    tags: ["MongoDB", "Express", "React","Node.js"]
  },
  {
    id: 2,
    title: "A full-stack e-commerce platform developed for a real client with personalized jewelry suggestions.",
    image: "./Projects/Wave Mirissa pr.png",
    Description: " Built an NLP driven system that recommends necklaces based on user questionnaire data. Created a Python pipeline that detects face and neck landmarks for precise product placement.Developed a Virtual Try-On feature that overlays necklace designs onto user images",
     url:"https://github.com/senithdakshina/WaveMirissa-frontend",
    tags: ["Spring Boot", "React", " PostgreSQL"," Python"],
  },
  {
    id: 3,
    title: "LifeLine – Donation Management System",
    image: "./Projects/lifeline.png",
    Description: "Developed a donation platform connecting donors with individuals needing financial support formedical operations, ensuring transparency, security, and real-time engagement. Integrated secure payment processing ",
     url:"https://www.linkedin.com/posts/senith-dakshina_lifeline-healthtech-webapp-activity-7314344203667288065-m6t7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgLMkIBYHMRjftwo685t0-ymjYvk-FDdl0",
    tags: ["PHP (OOP)", "MySQL", "SpringBoot","HTML","CSS","JavaScript","Bootstrap"], 
  },
    {
    id: 4,
    title: "Real Estate Management System",
    image: "./Projects/Realstate.jpeg",
    Description: "Developed a donation platform connecting donors with individuals needing financial support formedical operations, ensuring transparency, security, and real-time engagement. Integrated secure payment processing ",
     url:"https://www.linkedin.com/posts/raees-ahmedh_django-react-fullstackdevelopment-activity-7390737161819574272--fQG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgLMkIBYHMRjftwo685t0-ymjYvk-FDdl0",
    tags: ["PHP (OOP)", "MySQL", "SpringBoot","HTML","CSS","JavaScript","Bootstrap"], 
  },
      {
    id: 5,
    title: " A Deep Learning Approach for Solar Power Generation Forecasting and Identification of Peak,Valley, and Curtailment-risk periods for Grid Stability in Sri Lanka",
    image: "./Projects/ceb.jpg",
    Description: "Developed a donation platform connecting donors with individuals needing financial support formedical operations, ensuring transparency, security, and real-time engagement. Integrated secure payment processing ",
    //  url:"https://www.linkedin.com/posts/senith-dakshina_lifeline-healthtech-webapp-activity-7314344203667288065-m6t7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgLMkIBYHMRjftwo685t0-ymjYvk-FDdl0",
    tags: ["Python", "TensorFlow", "Keras"], 
  },
  //    {
  //   id: 5,
  //   title: "AI Trip Planner",
  //   image: "./Projects/ceb.jpg",
  //   Description: "Developed a donation platform connecting donors with individuals needing financial support formedical operations, ensuring transparency, security, and real-time engagement. Integrated secure payment processing ",
  //    url:"https://www.linkedin.com/posts/senith-dakshina_lifeline-healthtech-webapp-activity-7314344203667288065-m6t7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgLMkIBYHMRjftwo685t0-ymjYvk-FDdl0",
  //   tags: ["Python", "TensorFlow", "Keras"], 
  // },
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
                    <ExternalLink size={20}></ExternalLink>Link
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
