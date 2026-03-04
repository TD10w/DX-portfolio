import { Mail, Github, Linkedin, Twitter } from "lucide-react"

const socials = [
  { label: "Email", href: "mailto:hello@example.com", icon: <Mail className="w-5 h-5" /> },
  { label: "GitHub", href: "https://github.com", icon: <Github className="w-5 h-5" /> },
  { label: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin className="w-5 h-5" /> },
  { label: "Twitter / X", href: "https://twitter.com", icon: <Twitter className="w-5 h-5" /> },
]

export function ContactTab() {
  return (
    <div className="max-w-2xl">
      <div className="rounded-2xl border-2 border-primary-foreground/20 bg-card text-foreground p-10">
        <h3 className="font-serif text-3xl text-foreground mb-4">{"Let's work together"}</h3>
        <p className="font-sans text-muted-foreground leading-relaxed mb-8">
          {"Whether you have a role in mind or just want to chat about AI products, agents, or growth — I'd love to hear from you. Drop me a line below."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-4 rounded-xl border-2 border-foreground/10 bg-secondary text-foreground font-sans text-sm font-medium transition-all hover:border-foreground hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              {s.icon}
              {s.label}
            </a>
          ))}
        </div>

        <div className="mt-8 p-6 rounded-xl bg-highlight-blue/10">
          <p className="font-sans text-sm text-foreground">
            {"Preferred: "}
            <a href="mailto:hello@example.com" className="font-bold underline underline-offset-4">
              {"hello@example.com"}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
