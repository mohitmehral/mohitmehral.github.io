export const PROFILE = {
  name: "Mohit Mehral",
  handle: "@mohitmehral",
  role: "DevSecOps Architect — Cloud Evangelist",
  location: "Malmö, Sweden",
  email: "mohitmehral@gmail.com",
  links: {
    linkedin: "linkedin.com/in/mohitmehral",
    github: "github.com/mohitmehral",
    copilot: "github.com/copilot-founder",
  },
  pitch: "I architect secure cloud platforms at scale.",
  blurb: "Nineteen years turning engineering ambition into enterprise-grade delivery. Currently leading DevSecOps at Capgemini for Ikano Bank — improving maturity from 0.5 to 4.0, governing AWS landing zones, and embedding generative AI into the platform — while building open-source tools that developers actually use."
};

export const METRICS = [
  { value: "0.5→4.0", label: "DevSecOps maturity improvement", note: "out of 5.0 scale" },
  { value: "19+", label: "years in engineering", note: "across 2 continents" },
  { value: "5×", label: "Employee of the Year", note: "at Spice Money" },
  { value: "6", label: "AWS & GitHub certifications", note: "active credentials" },
  { value: "30+", label: "engineering teams supported", note: "Ikano Bank platform" },
  { value: "3", label: "open-source projects shipped", note: "with live demos" },
];

export const PROJECTS = [
  { slug: "clawdbot", name: "ClawdBot", tag: "AI", tagline: "Personal AI assistant. Any OS. Any Platform.", body: "Your own AI assistant built the lobster way — cross-platform, extensible, privacy-first.", chips: ["AI", "Cross-Platform", "Assistant"], stat: { value: "Latest", label: "2026" }, url: "https://github.com/mohitmehral/clawdbot" },
  { slug: "terraform-iac", name: "Terraform IaC", tag: "Automation", tagline: "Infrastructure as Code for automated cloud provisioning.", body: "IaC skill built upon ClawdBot for automated, repeatable cloud infrastructure deployment across AWS and Azure.", chips: ["Terraform", "AWS", "IaC"], stat: { value: "Active", label: "dev" }, url: "https://github.com/mohitmehral/terraform-iac" },
  { slug: "dencewipose", name: "DenceWiPose", tag: "IoT / ML", tagline: "WiFi-based human presence detection without cameras.", body: "A system that detects human presence using WiFi signal analysis — no visual sensors required. Privacy-preserving occupancy sensing.", chips: ["WiFi", "ML", "IoT", "Privacy"], stat: { value: "Novel", label: "approach" }, url: "https://github.com/mohitmehral/denceWiPose" },
  { slug: "ai-pricing", name: "AI Model Pricing", tag: "Developer Tool", tagline: "Compare pricing across all major AI providers.", body: "Comprehensive comparison tool for AWS Bedrock, Azure OpenAI, Google Vertex AI, OpenAI, and Anthropic pricing.", chips: ["AI", "Pricing", "AWS", "Azure"], stat: { value: "5", label: "providers" }, url: "https://copilot-founder.github.io/ai-model-pricing/" },
  { slug: "git-training", name: "Git Training", tag: "Education", tagline: "Comprehensive git training with cheatsheet.", body: "Complete material covering versioning, history, branching, and advanced git commands with an interactive cheatsheet.", chips: ["Git", "Training", "DevOps"], stat: { value: "Full", label: "curriculum" }, url: "https://copilot-founder.github.io/git-training/" },
  { slug: "gitlearn", name: "GitLearn", tag: "Interactive", tagline: "Visual git learning through level-based exercises.", body: "Interactive web application for learning Git branching and merging concepts. No git CLI installation required.", chips: ["Interactive", "Git", "Education"], stat: { value: "Visual", label: "learning" }, url: "https://copilot-founder.github.io/gitlearn/" },
];

export const EXPERIENCE = [
  { company: "Capgemini Sverige AB", role: "DevSecOps Architect", badge: "Current", period: "Jun 2017 — Present", location: "Malmö", summary: "Leading platform teams for Ikano Bank. Defined strategic roadmaps, migrated to enterprise GitHub, governed AWS landing zones, implemented GenAI solutions, and administered the full DevSecOps toolchain.", highlights: ["DevSecOps maturity 0.5 → 4.0 across the bank", "AWS Well-Architected Framework reviews & cost optimization", "GenAI integration: GitHub Copilot, Azure AI Studio, OpenAI", "Enterprise toolchain: GitHub Cloud, Elastic, SonarQube, Mend SAST/DAST"] },
  { company: "Spice Money", role: "Solution Architect", badge: "5× EotY", period: "May 2006 — Jun 2017", location: "India", summary: "Evolving from engineering to solution leadership across 13 years. Designed backend architectures for spicemoney.com and umang.gov.in. Embedded DevOps-by-design, led PL/SQL teams, and built carrier-grade telecom platforms.", highlights: ["B2B/B2C platform architecture — spicemoney.com, umang.gov.in", "HA web infrastructure: Nginx, Apache, Tomcat clustering", "High-performance telecom VAS in C — Vodafone, MTN, Uninor", "DevOps-by-design: observability, logging, alerting at scale"] },
];

export const STACK = [
  { group: "Cloud & Platform", items: ["AWS", "Azure", "Digital Ocean", "Kubernetes / EKS", "Terraform / IaC", "Docker"] },
  { group: "DevSecOps", items: ["GitHub Enterprise", "GitHub Actions", "GitOps", "Jenkins CI/CD", "SonarQube", "Mend SAST/DAST", "Elastic Cloud"] },
  { group: "AI & Data", items: ["Generative AI", "Azure AI Studio", "LLMs", "GitHub Copilot", "BigQuery", "Machine Learning"] },
  { group: "Languages & Tools", items: ["Python", "Linux / Bash", "PostgreSQL", "Oracle", "Redis", "C (Telecom)"] },
  { group: "Methodology", items: ["SAFe / Agile", "Well-Architected Framework", "MLOps", "Platform Engineering"] },
];

export const CERTS = ["AWS SA Associate", "AWS WAF Specialist", "AWS Migration Ambassador", "GitHub Enterprise Admin", "Duke Cloud Computing", "SAFe 5 Architect"];

export const EDUCATION = [
  { degree: "Master's in Computer Science", school: "Kurukshetra University, India", period: "2003 — 2006" },
  { degree: "Bachelor of Computer Science", school: "Himachal Pradesh University, India", period: "2000 — 2003" },
];
