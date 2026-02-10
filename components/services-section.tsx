"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Layers, Rocket, CreditCard, BarChart3, Globe, Settings } from "lucide-react"

const services = [
  {
    icon: Layers,
    title: "Mini SaaS Products",
    desc: "Custom web apps with login, dashboard & billing",
  },
  {
    icon: Rocket,
    title: "MVP for Startups",
    desc: "Launch-ready product in weeks, not months",
  },
  {
    icon: CreditCard,
    title: "Subscription Systems",
    desc: "Stripe, Razorpay payments built-in",
  },
  {
    icon: BarChart3,
    title: "Admin Dashboards",
    desc: "Manage users, data & analytics",
  },
  {
    icon: Globe,
    title: "Landing Pages",
    desc: "High-converting pages that sell",
  },
  {
    icon: Settings,
    title: "API & Integrations",
    desc: "Connect any tool or service",
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
      { threshold: 0.15 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="relative py-12 md:py-16 overflow-hidden">
      {/* Background design */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 -left-10 h-40 w-40 rounded-full bg-primary/3 blur-2xl" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Left - Image */}
          <div
            className={`overflow-hidden rounded-lg shadow-lg ${visible ? "animate-slide-right" : "opacity-0"}`}
          >
            <Image
              src="/services-bg.jpg"
              alt="SaaS products built by WEMAKING"
              width={600}
              height={400}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Right - Services grid */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              What We Build
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
              Everything Your SaaS Needs
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className={`group rounded-lg border border-border bg-card p-3.5 transition-all hover:shadow-md hover:border-primary/30 ${
                    visible ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="mb-2 inline-flex rounded-md bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon size={16} />
                  </div>
                  <h3 className="text-xs font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-0.5 text-[10px] leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
