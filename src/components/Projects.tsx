import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
const projects = [{
  title: "Machine Learning Engineer at Xomnia",
  description: "Leading AI agency in the Netherlands. Currently serving as topic lead on GenAI and tech lead for multiple client projects.",
  tags: ["Consulting", "GenAI", "Machine Learning", "Data Engineering"],
  date: "2020 - Present",
  highlights: ["AI Engineer for [VodafoneZiggo](https://xomnia.com/vodafoneziggo-boosts-its-customer-service-with-generative-ai/)'s customer service AI products", "Azure Databricks migration for Gemeente Amsterdam", "FrieslandCampina churn prediction and marketing mix modeling", "Air traffic prediction models for LVNL", "Fraud detection for Schadegarant"],
  link: "https://www.xomnia.com"
}, {
  title: "Artist Portfolio Website",
  description: "Developed a modern web platform showcasing the works of early 1900s Dutch painter Huib Luns",
  tags: ["Full Stack", "Frontend (Vite/React/Tailwind CSS)", "Supabase"],
  date: "2025",
  type: "Personal Project",
  link: "https://huibluns.nl"
}, {
  title: "CatFinder",
  description: "Custom facial recognition model to reunite lost cats with their owners",
  tags: ["Deep Learning", "Computer Vision", "Web Scraping", "Full Stack"],
  date: "2022",
  type: "Personal Project"
}, {
  title: "AI Startup LAB - ABN AMRO Collaboration",
  description: "Developed an AI tool to predict and visualize household solar energy supply and demand",
  tags: ["Machine Learning", "Energy", "Visualization", "Entrepreneurship"],
  date: "2020",
  location: "Science Park, Amsterdam"
}];
export default function Projects() {
  return <section id="projects" className="section-padding bg-secondary/50">
      <div className="container">
        <div className="animate-on-scroll">
          <h2 className="heading">💼 Experience & Projects</h2>
          <p className="subheading">Professional work and personal projects showcasing expertise in AI, machine learning, and development.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          {projects.map(project => <Card key={project.title} className="group p-6 card-hover animate-on-scroll">
              <div className="flex justify-between items-start mb-2">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-primary focus:text-primary font-medium text-lg flex flex-col">
                    <span>{project.title}</span>
                    <span className="text-muted-foreground text-sm">{project.description}</span>
                  </a>
                ) : (
                  <div>
                    <h3 className="font-medium text-lg">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
                )}
                <span className="text-sm text-muted-foreground">{project.date}</span>
              </div>
              {project.highlights && <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                {project.highlights.map((highlight, index) => (
                  <li key={index}>
                    <ReactMarkdown
                      components={{
                        a: ({node, ...props}) => <a {...props} className="text-primary/80 hover:text-primary font-medium transition-colors" target="_blank" rel="noopener noreferrer" />,
                        p: ({node, ...props}) => <>{props.children}</>
                      }}
                    >
                      {highlight}
                    </ReactMarkdown>
                  </li>
                ))}
              </ul>}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => <span key={tag} className="px-2 py-1 bg-secondary text-xs rounded-full">
                    {tag}
                  </span>)}
              </div>
              {project.type && <p className="text-sm text-muted-foreground">{project.type}</p>}
            </Card>)}
        </div>
      </div>
    </section>;
}