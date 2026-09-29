import { TechBadge } from "@/components/shared/tech-badge";
import { techStack } from "@/config/tech-stack";

export function StackSection() {
  return (
    <section id="stack" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <h2 className="font-handwriting mt-2 text-5xl font-bold">Stack</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {techStack.map((category) => (
          <div
            key={category.title}
            className="space-y-4 rounded-lg border border-dashed p-6"
          >
            <h3 className="text-xs uppercase tracking-widest text-neutral-500">
              // {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <TechBadge key={item.name} name={item.name} icon={item.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}