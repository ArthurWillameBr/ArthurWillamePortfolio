"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardProjects } from "./card-projects";
import { projects } from "@/app/data";

import { motion } from "framer-motion";
import SectionTitle from "./section-title";

const Projects = () => {
  return (
    <main className="min-h-screen">
      <div className="flex items-center justify-center">
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
