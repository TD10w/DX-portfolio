import Image from "next/image"
import { User } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left illustration */}
          <div className="flex-shrink-0">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-foreground overflow-hidden bg-highlight-pink shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Image
                src="/images/avatar-illustration.jpg"
                alt="About me illustration"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground text-balance">
              {"关于我，"}
              <span className="inline-block bg-highlight-blue px-3 py-1 rounded-sm text-primary-foreground">
                {"做 AI 产品的人"}
              </span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg font-sans">
              {"A product-minded builder who loves turning messy problems into elegant AI-powered solutions. I think in systems, ship with speed, and obsess over user experience."}
            </p>

            {/* Stats */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded-sm bg-highlight-blue flex-shrink-0" />
                <div>
                  <p className="font-sans font-bold text-foreground">{"5+ years in AI & product"}</p>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                    {"From 0-to-1 product launches to growth experiments across B2B and B2C, always at the frontier of AI."}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded-sm bg-highlight-pink flex-shrink-0" />
                <div>
                  <p className="font-sans font-bold text-foreground">{"10+ shipped products"}</p>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                    {"Agent workflows, AI assistants, growth tools, and more. Every project taught me to build smarter."}
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#tabs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-primary-foreground font-sans font-medium text-sm transition-transform hover:scale-105"
            >
              <User className="w-4 h-4" />
              {"More about me"}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
