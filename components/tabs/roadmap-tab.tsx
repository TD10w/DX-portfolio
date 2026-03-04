import { Circle } from "lucide-react"

const milestones = [
  {
    date: "2025 - Present",
    title: "AI Product Builder",
    desc: "Building autonomous agent products, exploring multi-agent systems, and shipping AI-native tools.",
    color: "bg-blue-500",
  },
  {
    date: "2023 - 2024",
    title: "Senior PM, AI Growth",
    desc: "Led product and growth for AI-powered features. Drove user acquisition loops and retention experiments.",
    color: "bg-amber-500",
  },
  {
    date: "2021 - 2023",
    title: "Product Manager",
    desc: "Owned end-to-end product lifecycle for B2B SaaS. Shipped core features and led cross-functional teams.",
    color: "bg-pink-500",
  },
  {
    date: "2019 - 2021",
    title: "Associate PM / Intern",
    desc: "First steps in product. Learned to run sprints, conduct user research, and write specs that ship.",
    color: "bg-emerald-500",
  },
]

export function RoadmapTab() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {milestones.map((m, i) => (
        <div
          key={i}
          className="rounded-2xl border-2 border-primary-foreground/20 bg-card text-foreground overflow-hidden"
        >
          <div className="flex items-center justify-between px-8 py-5 border-b border-primary-foreground/10">
            <span className="font-sans text-sm font-medium text-muted-foreground">{m.date}</span>
            <div className={`w-8 h-8 rounded-full ${m.color} flex items-center justify-center`}>
              <Circle className="w-3 h-3 text-card fill-card" />
            </div>
          </div>
          <div className="px-8 py-6">
            <h3 className="font-sans font-bold text-lg text-foreground mb-2">{m.title}</h3>
            <p className="font-sans text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
