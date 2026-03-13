import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { getProjectBySlug } from "@/lib/projects"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"
import workflow1 from "@/img/port-workflow-1.png"
import workflow2 from "@/img/workflow-2.png"

export default function AutomationWorkflowPage() {
  const project = getProjectBySlug("automation-workflow")

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
                自动化 Workflow
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl">
              通过 Zapier 连接数据 API 和大模型 API，搭建营销流程自动化系统。
            </p>

            <div className="flex flex-wrap gap-3">
              {["Automation", "AI Workflow", "Zapier", "Marketing"].map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-foreground/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* OVERVIEW SECTION */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm mb-12">
            <h2 className="font-serif text-2xl text-foreground mb-6">Overview</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
              <p className="mb-4">
                这个项目的目标，是把营销流程中一些需要人工反复处理的步骤自动化。
              </p>
              <p className="mb-4">
                例如：
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>广告数据监测</li>
                <li>数据整理</li>
                <li>内容生成</li>
                <li>邮件跟进</li>
              </ul>
              <p className="mb-4">
                这些步骤原本需要人工不断查看、分析和执行。
              </p>
              <p className="mb-4">
                通过 Zapier、Google Sheets 和 LLM，我搭建了一套自动化 workflow，让系统可以自动收集数据、分析表现，并触发后续动作。
              </p>
              <p className="mb-6">
                整个项目主要包含两个 workflow：
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <h3 className="font-bold text-foreground mb-2">Workflow 1：广告数据监测与通知</h3>
                  <p className="text-sm">帮助更快理解 campaign 表现</p>
                </div>
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <h3 className="font-bold text-foreground mb-2">Workflow 2：自动邮件跟进与预约</h3>
                  <p className="text-sm">减少人工 follow-up 的重复劳动</p>
                </div>
              </div>
              <p>
                同时也帮助客户更快获得数据分析结果，加快广告内容迭代和决策制定。
              </p>
            </div>
          </div>

          {/* WORKFLOWS SECTION */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* LEFT CARD - Workflow 1 */}
            <Card className="h-full rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-serif">Workflow 1 — 广告数据监测与通知</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-muted-foreground space-y-4">
                  <p>这个 workflow 用于自动收集和分析广告 campaign 的数据表现。</p>
                  <p>Meta Ads 的数据会自动进入 Google Sheets 进行整理，例如 click-through rate、CPM 等指标。</p>
                  <p>Zapier 会触发 LLM，对这些数据进行分析，并生成总结内容，通过 email 自动发送。</p>
                  <p>这样可以在不需要人工持续查看广告后台的情况下，实时获得广告表现的反馈。</p>
                  <p>这些分析结果可以帮助团队更快地判断广告内容的效果，并更快做出决策，例如：</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>是否继续放大当前广告</li>
                    <li>是否需要调整创意内容</li>
                    <li>或及时停止表现不佳的广告</li>
                  </ul>
                  <p>从而加快整个广告优化和内容迭代的节奏。</p>
                </div>

                <div className="bg-secondary/30 p-4 rounded-lg border border-border/50">
                  <Image 
                    src={workflow1} 
                    alt="Workflow 1: 广告数据监测与通知" 
                    className="w-full h-auto rounded-lg object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            {/* RIGHT CARD - Workflow 2 */}
            <Card className="h-full rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-serif">Workflow 2 — 自动邮件跟进与预约</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-muted-foreground space-y-4">
                  <p>第二个 workflow 用于自动跟进来自广告的 leads。</p>
                  <p>当新的 leads 进入 Google Sheets 后，Zapier 会触发 workflow。</p>
                  <p>LLM 会先对 leads 进行分类，然后生成对应的邮件内容，并自动发送 follow-up email。</p>
                  <p>系统会持续跟进用户状态，直到完成预约。</p>
                </div>

                <div className="bg-secondary/30 p-4 rounded-lg border border-border/50">
                  <Image 
                    src={workflow2} 
                    alt="Workflow 2: 自动邮件跟进与预约" 
                    className="w-full h-auto rounded-lg object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* PROJECT INSIGHTS SECTION */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-6">项目收获</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
              <p className="mb-4">
                很多营销流程中的重复性工作，其实可以通过设计 workflow 来自动化。
              </p>
              <p className="mb-4">
                通过 Zapier、Google Sheets 和 LLM，可以用比较轻量的工具搭建出一套可用的自动化系统。
              </p>
              <p className="mb-6">
                这些 workflow 是根据真实客户需求设计的，在实际使用中：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>减少了人工重复操作</li>
                <li>提升了团队效率</li>
                <li>缩短了广告优化和决策周期</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  )
}
