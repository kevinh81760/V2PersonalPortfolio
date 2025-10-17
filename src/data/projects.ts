type Project = {
  name: string;
  description: string;
  visualUrl: string;
  visualType: "architecture" | "code" | "terminal";
  metric: string;
  metricLabel: string;
  metricColor: string;
  metricValue: number;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: string;
};

export const projects: Project[] = [
  {
    name: "Automated CI/CD Pipeline",
    description:
      "Built custom deployment automation system that streamlined release processes and reduced deployment time by 75% across multiple environments.",
    visualUrl: "/images/services/image-1.jpg",
    visualType: "architecture",
    metric: "150+",
    metricLabel: "deployments/month",
    metricColor: "#00D4FF",
    metricValue: 150,
    techStack: ["Python", "Docker", "Kubernetes", "Jenkins", "AWS"],
    githubUrl: "https://github.com/kevinh81760",
    status: "In Production",
  },
  {
    name: "Real-time Analytics API",
    description:
      "Designed and deployed a high-performance microservice processing millions of events daily with sub-50ms latency using distributed systems architecture.",
    visualUrl: "/images/services/image-2.jpg",
    visualType: "code",
    metric: "10M+",
    metricLabel: "events/day",
    metricColor: "#39D353",
    metricValue: 10000000,
    techStack: ["Go", "Redis", "PostgreSQL", "gRPC", "Prometheus"],
    githubUrl: "https://github.com/kevinh81760",
    status: "In Production",
  },
  {
    name: "ML Model Deployment Platform",
    description:
      "Engineered scalable infrastructure for deploying and monitoring machine learning models, enabling rapid experimentation and A/B testing.",
    visualUrl: "/images/services/image-3.jpg",
    visualType: "terminal",
    metric: "99.9%",
    metricLabel: "uptime",
    metricColor: "#9333EA",
    metricValue: 99.9,
    techStack: ["Python", "TensorFlow", "FastAPI", "Docker", "AWS SageMaker"],
    githubUrl: "https://github.com/kevinh81760",
    liveUrl: "https://example.com",
    status: "Open Source",
  },
  {
    name: "Data Pipeline Orchestration",
    description:
      "Built fault-tolerant ETL pipelines processing terabytes of data daily, with automated monitoring and alerting for data quality issues.",
    visualUrl: "/images/services/image-4.jpg",
    visualType: "architecture",
    metric: "3x",
    metricLabel: "faster processing",
    metricColor: "#FF6B35",
    metricValue: 3,
    techStack: ["Apache Airflow", "Python", "Spark", "S3", "Snowflake"],
    githubUrl: "https://github.com/kevinh81760",
    status: "In Production",
  },
];

