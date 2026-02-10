"use client"

import { useEffect, useRef, useState } from "react"
import { Users, CheckCircle2, Clock, Star } from "lucide-react"

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: CheckCircle2, value: "120+", label: "Projects Delivered" },
  { icon: Clock, value: "2-4 Weeks", label: "Avg. Delivery" },
  { icon: Star, value: "4.9/5", label: "Client Rating" },
]

export function ProofSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-background py-10 md:py-12 overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-px w-32 bg-primary/10" />
        <div className="absolute bottom-0 right-1/3 h-px w-24 bg-primary/10" />
        <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-primary/[0.02]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-4xl px-4 text-center">
        <h2
          className={`font-display text-xl font-bold text-foreground md:text-2xl text-balance ${
            visible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Founders & Businesses Trust Karte Hain
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center gap-1 rounded-xl border border-border bg-card p-4 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 0.12}s` }}
            >
              <s.icon size={18} className="text-primary mb-1" />
              <span className="text-lg font-bold text-foreground md:text-xl">{s.value}</span>
              <span className="text-[10px] text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
