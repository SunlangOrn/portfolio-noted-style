import { TechBadge } from "@/components/shared/tech-badge";
import { techStack } from "@/config/tech-stack";

export function StackSection() {
  return (
    <section id="stack" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <div
        id="about"
        className="grid scroll-mt-20 gap-8 border-y-2 border-dashed border-neutral-300 py-10 dark:border-neutral-700 md:grid-cols-[1.35fr_0.65fr] md:items-end"
      >
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{"// about me"}</p>
          <h2 className="font-handwriting mt-2 text-5xl font-bold text-foreground">
            Building useful things with care.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            I am a full-stack developer based in Phnom Penh who enjoys turning real-world ideas into clear,
            dependable digital products. I care about thoughtful interfaces, clean systems, and work that makes
            everyday life a little easier.
          </p>
        </div>

        <aside className="about-note border border-dashed border-neutral-300 bg-white/70 p-5 dark:border-neutral-700 dark:bg-neutral-900/60">
          <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{"// currently focused on"}</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-200">
            <li>Full-stack web applications</li>
            <li>Reliable backend systems</li>
            <li>Interfaces people enjoy using</li>
          </ul>
        </aside>
      </div>

      <div className="mt-16">
        <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{"// tools I use"}</p>
        <h2 className="font-handwriting mt-2 text-5xl font-bold">Stack</h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {techStack.map((category) => (
          <div
            key={category.title}
            className="stack-category space-y-4 rounded-lg border border-dashed p-6 dark:border-neutral-700"
          >
            <h3 className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              {"// "}{category.title}
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
