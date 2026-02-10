"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Zap, Shield, DollarSign, Headphones, RefreshCw, Lock } from "lucide-react"

const points = [
  { icon: Zap, title: "Fast Delivery", desc: "Ready in 2-4 weeks" },
  { icon: Shield, title: "Quality Code", desc: "Clean, fast & scalable" },
  { icon: DollarSign, title: "Transparent Pricing", desc: "No hidden charges" },
  { icon: Headphones, title: "Ongoing Support", desc: "We stay after launch" },
  { icon: RefreshCw, title: "Free Revisions", desc: "Changes included" },
  { icon: Lock, title: "100% Ownership", desc: "Code is fully yours" },
]

export function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-us" className="relative py-14 md:py-20 overflow-hidden bg-secondary/40">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-20 right-0 h-[350px] w-[350px] rounded-full bg-primary/[0.035]" />
        <div className="absolute top-0 -left-16 h-[250px] w-[250px] rounded-full bg-primary/[0.025]" />
        <svg className="absolute bottom-8 left-8 opacity-[0.05]" width="120" height="120">
          <pattern id="whyGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="hsl(0 100% 44%)" />
          </pattern>
          <rect width="120" height="120" fill="url(#whyGrid)" />
        </svg>
        <div className="absolute top-16 right-[20%] h-[2px] w-24 rounded-full bg-primary/10" />
        <div className="absolute bottom-28 left-[25%] h-[2px] w-14 rounded-full bg-primary/[0.06]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left - Image */}
          <div className={`relative ${visible ? "animate-slide-right" : "opacity-0"}`}>
            <div className="absolute -inset-3 rounded-2xl bg-primary/[0.03] rotate-1" />
            <div className="relative overflow-hidden rounded-xl border border-border shadow-xl">
              <Image
                src="/team-work.jpg"
                alt="WEMAKING development team at work"
                width={560}
                height={380}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Right - Points */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Why Choose Us
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
              We Deliver What We Promise
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-md">
              From development to deployment, we handle everything professionally so you can focus on your business.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {points.map((p, i) => (
                <div
                  key={p.title}
                  className={`group flex items-start gap-3 rounded-lg border border-border bg-card p-3.5 transition-all hover:shadow-md hover:border-primary/20 ${
                    visible ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="shrink-0 rounded-md bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <p.icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">{p.title}</p>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
