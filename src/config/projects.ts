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
  {
    id: "blood-donation-service",
    title: "Blood Donation Service",
    description:
      "The Blood Donation Service is a system that helps connect blood donors with hospitals and patients who need blood fast. It makes finding donors easier and sends quick alerts during emergencies.",
    tech: ["Java", "Springboot", "OneSignal", "Elaicsearch", "MySQL", "Docker"],
    repoUrl: "https://github.com/SunlangOrn/blood-donation-service.git",
  },
  {
    id: "Health-blog-service",
    title: "Health Blog",
    description:
      "The Health Blog Platform is a web application where users can read health articles and follow their favorite writers. It uses an asynchronous background system to handle heavy tasks—like sending email notifications—so the website stays fast and smooth for users.",
    tech: ["Java", "Springboot", "RabbitMQ", "Postgres", "Docker"],
    repoUrl: "https://github.com/SunlangOrn/heath_blog.git",
  },
];

