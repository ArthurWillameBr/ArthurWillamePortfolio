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

const Projects = () => {
  return (
    <main className="h-screen">
      <div className="flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-3xl mb-10 font-semibold lg:text-4xl"
        >
          Projetos
        </motion.h1>
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
