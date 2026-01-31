import { useEffect, useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
const solutions = ["AI solutions", "useful agents", "web applications", "REST APIs", "data pipelines", "custom ML models", "advanced analytics dashboards", "websites"];
export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const typingSpeed = 50; // Speed for typing
    const deletingSpeed = 30; // Speed for deleting
    const pauseDuration = 1000; // How long to pause when word is complete

    const type = () => {
      const currentSolution = solutions[currentSolutionIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(currentSolution.substring(0, currentText.length + 1));
        if (currentText.length === currentSolution.length) {
          // Word is complete, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        // Deleting
        setCurrentText(currentSolution.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentSolutionIndex(prev => (prev + 1) % solutions.length);
          return;
        }
      }
    };
    const timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentSolutionIndex, isDeleting]);
  return <section className="min-h-screen flex items-center section-padding pt-32">
    <div className="container">
      <div className="animate-on-scroll">
        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">AI ENGINEER</p>
        <h1 className="heading">
          Hello, I'm <HoverCard openDelay={0}>
            <HoverCardTrigger className="cursor-pointer">Fried.</HoverCardTrigger>
            <HoverCardContent className="w-[26rem]">
              <p className="text-sm leading-relaxed tracking-wide">
                I am a driven and all-round Machine Learning Engineer with a deep specialization in Generative AI. I excel at overseeing and executing the entire end-to-end process of AI projects, from initial concept and strategy to the final implementation of robust, scalable solutions.<br /><br />
                My technical versatility allows me to tackle both data science challenges and complex engineering tasks. I have hands-on experience leading projects, such as migrating business-critical systems to advanced agentic frameworks. I naturally take ownership and am proactive in understanding and solving problems.<br /><br />
                As a strong communicator, I bridge the gap between technology and business. I can clearly explain complex topics to various stakeholders and act as a unifying factor in teams. My proactive attitude and strategic insight, demonstrated in my role as GenAI Lead, make me a valuable sparring partner who contributes to the commercial and business impact of AI.
              </p>
            </HoverCardContent>
          </HoverCard><br />
          I build <span className="text-primary relative inline-block">
            {currentText}
            <span className="absolute right-0 top-[-0.1em] border-r-2 border-primary animate-[blink_0.7s_infinite] h-[1.2em]">&nbsp;</span>
          </span><br />
        </h1>
        <p className="subheading">📍Amsterdam</p>
      </div>
    </div>
  </section>;
}