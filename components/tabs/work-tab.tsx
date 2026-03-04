import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "AI Customer Agent",
    category: "Agent Product",
    desc: "An autonomous support agent that handles multi-turn conversations, integrates with CRM systems, and resolves tickets end-to-end.",
  },
  {
    title: "Growth Experiment Engine",
    category: "AI Growth",
    desc: "A framework for running rapid product experiments with AI-driven hypothesis generation and automated analysis.",
  },
  {
    title: "Multi-Agent Workflow Builder",
    category: "Agent Platform",
    desc: "A visual orchestration tool for building and deploying multi-agent workflows with human-in-the-loop capabilities.",
  },
  {
    title: "AI Writing Assistant",
    category: "AI Product",
    desc: "Context-aware writing tool with real-time suggestions, tone adjustment, and multi-language support for content teams.",
  },
]

export function WorkTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <div
          key={i}
          className="group rounded-2xl border-2 border-primary-foreground/20 bg-card text-foreground p-8 transition-transform hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full bg-foreground text-primary-foreground text-xs font-sans font-medium">
              {p.category}
            </span>
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <h3 className="font-sans font-bold text-lg text-foreground mb-3">{p.title}</h3>
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </div>
  )
}
