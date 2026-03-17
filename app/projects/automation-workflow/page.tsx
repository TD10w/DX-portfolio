import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Database,
  LineChart,
  Mail,
  MessageSquareText,
  PenSquare,
  ScanSearch,
  Settings2,
  Sparkles,
  Target,
} from "lucide-react"
import { getProjectBySlug } from "@/lib/projects"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import workflow1 from "@/img/port-workflow-1.png"
import workflow2 from "@/img/workflow-2.png"

const tags = ["AI Product", "Growth", "LeadOps", "Applied AI"]

const workflowSteps = [
  "广告数据同步",
  "AI分析与报告生成",
  "Leads收集",
  "AI分类与内容生成",
  "自动跟进",
  "完成预约与反馈",
]

const aiRoles = [
  {
    icon: <BarChart3 className="h-5 w-5 text-sky-600" />,
    title: "信息结构化层",
    desc: "将广告数据与用户输入转化为可分析、可追踪的信息，建立统一理解基础。",
  },
  {
    icon: <ScanSearch className="h-5 w-5 text-emerald-600" />,
    title: "决策辅助层",
    desc: "提供优化建议与优先级判断，帮助团队更快决定该优化什么、先跟进谁。",
  },
  {
    icon: <PenSquare className="h-5 w-5 text-amber-600" />,
    title: "执行加速层",
    desc: "自动生成内容与跟进行动，把判断快速转化为日报、回复与后续执行。",
  },
  {
    icon: <Target className="h-5 w-5 text-rose-600" />,
    title: "反馈优化层",
    desc: "基于结果持续优化策略与流程，让广告优化和转化动作形成可复用闭环。",
  },
]

const values = [
  "降低数据分析时间",
  "提升响应速度",
  "提高转化效率",
  "减少无效广告支出",
]

const learnings = [
  "AI 的价值不在于单点功能，而在于嵌入 workflow。",
  "自动化效率需要和可控性一起设计，才能在真实场景中落地。",
  "产品设计应围绕闭环，而不是只优化某一个局部动作。",
]

