import { v4 as uuidv4 } from "uuid";

export interface ProjectsProps {
  id: string;
  name: string;
  description: string;
  deployLink: string;
  githubLink: string;
  linkedinLink: string;
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
      "E-commerce de periféricos para games com autenticação via NextAuth e integração com Stripe",
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
    name: "Project 1",
    githubLink: "https://github.com",
    deployLink: "https://github.com",
    linkedinLink: "https://www.linkedin.com/in/arthur-willame-14716b28b/",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stacks: [
    {
      src: "/TypeScript.svg",
      width: 26,
      height: 26,
      alt: "Imagem 1",
    }, 
    {
      src: "/React-Dark.svg",
      width: 26,
      height: 26,
      alt: "Imagem 1",
    },
    ],
  },
  {
    id: uuidv4(),
    name: "Project 1",
    githubLink: "https://github.com",
    deployLink: "https://github.com",
    linkedinLink: "https://www.linkedin.com/in/arthur-willame-14716b28b/",
    description:
      "Amet asperiores et impedit aliquam consectetur? ",
    stacks: [
    {
      src: "/TypeScript.svg",
      width: 26,
      height: 26,
      alt: "Imagem 1",
    }, 
    {
      src: "/React-Dark.svg",
      width: 26,
      height: 26,
      alt: "Imagem 1",
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
    src: "/Python-Dark.svg",
    width: 800,
    height: 600,
    alt: "Python",
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
