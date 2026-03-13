"use client"

import { Zap, Target, Heart, GraduationCap, Plane, Award, Baby, Car } from "lucide-react"
import type { ReactElement, ReactNode, RefObject } from "react"
import { useLayoutEffect, useRef, useState, useEffect } from "react"

// --- Types ---

type Milestone = {
  id: string
  label: string
  title: string
  description: string
  icon: ReactNode
  tags?: string[]
  accentColor: string
  progress: number // Position along the road (0-1)
  poleHeight: number // Height of the pole (negative for up, positive for down)
}

type RoadMarker = {
  x: number
  y: number
}

// --- Configuration ---

const VIEW_W = 1000
const VIEW_H = 1250
const ROAD_PATH =
  "M60 92 H835 C900 92 930 128 930 188 V250 C930 315 900 350 835 350 H200 C132 350 102 385 102 448 V520 C102 584 132 620 200 620 H835 C900 620 930 654 930 716 V788 C930 852 900 888 835 888 H200 C132 888 102 924 102 986 V1054 C102 1118 132 1152 200 1152 H790"

const brightenHexColor = (hexColor: string, amount: number) => {
  const color = hexColor.replace("#", "")
  const normalized = color.length === 3 ? color.split("").map((c) => c + c).join("") : color
  const value = Number.parseInt(normalized, 16)
  const r = Math.min(255, ((value >> 16) & 255) + amount)
  const g = Math.min(255, ((value >> 8) & 255) + amount)
  const b = Math.min(255, (value & 255) + amount)
  return `#${[r, g, b].map((channel) => channel.toString(16).padStart(2, "0")).join("")}`
}

const milestones: Milestone[] = [
  {
    id: "ai",
    label: "Now",
    title: "探索 AI",
    description: "最近在学习和折腾一些 AI 工具，也做了一些小项目，看看 AI 到底能在哪些地方真正派上用场。一边探索，一边也在寻找进入 AI 领域的机会。",
    icon: <Zap className="h-3.5 w-3.5" />,
    tags: ["AI Agent", "Automation", "Growth"],
    accentColor: "#41BBD9",
    progress: 0.02,
    poleHeight: -60,
  },
  {
    id: "marketing",
    label: "2025 Summer",
    title: "DX Marketing",
    description: "尝试做一些营销项目，开始思考产品和用户的问题。",
    icon: <Target className="h-3.5 w-3.5" />,
    tags: ["Marketing", "Growth"],
    accentColor: "#FF6B6B",
    progress: 0.24,
    poleHeight: -60,
  },
  {
    id: "startup",
    label: "2024 Nov",
    title: "The Goodest Boys",
    description: "一个围绕宠物的个人品牌项目，也是我第一次尝试创业。",
    icon: <Heart className="h-3.5 w-3.5" />,
    tags: ["Startup", "Brand"],
    accentColor: "#F2D35B",
    progress: 0.42,
    poleHeight: -60,
  },
  {
    id: "grad",
    label: "2024",
    title: "UCSD 毕业",
    description: "主修商业经济学，同时辅修社会学和金融。",
    icon: <GraduationCap className="h-3.5 w-3.5" />,
    tags: ["Degree"],
    accentColor: "#202020",
    progress: 0.58,
    poleHeight: -50,
  },
  {
    id: "ucsd",
    label: "2020",
    title: "去 UC San Diego",
    description: "来到美国读大学。",
    icon: <Plane className="h-3.5 w-3.5" />,
    accentColor: "#41BBD9",
    progress: 0.72,
    poleHeight: -50,
  },
  {
    id: "hs",
    label: "2015",
    title: "去美国读高中",
    description: "在 Virginia 读高中，加入了篮球队和摔跤队。",
    icon: <Award className="h-3.5 w-3.5" />,
    accentColor: "#FF6B6B",
    progress: 0.86,
    poleHeight: -50,
  },
  {
    id: "born",
    label: "2001",
    title: "魔童降世",
    description: "命运的齿轮开始转动，世界开始颤抖。",
    icon: <Baby className="h-3.5 w-3.5" />,
    accentColor: "#F2D35B",
    progress: 0.98,
    poleHeight: -50,
  },
]

// --- Components ---

// --- Scenery Components ---

function Cloud({ x, y, scale = 1, opacity = 0.6, duration = 20 }: { x: number; y: number; scale?: number; opacity?: number, duration?: number }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} opacity={opacity} style={{ animation: `drift ${duration}s ease-in-out infinite` }}>
      <path
        d="M25,60 Q40,45 60,50 Q75,30 100,40 Q125,20 150,45 Q175,40 185,60 Q205,65 195,85 Q190,105 160,100 Q140,115 110,105 Q90,120 60,110 Q30,115 20,90 Q5,80 25,60 Z"
        fill="#FFFFFF"
        stroke="none"
      />
    </g>
  )
}

