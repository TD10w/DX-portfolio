import { Mail, FolderOpen, MessageCircle } from "lucide-react"
import Image from "next/image"
import { WeChatDialog } from "@/components/wechat-dialog"
import { FloatingShapes } from "@/components/ui/floating-shapes"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center pt-36 pb-12 px-3 bg-[#FFF7E0] overflow-hidden"
    >
      <FloatingShapes />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left text */}
          <div className="flex-1 space-y-8 pl-0 lg:pl-12">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-snug text-foreground text-balance">
              {"我是 "}
              <span className="inline-block -rotate-3 bg-highlight-pink px-3 py-1 rounded-sm text-black">
                {"杜鑫"}
              </span>
              {"，"}
              <br />
              {"希望去探索 "}
              <span className="inline-block rotate-2 bg-highlight-blue px-3 py-1 rounded-sm text-primary-foreground">
                {"AI"}
              </span>
              {"，"}
              <br />
              {"帮助更多的人"}
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl font-sans flex flex-wrap">
              {"前创业者 ｜ 运动爱好者 ｜ 持续成长"}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-foreground text-foreground font-sans font-medium text-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-foreground hover:text-primary-foreground hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <FolderOpen className="w-4 h-4" />
                {"我的项目"}
              </a>
              <WeChatDialog>
                <button
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-primary-foreground font-sans font-medium text-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-background hover:text-foreground hover:border-2 hover:border-foreground hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer border-2 border-transparent"
                >
                  <MessageCircle className="w-4 h-4" />
                  {"联系我"}
                </button>
              </WeChatDialog>
            </div>
          </div>

          {/* Right illustration */}
          <div className="flex-shrink-0">
            <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl border-2 border-foreground overflow-hidden bg-[#f5c542] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:rotate-1">
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
