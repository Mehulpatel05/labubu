"use client"

import { useEffect, useRef, useState } from "react"
import { Layers, Rocket, CreditCard } from "lucide-react"

const services = [
  {
    icon: Layers,
    title: "Mini SaaS Products",
    desc: "Custom-built software solutions",
  },
  {
    icon: Rocket,
    title: "MVP for Startups",
    desc: "Launch-ready minimum products",
  },
  {
    icon: CreditCard,
    title: "Subscription Systems",
    desc: "Payments & billing built in",
  },
]

export function ServicesSection() {
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
    <section id="services" className="bg-secondary/50 py-12 md:py-16">
      <div ref={ref} className="mx-auto max-w-6xl px-4">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-primary">
          What We Make
        </p>
        <h2 className="mt-2 text-center font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
          Built for Scale
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-3 md:gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group rounded-lg border border-border bg-card p-5 transition-all hover:shadow-lg hover:border-primary/30 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="mb-3 inline-flex rounded-md bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon size={20} />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
