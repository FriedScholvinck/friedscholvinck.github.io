import { Card } from "@/components/ui/card";
const skills = [{
  category: "Python",
  items: ["Advanced Python", "React", "TypeScript", "FastAPI", "Pydantic", "Poetry", "uv", "ruff"]
},  {
  category: "Machine Learning & AI",
  items: ["PyTorch", "Transformers", "Scikit-learn", "Deep Learning", "Computer Vision", "Pandas", "OpenAI"]
}, {
  category: "Engineering",
  items: ["Polars", "PySpark", "AWS", "Azure", "GCP", "Databricks"]
}, {
  category: "DevOps & Infrastructure",
  items: ["Docker", "Kubernetes", "Terraform", "CI/CD", "Git"]
}, {
  category: "Development Tools",
  items: ["bash", "vim", "raycast", "cursor"]
}];
export default function Skills() {
  return <section id="skills" className="section-padding">
      <div className="container">
        <div className="animate-on-scroll">
          <h2 className="heading">🔨 Skills </h2>
          <p className="subheading">Technical expertise developed through professional experience and academic research.</p>
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