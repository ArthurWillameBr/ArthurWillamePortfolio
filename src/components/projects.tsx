"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardProjects } from "./card-projects";
import { projects } from "@/app/data";

import SectionTitle from "./section-title";

const Projects = () => {
  return (
    <main id="projects" className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-10">
        <SectionTitle title="Projetos"/>
      </div>
      <div className="flex justify-center items-center mx-auto px-8">
        <Carousel className="max-w-64">
          <CarouselContent>
            <CardProjects projects={projects} />
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </main>
  );
};

export default Projects;
