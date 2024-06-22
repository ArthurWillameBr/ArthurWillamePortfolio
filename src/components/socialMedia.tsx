"use client"

import { socialLinks } from "@/app/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { Github, Linkedin, Mail } from "lucide-react";

import { motion } from "framer-motion"

export function SocialMedia() {
  return (
   <>
   {socialLinks.map((socialLink, index) => {
     return (
       <motion.main
       className="flex"
       key={socialLink.id}
       initial={{ opacity: 0, scale: 0}}
       whileInView={{ opacity: 1, scale: 1}}
       exit={{ opacity: 0, scale: 0 }}
       transition={{ duration: 0.5, delay: index * 0.2}}
       >
       <TooltipProvider>
         <Tooltip>
           <TooltipTrigger asChild>
             <a
               className="group bg-primary px-3 py-2 rounded text-primary-foreground"
               href={socialLink.link}
               target="_blank"
               rel="noopener noreferrer"
             >
               {socialLink.name === "Linkedin" && (
                 <Linkedin className="group-hover:scale-110 transition-all" />
               )}
               {socialLink.name === "GitHub" && (
                 <Github className="group-hover:scale-110 transition-all" />
               )}
               {socialLink.name === "Email" && (
                 <Mail className="group-hover:scale-110 transition-all" />
               )}
             </a>
           </TooltipTrigger>
           <TooltipContent>{socialLink.name}</TooltipContent>
         </Tooltip>
       </TooltipProvider>
       </motion.main>
     );
   })}
   </>
  );
}
