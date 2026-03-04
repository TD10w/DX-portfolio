"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RoadmapTab } from "@/components/tabs/roadmap-tab"
import { WorkTab } from "@/components/tabs/work-tab"
import { ContactTab } from "@/components/tabs/contact-tab"

export function TabbedSection() {
  return (
    <section id="tabs" className="py-24 bg-foreground text-primary-foreground">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground text-balance">
            {"看看我的 "}
            <span className="inline-block bg-highlight-blue px-3 py-1 rounded-sm text-primary-foreground">
              {"路径与作品"}
            </span>
          </h2>
          <p className="mt-4 text-primary-foreground/60 text-lg font-sans max-w-lg">
            {"这里有成长节点、代表项目，以及与我联系的方式。"}
          </p>
        </div>

        <Tabs defaultValue="roadmap" className="w-full">
          <TabsList className="bg-primary-foreground/10 rounded-full p-1 mb-10 inline-flex">
            <TabsTrigger
              value="roadmap"
              className="rounded-full px-6 py-2.5 text-sm font-sans font-medium text-primary-foreground/60 data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm cursor-pointer"
            >
              {"Roadmap"}
            </TabsTrigger>
            <TabsTrigger
              value="work"
              className="rounded-full px-6 py-2.5 text-sm font-sans font-medium text-primary-foreground/60 data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm cursor-pointer"
            >
              {"Selected Work"}
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="rounded-full px-6 py-2.5 text-sm font-sans font-medium text-primary-foreground/60 data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm cursor-pointer"
            >
              {"Contact"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="roadmap">
            <RoadmapTab />
          </TabsContent>
          <TabsContent value="work">
            <WorkTab />
          </TabsContent>
          <TabsContent value="contact" id="contact">
            <ContactTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