export default function AutomationWorkflowPage() {
  const project = getProjectBySlug("automation-workflow")

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#portfolio"
            scroll={false}
            className="group mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>

          <div className="mb-12 overflow-hidden rounded-[2rem] border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="grid gap-10 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-foreground/10 ${project.color}`}>
                    {project.icon}
                  </div>
                  <span className="rounded-full border border-foreground/10 bg-secondary px-4 py-1.5 text-xs font-bold text-secondary-foreground">
                    AI Product Case Study
                  </span>
                </div>

                <div className="space-y-3">
                  <h1 className="font-serif text-4xl text-foreground md:text-5xl">
                    AI增长运营助手
                  </h1>
                  <p className="text-lg font-medium text-foreground/80 md:text-xl">
                    基于AI的广告数据分析与线索转化闭环系统
                  </p>
                  <div className="max-w-3xl rounded-2xl border border-foreground/10 bg-secondary/60 px-4 py-3 text-sm font-medium leading-7 text-foreground/80">
                    这是一个以增长闭环为核心设计的 AI 系统，而不是单点自动化工具。
                  </div>
                  <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                    一个面向中小企业的 AI 增长系统，通过自动化广告分析与线索跟进，提升投放效率与转化率。
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-foreground/10 bg-background px-3 py-1.5 text-sm font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                <InsightStat
                  label="系统目标"
                  value="让广告优化与线索转化形成一个可持续增长闭环"
                />
                <InsightStat
                  label="核心能力"
                  value="广告洞察、Lead 识别、个性化跟进、预约推进"
                />
                <InsightStat
                  label="设计方式"
                  value="AI + 自动化 + 规则控制 的混合架构"
                />
              </div>
            </div>

            <div className="border-t border-foreground/10 bg-[#fffdf6] px-6 py-8 md:px-10">
              <GrowthLoopDiagram />
            </div>
          </div>

          <div className="grid gap-8">
            <SectionCard
              title="项目背景"
              eyebrow="Problem"
              intro="中小企业在广告增长中面临的核心问题并不是“缺数据”，而是增长链路中的关键信息没有被有效理解，也没有被稳定转化。"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <ProblemCard
                  index="01"
                  title="数据存在但不可用"
                  desc="广告平台数据分散，缺乏结构化分析与统一视角，无法支持预算、创意与投放策略的快速决策。"
                />
                <ProblemCard
                  index="02"
                  title="线索存在但未被转化"
                  desc="Leads 获取后依赖人工跟进，响应慢、质量不稳定，高意向用户无法被及时推进，最终导致转化流失。"
                />
              </div>
              <div className="mt-6 rounded-2xl border border-foreground/10 bg-secondary/60 px-5 py-4 text-sm leading-7 text-foreground/80">
                增长链路断裂在“数据理解”与“线索转化”两个关键节点。
              </div>
            </SectionCard>

            <SectionCard
              title="解决方案"
              eyebrow="Solution"
              intro="我将这个项目重新定义为一个增长系统，而不是单一的 automation demo。系统围绕“数据理解 + 线索转化”拆成两个互相协同的模块。"
            >
              <div className="grid gap-8 lg:grid-cols-2">
                <ModuleCard
                  icon={<LineChart className="h-5 w-5 text-sky-600" />}
                  title="广告数据智能分析"
                  subtitle="Ad Intelligence"
                  points={[
                    "自动收集广告数据",
                    "LLM 分析表现与趋势",
                    "自动生成日报并发送",
                    "帮助快速决策",
                  ]}
                  image={workflow1}
                  imageAlt="广告数据智能分析工作流"
                />
                <ModuleCard
                  icon={<MessageSquareText className="h-5 w-5 text-emerald-600" />}
                  title="AI线索跟进与转化"
                  subtitle="LeadOps"
                  points={[
                    "自动接收 leads",
                    "分类与优先级判断",
                    "生成个性化 follow-up",
                    "自动发送与持续跟进",
                    "推动预约转化",
                  ]}
                  image={workflow2}
                  imageAlt="AI线索跟进与转化工作流"
                />
              </div>
            </SectionCard>

            <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
              <SectionCard
                title="核心流程"
                eyebrow="Workflow"
                intro="系统不是按工具拆分，而是按增长任务顺序组织。"
              >
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {workflowSteps.map((step, index) => (
                    <StepCard key={step} index={index + 1} title={step} />
                  ))}
                </div>
              </SectionCard>

              <SectionCard
                title="AI能力层"
                eyebrow="AI Capability Layer"
                intro="在这个系统里，AI 不是一个孤立功能，而是一层嵌入业务流程的能力，用来处理规则难以覆盖的复杂信息。"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  {aiRoles.map((role) => (
                    <IconCard key={role.title} icon={role.icon} title={role.title} desc={role.desc} />
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-dashed border-foreground/20 bg-background px-5 py-4 text-sm leading-7 text-muted-foreground">
                  AI 在这里的价值，不是替代所有流程，而是补上“理解上下文、辅助判断、加速执行、持续优化”这几个传统自动化最弱的环节。
                </div>
              </SectionCard>
            </div>

            <SectionCard
              title="为什么采用这一系统结构？"
              eyebrow="Product Decision"
              intro="相比于只做广告报表，或只做自动回复工具，这个系统更直接围绕增长结果本身来设计。"
            >
              <div className="grid gap-4 md:grid-cols-3">
                <DecisionCard
                  title="打通分析与跟进"
                  desc="将广告数据分析与线索跟进打通，避免信息断层。"
                />
                <DecisionCard
                  title="让 AI 进入中间环节"
                  desc="将 AI 嵌入流程中间环节，而不是仅做单点生成。"
                />
                <DecisionCard
                  title="优先解决关键瓶颈"
                  desc="优先解决“数据理解 + 转化执行”两个最直接影响业务结果的问题。"
                />
              </div>
              <div className="mt-6 rounded-2xl border border-foreground/10 bg-secondary/60 px-5 py-4 text-sm leading-7 text-foreground/80">
                从而最大化对实际业务结果的影响，包括广告 ROI 与最终转化表现。
              </div>
            </SectionCard>

            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <SectionCard
                title="系统设计"
                eyebrow="System Design"
                intro="整套系统用轻量工具完成编排，但在职责分层上保持清晰。"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <ArchitectureCard
                    icon={<Database className="h-5 w-5 text-slate-700" />}
                    title="数据层"
                    desc="Ads / Sheets"
                  />
                  <ArchitectureCard
                    icon={<Settings2 className="h-5 w-5 text-sky-600" />}
                    title="自动化"
                    desc="Zapier"
                  />
                  <ArchitectureCard
                    icon={<BrainCircuit className="h-5 w-5 text-amber-600" />}
                    title="AI"
                    desc="LLM"
                  />
                  <ArchitectureCard
                    icon={<Mail className="h-5 w-5 text-emerald-600" />}
                    title="输出"
                    desc="Email / Follow-up"
                  />
                </div>
                <div className="mt-6 rounded-2xl border border-foreground/10 bg-secondary/50 px-5 py-4 text-sm leading-7 text-foreground/80">
                  系统采用 AI + 自动化 + 规则控制 的混合架构，在效率、可解释性与可控性之间取得平衡。
                </div>
              </SectionCard>

              <SectionCard
                title="关键设计权衡"
                eyebrow="Trade-offs"
                intro="产品落地时，比“能不能自动化”更重要的是“自动到什么程度最合理”。"
              >
                <div className="grid gap-4">
                  <TradeoffCard
                    index="01"
                    title="不完全自动发送"
                    desc="保留关键节点的人工确认，降低误发与策略偏差风险。"
                  />
                  <TradeoffCard
                    index="02"
                    title="使用 AI 而非纯规则"
                    desc="广告表现解释、线索意图识别与回复内容生成都包含复杂上下文，AI 更适合处理。"
                  />
                  <TradeoffCard
                    index="03"
                    title="构建闭环而非单点工具"
                    desc="把获客分析、线索跟进与预约反馈连接起来，才能真正提升整体增长效率。"
                  />
                </div>
              </SectionCard>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <SectionCard
                title="项目价值"
                eyebrow="Impact"
                intro="这个系统的价值不只是节省时间，而是让增长动作更连续、更稳定。"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  {values.map((value) => (
                    <ValueCard key={value} label={value} />
                  ))}
                </div>
              </SectionCard>

              <SectionCard
                title="项目收获"
                eyebrow="Learning"
                intro="这次重构让我更明确：AI 产品的说服力，来自完整的系统思考。"
              >
                <div className="grid gap-4">
                  {learnings.map((item) => (
                    <LearningCard key={item} text={item} />
                  ))}
                </div>
              </SectionCard>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function GrowthLoopDiagram() {
  return (
    <div className="rounded-[1.5rem] border border-foreground/10 bg-card p-5 md:p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Growth Loop
          </p>
          <h2 className="mt-2 font-serif text-2xl text-foreground md:text-3xl">
            增长闭环图
          </h2>
        </div>
      </div>

      <div className="space-y-4">
        <FlowLane
          label="获客系统"
          enLabel="Acquisition System"
          tone="blue"
          items={[
            { title: "广告数据", desc: "多渠道数据同步" },
            { title: "AI分析", desc: "趋势总结与洞察" },
            { title: "广告优化", desc: "支持预算与创意调整" },
          ]}
        />

        <div className="flex justify-center">
          <div className="w-full max-w-3xl rounded-2xl border border-dashed border-foreground/20 bg-background px-4 py-4">
            <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Shared Layer
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">统一数据层 / 数据回流</p>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <ArrowRight className="h-3.5 w-3.5 rotate-90" />
                连接获客与转化系统
              </div>
            </div>
          </div>
        </div>

        <FlowLane
          label="转化系统"
          enLabel="Conversion System"
          tone="green"
          items={[
            { title: "Leads", desc: "表单与表格统一收集" },
            { title: "AI跟进", desc: "分类、生成、持续推进" },
            { title: "预约转化", desc: "完成预约与状态沉淀" },
          ]}
        />

        <div className="rounded-2xl border border-foreground/10 bg-secondary/60 p-4 md:p-5">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Closed Loop
              </p>
              <p className="mt-1 text-sm leading-7 text-foreground/80">
                预约结果、回复率与线索画像会持续回流，帮助系统重新理解目标受众，并反向优化广告策略与后续转化动作。
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
              <div className="rounded-xl border border-foreground/10 bg-card px-4 py-2 text-sm font-medium text-foreground">
                预约转化
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <div className="rounded-full bg-highlight-blue px-4 py-2 text-sm font-semibold text-primary-foreground">
                反馈回广告优化
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FlowLane({
  label,
  enLabel,
  items,
  tone,
}: {
  label: string
  enLabel: string
  items: { title: string; desc: string }[]
  tone: "blue" | "green"
}) {
  const accent =
    tone === "blue"
      ? "bg-sky-100 text-sky-700 border-sky-200"
      : "bg-emerald-100 text-emerald-700 border-emerald-200"

  return (
    <div className="rounded-[1.25rem] border border-foreground/10 bg-background p-4 md:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className={`rounded-full border px-3 py-1 text-xs font-bold ${accent}`}>{label}</span>
          <span className="text-xs text-muted-foreground">{enLabel}</span>
        </div>
        <span className="text-xs text-muted-foreground">系统层视角</span>
      </div>

      <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
        {items.map((item, index) => (
          <FlowRowItem key={item.title} title={item.title} desc={item.desc} showArrow={index < items.length - 1} />
        ))}
      </div>
    </div>
  )
}

function FlowRowItem({
  title,
  desc,
  showArrow,
}: {
  title: string
  desc: string
  showArrow: boolean
}) {
  return (
    <>
      <div className="rounded-2xl border border-foreground/10 bg-card p-4">
        <p className="text-base font-bold text-foreground">{title}</p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
      </div>
      {showArrow ? (
        <div className="hidden items-center justify-center md:flex">
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
        </div>
      ) : null}
    </>
  )
}

function SectionCard({
  title,
  eyebrow,
  intro,
  children,
}: {
  title: string
  eyebrow: string
  intro: string
  children: ReactNode
}) {
  return (
    <section className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="mb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </p>
        <h2 className="font-serif text-2xl text-foreground md:text-[2rem]">{title}</h2>
        <p className="mt-3 max-w-3xl text-base leading-8 text-muted-foreground">{intro}</p>
      </div>
      {children}
    </section>
  )
}

function ProblemCard({
  index,
  title,
  desc,
}: {
  index: string
  title: string
  desc: string
}) {
  return (
    <div className="rounded-2xl border border-foreground/10 bg-background p-5">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{index}</p>
      <h3 className="mt-3 text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{desc}</p>
    </div>
  )
}

function DecisionCard({
  title,
  desc,
}: {
  title: string
  desc: string
}) {
  return (
    <div className="rounded-2xl border border-foreground/10 bg-background p-5">
      <h3 className="text-base font-bold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{desc}</p>
    </div>
  )
}

function ModuleCard({
  icon,
  title,
  subtitle,
  points,
  image,
  imageAlt,
}: {
  icon: ReactNode
  title: string
  subtitle: string
  points: string[]
  image: typeof workflow1
  imageAlt: string
}) {
  return (
    <Card className="rounded-[1.5rem] border-foreground/10 bg-background shadow-none">
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-card p-3">{icon}</div>
          <div>
            <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{subtitle}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="rounded-2xl border border-foreground/10 bg-card p-4">
          <p className="mb-3 text-sm font-medium text-foreground/80">
            该模块的系统执行流程如下：
          </p>
          <Image
            src={image}
            alt={imageAlt}
            className="w-full rounded-xl border border-foreground/5 object-contain"
          />
        </div>
      </CardContent>
    </Card>
  )
}

function StepCard({ index, title }: { index: number; title: string }) {
  return (
    <div className="rounded-2xl border border-foreground/10 bg-background p-5">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">
        {index}
      </div>
      <p className="text-base font-semibold text-foreground">{title}</p>
    </div>
  )
}

function IconCard({
  icon,
  title,
  desc,
}: {
  icon: ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="rounded-2xl border border-foreground/10 bg-background p-5">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-card">
        {icon}
      </div>
      <h3 className="text-base font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">{desc}</p>
    </div>
  )
}

function ArchitectureCard({
  icon,
  title,
  desc,
}: {
  icon: ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="rounded-2xl border border-foreground/10 bg-background p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl bg-card p-3">{icon}</div>
        <h3 className="font-bold text-foreground">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  )
}

function TradeoffCard({
  index,
  title,
  desc,
}: {
  index: string
  title: string
  desc: string
}) {
  return (
    <div className="rounded-2xl border border-foreground/10 bg-background p-5">
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-foreground px-3 py-1 text-xs font-bold text-background">
          {index}
        </div>
        <div>
          <h3 className="text-base font-bold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{desc}</p>
        </div>
      </div>
    </div>
  )
}

function ValueCard({ label }: { label: string }) {
  return (
    <div className="rounded-2xl border border-foreground/10 bg-background p-5">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-highlight-blue text-primary-foreground">
        <Sparkles className="h-5 w-5" />
      </div>
      <p className="text-base font-semibold text-foreground">{label}</p>
    </div>
  )
}

function LearningCard({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-foreground/10 bg-background p-5">
      <div className="flex items-start gap-4">
        <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
          <BrainCircuit className="h-4 w-4 text-foreground" />
        </div>
        <p className="text-sm leading-7 text-muted-foreground">{text}</p>
      </div>
    </div>
  )
}

function InsightStat({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl border border-foreground/10 bg-background p-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-3 text-sm leading-7 text-foreground/80">{value}</p>
    </div>
  )
}
