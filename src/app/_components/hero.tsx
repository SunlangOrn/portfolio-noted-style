import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
      <div className="space-y-6">
        {siteConfig.availableForWork && (
          <span className="inline-flex items-center gap-2 border-y-2 border-dashed border-green-700/100 bg-green-100 px-3 py-1 text-sm text-green-800 dark:border-green-500/70 dark:bg-green-950/60 dark:text-green-300">
            <span className="availability-dot h-2 w-2 rounded-full bg-green-600" />
            available for work
          </span>
        )}

        <p className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
          {"// hello world, this is"}
        </p>

        <div className="space-y-2">
          <h1 className="font-handwriting text-5xl font-bold text-foreground md:text-6xl">
            {siteConfig.name}
          </h1>

          <h2 className="relative inline-block font-handwriting text-2xl text-foreground md:text-4xl">
            <span className="border-b-2 border-red-500 pb-1">
              {siteConfig.role}
            </span>
          </h2>
        </div>

        <p className="max-w-md text-lg text-neutral-600 dark:text-neutral-300">{siteConfig.intro}</p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="#contact"
            className={buttonVariants({
              size: "lg",
              className: "job-cta rounded-full border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200",
            })}
          >
            <BriefcaseBusiness aria-hidden="true" />
            let&apos;s work together
            <ArrowRight aria-hidden="true" className="job-cta-arrow" />
          </Link>
          <Link
            href="#stack"
            className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full" })}
          >
            explore my stack
          </Link>
        </div>

        <p className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
          <Sparkles aria-hidden="true" className="size-4 text-amber-600" />
          Open to full-time and freelance opportunities.
        </p>
      </div>

     <div className="relative aspect-[3/3] overflow-hidden rounded-lg">
  <video
    className="h-full w-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    poster="/images/profile.jpg"
    aria-label={`Video of ${siteConfig.name}`}
  >
    <source src="/videos/profile.webm" type="video/webm" />
  </video>
</div>
    </section>
  );
}
