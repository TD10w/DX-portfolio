"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { featuredProjects, experimentProjects, Project } from "@/lib/projects"
import { motion } from "framer-motion"

const RETURN_SCROLL_KEY = "portfolio-return-scroll-y"
const RETURN_PROJECT_KEY = "portfolio-return-project-slug"
const RETURN_HIGHLIGHT_KEY = "portfolio-highlight-project-slug"

export function PortfolioSection() {
  const [highlightedSlug, setHighlightedSlug] = useState<string | null>(null)

  useEffect(() => {
    const slug = window.sessionStorage.getItem(RETURN_HIGHLIGHT_KEY)
    if (!slug) return

    setHighlightedSlug(slug)
    const timeout = window.setTimeout(() => {
      setHighlightedSlug(null)
      window.sessionStorage.removeItem(RETURN_HIGHLIGHT_KEY)
    }, 1800)

    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-20 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
            {"我的"}
            <span className="inline-block bg-highlight-blue px-3 py-1 rounded-sm text-primary-foreground ml-2">
              {"项目"}
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-sans max-w-lg mx-auto">
            {"一些我自己做的小项目和实验"}
          </p>
        </div>

        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-sans font-bold text-2xl text-foreground">Featured Projects</h3>
            <div className="h-[2px] flex-1 bg-foreground/5 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} highlighted={highlightedSlug === p.slug} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-sans font-bold text-2xl text-foreground">Experiments</h3>
            <div className="h-[2px] flex-1 bg-foreground/5 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experimentProjects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} highlighted={highlightedSlug === p.slug} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  highlighted,
}: {
  project: Project
  index: number
  highlighted: boolean
}) {
  const handleProjectClick = () => {
    window.sessionStorage.setItem(RETURN_SCROLL_KEY, String(window.scrollY))
    window.sessionStorage.setItem(RETURN_PROJECT_KEY, project.slug)
  }

  return (
    <Link href={`/projects/${project.slug}`} onClick={handleProjectClick} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{
          y: -8,
          scale: 1.02,
          boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
        }}
        className={`group flex flex-col rounded-2xl border-2 border-foreground bg-card text-foreground p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-full cursor-pointer relative transition-[transform,box-shadow] duration-300 ${
          highlighted ? "portfolio-return-highlight" : ""
        }`}
      >
        <div className="flex items-start justify-between mb-6">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className={`w-12 h-12 rounded-xl ${project.color} flex items-center justify-center border-2 border-foreground/10`}
          >
            {project.icon}
          </motion.div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-sans font-bold border border-foreground/10">
              {project.topic}
            </span>
            <div className="p-2 rounded-full bg-background border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        <h3 className="font-sans font-bold text-xl text-foreground mb-3">{project.title}</h3>
        <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{project.desc}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tools.map((tool: string) => (
            <span
              key={tool}
              className="px-2 py-1 rounded-md bg-foreground/5 text-muted-foreground text-xs font-medium font-mono"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  )
}
