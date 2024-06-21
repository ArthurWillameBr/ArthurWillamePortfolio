import { socialLinks } from "@/app/info";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { Github, Linkedin, Mail } from "lucide-react";

export function SocialMedia() {
  return (
    <>
      {socialLinks.map((socialLink) => {
        return (
          <TooltipProvider key={socialLink.id}>
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
        );
      })}
    </>
  );
}
