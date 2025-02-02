const prefixes = [
    "Node.js",
    "Express.js",
    "NestJS",
    "Golang",
    "Docker",
    "Kubernetes",
    "Back-end development",
    "API design",
    "Cloud infrastructure",
    "JavaScript",
    "TypeScript",
    "SQL",
    "NoSQL",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
    "GraphQL",
    "Microservices",
    "DevOps",
    "AWS",
    "Azure",
    "GCP",
    "Serverless",
    "CI/CD",
    "Cloud computing",
    "System architecture",
    "Database management",
    "API development",
    "Backend services",
    "Desenvolvimento back-end",
    "Desenvolvimento de APIs",
    "Desenvolvimento de microserviços",
    "Desenvolvimento de sistemas",
    "Infraestrutura em nuvem",
  ];
  
  const suffixes = [
    "developer",
    "programmer",
    "engineer",
    "specialist",
    "enthusiast",
    "expert",
    "consultant",
    "architect",
    "coding",
    "projects",
    "solutions",
    "engineer",
    "programador",
    "desenvolvedor",
    "especialista",
    "engenheiro",
    "consultor",
    "projetos",
    "soluções",
    "arquitetura",
  ];
  
  export const keywords = [
    "Felipe Versiane",
    "Felipe Versiane Back-end",
    "Felipe Versiane Developer",
    "Felipe Versiane Back-end Developer",
    "Back-end programming",
    "Back-end solutions",
    "Node.js developer",
    "API design",
    "Microservices development",
    "Cloud infrastructure solutions",
    "Back-end architecture",
    "Serverless applications",
    "REST API development",
    "Microservices architecture",
    "Felipe Versiane portfolio",
    "Felipe Versiane projects",
    "Back-end performance optimization",
    "Database management",
    "DevOps automation",
    "CI/CD pipelines",
    "Cloud computing expert",
    "Scalable back-end solutions",
    "Containerized applications",
    ...prefixes
      .map((prefix) => suffixes.map((suffix) => `${prefix} ${suffix}`))
      .flat(),
  ];
  