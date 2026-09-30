export type Project  = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  repoUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "ecommerce_java_backend",
    title: "E-commerce Backend",
    description:
      "A university project at NPIC. Replace this with what the system does and what you built.",
    tech: ["Java", "Spring Boot", "MySQL", "Docker"],
    repoUrl: "https://github.com/SunlangOrn/e-commerce-service.git",
  },

  {
    id: "ecommerce_flutter_user_side",
    title: "E-commerce Client UI",
    description:
      "A university project at NPIC. Replace this with what the system does and what you built.",
    tech: ["Dart", "Flutter"],
    repoUrl: "https://github.com/SunlangOrn/e-commerce-front.git",
  },
];

