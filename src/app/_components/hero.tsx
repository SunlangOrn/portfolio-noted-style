import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
      <div className="space-y-6">
        {siteConfig.availableForWork && (
          <span className="inline-flex items-center gap-2 border-y-2 border-dashed border-green-700/100 bg-green-100 px-3 py-1 text-sm text-green-800">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            available for work
          </span>
        )}

        <p className="text-sm uppercase tracking-widest text-neutral-500">
          // hello world, this is
        </p>

        <div className="space-y-2">
          <h1 className="font-handwriting text-5xl font-bold md:text-6xl text-neutral-900">
            {siteConfig.name}
          </h1>

          <h2 className="relative inline-block font-handwriting text-2xl md:text-4xl text-neutral-800">
            <span className="border-b-2 border-red-500 pb-1">
              {siteConfig.role}
            </span>
          </h2>
        </div>

        <p className="max-w-md text-lg text-neutral-600">{siteConfig.intro}</p>

        <div className="flex flex-wrap gap-3">
          <Link href="/#stack" className={buttonVariants({ size: "lg",variant: "outline" })}>
            see the work →
          </Link>
          <Link
            href="/#contact"
            className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full" } )}
          >
        
            say hi 👋
          </Link>
        </div>
      </div>

      {/* <div className="relative aspect-[4/5] overflow-hidden rounded-lg border-4 border-white shadow-xl">
        <Image
          src="/images/profile.jpg"
          alt={`Photo of ${siteConfig.name}`}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div> */}
    </section>
  );
}