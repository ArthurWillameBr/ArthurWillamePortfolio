"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { skills } from "../app/info";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl pt-24 pb-14 font-semibold lg:text-4xl">Habilidades</h1>
      <Carousel
        plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm lg:max-w-lg"
      >
        <CarouselContent>
          {skills.map((skill, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <Image
                src={skill.src}
                width={skill.width}
                height={skill.height}
                alt={skill.alt}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Skills;
