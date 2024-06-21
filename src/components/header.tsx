import { ModeToggle } from "@/components/mode-toggle-theme";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <main className="flex justify-center">
      <header className="flex justify-between items-center w-3/4 h-32 ">
        <p className="relative group cursor-pointer">
          <span className="text-2xl font-medium">AW.</span>
          <span className="absolute -bottom-1 left-0 w-0 h-2 bg-primary transition-all group-hover:w-full"></span>
        </p>
        <nav className="hidden lg:block items-center">
          <ul className="flex gap-4 items-center">
            <a className="text-base cursor-pointer">Projetos</a>
            <a className="text-base cursor-pointer">Habilidades</a>
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
                  <Button
                    variant="link"
                    className="text-lg dark:text-violet-500"
                  >
                    Projetos
                  </Button>
                  <Button
                    variant="link"
                    className="text-lg dark:text-violet-500"
                  >
                    Habilidades
                  </Button>
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
      </header>
    </main>
  );
};

export default Header;
