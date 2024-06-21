import { Button } from "./ui/button";
import { SocialMedia } from "./socialMedia";

const Profile = () => {

  return (
    <section className="flex flex-col items-center justify-center text-center gap-5 ">
      <h1 className="text-3xl lg:text-5xl font-bold">
        Olá, eu sou o <span className=""> Arthur Willame</span>
      </h1>
      <h3 className=" text-2xl lg:text-3xl font-semibold">
        Desenvolvedor <span className="text-primary">Front-end</span>
      </h3>
      <div className="w-80 lg:w-[40rem]">
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
          <SocialMedia/>
        </div>
        <Button
          variant="outline"
          className="relative inline-flex items-center overflow-hidden transition-all group border-2 border-primary"
        >
          <span className="w-64 h-48 rounded bg-primary absolute right-96 bottom-1 translate-x-full ease-out duration-500 transition-all translate-y-full mb-12 group-hover:translate-x-96"></span>
          <span className="relative w-full text-left transition-colors duration-300 ease-in-out text-black dark:text-white uppercase font-semibold ">
            Curriculo
          </span>
        </Button>
      </div>
    </section>
  );
};

export default Profile;
