import { Card } from "@/components/ui/card";
const skills = [
  {
    category: "Software Development",
    items: [
      "Advanced Python",
      "FastAPI",
      "PyTorch", "Transformers", 
      "LangGraph", "Smolagents",
      "Polars", "Databricks",
      "Streamlit", "Marimo",
      "AWS", "Azure", "GCP",
      "Docker",
      "Github", "Gitlab", "Dokploy", "Vercel", "Netlify",
      "Supabase", "Opensearch"
    ]
  },
  {
    category: "Consulting",
    items: [
      "AI Strategy",
      "Project Planning & Management",
      "Software Architecture",
      "MLOps Best Practices",
      "Technical Communication",
      "API Design",
    ]
  },
  // {
  //   category: "Vibe Coding",
  //   items: [""]
  // }
];
export default function Skills() {
  return <section id="skills" className="section-padding">
      <div className="container">
        <div className="animate-on-scroll">
          <h2 className="heading">🔨 Skills</h2>
          <p className="subheading">Technical expertise developed through academic education, hobby projects and professional experience.</p>
        </div>
        
        <div className="columns-1 md:columns-2 gap-6 mt-12 space-y-6">
          {skills.map(skill => <Card key={skill.category} className="p-6 card-hover animate-on-scroll" style={{breakInside: 'avoid'}}>
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