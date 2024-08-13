import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  exchange_rates,
  studio_nerds,
  elevator_repair,
  fishing_industry,
  cooking_recipes,
  threejs,
  postgresql,
  nestjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "nestjs",
    icon: nestjs,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "You could be here",
    icon: web,
    iconBg: "#383E56",
    date: "December 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "You could be here",
    icon: backend,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "You could be here",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const projects = [
  {
    name: "Exchange rates",
    description:
      "Web-application displays gifs depending on the exchange rate of the selected currencies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nestjs",
        color: "pink-text-gradient",
      },
    ],
    image: exchange_rates,
    source_code_link: "https://github.com/qtenebrae/web-development",
  },
  {
    name: "Layout Studio Nerds",
    description: "Website layout in pure css html css html Studio Nerds",
    tags: [
      {
        name: "layout",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: studio_nerds,
    source_code_link: "https://grimaveira.github.io/layout/",
  },
  {
    name: "Elevator-repair",
    description:
      "A web application that provides the formation and processing of applications for elevator breakdowns, accounting of employees and details.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: elevator_repair,
    source_code_link:
      "https://github.com/GrimAveira/applications-for-elevator-repair",
  },
  {
    name: "Fishing-industry",
    description:
      "A mobile web application for local use in the company for accounting of fish, employees, etc.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: fishing_industry,
    source_code_link: "https://github.com/GrimAveira/fishing-industry",
  },
  {
    name: "Cooking-recipes",
    description:
      "A graduation project, a website with cooking recipes and a sentimental neural network.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: cooking_recipes,
    source_code_link: "https://github.com/GrimAveira/cooking-recipes",
  },
  // {
  //   name: "Adaptive-project",
  //   description: "Adaptive test task and get request.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: elevator_repair,
  //   source_code_link:
  //     "https://github.com/GrimAveira/applications-for-elevator-repair",
  // },
];

export { services, technologies, experiences, projects };
