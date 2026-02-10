"use client"

import { useEffect, useRef, useState } from "react"
import { Users, CheckCircle2, Clock, Star } from "lucide-react"

const stats = [
  { icon: Users, value: "50+", label: "Clients" },
  { icon: CheckCircle2, value: "120+", label: "Projects" },
  { icon: Clock, value: "2-4 Wk", label: "Delivery" },
  { icon: Star, value: "4.9", label: "Rating" },
]

export function ProofSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-background py-10 md:py-14 overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-[15%] h-[250px] w-[250px] rounded-full bg-primary/[0.05]" />
        <div className="absolute bottom-0 right-[10%] h-[200px] w-[200px] rounded-full bg-primary/[0.04]" />
        <div className="absolute top-4 right-[35%] h-[3px] w-24 rounded-full bg-primary/[0.12]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-4xl px-5">
        <div className="grid grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative flex flex-col items-center gap-1 rounded-xl border border-border bg-card p-4 transition-all hover:shadow-md hover:border-primary/20 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 h-7 w-7 bg-primary/[0.06] rounded-bl-lg" />
              <s.icon size={18} className="text-primary" />
              <span className="text-xl font-bold text-foreground md:text-2xl font-display">{s.value}</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
