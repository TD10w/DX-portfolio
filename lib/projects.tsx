import { Gamepad2, Settings, Mail, Bot, Globe, Dog } from "lucide-react"
import { ReactNode } from "react"

export interface Project {
  title: string
  desc: string
  topic: string
  tools: string[]
  icon: ReactNode
  color: string
  slug: string
}

export const featuredProjects: Project[] = [
  {
    title: "OpenClaw Multi-Agents",
    desc: "研究 AI Agent 架构，尝试让 AI 执行更复杂的任务。",
    topic: "Agentic AI",
    tools: ["AI Agents", "OpenClaw"],
    icon: <Bot className="w-6 h-6 text-foreground" />,
    color: "bg-orange-100",
    slug: "openclaw-multi-agents",
  },
  {
    title: "Automation Workflow",
    desc: "用 Zapier + Facebook API + LLM + Email 搭建自动化流程，探索企业如何用 AI 和自动化减少重复工作。",
    topic: "Automation",
    tools: ["Workflow Design", "Zapier"],
    icon: <Settings className="w-6 h-6 text-foreground" />,
    color: "bg-blue-100",
    slug: "automation-workflow",
  },
  {
    title: "AI Personal Newsletter",
    desc: "用 n8n 搭建自动化系统，自动收集和生成 AI 内容。",
    topic: "Content AI",
    tools: ["Automation", "n8n"],
    icon: <Mail className="w-6 h-6 text-foreground" />,
    color: "bg-purple-100",
    slug: "ai-newsletter",
  },
  {
    title: "The Goodest Boys",
    desc: "一个围绕宠物的品牌项目，也是我第一次创业尝试。",
    topic: "Startup",
    tools: ["Brand Building", "E-commerce"],
    icon: <Dog className="w-6 h-6 text-foreground" />,
    color: "bg-yellow-100",
    slug: "the-goodest-boys",
  },
]

export const experimentProjects: Project[] = [
  {
    title: "Ssssssnake",
    desc: "一个用 Vibecoding 做的小项目，给贪吃蛇加了一些乐趣。练习用 AI 快速生成和迭代代码。",
    topic: "AI Coding",
    tools: ["Experiment", "Cursor"],
    icon: <Gamepad2 className="w-6 h-6 text-foreground" />,
    color: "bg-emerald-100",
    slug: "ai-snake-game",
  },
  {
    title: "Personal Website",
    desc: "用 AI 工具搭建个人网站，记录项目和探索。",
    topic: "Web Dev",
    tools: ["AI-assisted Dev", "Next.js"],
    icon: <Globe className="w-6 h-6 text-foreground" />,
    color: "bg-pink-100",
    slug: "personal-website",
  },
]

export const allProjects = [...featuredProjects, ...experimentProjects]

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug)
}
