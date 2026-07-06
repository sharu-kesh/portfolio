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
    "Computer Science graduate from College of Engineering Guindy with hands-on experience in full-stack development, LLM evaluation, and healthcare workflow automation from athenahealth. Proficient across Python, TypeScript, React, Node.js, and PostgreSQL. Experienced in building reliable features, API migrations, and Playwright E2E test automation. Strong problem-solving foundation with 700+ solved coding challenges, driven to build scalable and secure systems.",
  email: "sharukeshkkvs@gmail.com",
  phone: "+91 6381086085",
  github: "https://github.com/sharu-kesh",
  linkedin: "https://www.linkedin.com/in/sharukesh-kannan-9696a5264/",
  leetcode: "https://leetcode.com/u/Sharukesh/",
  gfg: "https://www.geeksforgeeks.org/user/sharuke5dj7/",
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
    period: "Jan 2026 — July 2026",
    location: "Chennai",
    points: [
      "Worked as a Product Engineering Intern across athena Medical Coding and ECR Denials Management teams, contributing to production healthcare revenue cycle workflows involving medical coding, claim processing, denial resolution, and appeal management.",
      "Developed and enhanced React/TypeScript workflow features for claim and appeal systems, including document selection, appeal submission confirmation, navigation flows, and charge-level coding advice support.",
      "Evaluated open-source LLMs using AWS SageMaker and LM Studio across 10K+ encounter-level test cases, benchmarking accuracy, latency, precision, recall, and structured-output reliability for clinical decision automation.",
      "Improved platform reliability, compliance, and maintainability through PHI log redaction, GenAI fallback logic, API migration support, prompt updates, rollout cleanup, regression analysis, and production issue triage.",
      "Built and maintained Playwright E2E test automation with mocked API routes, page-object models, failure-state validation, and pre-push test integration to improve release confidence.",
    ],
    tags: ["React", "TypeScript", "AWS SageMaker", "LLM Eval", "Playwright"],
    certificate: "/athena_internship_certificate.pdf",
  },
  {
    role: "Research Intern",
    company: "Dept. of CSE, IIT Madras",
    period: "May 2025 — July 2025",
    location: "Chennai",
    points: [
      "Worked as a Research Intern in the Department of Computer Science and Engineering at IIT Madras, focusing on theoretical computer science, learning theory, and algorithmic complexity.",
      "Studied Boolean function analysis, decision tree complexity, junta functions, query complexity, and Fourier analysis to understand function approximation, variable influence, and computational limitations in learning algorithms.",
      "Applied mathematical reasoning and research-oriented problem solving to analyze theoretical models, compare algorithmic behavior, and strengthen foundations in data structures, algorithms, and machine learning theory.",
    ],
    tags: ["Learning Theory", "Boolean Analysis", "Research"],
    certificate: "https://drive.google.com/file/d/1Zt1IWQQi7UH_JpPxF0QclJPwzoASjCb4/view?usp=sharing",
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
    image: "/threat_detection.png",
  },
  {
    index: "02",
    title: "SecurePrompt",
    blurb:
      "A multi-layer detection framework that catches prompt-injection and jailbreak attacks using prompt mutation, KL divergence, semantic similarity, BERT-based policy validation and XAI audit logs.",
    tags: ["LLM Security", "BERT", "XAI", "Python"],
    link: "#", // TODO
    image: "/secure_prompt.png",
  },
  {
    index: "03",
    title: "Daily Diaries - Blog Sharing Platform",
    blurb:
      "A full-stack blogging platform on Spring Boot and React with posting, comments, likes, a follow system, saved blogs and microservice-based modules.",
    tags: ["Spring Boot", "React", "Microservices"],
    link: "#", // TODO
    image: "/blog_platform.png",
  },
  {
    index: "04",
    title: "Disaster Management System",
    blurb:
      "A React Native emergency-reporting app on Express and MongoDB with geolocation, image-based reports and crowdsourced response decisions.",
    tags: ["React Native", "Express", "MongoDB"],
    link: "#", // TODO
    image: "/disaster_system.png",
  },
  {
    index: "05",
    title: "Vaahan - Vehicle Management System",
    blurb:
      "A unified full-stack vehicle records portal built with React, Node/Express, and PostgreSQL featuring a multi-step registration wizard, secure ownership transfer with automated SMTP credentials, police theft-tracking alerts, and RTO admin validation workflows.",
    tags: ["React", "Express", "PostgreSQL"],
    link: "https://vaahanapp.netlify.app/",
    image: "/vaahan_system.png",
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
  {
    title: "Machine Learning A-Z: AI, Python & more — Udemy",
    link: "https://drive.google.com/file/d/1-shLFWyvYf2ojVdgJ4HApezAx3eBNRee/view?usp=sharing"
  },
  {
    title: "Neural Networks and Deep Learning — Coursera",
    link: "https://drive.google.com/file/d/1_BwgcQlgFsJg3bvlnFs-2XWZPhtpUuOD/view?usp=sharing"
  }
];

export const involvement = {
  title: "President — Computer Society of Anna University",
  detail:
    "As President of CSAU, I defined the society's vision and led cross-functional student teams in planning and delivering technical events, workshops, and placement-focused initiatives. Managed faculty and industry partnerships, directed branding and event operations, and strengthened skills in project management, stakeholder communication, and collaborative leadership.",
};

export const codingStats = {
  leetcode: {
    link: "https://leetcode.com/u/Sharukesh/",
  },
  gfg: {
    link: "https://www.geeksforgeeks.org/user/sharuke5dj7/",
  }
};
