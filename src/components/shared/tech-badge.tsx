import { Badge } from "@/components/ui/badge";

const BRAND_COLORS: Record<string, string> = {
  "ReactJS": "#61DAFB",
  "Next.js": "#000000",
  "Tailwind CSS": "#06B6D4",
  "TypeScript": "#3178C6",
  "TanStack Query": "#FF4154",
  "Spring Boot": "#6DB33F",
  "Laravel": "#FF2D20",
  "Node.js": "#5FA04E",
  "Flutter": "#02569B",
  "PostgreSQL": "#4169E1",
  "ElasticSearch": "#005571",
  "MySQL": "#4479A1",
  "SQL Server": "#CC292B",
  "Docker": "#2496ED",
  "Jenkins": "#D24939",
  "Postman": "#FF6C37",
  "Git": "#F05032",
};

export function TechBadge({ name, icon: Icon }: { name: string; icon: any }) {
  const color = BRAND_COLORS[name] ?? "currentColor";

  return (
    <Badge variant="default" className="gap-1.5 py-1 px-2.5 text-xs font-normal">
      <Icon className="size-3.5 shrink-0" style={{ color }} />
      <span>{name}</span>
    </Badge>
  );
}