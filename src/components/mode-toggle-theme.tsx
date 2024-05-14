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
        <Button size="icon" variant="ghost" className="hover:bg-transparent">
          <Sun size={24}  onClick={() => setTheme("light")}/>
        </Button>
      ) : (
        <Button size="icon" variant="ghost" className="hover:bg-transparent" onClick={() => setTheme("dark")}>
          <Moon size={24} />
        </Button>
      )}
    </>
  );
}
