"use client"

import { useEffect, useRef, useState } from "react"
import { Lightbulb, Code2, Rocket, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    label: "You Share Your Idea",
    desc: "Tell us what you want to build",
    num: "01",
  },
  {
    icon: Code2,
    label: "We Design & Develop",
    desc: "Our team builds your product",
    num: "02",
  },
  {
    icon: Rocket,
    label: "Launch & Earn",
    desc: "Go live and start getting users",
    num: "03",
  },
]

export function ProcessSection() {
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
    <section id="process" className="relative bg-foreground py-12 md:py-16 overflow-hidden">
      {/* Background design */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-1/4 h-px w-40 bg-primary/20 animate-pulse-line" />
        <div className="absolute bottom-20 right-1/4 h-px w-32 bg-primary/15 animate-pulse-line" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-10 h-32 w-px bg-primary/10 animate-pulse-line" style={{ animationDelay: "0.5s" }} />
        <div className="absolute -top-16 right-0 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl px-4">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-primary">
          How It Works
        </p>
        <h2 className="mt-1 text-center font-display text-2xl font-bold text-background md:text-3xl text-balance">
          Idea to Launch in 3 Steps
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className={`relative group rounded-lg border border-background/10 bg-background/5 p-5 transition-all hover:bg-background/10 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <span className="absolute top-3 right-3 text-2xl font-bold text-primary/20 font-display">
                {step.num}
              </span>
              <div className="mb-3 inline-flex rounded-md bg-primary/15 p-2.5 text-primary">
                <step.icon size={20} />
              </div>
              <h3 className="text-sm font-bold text-background">{step.label}</h3>
              <p className="mt-1 text-[11px] text-background/50">{step.desc}</p>

              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden sm:block text-primary/40 z-10">
                  <ArrowRight size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
