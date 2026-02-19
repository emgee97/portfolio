import { url } from "inspector";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I am currently seeking a Junior Full-Stack Developer role or an Apprenticeship opportunity where we can bring mutual value, based in Grenoble or Lyon.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/maxime.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Ready to work on projects from all around the world",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Full Stack React Native app",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "My Travel Reviews - Animated Website",
    des: "Explore my travel reviews with animated slide using HTML, CSS & Javascript.",
    img: "/p1.png",
    iconLists: ["/HTML5.svg", "/CSS3.svg", "/Javascript.svg"],
    link: "https://mytravelreviews.maximeguillaumin.com",
    pinTitle: "mytravelreviews.maximeguillaumin.com",
  },
  {
    id: 2,
    title: "Real Estate Dashboard - Full Stack MERN App",
    des: "Built and deployed a full-stack MERN app with CRUD, auth, and charts using Refine.",
    img: "/p2.png",
    iconLists: ["/ts.svg", "/mongodb-icon-1.svg", "/express-js.svg", "/re.svg", "/nodejs-icon.svg"],
    link: "#",
    pinTitle: "estatedashboard.maximeguillaumin.com",
  },
  {
    id: 3,
    title: "My Portfolio - Next.js and Framer Motion",
    des: "A modern developer portfolio with animations using Next.js. Perfect for showcasing my web development skills.",
    img: "/p3.png",
    iconLists: ["/next.svg", "/tail.svg", "/three.svg", "/framer-motion.svg"],
    link: "https://maximeguillaumin.com",
    pinTitle: "maximeguillaumin.com",
  },
  {
    id: 4,
    title: "Chat Application - Using React JS, Node and Socket.io",
    des: "MERN stack chat app with real-time messaging, user auth, and responsive design.",
    img: "/p4.png",
    iconLists: ["/mongodb-icon-1.svg", "/express-js.svg", "/re.svg", "/nodejs-icon.svg", "/socketio.svg"],
    link: "https://chatliveapp.maximeguillaumin.com",
    pinTitle: "chatliveapp.maximeguillaumin.com",
  },
];

export const testimonials = [
  {
    quote:
      "Maxime quickly understood our needs and transformed our ideas into a smooth, functional application. What really stood out was his ability to anticipate potential issues and propose smart, creative solutions before they even became problems. Thanks to his responsiveness and professionalism, our project was delivered on time and exceeded expectations.",
    name: "Benoit M*****",
    title: "Director of Luxury Car Detailing",
  },
  {
    quote:
      "Working with Maxime was an absolute pleasure. He is attentive, proactive, and always comes with valuable insights that improved the final product. He strikes the perfect balance between technical performance and user experience. His dedication and commitment were evident at every stage. I would recommend him to anyone looking for a reliable and talented developer.",
    name: "Pierre F*******",
    title: "Director of Creative Design Studio",
  },
  {
    quote:
      "We collaborated on a complex project that required constant communication between design and development. Maxime was extremely professional, eager to learn, and always willing to adapt to design changes. He not only brought technical expertise but also a genuine interest in enhancing the user experience. His collaborative spirit made the entire process smooth and enjoyable.",
    name: "Jimmy R******",
    title: "Director of Hair Care E-Commerce",
  },
];

export const companies = [
  {
    id: 1,
    name: "Git",
    img: "/git.svg",
    nameImg: "/gitName.png",
  },
  {
    id: 2,
    name: "VS Studio Code",
    img: "/visual-studio-code-1.svg",
    nameImg: "/vscodeName.svg",
  },
  {
    id: 3,
    name: "Cloudinary",
    img: "/cloudinary.svg",
    nameImg: "/cloudinaryName.svg",
  },
  {
    id: 4,
    name: "vercel",
    img: "/vercel.svg",
    nameImg: "/vercelName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Developer Training & Projects (2024 – Present)",
    desc: "Currently completing an intensive software engineering program focused on JavaScript, TypeScript, React, and Node.js. I specialize in designing high-performance full-stack API architectures using FastAPI, MongoDB, and PostgreSQL. To ensure professional-grade delivery, I standardize the development lifecycle via Docker and maintain rigorous version control through Git and GitHub. By adhering to 'Clean Code' principles and agile methodologies, I am transitioning my expertise from digital strategy into scalable, concrete software development.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Developer & Data Engineer (2023 – 2026)",
    desc: "During my tenure at Agence Colibri, I specialized in the analysis and exploitation of complex databases using SQL, advanced querying, and segmentation. I was responsible for designing comprehensive data dashboards to provide strategic oversight for budgets exceeding €1M. My role involved developing automation scripts using Python, Ads APIs, and lightweight scraping to significantly enhance SEA and Social Ads performance. Additionally, I integrated third-party APIs to automate marketing data workflows and conducted technical SEO optimizations, specifically focusing on Core Web Vitals, HTML structure, and overall performance.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Technical Project Manager & Web Developer (2019 – 2025)",
    desc: "In this role, I spearheaded the design and deployment of diverse web solutions using PHP, HTML5, CSS3, and JavaScript across platforms such as WordPress, PrestaShop, Magento, and Shopify. I focused on responsive front-end integration using Bootstrap while ensuring rigorous performance optimization. I provided technical leadership for over 150 projects annually, managing everything from the drafting of technical specifications to vendor coordination and QA validation. My responsibilities also included driving continuous improvement through technical SEO audits and managing both corrective and evolutionary maintenance for various e-commerce platforms.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Front-End Developer & Technical SEO (2018 – 2019)",
    desc: "During my apprenticeship, I executed a technical optimization of the website's architecture that resulted in a 62% increase in organic traffic. I focused on enhancing web performance and significantly reducing page load times while conducting UI/UX iterations based on a Test & Learn approach. My responsibilities included debugging and driving the continuous improvement of the front-end to ensure a seamless user experience. Through these technical initiatives, I directly contributed to the company’s growth and the achievement of €1M in revenue.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/github.svg",
    url: "https://github.com/emgee97",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/maxime-guillaumin0703/",
  },
];
