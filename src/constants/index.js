export const myProjects = [
  {
    id: 1,
    title: "Splitwise ( Mobile App)",
    description:
      "A full-stack expense management and cost-splitting application that allows users to track shared expenses, settle balances, and manage groups in real time.",
    subDescription: [
      "Built Entity Framework Core for robust backend APIs and secure data management.",
      "Designed an intuitive and mobile-friendly UI using React.js with Tailwind CSS for seamless user experience.",
      "Implemented secure authentication and role-based access control with JWT.",
      "Integrated Firebase for efficient expense tracking, balance settlements, and group data handling.",
      "Developed features like group creation, expense categorization, payment reminders, and settlement history.",
      "Optimized performance with RESTful APIs and applied clean architecture principles for scalability.",
    ],
    href: "",
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "Node", path: "/assets/logos/nodejs.svg" },
      { id: 2, name: "Express", path: "/assets/logos/express.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 5, name: "Firebase", path: "/assets/logos/firebase.svg" },
    ],
  },

  // Genie Project
  {
    id: 2,
    title: "Genie",
    description:
      "A web application that helps developers quickly find and download desired icons, SVGs, and PowerPoint templates for their projects.",
    subDescription: [
      "Developed a user-friendly UI with React.js and Tailwind CSS for quick search and downloads.",
      "Built backend with Node.js and Express to manage asset storage and API integrations.",
      "Implemented efficient search and filtering for icons, SVGs, and templates.",
      "Integrated Firebase for user authentication and bookmarking favorite assets.",
      "Deployed on Vercel ensuring fast, scalable, and reliable performance.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/genie.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node", path: "/assets/logos/nodejs.svg" },
      { id: 3, name: "Express", path: "/assets/logos/express.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 5, name: "Firebase", path: "/assets/logos/firebase.svg" },
    ],
  },

  // 5a Project
  {
    id: 3,
    title: "5A ( Cab, Food, Clener Booking App)",
    description:
      "A complete e-commerce platform enabling product listing, cart management, secure checkout, and order tracking.",
    subDescription: [
      "Developed backend APIs using Node.js and Express for product, cart, and order management.",
      "Integrated MySQL for structured product and order data handling.",
      "Implemented JWT-based authentication and role-based access for users and admins.",
      "Built a clean, responsive UI with React.js and Tailwind CSS.",
      "Added features like product filtering, search, order tracking, and payment gateway integration.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/5a.jpg",
    tags: [ 
      { id: 1, name: "Node", path: "/assets/logos/nodejs.svg" },
      { id: 2, name: "Express", path: "/assets/logos/express.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 5, name: "MySQL", path: "/assets/logos/mysql.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/devang-kushwaha-794340333/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/devang.music.official/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Developed 3 Projects",
    date: "2023-2026",
    contents: [
      "Developed and deployed two cross-platform mobile apps using React Native, boosting user engagement by 30% in first 3 months through faster onboarding and intuitive UI.",
      "Architected backend services with Node.js, Express, and Firebase, enabling real-time group expense tracking for 1,000+ monthly active users.",
      "Implemented Firebase Authentication & Firestore, cutting user login failures by 35% and reducing onboarding drop-off rates.",
      "Strengthened application security by integrating JWT-based authentication, bcrypt password hashing, and HTTPS zero reported vulnerabilities in production.",
      "Increased QA efficiency by creating 40+ automated tests with Jest/Mocha, reducing regression bugs by 25% and cutting QA cycles by 20%.",
    ],
  },
];
export const reviews = [
  {
    name: "Devang",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
];
