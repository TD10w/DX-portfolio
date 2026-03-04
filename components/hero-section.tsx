import { Mail, FolderOpen } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-16 px-3"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left text */}
          <div className="flex-1 space-y-8">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground text-balance">
              {"我是 "}
              <span className="inline-block bg-highlight-pink px-3 py-1 rounded-sm text-primary-foreground">
                {"DX"}
              </span>
              {"，"}
              <br />
              {"希望去探索 "}
              <span className="inline-block bg-highlight-blue px-3 py-1 rounded-sm text-primary-foreground">
                {"AI"}
              </span>
              {"，帮助更多的人"}
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg font-sans">
              {"专注 AI 产品与增长，用数据和用户反馈驱动每一次版本迭代。"}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-primary-foreground font-sans font-medium text-sm transition-transform hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                {"下载简历"}
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-foreground text-foreground font-sans font-medium text-sm transition-transform hover:scale-105"
              >
                <FolderOpen className="w-4 h-4" />
                {"联系我"}
              </a>
            </div>
          </div>

          {/* Right illustration */}
          <div className="flex-shrink-0">
            <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl border-2 border-foreground overflow-hidden bg-[#f5c542] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <Image
                src="/images/profile.png"
                alt="Profile illustration"
                width={320}
                height={384}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
