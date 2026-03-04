import { Bot, Globe, BookOpen } from "lucide-react"

const items = [
  {
    icon: <Bot className="w-5 h-5" />,
    title: "Building Agents",
    desc: "Shipping autonomous workflows that tackle real tasks. Currently exploring multi-agent orchestration.",
    tag: "Agents",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "This Portfolio",
    desc: "Designing and building this personal site as a living document of my thinking and craft.",
    tag: "Portfolio",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Learning in Public",
    desc: "Writing and sharing about AI product patterns, prompt engineering, and agent architectures.",
    tag: "Learning",
  },
]

export function NowSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
            {"我在做什么 "}
            <span className="inline-block bg-highlight-blue px-3 py-1 rounded-sm text-card-foreground">
              {"现在"}
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-sans max-w-2xl mx-auto">
            {"这里是我当前投入精力的几个核心项目。"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border-2 border-foreground bg-card p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground">
                  {item.icon}
                </div>
                <span className="px-3 py-1 rounded-full bg-foreground text-primary-foreground text-xs font-sans font-medium">
                  {item.tag}
                </span>
              </div>
              <h3 className="font-sans font-bold text-xl text-foreground mb-3">{item.title}</h3>
              <p className="font-sans text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