function Tree({ x, y, scale = 1, type = "round" }: { x: number; y: number; scale?: number; type?: "round" | "pine" }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      {/* Shadow */}
      <ellipse cx="0" cy="10" rx="12" ry="4" fill="black" opacity="0.1" />
      
      {type === "round" ? (
        <g>
          {/* Trunk */}
          <rect x="-2" y="0" width="4" height="12" rx="1" fill="#8B5E3C" />
          {/* Foliage */}
          <circle cx="0" cy="-10" r="14" fill="#86B564" />
          <circle cx="-8" cy="-6" r="10" fill="#75A653" />
          <circle cx="8" cy="-6" r="10" fill="#95C870" />
        </g>
      ) : (
        <g>
          {/* Trunk */}
          <rect x="-2" y="0" width="4" height="10" rx="1" fill="#8B5E3C" />
          {/* Foliage */}
          <path d="M0 -35 L-12 -5 L12 -5 Z" fill="#5F8D4E" />
          <path d="M0 -25 L-14 5 L14 5 Z" fill="#4E7C3D" />
        </g>
      )}
    </g>
  )
}

function MapScenery() {
  return (
    <g className="pointer-events-none">
      {/* Clouds - Placed in empty areas */}
      <Cloud x={100} y={150} scale={0.8} duration={25} />
      <Cloud x={700} y={50} scale={1.2} opacity={0.4} duration={30} />
      <Cloud x={300} y={500} scale={0.6} opacity={0.5} duration={20} />
      <Cloud x={850} y={600} scale={0.9} duration={28} />
      <Cloud x={150} y={900} scale={1.1} opacity={0.3} duration={22} />
      <Cloud x={600} y={1100} scale={0.7} duration={35} />

      {/* Trees - Clustered in margins */}
      <Tree x={50} y={50} scale={1.2} type="pine" />
      <Tree x={80} y={70} scale={0.9} type="pine" />
      <Tree x={120} y={40} scale={0.8} />
      
      <Tree x={900} y={300} scale={1.1} />
      <Tree x={940} y={330} scale={0.8} type="pine" />
      
      <Tree x={60} y={650} scale={1.3} type="round" />
      <Tree x={30} y={680} scale={0.9} />
      
      <Tree x={920} y={800} scale={1.2} type="pine" />
      <Tree x={880} y={830} scale={0.8} />
      
      <Tree x={100} y={1100} scale={1} />
      <Tree x={50} y={1140} scale={1.2} type="pine" />
    </g>
  )
}

function RoadPath({ pathRef }: { pathRef: RefObject<SVGPathElement | null> }) {
  return (
    <svg className="h-full w-full" viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} preserveAspectRatio="none" aria-hidden>
      {/* Scenery Layer - Behind Road */}
      <MapScenery />
      
      <path d={ROAD_PATH} fill="none" stroke="rgba(53,53,53,0.96)" strokeWidth="82" strokeLinecap="round" strokeLinejoin="round" />
      <path d={ROAD_PATH} fill="none" stroke="rgba(255,255,255,0.92)" strokeWidth="4" strokeDasharray="10 14" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Moving Car */}
      <CarIcon pathRef={pathRef} />
      
      <path ref={pathRef} d={ROAD_PATH} fill="none" stroke="transparent" strokeWidth="1" />
    </svg>
  )
}

