import { useEffect, useState } from "react";
const solutions = ["AI solutions", "websites", "scalable web applications", "robust REST APIs", "cloud platforms", "data pipelines", "AI chatbots", "dynamic agents", "custom ML models", "real-time analytics"];
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
        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">FULL STACK & MACHINE LEARNING ENGINEER</p>
        <h1 className="heading">
          Hello, I'm Fried.<br />
          I build <span className="text-primary relative">
            {currentText}
            <span className="absolute right-[-4px] top-0 border-r-2 border-primary animate-[blink_0.7s_infinite]">&nbsp;</span>
          </span><br />
        </h1>
        <p className="subheading">📍Amsterdam</p>
      </div>
    </div>
  </section>;
}