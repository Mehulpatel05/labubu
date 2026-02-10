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
    <section className="relative bg-background py-12 md:py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-[20%] h-[200px] w-[200px] rounded-full bg-primary/[0.025]" />
        <div className="absolute bottom-0 right-[15%] h-[180px] w-[180px] rounded-full bg-primary/[0.02]" />
        <div className="absolute top-6 right-[30%] h-[2px] w-20 rounded-full bg-primary/10" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-5xl px-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Trusted By Businesses
        </p>
        <h2
          className={`mt-2 font-display text-2xl font-bold text-foreground md:text-3xl text-balance ${
            visible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Built For Founders & Growing Businesses
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md hover:border-primary/20 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 0.1}s` }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 h-8 w-8 bg-primary/[0.04] rounded-bl-xl" />
              <s.icon size={20} className="text-primary" />
              <span className="text-2xl font-bold text-foreground md:text-3xl font-display">{s.value}</span>
              <span className="text-[11px] text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
