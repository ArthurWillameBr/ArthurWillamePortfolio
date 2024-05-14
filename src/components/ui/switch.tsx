"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <SwitchPrimitives.Root
      checked={checked}
      onCheckedChange={setChecked}
      className={cn(
        ` ${!checked && "bg-white"}, peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-900 data-[state=unchecked]:bg-neutral-200 dark:focus-visible:ring-neutral-300 dark:focus-visible:ring-offset-neutral-950 `,
        className
      )}
      {...props}
      ref={ref}
    >
      {!checked ? (
        <Sun
          className={cn(
            `${
              !checked &&
              "pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform bg-neutral-950 translate-x-5"
            }`
          )}
        />
      ) : (
        <Moon
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform text-white bg-neutral-950"
          )}
        />
      )}
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
