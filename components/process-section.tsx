"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Paintbrush, Code2, Rocket } from "lucide-react"

const steps = [
  { icon: MessageCircle, num: "01", label: "Share Your Idea" },
  { icon: Paintbrush, num: "02", label: "We Design It" },
  { icon: Code2, num: "03", label: "We Build It" },
  { icon: Rocket, num: "04", label: "Go Live" },
]

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="relative bg-background py-12 md:py-16 overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.05]" />
        <div className="absolute bottom-0 right-[8%] h-[300px] w-[300px] rounded-full bg-primary/[0.04]" />
        <svg className="absolute top-8 right-6 opacity-[0.07]" width="160" height="160">
          <pattern id="pg" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="hsl(0 100% 44%)" />
          </pattern>
          <rect width="160" height="160" fill="url(#pg)" />
        </svg>
        <div className="absolute top-24 left-[6%] h-[3px] w-28 rounded-full bg-primary/[0.12]" />
        <div className="absolute bottom-16 right-[18%] h-[3px] w-20 rounded-full bg-primary/[0.08]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-5xl px-5">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">How It Works</p>
          <h2 className="mt-1.5 font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
            Idea To Launch In 4 Steps
          </h2>
        </div>

        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className={`relative group rounded-xl border border-border bg-card p-5 text-center transition-all hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="absolute top-3 right-3 text-3xl font-bold text-primary/[0.08] font-display leading-none">
                {step.num}
              </span>
              <div className="absolute bottom-0 left-0 h-10 w-10 bg-primary/[0.05] rounded-tr-[1.5rem]" />
              <div className="relative">
                <div className="mx-auto mb-3 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <step.icon size={20} />
                </div>
                <h3 className="text-sm font-bold text-foreground">{step.label}</h3>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-10 h-5 w-5 rounded-full bg-primary/10 text-primary">
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <path d="M1 5h7M6 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
