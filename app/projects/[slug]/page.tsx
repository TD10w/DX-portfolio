import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { getProjectBySlug, allProjects } from "@/lib/projects"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex items-start justify-between mb-8">
              <div className={`w-16 h-16 rounded-2xl ${project.color} flex items-center justify-center border-2 border-foreground/10`}>
                {project.icon}
              </div>
              <span className="px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-sans font-bold border border-foreground/10">
                {project.topic}
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              {project.title}
            </h1>
            
            <p className="font-sans text-xl text-muted-foreground leading-relaxed mb-10">
              {project.desc}
            </p>
            
            <div className="mb-10">
              <h3 className="font-sans font-bold text-lg text-foreground mb-4">Tools Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <span 
                    key={tool} 
                    className="px-3 py-1.5 rounded-md bg-foreground/5 text-muted-foreground text-sm font-medium font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Placeholder for project content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                This is a dedicated page for <strong>{project.title}</strong>. 
                Detailed case study and project demonstration would go here.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
