import type { ComponentType, CSSProperties } from "react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiReactquery, 
  SiSpringboot, 
  SiLaravel, 
  SiNodedotjs, 
  SiFlutter, 
  SiPostgresql, 
  SiElasticsearch, 
  SiMysql, 
  SiDocker, 
  SiJenkins,
  SiPostman,
  SiGit,
} from "react-icons/si";
import { Cpu, Server, Layout, Database } from "lucide-react";

export type TechIcon = ComponentType<{
  className?: string;
  style?: CSSProperties;
}>;

export type TechItem = {
  name: string;
  icon: TechIcon;
  color?: string; // ប្រសិនបើមិនដាក់ វានឹងប្រើ ពណ៌អក្សរធម្មតា (currentColor)
};

export type TechCategory = {
  title: string;
  items: TechItem[];
};

export const techStack: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs }, // Next.js ប្រើ ពណ៌ធម្មតា (Dark/Light mode context)
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "ElasticSearch", icon: SiElasticsearch, color: "#005571" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "SQL Server", icon: Database, color: "#CC292B" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Git", icon: SiGit, color: "#F05032" },
    ],
  },
  {
    title: "Architecture",
    items: [
      { name: "Microservices", icon: Cpu, color: "#A855F7" },
      { name: "Monolith", icon: Server, color: "#64748B" },
      { name: "Hexagonal Architecture", icon: Layout, color: "#0EA5E9" },
      { name: "Domain-Driven Design", icon: Cpu, color: "#10B981" },
    ],
  },
];