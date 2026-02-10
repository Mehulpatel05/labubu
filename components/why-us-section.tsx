"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Zap, Shield, DollarSign, Headphones } from "lucide-react"

const points = [
  { icon: Zap, title: "Fast Delivery", desc: "Live in 2-4 weeks" },
  { icon: Shield, title: "Clean Code", desc: "Scalable & secure" },
  { icon: DollarSign, title: "Fair Pricing", desc: "No hidden costs" },
  { icon: Headphones, title: "Full Support", desc: "We stay with you" },
]

export function WhyUsSection() {
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
    <section id="why-us" className="relative py-12 md:py-16 overflow-hidden">
      {/* Background design */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-10 right-0 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Left - Points */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Why Choose Us
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
              We Deliver, You Grow
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {points.map((p, i) => (
                <div
                  key={p.title}
                  className={`flex flex-col gap-1.5 rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md hover:border-primary/30 ${
                    visible ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="inline-flex w-fit rounded-md bg-primary/10 p-2 text-primary">
                    <p.icon size={16} />
                  </div>
                  <p className="text-xs font-bold text-foreground">{p.title}</p>
                  <p className="text-[10px] text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div
            className={`overflow-hidden rounded-lg shadow-lg ${visible ? "animate-slide-left" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <Image
              src="/team-work.jpg"
              alt="WEMAKING team building your SaaS product"
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
