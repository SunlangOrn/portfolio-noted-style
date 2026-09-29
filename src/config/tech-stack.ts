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

export const techStack = [
  {
    title: "Frontend",
    items: [
      { name: "ReactJS", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
      { name: "TanStack Query", icon: SiReactquery },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Laravel", icon: SiLaravel },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "Flutter", icon: SiFlutter },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "ElasticSearch", icon: SiElasticsearch },
      { name: "MySQL", icon: SiMysql },
      { name: "SQL Server", icon: Database },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Postman", icon: SiPostman },
      { name: "Git", icon: SiGit }
    ],
  },
  {
    title: "Architecture",
    items: [
      { name: "Microservices", icon: Cpu },
      { name: "Monolith", icon: Server },
      { name: "Hexagonal Architecture", icon: Layout },
      { name: "Domain-Driven Design", icon: Cpu },
    ],
  },
];