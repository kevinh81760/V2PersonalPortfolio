type Service = {
  title: string;
  description: string;
  keywords: string[];
  imageUrl: string;
};

export const services: Service[] = [
  {
    title: "Web & App Development",
    description:
      "I build full-stack web and mobile applications from concept to deployment, handling everything from responsive React/Next.js frontends to Node.js backends, API integrations, authentication flows, and database architecture on AWS.",
    keywords: [
      "Full-Stack Development",
      "API Design",
      "Authentication",
      "Database Architecture",
      "React/Next.js",
      "AWS Deployment",
    ],
    imageUrl: "/images/services/image-1.jpg",
  },
  {
    title: "Cloud & Automation",
    description:
      "I architect and optimize cloud infrastructure on AWS, set up CI/CD pipelines, and build automated workflows that streamline operations and reduce costs.",
    keywords: [
      "AWS Infrastructure",
      "CI/CD Pipelines",
      "DevOps",
      "Automation",
      "Docker",
      "Cost Optimization",
    ],
    imageUrl: "/images/services/image-2.jpg",
  },
  {
    title: "AI & Data-Driven Services",
    description:
      "I integrate AI capabilities into applications through OpenAI APIs, build intelligent chatbots, implement OCR and document parsing, and create data visualization dashboards that turn raw data into actionable insights.",
    keywords: [
      "AI Integration",
      "OpenAI API",
      "Chatbots",
      "OCR & Vision",
      "Data Visualization",
      "Machine Learning",
    ],
    imageUrl: "/images/services/image-3.jpg",
  },
  {
    title: "Design & Product Polish",
    description:
      "I transform design concepts into polished, production-ready interfaces, translating Figma prototypes into functional React components with consistent design systems and SEO-optimized landing pages.",
    keywords: [
      "UI/UX Design",
      "Figma Prototyping",
      "Design Systems",
      "Landing Pages",
      "Brand Identity",
      "Frontend Polish",
    ],
    imageUrl: "/images/services/image-4.jpg",
  },
  {
    title: "Developer & Technical Consulting",
    description:
      "I provide expert code reviews, architectural guidance, and technical documentation to help teams build better software, optimize existing codebases, and make informed technology decisions.",
    keywords: [
      "Code Audits",
      "Technical Documentation",
      "Architecture Review",
      "Tech Stack Selection",
      "Best Practices",
      "Consulting",
    ],
    imageUrl: "/images/services/image-1.jpg",
  },
];
