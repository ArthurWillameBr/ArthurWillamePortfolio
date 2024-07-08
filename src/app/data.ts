import { v4 as uuidv4 } from "uuid";

export interface ProjectsProps {
  id: string;
  name: string;
  description: string;
  deployLink?: string;
  githubLink?: string;
  linkedinLink?: string;
  stacks: {
    src: string;
    width: number;
    height: number;
    alt: string;
  }[];
}

export const projects  = [
  {
    id: uuidv4(),
    name: "Easy Store",
    deployLink: "https://easystorehub.vercel.app/",
    githubLink: "https://github.com/ArthurWillameBr/EasyStore",
    linkedinLink: "https://www.linkedin.com/in/arthur-willame-14716b28b/",
    description:
      "E-commerce de periféricos para games",
    stacks: [
      {
        src: "/NextJS-Dark.svg",
        width: 26,
        height: 26,
        alt: "NextJS",
      },
    {
      src: "/TypeScript.svg",
      width: 26,
      height: 26,
      alt: "TypeScript",
    }, 
    {
      src: "/TailwindCSS-Dark.svg",
      width: 26,
      height: 26,
      alt: "TailwindCSS",
    },
    {
      src: "/Shandcn-ui.png",
      width: 26,
      height: 26,
      alt: "Shandcn-ui",
    },
    {
      src: "/Prisma.svg",
      width: 26,
      height: 26,
      alt: "Prisma",
    },
    {
      src: "/PostgreSQL-Dark.svg",
      width: 26,
      height: 26,
      alt: "Postgres",
    },
   
    ],
  },
  {
    id: uuidv4(),
    name: "Pizza Shop",
    githubLink: "https://github.com/ArthurWillameBr/PizzaShop/tree/main/src",
    linkedinLink: "https://www.linkedin.com/in/arthur-willame-14716b28b/",
    description:
      "Um dashboard para restaurantes",
    stacks: [
    {
      src: "/TypeScript.svg",
      width: 26,
      height: 26,
      alt: "Typescript",
    }, 
    {
      src: "/React-Dark.svg",
      width: 26,
      height: 26,
      alt: "ReactJS",
    },
    {
      src: "/TailwindCSS-Dark.svg",
      width: 26,
      height: 26,
      alt: "TailwindCSS",
    },
    {
      src: "/Shandcn-ui.png",
      width: 26,
      height: 26,
      alt: "Shandcn-ui",
    },
    {
      src: "/ReactQuery-Dark.svg",
      width: 26,
      height: 26,
      alt: "TanStack Query",
    },
   
    ],
  },
  {
    id: uuidv4(),
    name: "Chef Delivery",
    githubLink: "https://github.com/ArthurWillameBr/ChefDelivery",
    deployLink: "https://chef-delivery.vercel.app/",
    linkedinLink: "https://www.linkedin.com/in/arthur-willame-14716b28b/",
    description:
      "Aplicativo de delivery estilo iFood",
    stacks: [
      {
        src: "/NextJS-Dark.svg",
        width: 26,
        height: 26,
        alt: "NextJS",
      },
    {
      src: "/TypeScript.svg",
      width: 26,
      height: 26,
      alt: "TypeScript",
    }, 
    {
      src: "/TailwindCSS-Dark.svg",
      width: 26,
      height: 26,
      alt: "TailwindCSS",
    },
    {
      src: "/Shandcn-ui.png",
      width: 26,
      height: 26,
      alt: "Shandcn-ui",
    },
    {
      src: "/Prisma.svg",
      width: 26,
      height: 26,
      alt: "Prisma",
    },
    {
      src: "/PostgreSQL-Dark.svg",
      width: 26,
      height: 26,
      alt: "Postgres",
    },
    ],
  },
  {
    id: uuidv4(),
    name: "MyTimer",
    deployLink: "https://my-timer-theta.vercel.app/",
    githubLink: "https://github.com/ArthurWillameBr/MyTimer",
    linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7200861115394756608/",
    description:
      "Aplicativo de gerenciamento de tempo utilizando a técnica de pomodoro",
    stacks: [
    {
      src: "/TypeScript.svg",
      width: 26,
      height: 26,
      alt: "TypesScript",
    }, 
    {
      src: "/React-Dark.svg",
      width: 26,
      height: 26,
      alt: "ReactJS",
    },
    {
      src: "/StyledComponents.svg",
      width: 26,
      height: 26,
      alt: "Styled Components",
    },
    ],
  },
  {
    id: uuidv4(),
    name: "Connect Notes",
    deployLink: "https://connect-notes.vercel.app/",
    githubLink: "https://github.com/ArthurWillameBr/ConnectNotes",
    linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7197691364770242560/",
    description:
      "Aplicativo de notas que converte automaticamente áudio em texto",
    stacks: [
    {
      src: "/TypeScript.svg",
      width: 26,
      height: 26,
      alt: "TypesScript",
    }, 
    {
      src: "/React-Dark.svg",
      width: 26,
      height: 26,
      alt: "ReactJS",
    },
    {
      src: "/TailwindCSS-Dark.svg",
      width: 26,
      height: 26,
      alt: "TailwindCSS",
    },
    ],
  },
  {
    id: uuidv4(),
    name: "Chatbot",
    githubLink: "https://github.com/ArthurWillameBr/ChatbotWithGemini",
    deployLink: "https://chatbot-with-gemini.vercel.app/",
    linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7208983958108176385/",
    description:
      "Chatbot feito usando API do Gemini e vercel AI sdk",
    stacks: [
      {
        src: "/NextJS-Dark.svg",
        width: 26,
        height: 26,
        alt: "NextJS",
      },
    {
      src: "/TypeScript.svg",
      width: 26,
      height: 26,
      alt: "TypeScript",
    }, 
    {
      src: "/TailwindCSS-Dark.svg",
      width: 26,
      height: 26,
      alt: "TailwindCSS",
    },
    {
      src: "/Shandcn-ui.png",
      width: 26,
      height: 26,
      alt: "Shandcn-ui",
    },
    ],
  },
 
];