function CarIcon({ pathRef }: { pathRef: RefObject<SVGPathElement | null> }) {
  const [position, setPosition] = useState({ x: 0, y: 0, angle: 0, scaleY: 1 })

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    const totalLength = path.getTotalLength()
    
    // Animate the car
    let startTime: number
    const duration = 35000 // 35 seconds for one loop
    
    const animate = (time: number) => {
      if (!startTime) startTime = time
      const elapsed = time - startTime
      // Reverse direction: 1 - progress
      const progress = 1 - ((elapsed % duration) / duration)
      
      const point = path.getPointAtLength(progress * totalLength)
      // Look slightly behind (which is "ahead" in reverse) to get angle
      const prevPoint = path.getPointAtLength(Math.max((progress - 0.01) * totalLength, 0))
      
      // Calculate angle pointing towards "prevPoint" (which is where we are going)
      // Since we are reversing (moving from end to start), "prevPoint" is actually the destination.
      // angle = atan2(dy, dx) gives the angle from point to prevPoint.
      let angle = Math.atan2(prevPoint.y - point.y, prevPoint.x - point.x) * (180 / Math.PI)
      
      // If the plane is moving "left" (angle is between 90 and 270 degrees, or -90 and -270),
      // we want to flip it horizontally so it stays "upright" relative to the screen,
      // BUT you asked to "keep the direction stable".
      
      // If by "keep direction stable" you mean:
      // "Always point the nose along the path", then the current code is correct (it rotates 360).
      
      // If you mean:
      // "Don't fly backwards when the road turns left", well, planes fly nose-first.
      
      // BUT, if you mean "Don't let the plane be upside down when flying left",
      // then we DO need to flip it if the angle is > 90 or < -90.
      // Wait, your prompt says "do not flip the direction when moving".
      
      // Let's interpret "keep the direction stable" as:
      // Just strictly follow the path angle. 
      // The issue might be that `atan2` returns -180 to 180.
      
      // If the user means "don't turn the plane around when the road goes left-to-right vs right-to-left",
      // that's impossible if it follows the road.
      
      // Re-reading: "keep the direction stable! do not flip the direction when moving, there's already no upside down."
      // This implies the previous "upside down prevention" (which I removed) was actually desired, OR
      // maybe the plane is suddenly snapping 180 degrees at some point?
      
      // Ah, since we are using `Math.max((progress - 0.01)...)` for `prevPoint`,
      // when `progress` is near 0 (start of path/end of animation), `prevPoint` might be weird.
      // But `progress` goes from 1 down to 0.
      
      // Let's just ensure we strictly use the tangent angle.
      // The current code: `angle = atan2(dy, dx)` is correct for tangent.
      
      // Maybe the user means: "The plane icon itself is pointing Right by default. If the path goes Left, the plane flies upside down."
      // Since it's a top-down view, "upside down" means the wings are inverted? No, top-down doesn't have "upside down" unless it has text.
      
      // Wait, if the road goes Left, the plane rotates 180 degrees.
      // If the user thinks that's "flipping direction", maybe they want the plane to always stay somewhat upright?
      // But a plane following a road MUST rotate.
      
      // Let's look at the previous prompt: "make the plane in 'birdeye view' and keep the direction stable"
      // And now: "keep the direction stable! do not flip the direction when moving"
      
      // If the plane suddenly flips 180 degrees, it's likely a singularity in the angle calculation or the path direction.
      // The path is continuous.
      
      // Let's try to smooth the angle or ensure we aren't getting jitter.
      // OR, maybe the user wants the plane to always face generally "Forward" (e.g. Up/Right)?
      // But it's following a winding road.
      
      // Let's assume the user saw the plane "flip" (mirror) and didn't like it.
      // In my previous step (Bird's eye), I removed the `scaleY: -1` logic. So it should NOT be flipping (mirroring).
      // It should just be rotating.
      
      // Is it possible the user is seeing the plane fly "backwards"?
      // We are calculating angle from `point` to `prevPoint`.
      // `progress` goes 1 -> 0.
      // `point` is at `progress`.
      // `prevPoint` is at `progress - 0.01` (closer to 0).
      // So vector is `point` -> `prevPoint`.
      // This is the direction of movement (since we are moving 1->0).
      // So the nose should point towards movement.
      
      // Maybe the SVG plane is drawn pointing LEFT?
      // My SVG draws the nose at `x > 0` (e.g. Propeller at `cx=24`).
      // So the SVG points RIGHT (0 degrees).
      // `atan2` returns 0 for vector (1, 0).
      // So if the plane moves Right, `angle` is 0, plane points Right. Correct.
      
      // If the path loops, maybe `atan2` jumps from 180 to -180?
      // That would cause a sudden spin if using CSS transition, but we use `requestAnimationFrame` and set rotation directly every frame.
      // So 179 -> -179 is just a 2 degree visual change. It shouldn't look like a "flip".
      
      // UNLESS... the user means "Don't let the plane fly with its nose pointing Left"?
      // i.e. "Always keep the plane upright-ish".
      // If the road goes Left, the plane would point Left (180 deg).
      // In a top-down view, that's fine.
      
      // Let's re-read "there's already no upside down".
      // This implies the user noticed that I removed the "prevent upside down" logic, but maybe they are seeing something else.
      
      // Actually, looking at the previous diff, I *did* remove the `scaleY` logic.
      // So the plane just rotates.
      
      // Is it possible the "reversing path" logic is causing jitter at the loop point?
      // `progress = 1 - ...`
      // When `elapsed % duration` wraps, `progress` jumps from 0 to 1.
      // The plane jumps from start to end.
      
      // Let's stick to the simplest interpretation:
      // The plane should just follow the path tangent.
      // I will remove any complexity and ensure the angle calculation is robust.
      
      setPosition({ x: point.x, y: point.y, angle })
      requestAnimationFrame(animate)
    }
    
    requestAnimationFrame(animate)
  }, [pathRef])

  return (
    <g transform={`translate(${position.x}, ${position.y}) rotate(${position.angle}) scale(1)`}>
      {/* Shadow */}
      <ellipse cx="0" cy="8" rx="14" ry="6" fill="black" opacity="0.15" />

      {/* Wings */}
      <path
        d="M-4 -24 L4 -24 L8 -4 L-8 -4 Z"
        fill="#FFFFFF"
        stroke="#333"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M-4 24 L4 24 L8 4 L-8 4 Z"
        fill="#FFFFFF"
        stroke="#333"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Tail Wings */}
      <path
        d="M-18 -10 L-14 -10 L-10 -2 L-20 -2 Z"
        fill="#FCD34D"
        stroke="#333"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M-18 10 L-14 10 L-10 2 L-20 2 Z"
        fill="#FCD34D"
        stroke="#333"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Main Fuselage (Body) */}
      <path
        d="M-22 0 Q-22 -5 0 -5 L14 -4 Q24 -2 24 0 Q24 2 14 4 L0 5 Q-22 5 -22 0 Z"
        fill="#FFFFFF"
        stroke="#333"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Cockpit/Windshield (Top View) */}
      <path
        d="M8 -2 Q12 -2 14 0 Q12 2 8 2 Z"
        fill="#FFFFFF"
        stroke="#333"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Propeller Hub */}
      <circle cx="24" cy="0" r="1.5" fill="#333" />
      
      {/* Propeller Blur */}
      <ellipse cx="24" cy="0" rx="1" ry="14" fill="#333" opacity="0.2" />
    </g>
  )
}

