import { Hero } from "./_components/hero";
import { StackSection } from "./_components/stack-section";
import { ExperienceSection } from "./_components/experience-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StackSection />
      <ExperienceSection />
    </main>
  );
}