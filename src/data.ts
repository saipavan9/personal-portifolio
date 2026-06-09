export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  period: string;
  location: string;
  status: "Running" | "Completed";
  tech: string[];
  bullets: string[];
};

export type Project = {
  name: string;
  context: string;
  description: string;
  tech: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Cert = {
  short: string;
  name: string;
  issuer: string;
};

export const profile = {
  name: "Sai Pavan Nunna",
  role: "Senior DevOps & Site Reliability Engineer",
  location: "Hyderabad, India",
  availability: "Available for senior platform / SRE roles",
  summary:
    "I build and run the platforms everything else stands on. Seven years deep in Kubernetes, infrastructure-as-code, and observability, with a bias toward reliability, automation, and keeping costs honest.",
  stats: [
    { value: "7+", label: "years" },
    { value: "4", label: "certifications" },
    { value: "99.9%", label: "uptime delivered" },
  ],
  email: "saipavan991@gmail.com",
  linkedin: "in/sai-pavan-nunna",
  linkedinUrl: "https://linkedin.com/in/sai-pavan-nunna",
  github: "saipavan9",
  githubUrl: "https://github.com/saipavan9",
  resume: "/SaiPavan_Resume.pdf",
};

export const experience: Experience[] = [
  {
    id: "hey-amara",
    company: "Hey Amara",
    role: "Senior DevOps Engineer",
    duration: "Jul 2025 - now",
    period: "Jul 2025 - Present",
    location: "Remote (Karalee, Australia)",
    status: "Running",
    tech: ["AWS", "EKS", "Terraform", "Helm", "GitHub Actions", "Grafana", "Python"],
    bullets: [
      "Architected the entire AWS platform from scratch with Terraform across compute, databases, messaging, auth, and networking, cutting provisioning time from days to under 2 hours.",
      "Migrated the platform from ECS to EKS and introduced GitOps with Helm, Helmfile, an automated deploy-bot, KEDA autoscaling, and SOPS secret management.",
      "Built CI/CD for every microservice using GitHub Actions with semantic-release and ephemeral preview environments with live DB seeding.",
      "Deployed full-stack observability (Grafana, Loki, Alloy, Tempo, Prometheus) with end-to-end distributed tracing and alerting.",
      "Built an internal Python CLI that securely tunnels engineers into RDS, Redis, and RabbitMQ via SSM, removing manual credential and bastion overhead.",
      "Cut compute costs by 40% with Fargate Spot, workload right-sizing, and traffic-aligned autoscaling.",
    ],
  },
  {
    id: "mercor",
    company: "Mercor",
    role: "Senior Python Developer (Contract, x.AI / Grok)",
    duration: "Apr - Jul 2025",
    period: "Apr 2025 - Jul 2025",
    location: "Remote (California, USA)",
    status: "Completed",
    tech: ["Python", "Docker", "Bash", "ML Infra"],
    bullets: [
      "Standardized Python environments across multiple ML repositories, eliminating environment-related failures in build and evaluation workflows.",
      "Cut manual environment setup time by ~60% with modular Dockerfiles and shell scripts that automated containerized provisioning.",
    ],
  },
  {
    id: "bodo-ai",
    company: "Bodo.ai",
    role: "Senior DevOps & Full Stack Engineer",
    duration: "2022 - 2025",
    period: "Apr 2022 - Mar 2025",
    location: "Remote (Pittsburgh, USA)",
    status: "Completed",
    tech: ["Kubernetes", "EKS", "GitHub Actions", "SOC 2", "NestJS"],
    bullets: [
      "Led SOC 2 Type II certification for a multi-tenant SaaS platform via infrastructure hardening, security auditing, and audit-readiness across production.",
      "Cut CI/CD pipeline runtime from 45 to 20 minutes by refactoring GitHub Actions with parallelized stages, Docker layer caching, and dependency optimization.",
      "Managed Kubernetes clusters on EKS with Spot instances, graceful draining, pod disruption budgets, and automated node replacement for reliable batch scheduling.",
      "Mentored junior engineers on Kubernetes operations, incident response, and root-cause analysis; documented runbooks and post-incident reviews.",
    ],
  },
  {
    id: "ninjacart",
    company: "Ninjacart",
    role: "Software Development Engineer",
    duration: "2021 - 2022",
    period: "Sep 2021 - Mar 2022",
    location: "Bengaluru, India",
    status: "Completed",
    tech: ["Backend APIs", "CI/CD", "Java"],
    bullets: [
      "Developed backend API services handling millions of daily transactions for India's largest B2B fresh-produce supply chain.",
      "Reduced manual deployment effort by 50% by building automated CI/CD pipelines with standardized release processes.",
    ],
  },
  {
    id: "wipro",
    company: "Wipro (Apple Client)",
    role: "Software Developer",
    duration: "2019 - 2021",
    period: "Jul 2019 - Sep 2021",
    location: "Hyderabad, India",
    status: "Completed",
    tech: ["Python", "ArangoDB", "Kubernetes"],
    bullets: [
      "Built a demand-planning system using ArangoDB and Python, improving supply-chain forecast accuracy through database-driven analytics.",
      "Managed Kubernetes CI/CD pipelines with zero-downtime rolling-update strategies serving production workloads.",
    ],
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "DevOps Engineer (Independent)",
    duration: "Ongoing",
    period: "Ongoing",
    location: "Remote",
    status: "Running",
    tech: ["GCP", "Cloud Run", "AWS EKS", "Jenkins"],
    bullets: [
      "Migrated WordPress and Laravel apps to Google Cloud Run with managed deployments and automated failover, lifting uptime from ~97% to 99.9%.",
      "Deployed containerized workloads on AWS EKS with fully automated CI/CD and zero-downtime releases.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "cluster-orchestration-agent",
    context: "Bodo.ai",
    description:
      "A Go agent that bootstraps 100+ EC2 instance clusters with leader election, sequential setup coordination (NVMe, AWS config), and status reporting, replacing user_data scripts that broke above 50 nodes.",
    tech: ["Go", "AWS", "EC2"],
  },
  {
    name: "ssm-access-cli",
    context: "Hey Amara",
    description:
      "A Python CLI for secure, credential-free access to RDS, Redis, and RabbitMQ over AWS SSM tunneling, eliminating bastion hosts and manual credential management.",
    tech: ["Python", "AWS SSM", "RDS"],
  },
  {
    name: "jupyterhub-platform",
    context: "Bodo.ai",
    description:
      "Replaced costly EC2-per-tenant JupyterLab with multi-tenant JupyterHub on EKS, building custom auth (Frontegg), custom CRDs for per-user pod lifecycle, and chroot-jailed containers for tenant isolation.",
    tech: ["JupyterHub", "EKS", "Frontegg"],
  },
  {
    name: "soc2-certification",
    context: "Bodo.ai",
    description:
      "Led the compliance initiative across infrastructure hardening, security auditing, environment segregation, and audit-readiness for an enterprise SaaS platform.",
    tech: ["SOC 2", "IAM", "Security"],
  },
  {
    name: "demand-planning-system",
    context: "Wipro (Apple)",
    description:
      "A data pipeline using ArangoDB and Python to improve supply-chain forecast accuracy across vendor teams, feeding live data to React dashboards used daily.",
    tech: ["Python", "ArangoDB", "React"],
  },
];

export const skills: SkillGroup[] = [
  {
    label: "kubernetes & cloud",
    items: [
      "EKS / GKE / AKS",
      "Helm & Helmfile",
      "KEDA & Karpenter",
      "AWS (RDS Aurora, SQS, Route53, IAM/IRSA, KMS, Lambda)",
      "GCP & Azure",
      "Docker / Fargate / ECS",
    ],
  },
  {
    label: "infrastructure as code & ci/cd",
    items: [
      "Terraform & Ansible",
      "CloudFormation",
      "GitHub Actions & GitLab CI",
      "Jenkins",
      "GitOps & SOPS",
    ],
  },
  {
    label: "observability & security",
    items: [
      "Prometheus & Grafana",
      "Loki, Tempo, Alloy",
      "OpenTelemetry",
      "SOC 2 Type II",
      "IAM/IRSA & KMS hardening",
    ],
  },
  {
    label: "languages & frameworks",
    items: [
      "Go",
      "Python & Bash",
      "TypeScript / JavaScript",
      "FastAPI & Django",
      "NestJS & React",
      "PostgreSQL, Redis, RabbitMQ",
    ],
  },
];

export const certifications: Cert[] = [
  {
    short: "CKA",
    name: "Certified Kubernetes Administrator",
    issuer: "CNCF",
  },
  {
    short: "CKAD",
    name: "Certified Kubernetes Application Developer",
    issuer: "CNCF",
  },
  {
    short: "AWS SAA",
    name: "AWS Certified Solutions Architect, Associate",
    issuer: "Amazon Web Services",
  },
  {
    short: "GCP PCA",
    name: "Professional Cloud Architect",
    issuer: "Google Cloud",
  },
];

export const awards = [
  {
    title: "Role Model Award",
    org: "Wipro / Apple Client",
    year: "Dec 2020",
  },
  {
    title: "Google Scholarship",
    org: "Udacity, Mobile Web Specialist",
    year: "Jul 2019",
  },
];

export const navItems = [
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "certifications", label: "certs" },
  { id: "contact", label: "contact" },
];
