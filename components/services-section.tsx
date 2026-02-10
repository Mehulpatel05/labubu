"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const showcases = [
  {
    image: "/showcase-gym.jpg",
    title: "Gym / Salon Membership App",
    desc: "Members login kare, plan le, payment kare - sab automatic",
    tags: ["Login System", "Online Payment", "Member Dashboard"],
  },
  {
    image: "/showcase-course.jpg",
    title: "Online Course Selling Platform",
    desc: "Video course upload karo, students enroll hote hain, payment aata hai",
    tags: ["Video Hosting", "Student Panel", "Revenue Tracking"],
  },
  {
    image: "/showcase-restaurant.jpg",
    title: "Restaurant / Food Ordering",
    desc: "Customer phone se order kare, aap kitchen me dekho, delivery track karo",
    tags: ["Menu System", "Order Tracking", "Payment Gateway"],
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
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="relative py-12 md:py-16 overflow-hidden bg-secondary/50">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-primary/[0.03]" />
        <div className="absolute bottom-0 -left-10 h-48 w-48 rounded-full bg-primary/[0.02]" />
        <svg className="absolute top-8 left-8 opacity-[0.06]" width="100" height="100">
          <pattern id="dots3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="hsl(0 100% 44%)" />
          </pattern>
          <rect width="100" height="100" fill="url(#dots3)" />
        </svg>
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl px-4">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Yeh Sab Hum Banate Hain
          </p>
          <h2 className="mt-1 font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
            Dekho, Samjho - Bas Aise Software Bante Hain
          </h2>
          <p className="mt-2 text-xs text-muted-foreground max-w-md mx-auto">
            Jo bhi business idea ho - hum uska poora software bana ke dete hain with admin panel, payment, and user login.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {showcases.map((item, i) => (
            <div
              key={item.title}
              className={`group rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-lg hover:border-primary/20 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{item.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/5 border border-primary/10 px-2 py-0.5 text-[9px] font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
