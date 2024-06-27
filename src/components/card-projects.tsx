"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github, LinkIcon, Linkedin } from "lucide-react";
import Image from "next/image";
import { CarouselItem } from "../components/ui/carousel";
import { ProjectsProps } from "@/app/data";

import { motion } from "framer-motion";

export function CardProjects({ projects }: { projects: ProjectsProps[] }) {
  return (
    <>
      {projects.map((project, index) => (
        <CarouselItem key={index}>
          <TooltipProvider>
            <div>
              <Card className="bg-muted text-muted-foreground h-[300px]">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="pt-3 font-medium text-black dark:text-white">
                        {project.name}
                      </CardTitle>
                    </div>
                    <div className="flex items-center gap-4">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          {project.deployLink && (
                            <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.deployLink}
                          >
                            <LinkIcon className="size-5 mt-2 hover:scale-110" />
                          </a>
                          )}
                        </TooltipTrigger>
                        <TooltipContent>Deploy</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                         {project.githubLink && (
                           <a
                           target="_blank"
                           rel="noopener noreferrer"
                           href={project.githubLink}
                         >
                           <Github className=" mt-2 hover:scale-110" />
                         </a>
                         )}
                        </TooltipTrigger>
                        <TooltipContent>Repositório</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          {project.linkedinLink && (
                            <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.linkedinLink}
                          >
                            <Linkedin className="size-5 mt-2 hover:scale-110" />
                          </a>
                          )}
                        </TooltipTrigger>
                        <TooltipContent>Linkedin</TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                </CardHeader>
                <hr className="mx-5 opacity-80" />
                <CardContent className="flex-1 items-center justify-center p-6 mb-5">
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <hr className="mx-5 opacity-80" />
                <CardFooter className="flex items-center justify-center pt-1 gap-3">
                  {project.stacks.map((stack, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                          <Image
                            src={stack.src}
                            width={stack.width}
                            height={stack.height}
                            alt={stack.alt}
                          />
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>{stack.alt}</TooltipContent>
                    </Tooltip>
                  ))}
                </CardFooter>
              </Card>
            </div>
          </TooltipProvider>
        </CarouselItem>
      ))}
    </>
  );
}
