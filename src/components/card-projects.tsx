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
import { Github, LinkIcon } from "lucide-react";
import Image from "next/image";
import { CarouselItem } from "../components/ui/carousel";
import Link from "next/link";

export interface ProjectsProps {
  id: string;
  name: string;
  description: string;
  deployLink: string;
  githubLink: string;
  stacks: {
    src: string;
    width: number;
    height: number;
    alt: string;
  }[];

}

export function CardProjects({ projects }: { projects: ProjectsProps[]}) {
  return (
    <>
      {projects.map((project, index) => (
        <CarouselItem key={index}>
          <div className="p-1">
            <TooltipProvider>
              <Link href={`/project/${project.id}`}>
                  <Card className="ml-4 w-72 h-80 bg-muted text-muted-foreground">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="pt-3 font-medium">
                            {project.name}
                          </CardTitle>
                        </div>
                        <div className="flex items-center gap-4">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <a href={project.deployLink}>
                                <LinkIcon className="size-4" />
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>Deploy</TooltipContent>
                          </Tooltip>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <a href={project.githubLink}>
                                <Github />
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>Repositório</TooltipContent>
                          </Tooltip>
                        </div>
                      </div>
                    </CardHeader>
                    <hr className="mx-5 opacity-80" />
                    <CardContent className="flex-1 items-center justify-center p-6 mb-5">
                      <CardDescription>{project.description}</CardDescription>
                    </CardContent>
                    <hr className="mx-5 opacity-80" />
                    <CardFooter className="flex items-end justify-between mt-2">
                      {project.stacks.map((stack, index) => (
                        <Tooltip key={index}>
                          <TooltipTrigger>
                            <Image
                              src={stack.src}
                              width={stack.width}
                              height={stack.height}
                              alt={stack.alt}
                            />
                          </TooltipTrigger>
                          <TooltipContent>{stack.alt}</TooltipContent>
                        </Tooltip>
                      ))}
                    </CardFooter>
                  </Card>
                  </Link>
            </TooltipProvider>
          </div>
        </CarouselItem>
      ))}
    </>
  );
}
