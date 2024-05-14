import { Button } from "./ui/button";

const Profile = () => {
  return (
    <section className="flex flex-col items-center text-center mt-10 gap-5 ">
      <h1 className="text-3xl lg:text-5xl font-bold">
        Olá, eu sou o <span className="text-primary"> Arthur Willame</span>
      </h1>
      <h3 className=" text-2xl lg:text-3xl font-semibold">
        Um Engenheiro De Software
      </h3>
      <div className="w-96 lg:w-[30rem]">
        <p className="text-sm opacity-70 font-medium">
          Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis
          perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus
          modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores
          minima consectetur.
        </p>
      </div>
      <div className="mt-4">
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
