"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Paintbrush, Code2, Rocket, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    label: "Aap Idea Batao",
    desc: "WhatsApp ya call pe baat karo - kya banana hai",
    num: "01",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Paintbrush,
    label: "Hum Design Karte Hain",
    desc: "Poora look & feel dikhate hain pehle",
    num: "02",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Code2,
    label: "Coding & Development",
    desc: "Full software ban ke tayyar hota hai",
    num: "03",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Rocket,
    label: "Live & Earn Karo",
    desc: "Aapka software live - ab customers aayenge",
    num: "04",
    color: "bg-primary/10 text-primary",
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
    <section id="process" className="relative bg-background py-12 md:py-16 overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-primary/[0.03]" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-primary/[0.02]" />
        <div className="absolute top-20 left-[10%] h-[2px] w-20 bg-primary/10 rounded-full" />
        <div className="absolute bottom-16 right-[15%] h-[2px] w-14 bg-primary/[0.07] rounded-full" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl px-4">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Kaise Kaam Hota Hai
          </p>
          <h2 className="mt-1 font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
            4 Simple Steps - Idea Se Live Product Tak
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className={`relative group rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md hover:border-primary/20 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <span className="absolute top-3 right-3 text-2xl font-bold text-primary/10 font-display">
                {step.num}
              </span>
              <div className={`mb-3 inline-flex rounded-lg p-2.5 ${step.color}`}>
                <step.icon size={18} />
              </div>
              <h3 className="text-sm font-bold text-foreground">{step.label}</h3>
              <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">{step.desc}</p>

              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden lg:block text-primary/30 z-10">
                  <ArrowRight size={14} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
