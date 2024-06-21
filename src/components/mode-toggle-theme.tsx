"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme === "dark" ? (
        <Button className="w-full lg:bg-transparent lg:hover:bg-transparent"  onClick={() => setTheme("light")}>
          <Sun size={24} className="lg:hover:mb-3 lg:transition-all "  />
        </Button>
      ) : (
        <Button className= "w-full lg:bg-transparent lg:text-black lg:hover:bg-transparent" onClick={() => setTheme("dark")}>
          <Moon size={24} className="lg:hover:mb-3 lg:transition-all " />
        </Button>
      )}
    </>
  );
}
