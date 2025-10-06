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
    title: "I am looking for an apprenticeship where we can bring value to each other, in Lyon, Grenoble or Clermont-Ferrand.",
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
    link: "#",
    pinTitle: "chatlive.maximeguillaumin.com",
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
    title: "Software Engineering Training Projects (2024 – Present)",
    desc: "Currently completing a Software Engineer program (RNCP Level 7, Data Scientest), with hands-on projects in Python, SQL/NoSQL, Git/GitHub, and React.js. Developed full-stack applications combining front-end interfaces with back-end APIs and databases. Applied agile methodologies, version control, and cloud principles (AWS) to deliver scalable solutions. These projects allow me to directly apply my technical knowledge and transition from digital strategy to concrete software development.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Entrepreneur | Freelance – Agence Colibri (2023 – Present)",
    desc: "Founded and managed a digital marketing agency focused on lead generation and e-commerce growth. Oversaw technical implementation of tracking scripts, API integrations, and automated reporting systems using JavaScript and Python. Managed €1M in advertising budget across Google and Meta platforms, while also ensuring proper website optimization for conversion. This role developed my problem-solving skills in combining data, code, and business objectives.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Digital Project Manager | Consultant | Trainer (2019 – 2025)",
    desc: "Led over 75 digital projects annually for more than 150 clients, covering topics in digital transformation and innovation. Regularly applied web development fundamentals (HTML, CSS, JavaScript) to implement client solutions and optimize digital platforms. Organized a large-scale innovation event and achieved a +400% increase in project objectives. This experience strengthened my ability to bridge client needs with technical execution and agile project delivery.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Digital Marketing Officer (2018 – 2019)",
    desc: "Managed SEO/SEA strategies, product catalog updates, and on-site content improvements using CMS platforms and basic front-end editing (HTML, CSS). Designed and optimized landing pages to improve user experience and organic ranking, contributing to a +62% SEO traffic growth within 12 months. Actively collaborated with developers to enhance website functionality and performance, gaining practical exposure to technical problem-solving in web environments.",
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
