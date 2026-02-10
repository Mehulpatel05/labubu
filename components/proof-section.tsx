"use client"

import { useEffect, useRef, useState } from "react"
import { Users, CheckCircle2, Clock } from "lucide-react"

const stats = [
  { icon: Users, value: "50+", label: "Clients Served" },
  { icon: CheckCircle2, value: "120+", label: "Projects Delivered" },
  { icon: Clock, value: "2 Weeks", label: "Avg. Launch Time" },
]

export function ProofSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-12 md:py-16">
      <div ref={ref} className="mx-auto max-w-6xl px-4 text-center">
        <h2
          className={`font-display text-xl font-bold text-foreground md:text-2xl text-balance ${
            visible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Built for founders & growing businesses.
        </h2>

        <div className="mt-8 grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center gap-1 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 0.15}s` }}
            >
              <s.icon size={20} className="text-primary" />
              <span className="text-lg font-bold text-foreground md:text-2xl">{s.value}</span>
              <span className="text-[10px] text-muted-foreground md:text-xs">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
