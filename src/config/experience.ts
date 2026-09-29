export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string | null;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    id: "kiloit-trainee",
    company: "KiloIT",
    role: "Trainee Backend Developer (Spring Boot)",
    period: "Aug 2025 – Feb 2026",
    highlights: [
      "Built an internal system with Java Spring Boot, MySQL, and Docker using Hexagonal Architecture.",
      "Built RESTful APIs for efficient request handling and data processing.",
      "Worked on system APIs and service-oriented architectures.",
      "Basic knowledge of Elasticsearch (search) and OneSignal (push notifications).",
    ],
  },
  {
    id: "eUniversity Project",
    company: "NPIC (University Project)",
    role: "E-commerceSystem",
    period: null,
    highlights: [
      "Built an e-commercesystem as a university project at NPIC, Cambodia.",
      "Add your real features here (for example: cart, orders, abapayway as payment).",
    ],
  },
];