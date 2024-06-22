"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardProjects } from "./card-projects";
import { projects } from "@/app/data";


const Projects = () => {
  return (
    <main className="min-h-screen">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl pt-24 pb-14 font-semibold lg:text-4xl">
          Projetos
        </h1>
      </div>
      <div className="flex justify-center items-center mx-auto">
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                <CardProjects projects={projects} />
            </CarouselContent>
        </Carousel>
      </div>
    </main>
  );
};

export default Projects;
