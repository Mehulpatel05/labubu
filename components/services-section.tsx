"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Dumbbell, GraduationCap, UtensilsCrossed, Stethoscope, CreditCard, School } from "lucide-react"

const showcases = [
  {
    icon: Dumbbell,
    image: "/showcase-gym.jpg",
    title: "Gym & Salon Membership",
    desc: "Member login, online payment, plan management & attendance tracking.",
  },
  {
    icon: GraduationCap,
    image: "/showcase-course.jpg",
    title: "Online Course Platform",
    desc: "Upload courses, students enroll & pay, track revenue in one dashboard.",
  },
  {
    icon: UtensilsCrossed,
    image: "/showcase-restaurant.jpg",
    title: "Restaurant Ordering System",
    desc: "Digital menu, online orders, kitchen view & delivery tracking.",
  },
  {
    icon: Stethoscope,
    image: null,
    title: "Clinic Booking App",
    desc: "Patients book online, doctor manages slots, automated reminders.",
  },
  {
    icon: CreditCard,
    image: null,
    title: "Subscription Billing",
    desc: "Recurring payments, invoicing, plan upgrades & revenue analytics.",
  },
  {
    icon: School,
    image: null,
    title: "School Management Portal",
    desc: "Student records, fees, attendance & parent communication system.",
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
      { threshold: 0.08 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="relative py-14 md:py-20 overflow-hidden bg-secondary/40">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-16 h-[400px] w-[400px] rounded-full bg-primary/[0.035]" />
        <div className="absolute bottom-0 -left-20 h-[300px] w-[300px] rounded-full bg-primary/[0.025]" />
        <div className="absolute top-1/2 right-[5%] h-[180px] w-[180px] rounded-full bg-primary/[0.02]" />
        <svg className="absolute top-10 left-10 opacity-[0.05]" width="160" height="160">
          <pattern id="svcGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="hsl(0 100% 44%)" />
          </pattern>
          <rect width="160" height="160" fill="url(#svcGrid)" />
        </svg>
        <svg className="absolute bottom-10 right-16 opacity-[0.04]" width="120" height="120">
          <pattern id="svcGrid2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="hsl(0 100% 44%)" />
          </pattern>
          <rect width="120" height="120" fill="url(#svcGrid2)" />
        </svg>
        <div className="absolute top-24 right-[25%] h-[2px] w-20 rounded-full bg-primary/10" />
        <div className="absolute bottom-20 left-[15%] h-[2px] w-16 rounded-full bg-primary/[0.07]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl px-5">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            What We Build
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl lg:text-4xl text-balance">
            Real Products For Real Businesses
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-lg mx-auto">
            We build complete software with admin panels, user dashboards, 
            payment integration & everything your business needs.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {showcases.map((item, i) => (
            <div
              key={item.title}
              className={`group relative rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 h-16 w-16 bg-primary/[0.04] rounded-bl-[2rem]" />

              {item.image ? (
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex rounded-lg bg-primary/10 p-2 text-primary backdrop-blur-sm">
                    <item.icon size={18} />
                  </div>
                </div>
              ) : (
                <div className="flex h-40 items-center justify-center bg-secondary/60">
                  <div className="rounded-xl bg-primary/10 p-4 text-primary">
                    <item.icon size={28} />
                  </div>
                </div>
              )}

              <div className="p-5">
                <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
