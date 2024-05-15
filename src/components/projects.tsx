"use client";

import { projects } from "@/app/info";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HomeIcon, Link } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <div className="flex  items-center justify-center">
        <h1 className="text-3xl pt-24 pb-14 font-semibold lg:text-4xl">
          Projetos
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <Carousel className="w-full max-w-xs ">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="ml-4 w-72 h-80">
                    <CardHeader>
                      <HomeIcon />
                      <div className="flex justify-between items-center">
                        <CardTitle className="pt-3 font-medium">
                          {project.name}
                        </CardTitle>
                        <a href={project.githubLink}>
                          <Link className="size-4" />
                        </a>
                      </div>
                    </CardHeader>
                    <hr className="mx-5 opacity-55" />
                    <CardContent className="flex items-center justify-center p-6 mb-5">
                      <CardDescription>{project.description}</CardDescription>
                    </CardContent>
                    <hr className="mx-5 opacity-55" />
                    <CardFooter className="flex gap-2 mt-2">
                      {project.stacks.map((stack, index) => (
                        <Image
                          key={index}
                          src={stack.src}
                          width={stack.width}
                          height={stack.height}
                          alt={stack.alt}
                        />
                      ))}
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Projects;
