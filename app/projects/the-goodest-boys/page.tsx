import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Heart, Layout, MousePointerClick } from "lucide-react"
import { getProjectBySlug } from "@/lib/projects"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import storeScreenshot from "@/img/The Goodest Boys (1000 x 500 px).png"

export default function TheGoodestBoysPage() {
  const project = getProjectBySlug("the-goodest-boys")

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background font-sans selection:bg-yellow-100 selection:text-yellow-900">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-5xl">
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          
          {/* 1. HERO SECTION */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${project.color} flex items-center justify-center border border-foreground/5`}>
                    {project.icon}
                  </div>
                  <h1 className="font-serif text-4xl md:text-5xl text-foreground tracking-tight">
                    The Goodest Boys
                  </h1>
                </div>

                <h2 className="text-xl md:text-2xl font-medium text-foreground/80">
                  宠物定制配饰电商品牌
                </h2>

                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    The Goodest Boys 是一个围绕宠物定制配饰和礼品的电商品牌，由我独立搭建和运营。
                  </p>
                  <p>
                    从产品选择、品牌搭建到 Shopify 店铺上线和基础运营，整个过程都由我一人完成。
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button asChild size="lg" className="rounded-full px-8 h-12 text-base shadow-sm hover:shadow-md transition-all">
                  <Link href="https://thegoodestboys.com" target="_blank" rel="noopener noreferrer">
                    访问品牌网站
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[2/1] bg-stone-100 rounded-2xl border border-border/50 shadow-sm overflow-hidden">
               <Image 
                 src={storeScreenshot} 
                 alt="The Goodest Boys Store Screenshot" 
                 width={1024}
                 height={768}
                 className="w-full h-full object-contain"
                 priority
               />
            </div>
          </div>
          
          {/* 2. OVERVIEW SECTION */}
          <div className="bg-card border border-border/60 rounded-3xl p-8 md:p-12 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] mb-32">
             <div className="max-w-3xl">
                <h2 className="font-serif text-3xl text-foreground mb-8 flex items-center gap-3">
                  Overview <span className="text-muted-foreground/40 text-2xl font-sans font-light">|</span> <span className="text-xl text-muted-foreground font-sans font-normal">品牌概述</span>
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-6">
                  <p>
                    The Goodest Boys 是一个围绕 <strong>定制宠物配饰（custom pet accessories）</strong> 的电商品牌。
                  </p>
                  <p>
                    用户可以上传宠物照片，将宠物形象制作成不同的商品，例如：
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 list-none pl-0 my-6">
                    {["定制宠物头像项链", "宠物肖像马克杯", "定制宠物钥匙扣"].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p>
                    这个品牌由我独立搭建和运营，主要目的是从零搭建并运行一个真实的电商品牌，完整经历品牌、产品和电商运营的全过程。
                  </p>
                </div>
              </div>
          </div>

          {/* 3. WHAT I BUILT SECTION */}
          <div className="bg-card border border-border/60 rounded-3xl p-8 md:p-12 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] mb-32">
             <div className="max-w-3xl">
                  <h2 className="font-serif text-3xl text-foreground mb-8 flex items-center gap-3">
                    What I Built <span className="text-muted-foreground/40 text-2xl font-sans font-light">|</span> <span className="text-xl text-muted-foreground font-sans font-normal">我负责的内容</span>
                  </h2>
                  
                  <div className="space-y-8 text-lg text-muted-foreground">
                    <div>
                      <p className="mb-6">
                        The Goodest Boys 是一个 <strong>one-person business（一人公司）</strong>。我独立完成了品牌和业务的主要搭建，包括：
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                        {[
                          "Shopify 店铺搭建", 
                          "产品选择与供应链对接", 
                          "品牌视觉设计", 
                          "商品页面制作", 
                          "基础电商运营"
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-3 text-foreground/90 bg-secondary/30 p-3 rounded-xl border border-border/30">
                            <div className="w-6 h-6 rounded-full bg-background flex items-center justify-center shrink-0 border border-border/50">
                              <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-2 border-t border-border/40">
                      <p className="font-medium text-foreground mb-4 mt-6">主要产品包括：</p>
                      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { en: "Custom Necklace", cn: "定制宠物头像项链" },
                          { en: "Portrait Mug", cn: "宠物肖像马克杯" },
                          { en: "Custom Keychain", cn: "定制宠物头像钥匙扣" }
                        ].map((product) => (
                          <div key={product.en} className="p-4 rounded-xl bg-yellow-50/50 dark:bg-yellow-900/10 border border-yellow-100/50 dark:border-yellow-900/20 hover:border-yellow-200 dark:hover:border-yellow-900/40 transition-colors">
                            <div className="font-medium text-foreground text-base leading-tight mb-1">{product.en}</div>
                            <div className="text-sm text-muted-foreground">{product.cn}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
            </div>
          </div>

          {/* 4. WHAT I LEARNED SECTION */}
          <div className="mb-24">
            <h2 className="font-serif text-3xl text-foreground mb-10 flex items-center gap-3">
              What I Learned <span className="text-muted-foreground/40 text-2xl font-sans font-light">|</span> <span className="text-xl text-muted-foreground font-sans font-normal">从这个品牌学到的</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <Card className="rounded-2xl h-full bg-card border-border/60 hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-medium">
                    <div className="p-2.5 bg-red-50 text-red-500 rounded-xl">
                      <Heart className="w-5 h-5" />
                    </div>
                    用户需求
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    很多用户关注的不只是商品本身，而是产品是否真正符合他们的使用需求和生活场景。
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl h-full bg-card border-border/60 hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-medium">
                    <div className="p-2.5 bg-blue-50 text-blue-500 rounded-xl">
                      <Layout className="w-5 h-5" />
                    </div>
                    品牌体验
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    品牌不仅仅是一个网站，而是从产品呈现到用户体验的整体感受。
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl h-full bg-card border-border/60 hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-medium">
                    <div className="p-2.5 bg-green-50 text-green-500 rounded-xl">
                      <MousePointerClick className="w-5 h-5" />
                    </div>
                    持续迭代
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    电商运营是一个不断调整和优化的过程，需要根据用户反馈持续改进产品和页面。
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  )
}