export const socialLinks = [
  {
    id: 1,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/arthur-willame-14716b28b/",
  },
  {
    id: 2,
    name: "GitHub",
    link: "https://github.com/ArthurWillameBr"
  },
  {
    id: 3,
    name: "Email",
    link: "mailto:arthurwillame2017@gmail.com"
  }
]

export const skills = [
  {
    src: "/TypeScript.svg",
    width: 800,
    height: 600,
    alt: "TypeScript",
  },
  {
    src: "/JavaScript.svg",
    width: 800,
    height: 600,
    alt: "JavaScript",
  },
  {
    src: "/React-Dark.svg",
    width: 800,
    height: 600,
    alt: "React",
  },
  {
    src: "/NextJS-Dark.svg",
    width: 800,
    height: 600,
    alt: "NextJS",
  },
  {
    src: "/Redux.svg",
    width: 800,
    height: 600,
    alt: "Redux",
  },
  {
    src: "/TailwindCSS-Dark.svg",
    width: 800,
    height: 600,
    alt: "TailwindCSS",
  },
  {
    src: "/StyledComponents.svg",
    width: 800,
    height: 600,
    alt: "StyledComponents",
  },
  {
    src: "/NodeJS-Dark.svg",
    width: 800,
    height: 600,
    alt: "NodeJS",
  },
  {
    src: "/ExpressJS-Dark.svg",
    width: 800,
    height: 600,
    alt: "ExpressJS",
  },
  {
    src: "/PostgreSQL-Dark.svg",
    width: 800,
    height: 600,
    alt: "PostgreSQL",
  },
  {
    src: "/MongoDB.svg",
    width: 800,
    height: 600,
    alt: "MongoDB",
  },
  {
    src: "/Prisma.svg",
    width: 800,
    height: 600,
    alt: "Prisma",
  },
  {
    src: "/Docker.svg",
    width: 800,
    height: 600,
    alt: "Docker",
  },
  {
    src: "/Git.svg",
    width: 800,
    height: 600,
    alt: "Git",
  },
  {
    src: "/HTML.svg",
    width: 800,
    height: 600,
    alt: "HTML",
  },
  {
    src: "/CSS.svg",
    width: 800,
    height: 600,
    alt: "CSS",
  },
 
];
