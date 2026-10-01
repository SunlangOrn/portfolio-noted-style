import { Hero } from "./_components/hero";
import { StackSection } from "./_components/stack-section";
import { ExperienceSection } from "./_components/experience-section";
import { ProjectsSection } from "./_components/projects-section";
import { ContactSection } from "./_components/contact-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StackSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}