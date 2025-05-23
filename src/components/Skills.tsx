import { Card } from "@/components/ui/card";
const skills = [
  {
    category: "Software Development",
    items: [
      "Advanced Python",
      "FastAPI", "Pydantic", "uv", "ruff", "pytest",
      "PyTorch", "Transformers", "OpenAI", "LangGraph", "smolagents",
      "Polars", "PySpark", "Databricks",
      "AWS", "Azure", "GCP",
      "Docker", "Kubernetes", "Terraform", "CI/CD", "Git",
    ]
  },
  {
    category: "Consulting",
    items: [
      "AI Vision & Strategy",
      "Project Planning & Management",
      "Cloud Strategy",
      "Software Architecture",
      "MLOps Best Practices",
      "Technical Communication",
      "API Design",
      "Code Review & Mentoring"
    ]
  },
  // {
  //   category: "Vibe Coding",
  //   items: ["[put your skills here]"]
  // }
];
export default function Skills() {
  return <section id="skills" className="section-padding">
      <div className="container">
        <div className="animate-on-scroll">
          <h2 className="heading">🔨 Skills</h2>
          <p className="subheading">Technical expertise developed through academic education, hobby projects and professional experience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {skills.map(skill => <Card key={skill.category} className="p-6 card-hover animate-on-scroll">
              <h3 className="font-medium text-lg mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map(item => <span key={item} className="px-3 py-1 bg-secondary text-sm rounded-full">
                    {item}
                  </span>)}
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
}