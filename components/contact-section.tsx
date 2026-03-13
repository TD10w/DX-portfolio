"use client"

import { Mail, Linkedin, FileText, MessageCircle } from "lucide-react"
import { WeChatDialog } from "@/components/wechat-dialog"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-foreground text-primary-foreground">
      <div className="mx-auto w-full max-w-4xl px-6">
        <div className="rounded-3xl border-2 border-primary-foreground/20 bg-card text-foreground p-10 md:p-16 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              {"让我们 "}
              <span className="inline-block bg-highlight-pink px-3 py-1 rounded-sm text-primary-foreground -rotate-2">
                {"保持联系"}
              </span>
            </h2>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto">
              {"无论是想聊天、交朋友，还是有兴趣合作，欢迎随时联系我。"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {/* Email */}
            <a
              href="mailto:xduu2@outlook.com"
              className="flex items-center gap-4 px-6 py-4 rounded-xl border-2 border-foreground/10 bg-secondary text-foreground font-sans text-sm font-medium transition-all hover:border-foreground hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>

            {/* WeChat */}
            <WeChatDialog>
              <button className="flex items-center gap-4 px-6 py-4 rounded-xl border-2 border-foreground/10 bg-secondary text-foreground font-sans text-sm font-medium transition-all hover:border-foreground hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 cursor-pointer">
                <MessageCircle className="w-5 h-5" />
                微信
              </button>
            </WeChatDialog>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/xin-du-2024-market"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-4 rounded-xl border-2 border-foreground/10 bg-secondary text-foreground font-sans text-sm font-medium transition-all hover:border-foreground hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-4 px-6 py-4 rounded-xl border-2 border-foreground/10 bg-secondary text-foreground font-sans text-sm font-medium transition-all hover:border-foreground hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
            >
              <FileText className="w-5 h-5" />
              下载简历
            </a>
          </div>

          <div className="mt-10 p-6 rounded-xl bg-highlight-blue/10 text-center">
            <p className="font-sans text-sm text-foreground flex items-center justify-center gap-2">
              {"首选联系方式: "}
              <WeChatDialog>
                <button className="font-bold underline underline-offset-4 decoration-2 decoration-highlight-blue hover:text-highlight-blue transition-colors cursor-pointer flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4" />
                  {"微信"}
                </button>
              </WeChatDialog>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
