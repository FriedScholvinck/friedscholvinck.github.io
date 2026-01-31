import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Adjust path if needed

interface Tool {
  name: string;
  icon: string; // Path relative to /public
  description: string;
  url: string;
}

// Define your tools here
const tools: Tool[] = [
  {
    name: "Arc Browser",
    icon: "/icons/arc.svg",
    description: "My daily driver browser, love the spaces!",
    url: "https://arc.net/",
  },
  {
    name: "Raycast",
    icon: "/icons/raycast.svg",
    description: "Supercharged productivity launcher.",
    url: "https://www.raycast.com/",
  },
  {
    name: "Ghostty",
    icon: "/icons/ghostty.svg",
    description: "Fast, native, and beautiful terminal.",
    url: "https://github.com/ghostty-org/ghostty",
  },
  {
    name: "Cursor",
    icon: "/icons/cursor.svg",
    description: "The AI-first code editor I'm using right now.",
    url: "https://cursor.sh/",
  },
  {
    name: "Neovim",
    icon: "/icons/neovim.svg",
    description: "My go-to for quick edits and config files.",
    url: "https://neovim.io/",
  },
  {
    name: "lazygit",
    icon: "/icons/lazygit.svg",
    description: "Makes Git delightful in the terminal.",
    url: "https://github.com/jesseduffield/lazygit",
  },
  {
    name: "lazydocker",
    icon: "/icons/lazydocker.svg",
    description: "Taming Docker containers with ease.",
    url: "https://github.com/jesseduffield/lazydocker",
  },
  // Add more tools if you like!
];

export function ToolsShowcase() {
  return (
    <section id="tools-section" className="section-padding">
      <div className="container">
        <div className="animate-on-scroll">
          <h2 className="heading">🧰 Tools</h2>
          <p className="subheading">(dev) tools I like to use</p>
        </div>

        <TooltipProvider delayDuration={100}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 md:gap-8 justify-items-center mt-12">
            {tools.map((tool) => (
              <Tooltip key={tool.name}>
                <TooltipTrigger asChild>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex justify-center items-center aspect-square transform hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none card-hover animate-on-scroll"
                    aria-label={`Link to ${tool.name} website`}
                  >
                    <img
                      src={tool.icon}
                      alt={`${tool.name} logo`}
                      className="h-12 w-12 md:h-16 md:h-16 object-contain"
                      loading="lazy"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-semibold">{tool.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {tool.description}
                  </p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}

export default ToolsShowcase; // Add default export if needed elsewhere