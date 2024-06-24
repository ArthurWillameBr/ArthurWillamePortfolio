"use client";

import { ModeToggle } from "@/components/mode-toggle-theme";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

import { motion } from "framer-motion";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjects = () => {
    scrollToSection("projects");
  };

  const handleSheetCloseAndScroll = (sectionId: string) => {
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 300);
  };

  const handleSkills = () => {
    scrollToSection("skills");
  };

  return (
    <main className="flex justify-center">
      <motion.header
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center w-3/4 h-32 "
      >
        <p className="relative group cursor-pointer">
          <span className="text-2xl font-medium tracking-tighter">AW.</span>
          <span className="absolute -bottom-1 left-0 w-0 h-2 bg-primary transition-all group-hover:w-full"></span>
        </p>
        <nav className="hidden lg:block items-center">
          <ul className="flex gap-4 items-center">
            <a className="text-base cursor-pointer" onClick={handleProjects}>
              Projetos
            </a>
            <a className="text-base cursor-pointer" onClick={handleSkills}>
              Habilidades
            </a>
            <a className="text-base cursor-pointer mr-5">Contato</a>
            <ModeToggle />
          </ul>
        </nav>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-left text-xl">Menu</SheetTitle>
                <SheetDescription className="flex flex-col justify-end space-y-5 mt-5 text-left">
                  <SheetClose asChild>
                    <Button
                      onClick={() => handleSheetCloseAndScroll("skills")}
                      variant="link"
                      className="text-lg dark:text-violet-500"
                    >
                      Habilidades
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button
                      onClick={() => handleSheetCloseAndScroll("projects")}
                      variant="link"
                      className="text-lg dark:text-violet-500"
                    >
                      Projetos
                    </Button>
                  </SheetClose>

                  <Button
                    variant="link"
                    className="text-lg dark:text-violet-500"
                  >
                    Contato
                  </Button>
                  <div className="lg:hidden">
                    <ModeToggle />
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>
    </main>
  );
};

export default Header;
