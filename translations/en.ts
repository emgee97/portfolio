export const en = {
  nav: [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ],
  hero: {
    headline: "Develop solutions that make sense.",
    subtitle: "Hi! I'm Maxime, a Full-Stack Developer based in Grenoble, France.",
    downloadCV: "Download my CV",
  },
  gridItems: [
    {
      id: 1,
      title: "Open to Junior Full-Stack Developer roles and Apprenticeships in the Grenoble / Lyon area, where we can grow and create impact together.",
      description: "",
    },
    {
      id: 2,
      title: "Ready to work on projects from all around the world",
      description: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
    },
    {
      id: 5,
      title: "Currently building a Full Stack React Native app",
      description: "The Inside Scoop",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
    },
  ],
  projects: {
    heading1: "A small selection of",
    heading2: "recent projects",
    checkSite: "Check Live Site",
    items: [
      {
        id: 1,
        title: "My Travel Reviews - Animated Website",
        des: "Explore my travel reviews with animated slide using HTML, CSS & Javascript.",
      },
      {
        id: 2,
        title: "Real Estate Dashboard - Full Stack MERN App",
        des: "Built and deployed a full-stack MERN app with CRUD, auth, and charts using Refine.",
      },
      {
        id: 3,
        title: "My Portfolio - Next.js and Framer Motion",
        des: "A modern developer portfolio with animations using Next.js. Perfect for showcasing my web development skills.",
      },
      {
        id: 4,
        title: "Chat Application - Using React JS, Node and Socket.io",
        des: "MERN stack chat app with real-time messaging, user auth, and responsive design.",
      },
    ],
  },
  clients: {
    heading1: "Kind words from",
    heading2: "satisfied clients",
    testimonials: [
      {
        quote: "Maxime quickly understood our needs and transformed our ideas into a smooth, functional application. What really stood out was his ability to anticipate potential issues and propose smart, creative solutions before they even became problems. Thanks to his responsiveness and professionalism, our project was delivered on time and exceeded expectations.",
        name: "Benoit M*****",
        title: "Director of Luxury Car Detailing",
      },
      {
        quote: "Working with Maxime was an absolute pleasure. He is attentive, proactive, and always comes with valuable insights that improved the final product. He strikes the perfect balance between technical performance and user experience. His dedication and commitment were evident at every stage. I would recommend him to anyone looking for a reliable and talented developer.",
        name: "Pierre F*******",
        title: "Director of Creative Design Studio",
      },
      {
        quote: "We collaborated on a complex project that required constant communication between design and development. Maxime was extremely professional, eager to learn, and always willing to adapt to design changes. He not only brought technical expertise but also a genuine interest in enhancing the user experience. His collaborative spirit made the entire process smooth and enjoyable.",
        name: "Jimmy R******",
        title: "Director of Hair Care E-Commerce",
      },
    ],
  },
  experience: {
    heading1: "My",
    heading2: "work experience",
    items: [
      {
        id: 1,
        title: "Full-Stack Developer Training & Projects (2024 – Present)",
        desc: "Currently completing an intensive software engineering program focused on JavaScript, TypeScript, React, and Node.js. I specialize in designing high-performance full-stack API architectures using FastAPI, MongoDB, and PostgreSQL. To ensure professional-grade delivery, I standardize the development lifecycle via Docker and maintain rigorous version control through Git and GitHub. By adhering to 'Clean Code' principles and agile methodologies, I am transitioning my expertise from digital strategy into scalable, concrete software development.",
      },
      {
        id: 2,
        title: "Web Developer & Data Engineer (2023 – 2026)",
        desc: "During my tenure at Agence Colibri, I specialized in the analysis and exploitation of complex databases using SQL, advanced querying, and segmentation. I was responsible for designing comprehensive data dashboards to provide strategic oversight for budgets exceeding €1M. My role involved developing automation scripts using Python, Ads APIs, and lightweight scraping to significantly enhance SEA and Social Ads performance. Additionally, I integrated third-party APIs to automate marketing data workflows and conducted technical SEO optimizations, specifically focusing on Core Web Vitals, HTML structure, and overall performance.",
      },
      {
        id: 3,
        title: "Technical Project Manager & Web Developer (2019 – 2025)",
        desc: "In this role, I spearheaded the design and deployment of diverse web solutions using PHP, HTML5, CSS3, and JavaScript across platforms such as WordPress, PrestaShop, Magento, and Shopify. I focused on responsive front-end integration using Bootstrap while ensuring rigorous performance optimization. I provided technical leadership for over 150 projects annually, managing everything from the drafting of technical specifications to vendor coordination and QA validation. My responsibilities also included driving continuous improvement through technical SEO audits and managing both corrective and evolutionary maintenance for various e-commerce platforms.",
      },
      {
        id: 4,
        title: "Front-End Developer & Technical SEO (2018 – 2019)",
        desc: "During my apprenticeship, I executed a technical optimization of the website's architecture that resulted in a 62% increase in organic traffic. I focused on enhancing web performance and significantly reducing page load times while conducting UI/UX iterations based on a Test & Learn approach. My responsibilities included debugging and driving the continuous improvement of the front-end to ensure a seamless user experience. Through these technical initiatives, I directly contributed to the company's growth and the achievement of €1M in revenue.",
      },
    ],
  },
  approach: {
    heading1: "My",
    heading2: "approach",
    cards: [
      {
        title: "Secure Planning & Architecture",
        des: "We begin by defining goals and functionalities through a security lens. Beyond the roadmap, we perform Threat Modeling and risk assessments to identify vulnerabilities early. This ensures the architecture is secure by design, minimizing future rework.",
        order: "Dev",
      },
      {
        title: "Secure Development & Continuous Integration",
        des: "As I move into development, security is integrated into the code itself. I use SAST (Static Analysis) and dependency scanning to catch issues in real-time. You'll receive regular updates not just on features, but on the health and compliance of the codebase as it evolves.",
        order: "Sec",
      },
      {
        title: "Automated Testing & Continuous Deployment",
        des: "Before launch, the application undergoes rigorous automated security testing (DAST) and performance optimization. We validate that the CI/CD pipeline is hardened and that the infrastructure is managed as code (IaC), ensuring a stable, efficient, and resilient deployment.",
        order: "Ops",
      },
    ],
  },
  footer: {
    heading1: "What are we waiting for to work",
    heading2: "together",
    subtitle: "Motivated, curious, and eager to make an impact from day one.",
    cta: "Let's get in touch",
    copyright: "Copyright © 2025 Maxime Guillaumin",
  },
};

export type Translations = typeof en;
