"use client";

import { Button } from "./ui/button";
import { SocialMedia } from "./social-media";

import { motion } from "framer-motion";

const Profile = () => {
  return (
    <motion.div
      style={{ minHeight: "calc(100vh - 188px)" }}
      className="flex flex-col items-center justify-center text-center gap-5"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0}}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl lg:text-5xl font-bold tracking-tight">
        Olá, eu sou o <span className=""> Arthur Willame</span>
      </h1>
      <h3 className=" text-2xl lg:text-3xl font-semibold tracking-tight">
        Desenvolvedor <span className="text-primary dark:text-violet-600">Front-end</span>
      </h3>
      <div className="w-96 lg:w-[40rem] px-5">
        <p className="opacity-75 font-medium">
          Tive o meu primeiro contanto com linhas de código aos 17 anos,
          estudando javascript e lógica de programação. Essa experiência me
          proporcionou uma imersão fascinante no universo do desenvolvimento.
          Desde então eu decidi que queria fazer isso na minha vida - eu queria
          ser um programador. Venho me aprimorando e estudando diariamente seja
          por meio da faculdade, criação de projetos pessoas, ou por cursos
          online. Meu foco é o desenvolvimento web.
        </p>
      </div>
      <div className="mt-4">
        <div className="flex gap-2 items-center justify-center mb-4">
          <SocialMedia />
        </div>
        <Button
          variant="outline"
          className="relative inline-flex  items-center overflow-hidden transition-all group border-2 border-primary"
        >
          <span className="w-64 h-48 rounded bg-primary absolute right-96 bottom-1 translate-x-full ease-out duration-500 transition-all translate-y-full mb-12 group-hover:translate-x-96"></span>
          <span className="relative w-full text-left transition-colors duration-300 ease-in-out text-black group-hover:text-white dark:text-white uppercase font-semibold ">
            Curriculo
          </span>
        </Button>
      </div>
    </motion.div>
  );
};

export default Profile;
