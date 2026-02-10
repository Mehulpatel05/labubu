"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Lightbulb, Code2, Rocket } from "lucide-react"

const steps = [
  { icon: Lightbulb, label: "Idea", color: "bg-primary/10 text-primary" },
  { icon: Code2, label: "Build", color: "bg-primary/20 text-primary" },
  { icon: Rocket, label: "Launch", color: "bg-primary text-primary-foreground" },
]

export function ProcessSection() {
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
    <section id="process" className="py-12 md:py-16">
      <div ref={ref} className="mx-auto max-w-6xl px-4">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-primary">
          How It Works
        </p>
        <h2 className="mt-2 text-center font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
          Simple 3-Step Process
        </h2>

        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          {/* Steps */}
          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <div
                key={step.label}
                className={`flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all ${
                  visible ? "animate-slide-right" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className={`inline-flex rounded-md p-2.5 ${step.color}`}>
                  <step.icon size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Step {i + 1}
                  </span>
                  <p className="text-sm font-bold text-foreground">{step.label}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="ml-auto hidden text-primary/40 md:block">
                    {"-->"}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image */}
          <div
            className={`overflow-hidden rounded-lg shadow-lg ${
              visible ? "animate-slide-left" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <Image
              src="/saas-dashboard.jpg"
              alt="SaaS product dashboard"
              width={600}
              height={400}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
