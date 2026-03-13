
"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { 
  Bot, Sprout, Users, HelpCircle, Cpu, TrendingUp, Globe, 
  Zap, Box, Flag, Brain, Heart, Activity, Network, Briefcase, 
  MessageCircle, Settings, Moon, Utensils, Search, Atom, Paperclip,
  Sparkles, CheckCircle, Trophy, CircleDollarSign, Egg, Dumbbell,
  CircleCheckBig
} from "lucide-react"
import { StarSticker, FlowerSticker, SparkleSticker } from "@/components/ui/scroll-stickers"

export function WhoAmISection() {
  const sloganChars = Array.from("“努力成为自己想要的样子。”")
  const subSloganChars = Array.from("Becoming who I want to be")
  const sloganRef = useRef<HTMLDivElement>(null)
  const [isSloganInView, setIsSloganInView] = useState(false)
  const isSloganVisible = isSloganInView

  useEffect(() => {
    const target = sloganRef.current
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSloganInView(entry.isIntersecting)
      },
      { threshold: 0.35, rootMargin: "0px 0px -5% 0px" }
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="who-am-i" className="relative py-24 bg-[#FFF7E0] overflow-hidden">
      <StarSticker className="absolute top-20 right-[10%] w-16 h-16 md:w-20 md:h-20 opacity-80" />
      <FlowerSticker className="absolute top-[40%] left-[5%] w-12 h-12 md:w-16 md:h-16 opacity-70" />
      <SparkleSticker className="absolute bottom-[20%] right-[15%] w-10 h-10 md:w-14 md:h-14 opacity-90" />
      
      <div className="mx-auto w-full max-w-7xl px-6 space-y-24 relative z-10">
        
        {/* 1. Title & 2. Introduction */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left illustration */}
          <div className="flex-shrink-0">
            <div className="relative w-[26rem] h-[26rem] md:w-[32rem] md:h-[32rem]">
              <div className="absolute -top-2 -right-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-highlight-blue/70" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-highlight-pink/70" />
              <div className="absolute top-[46%] -right-4 w-5 h-5 rounded-sm bg-[#FFE17A] rotate-12" />
              <div className="relative w-full h-full rotate-[-2deg] transition-transform duration-300 hover:-translate-y-2 hover:rotate-0">
                <Image
                  src="/images/about-card-blend.png"
                  alt="ID card illustration"
                  width={512}
                  height={512}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground text-balance">
              {"我是谁 "}
              <span className="inline-block bg-highlight-blue px-3 py-1 rounded-sm text-primary-foreground font-sans text-3xl md:text-4xl align-middle">
                {"Who I Am"}
              </span>
            </h2>

            <div className="space-y-4 text-lg leading-relaxed font-sans text-muted-foreground">
              <p>
                {"我 2001 年在深圳出生长大，后来去美国读高中和大学。从小就比较好动，喜欢去尝试新事情，在 Virginia 读高中时，我加入了篮球队和摔跤队，也一直保持着运动的习惯。"}
              </p>
              <p>
                {"后来我进入 UC San Diego，主修商业经济学。在大学期间，我开始对产品和创业产生兴趣，也开始感兴趣探索各种各样的事情。"}
              </p>
              <p>
                {"毕业之后，我开始尝试创业，做过一些自己的项目，也在这个过程中学习如何一个人把事情从想法做到落地，并开始使用各种 AI 工具。随着用得越来越多，我也越来越好奇这些工具到底还能做什么，能不能被更有效地利用起来。"}
              </p>
              <p>
                {"2025 年回到中国之后，我开始把更多时间放在探索 AI 上，尝试不同的工具，也做一些小实验项目。现在也在 AI 方向上寻找新的机会。"}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Slogan */}
        <div ref={sloganRef} className="mx-auto w-full max-w-6xl text-center space-y-2 py-1">
          <h2 className="slogan-cn-line text-[clamp(1.15rem,5.2vw,4.2rem)] leading-tight text-foreground">
            <span className="inline-flex flex-nowrap whitespace-nowrap justify-center [perspective:1200px] bg-[#FF6B6B] px-4 md:px-6 py-2 rounded-lg text-white">
              {sloganChars.map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  className={`slogan-char slogan-char-cn ${isSloganVisible ? "slogan-char-animate" : ""}`}
                  style={{
                    animationDelay: `${30 + index * 34}ms`,
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          </h2>
          <p className="font-serif text-[clamp(1rem,2.2vw,1.9rem)] text-black italic tracking-wide">
            <span className="inline-flex flex-nowrap whitespace-nowrap justify-center">
              {subSloganChars.map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  className={`slogan-sub-char ${isSloganVisible ? "slogan-sub-char-animate" : ""}`}
                  style={{ animationDelay: `${760 + index * 30}ms` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </p>
        </div>

        {/* 4. Curiosity Map (Playful Board Design) */}
        <div className="space-y-8 !-mt-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#333] text-balance">
              {"我好奇的领域"}
            </h2>
          </div>

          <div className="w-full">
             <div className="relative z-10 flex flex-col gap-8">
               
               {/* Row 1: Categories - Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch max-w-5xl mx-auto">
                 {/* Tech */}
                <div className="w-full bg-[#FFF7E0] border-[3px] border-[#333] rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
                   <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-[#333]/10 border-dashed">
                     <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-[#333] flex items-center justify-center text-blue-600">
                        <Cpu className="w-6 h-6" />
                     </div>
                     <h3 className="font-sans font-bold text-xl text-black">科技 (Tech)</h3>
                   </div>
                   
                   <div className="flex flex-wrap gap-2.5 content-start flex-1">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#333] rounded-lg text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                       <div className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-sm font-bold">AI</div>
                       AI
                     </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#333] rounded-lg text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                       <Bot className="w-4 h-4" />
                       AI Agents
                     </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#333] rounded-lg text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                       <Zap className="w-4 h-4" />
                       自动化
                     </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#333] rounded-lg text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                       <Sparkles className="w-4 h-4" />
                       新技术
                     </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#333] rounded-lg text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                       <Globe className="w-4 h-4" />
                       互联网产品
                     </span>
                   </div>
                 </div>

                 {/* Growth */}
                <div className="w-full bg-[#FFF7E0] border-[3px] border-[#333] rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(234,179,8,1)] hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
                   <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-[#333]/10 border-dashed">
                     <div className="w-10 h-10 rounded-full bg-yellow-100 border-2 border-[#333] flex items-center justify-center text-yellow-600">
                        <Sprout className="w-6 h-6" />
                     </div>
                     <h3 className="font-sans font-bold text-xl text-black">个人成长</h3>
                   </div>

                   <div className="flex flex-wrap gap-2.5 content-start flex-1">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#333] rounded-lg text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                       <CircleCheckBig className="w-4 h-4" />
                       习惯
                     </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#333] rounded-lg text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                       <Brain className="w-4 h-4" />
                       心态
                     </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#333] rounded-lg text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                       <Heart className="w-4 h-4" />
                       心理
                     </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#333] rounded-lg text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                       <Activity className="w-4 h-4" />
                       健康
                     </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#333] rounded-lg text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                       <Trophy className="w-4 h-4" />
                       运动表现
                     </span>
                   </div>
                 </div>

                 {/* Society */}
                <div className="w-full bg-[#FFF7E0] border-[3px] border-[#333] rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(75,85,99,1)] hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
                   <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-[#333]/10 border-dashed">
                     <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-[#333] flex items-center justify-center text-gray-600">
                        <Users className="w-6 h-6" />
                     </div>
                     <h3 className="font-sans font-bold text-xl text-black">社会 (Society)</h3>
                   </div>

                   <div className="flex flex-wrap gap-2.5 content-start flex-1">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#333] rounded-lg text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                       <Network className="w-4 h-4" />
                       社会结构
                     </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#333] rounded-lg text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                       <Users className="w-4 h-4" />
                       人际关系
                     </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#333] rounded-lg text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                       <CircleDollarSign className="w-4 h-4" />
                       经济
                     </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#333] rounded-lg text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                       <TrendingUp className="w-4 h-4" />
                       投资
                     </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#333] rounded-lg text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                       <MessageCircle className="w-4 h-4" />
                       社交媒体
                     </span>
                   </div>
                 </div>
               </div>

               {/* Questions Section Header */}
               <div className="mt-8 overflow-hidden w-full relative">
                <h3 className="font-sans font-bold text-xl md:text-2xl text-black mb-8 text-center flex items-center justify-center gap-2">
                   <span className="inline-block w-2 h-2 rounded-full bg-[#333]"></span>
                   最近脑子里在转的几个问题
                   <span className="inline-block w-2 h-2 rounded-full bg-[#333]"></span>
                 </h3>
                 
                 {/* Infinite Scroll Marquee */}
                 <div className="flex w-full overflow-hidden mask-gradient-x">
                   <div className="flex animate-marquee min-w-full py-4 items-center">
                     {/* Original Items */}
                     <div className="flex gap-8 pr-8 shrink-0 items-center">
                       <QuestionCards />
                     </div>
                     {/* Duplicate Items for Seamless Loop */}
                     <div className="flex gap-8 pr-8 shrink-0 items-center">
                       <QuestionCards />
                     </div>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuestionCards() {
  return (
    <>
      {/* Q1 */}
      <div className="relative group w-[280px] shrink-0 hover:scale-[1.02] transition-transform duration-300">
        <div className="absolute inset-0 bg-[#333] rounded-full translate-x-1 translate-y-1"></div>
        <div className="relative h-full bg-[#FFFCF5] border-2 border-[#333] rounded-full px-5 py-3 flex items-center gap-3">
            <div className="w-9 h-9 shrink-0 p-1.5 bg-blue-50 border border-[#333] rounded-full flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect x="25" y="25" width="50" height="50" rx="10" fill="#93C5FD" stroke="#333" strokeWidth="6" />
                <path d="M25 45 L15 45" stroke="#333" strokeWidth="6" strokeLinecap="round" />
                <path d="M75 45 L85 45" stroke="#333" strokeWidth="6" strokeLinecap="round" />
                <circle cx="40" cy="45" r="4" fill="#333" />
                <circle cx="60" cy="45" r="4" fill="#333" />
              </svg>
            </div>
            <p className="font-sans font-bold text-[#333] text-sm leading-tight">
              企业可以如何用<br/>AI 做自动化？
            </p>
        </div>
      </div>

      {/* Q2 */}
      <div className="relative group w-[280px] shrink-0 hover:scale-[1.02] transition-transform duration-300">
        <div className="absolute inset-0 bg-[#333] rounded-full translate-x-1 translate-y-1"></div>
        <div className="relative h-full bg-[#FFFCF5] border-2 border-[#333] rounded-full px-5 py-3 flex items-center gap-3">
            <div className="w-9 h-9 shrink-0 p-1.5 bg-red-50 border border-[#333] rounded-full flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="35" fill="none" stroke="#EF4444" strokeWidth="6" />
                <line x1="25" y1="25" x2="75" y2="75" stroke="#EF4444" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </div>
            <p className="font-sans font-bold text-[#333] text-sm leading-tight">
              怎么减少刷手机，<br/>锻炼专注力？
            </p>
        </div>
      </div>

      {/* Q3 */}
      <div className="relative group w-[280px] shrink-0 hover:scale-[1.02] transition-transform duration-300">
        <div className="absolute inset-0 bg-[#333] rounded-full translate-x-1 translate-y-1"></div>
        <div className="relative h-full bg-[#FFFCF5] border-2 border-[#333] rounded-full px-5 py-3 flex items-center gap-3">
            <div className="w-9 h-9 shrink-0 p-1.5 bg-orange-50 border border-[#333] rounded-full flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M20 50 L80 50" stroke="#F97316" strokeWidth="16" strokeLinecap="round" />
                <circle cx="30" cy="50" r="4" fill="white" />
                <circle cx="70" cy="50" r="4" fill="white" />
              </svg>
            </div>
            <p className="font-sans font-bold text-[#333] text-sm leading-tight">
              最容易做、优质、<br/>好吃的蛋白质？
            </p>
        </div>
      </div>

      {/* Q4 */}
      <div className="relative group w-[280px] shrink-0 hover:scale-[1.02] transition-transform duration-300">
        <div className="absolute inset-0 bg-[#333] rounded-full translate-x-1 translate-y-1"></div>
        <div className="relative h-full bg-[#FFFCF5] border-2 border-[#333] rounded-full px-5 py-3 flex items-center gap-3">
            <div className="w-9 h-9 shrink-0 p-1.5 bg-blue-50 border border-[#333] rounded-full flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="45" cy="45" r="25" fill="none" stroke="#333" strokeWidth="6" />
                <line x1="65" y1="65" x2="85" y2="85" stroke="#333" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </div>
            <p className="font-sans font-bold text-[#333] text-sm leading-tight">
              我有哪些认知偏差<br/>和逻辑谬误？
            </p>
        </div>
      </div>

      {/* Q5 */}
      <div className="relative group w-[280px] shrink-0 hover:scale-[1.02] transition-transform duration-300">
        <div className="absolute inset-0 bg-[#333] rounded-full translate-x-1 translate-y-1"></div>
        <div className="relative h-full bg-[#FFFCF5] border-2 border-[#333] rounded-full px-5 py-3 flex items-center gap-3">
            <div className="w-9 h-9 shrink-0 p-1.5 bg-pink-50 border border-[#333] rounded-full flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M30 70 V40 C30 20 70 20 70 40 V70" fill="none" stroke="#EC4899" strokeWidth="6" strokeLinecap="round" />
                <path d="M30 40 H70" stroke="#EC4899" strokeWidth="6" />
              </svg>
            </div>
            <p className="font-sans font-bold text-[#333] text-sm leading-tight">
              如何训练 First <br/>Principles？
            </p>
        </div>
      </div>
    </>
  )
}