function SignpostMarker({
  marker,
  poleHeight,
  color,
  isActive,
}: {
  marker: { x: number; y: number }
  poleHeight: number
  color: string
  isActive: boolean
}) {
  const poleEndY = marker.y + poleHeight
  return (
    <g>
      <line
        x1={marker.x}
        y1={marker.y}
        x2={marker.x}
        y2={poleEndY}
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        className="opacity-95"
      />
      <circle cx={marker.x} cy={marker.y} r={10} fill="none" stroke={color} strokeOpacity={0.3} strokeWidth={1.4} style={{ animation: `pulse 4s ease-in-out infinite` }} />
      <circle
        cx={marker.x}
        cy={marker.y}
        r={6.6}
        fill={color}
        stroke="#FFF7E0"
        strokeWidth={2.4}
        style={{
          transform: isActive ? "scale(1.2)" : "scale(1)",
          transformOrigin: `${marker.x}px ${marker.y}px`,
          transition: "transform 220ms ease, filter 220ms ease",
          filter: isActive ? "brightness(1.1)" : "brightness(1)",
          animation: isActive ? `pulse 2s ease-in-out infinite` : `pulse 4s ease-in-out infinite`,
        }}
      />
      <circle cx={marker.x} cy={poleEndY} r={3} fill={color} />
    </g>
  )
}

