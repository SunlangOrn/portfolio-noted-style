import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TechBadge } from "@/components/shared/tech-badge";
import type { Project } from "@/config/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tech, image, repoUrl, demoUrl } = project;

  return (
    <Card className="overflow-hidden pt-0">
      <div className="relative aspect-video bg-neutral-100">
        {image ? (
          <Image
            src={image}
            alt={`Screenshot of ${title}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-neutral-400">
            No screenshot yet
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="font-handwriting text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <TechBadge key={item} name={item} />
        ))}
      </CardContent>

      {(repoUrl || demoUrl) && (
        <CardFooter className="gap-3">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              GitHub
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "sm" })}
            >
              Live demo
            </a>
          )}
        </CardFooter>
      )}
    </Card>
  );
}