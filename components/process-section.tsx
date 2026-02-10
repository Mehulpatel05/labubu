"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Paintbrush, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    num: "01",
    label: "Share Your Idea",
    desc: "Tell us what you want to build via WhatsApp or call.",
  },
  {
    icon: Paintbrush,
    num: "02",
    label: "We Design It",
    desc: "We create the complete look & flow of your product.",
  },
  {
    icon: Code2,
    num: "03",
    label: "We Build It",
    desc: "Full development with admin panel, payments & more.",
  },
  {
    icon: Rocket,
    num: "04",
    label: "Go Live & Earn",
    desc: "Your software goes live. Start getting customers.",
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
      { threshold: 0.15 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="relative bg-background py-14 md:py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 h-[350px] w-[350px] rounded-full bg-primary/[0.03]" />
        <div className="absolute bottom-0 right-[10%] h-[250px] w-[250px] rounded-full bg-primary/[0.025]" />
        <svg className="absolute top-12 right-8 opacity-[0.05]" width="140" height="140">
          <pattern id="procGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="hsl(0 100% 44%)" />
          </pattern>
          <rect width="140" height="140" fill="url(#procGrid)" />
        </svg>
        <div className="absolute top-28 left-[8%] h-[2px] w-28 rounded-full bg-primary/10" />
        <div className="absolute bottom-20 right-[20%] h-[2px] w-16 rounded-full bg-primary/[0.06]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl px-5">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl lg:text-4xl text-balance">
            From Idea To Live Product In 4 Steps
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className={`relative group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Large decorative number */}
              <span className="absolute top-4 right-4 text-4xl font-bold text-primary/[0.07] font-display leading-none">
                {step.num}
              </span>
              {/* Decorative corner */}
              <div className="absolute bottom-0 left-0 h-12 w-12 bg-primary/[0.03] rounded-tr-[1.5rem]" />

              <div className="relative">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <step.icon size={20} />
                </div>
                <h3 className="text-sm font-bold text-foreground">{step.label}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>

              {/* Connector arrow for desktop */}
              {i < steps.length - 1 && (
                <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-10 h-6 w-6 rounded-full bg-primary/10 text-primary">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
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
