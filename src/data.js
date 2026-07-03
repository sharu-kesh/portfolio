// ─────────────────────────────────────────────────────────────────────────
//  All portfolio content lives here. Update the links marked TODO with your
//  real profile URLs (GitHub / LinkedIn / project + certificate links).
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Sharukesh K",
  role: "Software Engineer",
  location: "Chennai, India",
  // A short, first-person tagline shown in the hero.
  tagline:
    "I build full-stack products and AI-driven systems — from healthcare workflows to real-time threat detection.",
  summary:
    "Computer Science graduate from College of Engineering Guindy with hands-on experience in full-stack development, machine learning, and AI-driven healthcare automation. I work fluently across Python, TypeScript, React and Node, care deeply about reliability, and have sharpened my fundamentals through 700+ solved coding challenges.",
  email: "sharukeshkkvs@gmail.com",
  phone: "+91 6381086085",
  github: "https://github.com/sharu-kesh",
  linkedin: "https://www.linkedin.com/in/sharukesh-kannan-9696a5264/",
  resume: "/Sharukesh_K_Software_Engineer_Resume.pdf",
  photo: "/sharukesh.jpg",
};

export const stats = [
  { value: "9.3", unit: "/10", label: "CGPA · CEG Anna University" },
  { value: "700", unit: "+", label: "Coding challenges solved" },
  { value: "10K", unit: "+", label: "LLM test cases evaluated" },
  { value: "5", unit: "★", label: "Full-stack products shipped" },
];

export const experience = [
  {
    role: "Product Engineering Intern",
    company: "athenahealth Technology Pvt Ltd",
    period: "Jan 2026 — Present",
    location: "Chennai",
    points: [
      "Working across athena Medical Coding and ECR Denials Management teams on production healthcare workflows — AI-assisted coding, claim processing, denial resolution and appeal management.",
      "Evaluated open-source LLMs with AWS SageMaker and LM Studio across 10K+ encounter test cases, benchmarking accuracy, latency, precision, recall and structured-output reliability.",
      "Strengthened platform reliability and compliance through PHI log redaction, GenAI fallback logic, E/M prompt updates, V2 endpoint migration, Playwright E2E automation and production triage.",
      "Built ECR appeal workflow enhancements in React/TypeScript — document selection, appeal-success confirmation, charge-level POS support, mocked API routes and failure-state validation.",
    ],
    tags: ["React", "TypeScript", "AWS SageMaker", "LLM Eval", "Playwright"],
  },
  {
    role: "Research Intern",
    company: "Dept. of CSE, IIT Madras",
    period: "May 2025 — July 2025",
    location: "Chennai",
    points: [
      "Researched Boolean function analysis, decision tree complexity, junta functions, query complexity and Fourier analysis in learning theory.",
    ],
    tags: ["Learning Theory", "Boolean Analysis", "Research"],
  },
];

export const projects = [
  {
    index: "01",
    title: "Real-Time Threat Detection System",
    blurb:
      "A real-time CCTV threat detection pipeline combining YOLOv11, a Transformer and an LSTM, surfacing live alerts on a React dashboard with location, timestamp and a live map.",
    tags: ["YOLOv11", "Transformer", "LSTM", "React"],
    link: "https://github.com/sharu-kesh/real-time-threat-detection-cctv",
  },
  {
    index: "02",
    title: "SecurePrompt",
    blurb:
      "A multi-layer detection framework that catches prompt-injection and jailbreak attacks using prompt mutation, KL divergence, semantic similarity, BERT-based policy validation and XAI audit logs.",
    tags: ["LLM Security", "BERT", "XAI", "Python"],
    link: "#", // TODO
  },
  {
    index: "03",
    title: "Blog Sharing Platform",
    blurb:
      "A full-stack blogging platform on Spring Boot and React with posting, comments, likes, a follow system, saved blogs and microservice-based modules.",
    tags: ["Spring Boot", "React", "Microservices"],
    link: "#", // TODO
  },
  {
    index: "04",
    title: "Disaster Management System",
    blurb:
      "A React Native emergency-reporting app on Express and MongoDB with geolocation, image-based reports and crowdsourced response decisions.",
    tags: ["React Native", "Express", "MongoDB"],
    link: "#", // TODO
  },
  {
    index: "05",
    title: "Vehicle Management System",
    blurb:
      "A React, Express and PostgreSQL system managing vehicle records, certificates, insurance, missing-vehicle complaints and police authentication.",
    tags: ["React", "Express", "PostgreSQL"],
    link: "#", // TODO
  },
];

// Skill groups double as Naruto "chakra natures" — a themed flourish.
export const skills = [
  {
    group: "Languages",
    element: "Fire Release",
    kanji: "火",
    items: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript"],
  },
  {
    group: "Web",
    element: "Wind Release",
    kanji: "風",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "HTML",
      "CSS",
      "Tailwind",
    ],
  },
  {
    group: "Data",
    element: "Water Release",
    kanji: "水",
    items: ["PostgreSQL", "MySQL", "MongoDB", "pgAdmin", "Snowflake"],
  },
  {
    group: "Tools",
    element: "Lightning Release",
    kanji: "雷",
    items: [
      "AWS SageMaker",
      "LM Studio",
      "Docker",
      "Git",
      "Linux",
      "Bruno",
      "Jira",
      "Confluence",
    ],
  },
];

export const marquee = [
  "Python",
  "TypeScript",
  "React",
  "Node.js",
  "Spring Boot",
  "PostgreSQL",
  "AWS SageMaker",
  "Docker",
  "LLM Evaluation",
  "Machine Learning",
  "Playwright",
  "MongoDB",
];

export const education = [
  {
    school: "College of Engineering Guindy, Anna University",
    detail: "B.E. Computer Science & Engineering",
    meta: "2022 — 2026 · CGPA 9.3 / 10",
  },
  {
    school: "Mahatma Montessori School, Madurai",
    detail: "Higher Secondary",
    meta: "2019 — 2022 · 12th 596/600 · 10th 484/500",
  },
];

export const certifications = [
  "Machine Learning A-Z: AI, Python & more — Udemy",
  "Neural Networks and Deep Learning — Coursera",
];

export const involvement = {
  title: "President — Computer Society of Anna University",
  detail:
    "Led domain teams and organized technical events, workshops and placement-focused student initiatives.",
};
