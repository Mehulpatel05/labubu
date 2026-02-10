"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Zap, Shield, DollarSign, Headphones, RefreshCw, Lock } from "lucide-react"

const points = [
  { icon: Zap, title: "Fast Delivery" },
  { icon: Shield, title: "Quality Code" },
  { icon: DollarSign, title: "Transparent Pricing" },
  { icon: Headphones, title: "Ongoing Support" },
  { icon: RefreshCw, title: "Free Revisions" },
  { icon: Lock, title: "100% Ownership" },
]

export function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-us" className="relative py-12 md:py-16 overflow-hidden bg-secondary/40">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-24 right-0 h-[400px] w-[400px] rounded-full bg-primary/[0.06]" />
        <div className="absolute top-0 -left-20 h-[300px] w-[300px] rounded-full bg-primary/[0.05]" />
        <svg className="absolute bottom-6 left-6 opacity-[0.07]" width="140" height="140">
          <pattern id="wg" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="hsl(0 100% 44%)" />
          </pattern>
          <rect width="140" height="140" fill="url(#wg)" />
        </svg>
        <div className="absolute top-12 right-[18%] h-[3px] w-28 rounded-full bg-primary/[0.12]" />
        <div className="absolute bottom-20 left-[22%] h-[3px] w-16 rounded-full bg-primary/[0.08]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Image */}
          <div className={`relative ${visible ? "animate-slide-right" : "opacity-0"}`}>
            <div className="absolute -inset-3 rounded-2xl bg-primary/[0.06] rotate-1" />
            <div className="relative overflow-hidden rounded-xl border border-border shadow-xl">
              <Image src="/team-work.jpg" alt="WEMAKING team" width={560} height={380} className="h-auto w-full object-cover" />
            </div>
          </div>

          {/* Points */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Why Us</p>
            <h2 className="mt-1.5 font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
              We Deliver What We Promise
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {points.map((p, i) => (
                <div
                  key={p.title}
                  className={`group flex items-center gap-2.5 rounded-lg border border-border bg-card p-3 transition-all hover:shadow-md hover:border-primary/20 ${
                    visible ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="shrink-0 rounded-md bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <p.icon size={15} />
                  </div>
                  <p className="text-xs font-bold text-foreground">{p.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
