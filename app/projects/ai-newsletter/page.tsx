import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Brain, TrendingUp, Globe, Bot, Sprout } from "lucide-react"
import { getProjectBySlug } from "@/lib/projects"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import workflowVisual from "@/img/AInewsletter.png"

export default function AiNewsletterPage() {
  const project = getProjectBySlug("ai-newsletter")

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          
          {/* HERO SECTION */}
          <div className="mb-16 space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-2xl ${project.color} flex items-center justify-center border-2 border-foreground/10`}>
                {project.icon}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground">
                AI Personal Newsletter
              </h1>
            </div>

            <h2 className="text-xl md:text-2xl font-medium text-foreground">
              一个自动收集、筛选并总结信息的 AI Newsletter 系统
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              每天的信息流非常庞杂：市场数据、国际新闻、AI 技术动态、以及来自不同来源的观点。
              这个项目构建了一个个性化信息摘要系统，通过自动化 workflow 和 LLM，把高价值信息整理成每天的 Newsletter。
            </p>
          </div>

          {/* OVERVIEW SECTION */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm mb-12">
            <h2 className="font-serif text-2xl text-foreground mb-6">项目介绍</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
              <p className="mb-4">
                在信息过载的环境下，问题已经不是“有没有信息”，而是如何快速找到真正重要的信息。
              </p>
              <p>
                这个系统通过自动化 workflow 和 LLM，对信息进行筛选和整理，最终生成一份每日高信号 Newsletter。
              </p>
            </div>
          </div>

          {/* NEWSLETTER STRUCTURE & EXAMPLE OUTPUT COMBINED */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-foreground mb-8">Newsletter 内容结构</h2>
            
            <div className="bg-[#F9F9F9] dark:bg-card border border-stone-300 dark:border-border rounded-xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto relative overflow-hidden">
              {/* Header */}
              <div className="text-center mb-10">
                  <div className="border-b-4 border-stone-800 dark:border-foreground mb-4"></div>
                  <h3 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-foreground font-black mb-4 uppercase tracking-tight">The Daily Insight</h3>
                  <div className="border-y border-stone-400 dark:border-border py-2 flex justify-between items-center text-xs md:text-sm font-serif text-stone-600 dark:text-muted-foreground uppercase tracking-widest">
                      <span>Personal Edition</span>
                      <span>Thursday, March 11, 2026</span>
                      <span>AI Powered</span>
                  </div>
              </div>

              <div className="space-y-8">
                
                {/* Item 1 */}
                <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-stone-200/50 dark:hover:bg-secondary/50 transition-colors">
                    <div className="mt-1 bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg shrink-0">
                        <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-foreground mb-1">Mindset</h4>
                        <p className="text-muted-foreground mb-3">每天的一段引用或短思考，用来帮助调整注意力和心态。</p>
                    </div>
                </div>

                {/* Item 2 with Example */}
                <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-stone-200/50 dark:hover:bg-secondary/50 transition-colors">
                    <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg shrink-0">
                        <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-foreground mb-1">Stock Market Summary</h4>
                        <p className="text-muted-foreground mb-3">总结市场变化，例如 S&P 500、Nasdaq 和行业趋势。以及个人投资组合的持仓与盈亏变化。</p>
                        
                        {/* Example Snippet */}
                        <div className="bg-white dark:bg-card rounded-none p-4 border-l-4 border-blue-400 font-serif italic text-foreground/80 shadow-sm">
                            "S&P 500 fell about 0.5%, while Nasdaq declined more than 1.2%, driven largely by semiconductor weakness."
                        </div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-stone-200/50 dark:hover:bg-secondary/50 transition-colors">
                    <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-2 rounded-lg shrink-0">
                        <Globe className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-foreground mb-1">Global Events</h4>
                        <p className="text-muted-foreground">整理当天重要的国际新闻和宏观事件。</p>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-stone-200/50 dark:hover:bg-secondary/50 transition-colors">
                    <div className="mt-1 bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg shrink-0">
                        <Bot className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-foreground mb-1">AI / Tech</h4>
                        <p className="text-muted-foreground">总结 AI 和科技行业的重要动态。</p>
                    </div>
                </div>

                {/* Item 5 with Example */}
                <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-stone-200/50 dark:hover:bg-secondary/50 transition-colors">
                    <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg shrink-0">
                        <Sprout className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-foreground mb-1">Daily Reflection</h4>
                        <p className="text-muted-foreground mb-3">用一段总结性文字帮助把信息转化为思考。</p>
                        
                         {/* Example Snippet */}
                        <div className="bg-white dark:bg-card rounded-none p-4 border-l-4 border-emerald-400 font-serif italic text-foreground/80 shadow-sm">
                            "Key Signal: Markets remain highly sensitive to inflation data, reinforcing a cautious and selective investment environment."
                        </div>
                    </div>
                </div>

              </div>
            </div>
          </div>

          {/* SYSTEM WORKFLOW SECTION */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-foreground mb-8">系统工作流</h2>
            
            {/* Visual */}
            <div className="rounded-2xl border border-border overflow-hidden mb-8 shadow-sm">
               <Image 
                 src={workflowVisual} 
                 alt="AI Newsletter Workflow System" 
                 className="w-full h-auto"
               />
            </div>
          </div>

          {/* TOOLS & WHY IT MATTERS GRID */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* TOOLS SECTION */}
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-6">技术工具</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "AI Agent",
                  "LLM API",
                  "Yahoo Finance API", 
                  "RSS Feeds", 
                  "Tavily Search API", 
                  "Automation Workflow"
                ].map((tool) => (
                  <span 
                    key={tool} 
                    className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium border border-foreground/5"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* WHY THIS MATTERS SECTION */}
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-6">核心价值</h2>
              <div className="prose dark:prose-invert text-muted-foreground">
                <p className="mb-4 font-medium text-foreground">
                  信息获取已经不是难题。
                </p>
                <p className="mb-4">
                  真正的挑战是如何在海量信息中找到真正重要的信号。
                </p>
                <p className="mb-2">
                  通过自动化和 AI，这个系统可以：
                </p>
                <ul className="space-y-1 list-none pl-0">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    减少信息噪音
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    节省每天的信息整理时间
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    更快理解复杂环境
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    帮助形成更清晰的决策视角
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  )
}
