"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Dumbbell, GraduationCap, UtensilsCrossed, Stethoscope, CreditCard, School } from "lucide-react"

const showcases = [
  { icon: Dumbbell, image: "/showcase-gym.jpg", title: "Gym & Fitness Apps" },
  { icon: GraduationCap, image: "/showcase-course.jpg", title: "Online Course Platforms" },
  { icon: UtensilsCrossed, image: "/showcase-restaurant.jpg", title: "Restaurant Ordering" },
  { icon: Stethoscope, image: null, title: "Clinic Booking Systems" },
  { icon: CreditCard, image: null, title: "Subscription Billing" },
  { icon: School, image: null, title: "School Management" },
]

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.08 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="relative py-12 md:py-16 overflow-hidden bg-secondary/40">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -right-20 h-[450px] w-[450px] rounded-full bg-primary/[0.06]" />
        <div className="absolute bottom-0 -left-24 h-[350px] w-[350px] rounded-full bg-primary/[0.05]" />
        <div className="absolute top-1/3 right-[8%] h-[200px] w-[200px] rounded-full bg-primary/[0.04]" />
        <svg className="absolute top-8 left-6 opacity-[0.07]" width="180" height="180">
          <pattern id="sg" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="hsl(0 100% 44%)" />
          </pattern>
          <rect width="180" height="180" fill="url(#sg)" />
        </svg>
        <svg className="absolute bottom-6 right-10 opacity-[0.05]" width="140" height="140">
          <pattern id="sg2" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="hsl(0 100% 44%)" />
          </pattern>
          <rect width="140" height="140" fill="url(#sg2)" />
        </svg>
        <div className="absolute top-20 right-[30%] h-[3px] w-24 rounded-full bg-primary/[0.12]" />
        <div className="absolute bottom-16 left-[18%] h-[3px] w-20 rounded-full bg-primary/[0.09]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl px-5">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">What We Build</p>
          <h2 className="mt-1.5 font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
            Products We Have Delivered
          </h2>
        </div>

        {/* Top row - 3 cards with images */}
        <div className="grid gap-4 sm:grid-cols-3 mb-4">
          {showcases.slice(0, 3).map((item, i) => (
            <div
              key={item.title}
              className={`group relative rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 h-14 w-14 bg-primary/[0.06] rounded-bl-[2rem]" />
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/70 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 inline-flex rounded-lg bg-primary/10 p-1.5 text-primary backdrop-blur-sm">
                  <item.icon size={16} />
                </div>
              </div>
              <div className="px-4 py-3">
                <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row - 3 icon-only cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {showcases.slice(3).map((item, i) => (
            <div
              key={item.title}
              className={`group relative flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 3) * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 h-10 w-10 bg-primary/[0.06] rounded-bl-xl" />
              <div className="shrink-0 rounded-lg bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon size={20} />
              </div>
              <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
