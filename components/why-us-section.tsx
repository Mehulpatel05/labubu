"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Shield, DollarSign, Headphones } from "lucide-react"

const points = [
  { icon: Zap, title: "Fast Delivery" },
  { icon: Shield, title: "Clean & Scalable" },
  { icon: DollarSign, title: "Transparent Pricing" },
  { icon: Headphones, title: "Ongoing Support" },
]

export function WhyUsSection() {
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
    <section id="why-us" className="bg-secondary/50 py-12 md:py-16">
      <div ref={ref} className="mx-auto max-w-6xl px-4">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-primary">
          Why WEMAKING
        </p>
        <h2 className="mt-2 text-center font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
          Built Different
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {points.map((p, i) => (
            <div
              key={p.title}
              className={`flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-5 text-center transition-all hover:shadow-md hover:border-primary/30 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="inline-flex rounded-full bg-primary/10 p-2.5 text-primary">
                <p.icon size={18} />
              </div>
              <p className="text-xs font-semibold text-foreground">{p.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
