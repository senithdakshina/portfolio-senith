import { ThemeToggle } from '../components/ThemeToggle';
import { StarBackground } from '../components/StarBackground';
import { Navbar } from '../components/Navbar';
import { Herosection } from '../components/Herosection';
import { AboutMe } from '../components/AboutMe';
import { SkillSection } from '../components/SkillSection';
import { ProjectSection } from '../components/ProjectSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main>
        <Herosection />
        <AboutMe />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
