import { Target, Sparkles, Briefcase } from "lucide-react"

const directions = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "AI 产品经理",
    desc: "Defining product vision, roadmap, and UX for AI-native tools. From LLMs to agent systems.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "AI 增长",
    desc: "Growth strategy powered by data, experimentation, and intelligent distribution loops.",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "Agent 产品方向",
    desc: "Building and shipping autonomous agent products that solve real-world problems end to end.",
  },
]

export function WhatIWantSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
            {"我在寻找的 "}
            <span className="inline-block bg-highlight-pink px-3 py-1 rounded-sm text-primary-foreground">
              {"机会"}
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-sans max-w-2xl mx-auto">
            {"希望在这些方向里，负责从 0-1 到增长的完整 AI 产品周期。"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {directions.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border-2 border-foreground bg-card p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 text-foreground">
                {d.icon}
              </div>
              <h3 className="font-sans font-bold text-xl text-foreground mb-3">{d.title}</h3>
              <p className="font-sans text-muted-foreground leading-relaxed text-sm">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
