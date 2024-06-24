"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { skills } from "../app/data";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { motion } from "framer-motion";
import SectionTitle from "./section-title";

const Skills = () => {
  return (
    <main id="skills" className="min-h-screen flex flex-col items-center justify-center">
      <div className="mb-10">
      <SectionTitle title="Habilidades"/>

      </div>
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
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <CarouselContent>
            {skills.map((skill, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 text-center space-y-1"
              >
                <Image
                  src={skill.src}
                  width={skill.width}
                  height={skill.height}
                  alt={skill.alt}
                />
                <p className="truncate">{skill.alt}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </motion.div>
      </Carousel>
    </main>
  );
};

export default Skills;
