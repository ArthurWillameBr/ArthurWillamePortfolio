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
        <Button size="icon">
          <Sun size={24} className="lg:hover:mb-3 lg:transition-all"  onClick={() => setTheme("light")}/>
        </Button>
      ) : (
        <Button size="icon"  className="text-black lg:hover:mb-3 lg:transition-all" onClick={() => setTheme("dark")}>
          <Moon size={24} />
        </Button>
      )}
    </>
  );
}
