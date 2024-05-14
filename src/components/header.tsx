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

const Header = () => {
    return ( 
        <header className="flex justify-between items-center w-3/4 h-32 ">
        <p className="relative group cursor-pointer">
          <span className="text-3xl">AW.</span>
          <span className="absolute -bottom-1 left-0 w-0 h-2 bg-primary transition-all group-hover:w-full"></span>
        </p>
        <nav className="hidden lg:block items-center" >
          <ul className="flex gap-4 items-center">
            <a className="text-base cursor-pointer">Projetos</a>
            <a className="text-base cursor-pointer">Habilidades</a>
            <a className="text-base cursor-pointer mr-5">Contato</a>
            <ModeToggle/>
          </ul>
        </nav>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger className="mr-5">
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-left text-xl ">Menu</SheetTitle>
                <SheetDescription>
                  <nav>
                    <ul className="flex flex-col text-left space-y-5 mt-4">
                      <li className="text-base mx-4">Projetos</li>
                      <li className="text-base mx-4">Habilidades</li>
                      <li className="text-base mx-4">Contato</li>
                    </ul>
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <ModeToggle/>
        </div> 
      </header>
     );
}
 
export default Header;