function SignpostCard({ milestone, x, y, isActive }: { milestone: Milestone; x: number; y: number; isActive: boolean }) {
  const leftPercent = (x / VIEW_W) * 100
  const topPercent = (y / VIEW_H) * 100

  return (
    <div
      className="absolute z-30 flex flex-col items-center"
      style={{
        left: `${leftPercent}%`,
        top: `${topPercent}%`,
        transform: milestone.poleHeight < 0 ? "translate(-50%, -100%)" : "translate(-50%, 0%)",
      }}
    >
      <article
        className="group relative w-64 rounded-md border-2 ring-1 ring-black/5 bg-[#FFF7E0] px-4 py-3 text-black transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
        style={{
          borderColor: isActive ? brightenHexColor(milestone.accentColor, 28) : milestone.accentColor,
          boxShadow: isActive
            ? `6px 6px 0px 0px ${brightenHexColor(milestone.accentColor, 18)}`
            : `3px 3px 0px 0px ${milestone.accentColor}`,
        }}
      >
        <div className="mb-2 flex items-center gap-2 border-b border-black/5 pb-2">
          <span
            className="flex h-5 w-5 items-center justify-center rounded-full text-white shadow-sm"
            style={{ backgroundColor: milestone.accentColor }}
          >
            {milestone.icon}
          </span>
          <span className="font-serif text-xs font-bold uppercase tracking-wider text-black/50">
            {milestone.label}
          </span>
        </div>

        <h3 className="font-sans text-[18px] font-black leading-tight text-black">
          {milestone.title}
        </h3>
        <p className="mt-2.5 font-sans text-[13px] leading-relaxed text-black/80">
          {milestone.description}
        </p>

        {milestone.tags && milestone.tags.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1">
            {milestone.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded border border-black/10 bg-white/40 px-1 py-0.5 font-sans text-[9px] font-semibold text-black/55"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </div>
  )
}

function MobileTimelineItem({ milestone }: { milestone: Milestone }) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      {/* Vertical Line */}
      <div
        className="absolute left-[11px] top-2 bottom-0 w-0.5 bg-black/10 last:hidden"
      />
      
      {/* Dot */}
      <div
        className="absolute left-0 top-2 h-6 w-6 rounded-full border-2 border-[#FFF7E0] flex items-center justify-center"
        style={{ backgroundColor: milestone.accentColor }}
      >
         <div className="text-white scale-75">{milestone.icon}</div>
      </div>

      <article
        className="relative rounded-xl border-2 bg-[#FFF7E0] p-4 shadow-sm"
        style={{ borderColor: milestone.accentColor }}
      >
        <span className="mb-1 block font-serif text-xs font-medium text-black/50">
          {milestone.label}
        </span>
        <h4 className="font-sans text-base font-bold text-black">
          {milestone.title}
        </h4>
        <p className="mt-1 font-sans text-sm text-black/70 leading-snug">
          {milestone.description}
        </p>
      </article>
    </div>
  )
}

export function RoadmapSection() {
  const pathRef = useRef<SVGPathElement>(null)
  const [markers, setMarkers] = useState<RoadMarker[]>([])
  const [activeMilestoneId, setActiveMilestoneId] = useState<string | null>(null)
  const [targetProgress, setTargetProgress] = useState<number | null>(null)

  useLayoutEffect(() => {
    const path = pathRef.current
    if (!path) return
    const total = path.getTotalLength()
    
    // Calculate marker positions based on progress
    const nextMarkers = milestones.map((m) => {
      const point = path.getPointAtLength(total * m.progress)
      return { x: point.x, y: point.y }
    })
    
    setMarkers(nextMarkers)
  }, [])

  return (
    <section id="roadmap" className="bg-[#FFF7E0] pt-12 pb-24 overflow-hidden">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <div className="mb-14 text-center -mt-0">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#333] text-balance">
            我的探索路线{" "}
            <span className="inline-block bg-highlight-blue px-3 py-1 rounded-sm text-white font-sans text-2xl md:text-3xl align-middle ml-2">
              Roadmap
            </span>
          </h2>
        </div>

        {/* Desktop View */}
        <div className="relative hidden md:block h-[1250px] w-full max-w-[1000px] mx-auto mt-44">
          {/* Layer 1: Road SVG */}
          <div className="absolute inset-0 z-0">
            <RoadPath pathRef={pathRef} targetProgress={targetProgress} />
          </div>

          {/* Layer 2: Poles & Markers SVG Overlay */}
          <svg
            className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            preserveAspectRatio="none"
            aria-hidden
          >
            {markers.map((marker, index) => {
              const m = milestones[index]
              return (
                <SignpostMarker
                  key={`marker-${m.id}`}
                  marker={marker}
                  poleHeight={m.poleHeight}
                  color={m.accentColor}
                  isActive={activeMilestoneId === m.id}
                />
              )
            })}
          </svg>

          {/* Layer 3: Cards */}
          <div className="absolute inset-0 z-20 pointer-events-none">
             {/* Cards need pointer-events-auto */}
            {markers.map((marker, index) => {
               const m = milestones[index]
               // Calculate card anchor position
               const cardX = marker.x
               const cardY = marker.y + m.poleHeight
               
               return (
                 <div
                   key={`card-${m.id}`}
                   className="pointer-events-auto"
                   onMouseEnter={() => {
                     setActiveMilestoneId(m.id)
                     setTargetProgress(m.progress)
                   }}
                   onMouseLeave={() => {
                     setActiveMilestoneId(null)
                     setTargetProgress(null)
                   }}
                 >
                   <SignpostCard milestone={m} x={cardX} y={cardY} isActive={activeMilestoneId === m.id} />
                 </div>
               )
            })}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden max-w-md mx-auto mt-44">
          {milestones.map((m) => (
            <MobileTimelineItem key={`mobile-${m.id}`} milestone={m} />
          ))}
        </div>
      </div>
    </section>
  )
}
