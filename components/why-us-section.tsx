"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Shield, DollarSign, Headphones, RefreshCw, Lock } from "lucide-react"

const points = [
  { icon: Zap, title: "Jaldi Milega", desc: "2-4 weeks me ready software" },
  { icon: Shield, title: "Quality Code", desc: "Clean, fast & scalable" },
  { icon: DollarSign, title: "Seedha Price", desc: "No hidden charges, full clarity" },
  { icon: Headphones, title: "Support Always", desc: "Launch ke baad bhi sath hain" },
  { icon: RefreshCw, title: "Changes Free", desc: "Revisions milte hain free me" },
  { icon: Lock, title: "Full Ownership", desc: "Code aapka hai, 100% aapka" },
]

export function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-us" className="relative py-12 md:py-16 overflow-hidden bg-secondary/50">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-16 right-0 h-56 w-56 rounded-full bg-primary/[0.03]" />
        <div className="absolute top-0 -left-8 h-40 w-40 rounded-full bg-primary/[0.02]" />
        <svg className="absolute bottom-6 right-6 opacity-[0.05]" width="80" height="80">
          <pattern id="dots4" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="hsl(0 100% 44%)" />
          </pattern>
          <rect width="80" height="80" fill="url(#dots4)" />
        </svg>
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl px-4">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Kyun WEMAKING Hi
          </p>
          <h2 className="mt-1 font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
            Aapko Ye Sab Milega Humare Sath
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {points.map((p, i) => (
            <div
              key={p.title}
              className={`group flex flex-col items-center text-center gap-2 rounded-xl border border-border bg-card p-4 md:p-5 transition-all hover:shadow-md hover:border-primary/20 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="inline-flex rounded-lg bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <p.icon size={18} />
              </div>
              <p className="text-xs font-bold text-foreground">{p.title}</p>
              <p className="text-[10px] text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
