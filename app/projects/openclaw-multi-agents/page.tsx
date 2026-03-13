"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Bot, Search, Zap, Briefcase, Brain, Shield, Clock, LayoutGrid, TrendingUp } from "lucide-react"
import { getProjectBySlug } from "@/lib/projects"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { ReactNode } from "react"

export default function OpenClawPage() {
  const project = getProjectBySlug("openclaw-multi-agents")

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
            scroll={false}
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
                个人 AI Agent 系统
              </h1>
            </div>

            <h2 className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
              基于 OpenClaw 构建的多 Agent AI 系统，用于持续处理信息、监控变化、辅助决策，并执行部分自动化工作流。
            </h2>
          </div>

          {/* 1. SYSTEM INTRO */}
          <div className="bg-card border-2 border-foreground rounded-2xl p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-16">
            <h2 className="font-serif text-2xl text-foreground mb-6">系统介绍</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground font-sans">
              <p className="mb-4">
                我基于 OpenClaw 搭建了一套个人 AI Agent 系统，用来处理信息流、监控重要变化、辅助决策，并自动执行部分经过我批准的工作流程。
              </p>
              <p className="font-medium text-foreground">
                它不是一个单一聊天机器人，而是一套围绕 <span className="bg-highlight-blue/20 px-1 rounded">信息处理 → 分析判断 → 执行输出</span> 设计的个人 AI 操作系统。
              </p>
            </div>
          </div>

          {/* 2. SYSTEM ARCHITECTURE */}
          <div className="mb-20">
            <h2 className="font-serif text-2xl text-foreground mb-10 text-center">系统架构</h2>
            
            <div className="relative bg-[#F9F9F9] dark:bg-card border-2 border-dashed border-foreground/20 rounded-3xl p-8 md:p-12">
              {/* Architecture Visualization */}
              <div className="flex flex-col items-center gap-8 max-w-3xl mx-auto">
                
                {/* USER */}
                <div className="flex flex-col items-center gap-2">
                  <div className="px-6 py-2 bg-foreground text-background rounded-full font-bold font-mono text-sm">
                    USER
                  </div>
                  <div className="h-8 w-0.5 bg-foreground/20"></div>
                  <div className="w-3 h-3 rounded-full bg-foreground/20"></div>
                </div>

                {/* LOKI - Main Agent */}
                <div className="w-full max-w-md bg-white dark:bg-secondary border-2 border-foreground rounded-2xl p-6 shadow-[4px_4px_0px_0px_#41BBD9] relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#41BBD9] flex items-center justify-center text-white">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Loki</h3>
                      <p className="text-xs text-muted-foreground font-mono">主控 Agent</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">负责统筹全局、任务规划与分发</p>
                </div>

                {/* Connecting Lines */}
                <div className="relative w-full h-12">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-0.5 bg-foreground/20"></div>
                  <div className="absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-foreground/20"></div>
                  <div className="absolute top-1/2 left-[15%] h-6 w-0.5 bg-foreground/20"></div>
                  <div className="absolute top-1/2 right-[15%] h-6 w-0.5 bg-foreground/20"></div>
                </div>

                {/* SUB AGENTS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  {/* LeBron */}
                  <div className="bg-white dark:bg-secondary border-2 border-foreground/10 rounded-xl p-5 hover:border-foreground hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                        <Search className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold">LeBron</h4>
                    </div>
                    <p className="text-xs font-mono text-muted-foreground mb-2">研究与信息抓取</p>
                    <p className="text-sm text-foreground/80">负责外部信息收集、趋势观察和机会发现</p>
                  </div>

                  {/* Dexter */}
                  <div className="bg-white dark:bg-secondary border-2 border-foreground/10 rounded-xl p-5 hover:border-foreground hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                        <Zap className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold">Dexter</h4>
                    </div>
                    <p className="text-xs font-mono text-muted-foreground mb-2">自动化与工具</p>
                    <p className="text-sm text-foreground/80">负责 workflow、自动化流程和工具支持</p>
                  </div>

                  {/* Ana */}
                  <div className="bg-white dark:bg-secondary border-2 border-foreground/10 rounded-xl p-5 hover:border-foreground hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold">Ana</h4>
                    </div>
                    <p className="text-xs font-mono text-muted-foreground mb-2">岗位追踪与简历优化</p>
                    <p className="text-sm text-foreground/80">负责职位分析、JD 拆解和求职辅助</p>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="w-full max-w-2xl mt-4 border-t-2 border-dashed border-foreground/10 pt-6 text-center">
                  <p className="text-sm font-mono text-muted-foreground mb-2">OUTPUT</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <span className="px-3 py-1 bg-foreground/5 rounded-md text-sm font-medium">📝 总结报告</span>
                    <span className="px-3 py-1 bg-foreground/5 rounded-md text-sm font-medium">🔔 实时提醒</span>
                    <span className="px-3 py-1 bg-foreground/5 rounded-md text-sm font-medium">⚡️ 任务执行</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* 3. USE CASES */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="font-serif text-2xl text-foreground">这个系统目前支持的场景</h2>
              <div className="h-[2px] flex-1 bg-foreground/5 rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <UseCaseCard 
                icon={<Brain className="w-5 h-5 text-purple-600" />}
                title="AI Newsletter 2.0"
                desc="自动聚合 AI / 科技信息源，过滤噪音，生成简洁的每日信息摘要。"
              />
              <UseCaseCard 
                icon={<Bot className="w-5 h-5 text-blue-600" />}
                title="实时事件监控"
                desc="监控关键账号或平台（如 X），在出现重要动态时第一时间提醒。"
              />
              <UseCaseCard 
                icon={<Search className="w-5 h-5 text-orange-600" />}
                title="LeBron：研究与机会发现"
                desc="抓取外部信息、观察趋势、发现潜在市场或内容机会。"
              />
               <UseCaseCard 
                icon={<Briefcase className="w-5 h-5 text-pink-600" />}
                title="Ana：求职辅助"
                desc="追踪岗位、分析 JD 要求，并帮助优化简历。"
              />
              <UseCaseCard 
                icon={<Zap className="w-5 h-5 text-yellow-600" />}
                title="邮件管理 Agent"
                desc="自动汇总重要邮件，生成回复草稿，并在我批准后发送。"
              />
              <UseCaseCard 
                icon={<TrendingUp className="w-5 h-5 text-emerald-600" />}
                title="投资组合跟踪"
                desc="监控市场动态和投资组合变化，并生成关键变化提醒。"
              />
            </div>
          </div>



        </div>
      </section>
      
      <Footer />
    </main>
  )
}

function UseCaseCard({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
  return (
    <div className="group bg-card border-2 border-foreground/5 hover:border-foreground/20 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="p-2.5 bg-secondary rounded-lg shrink-0 group-hover:bg-foreground/5 transition-colors">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  )
}
