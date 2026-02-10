"use client"

import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const examples = [
  "Gym Membership App",
  "Online Course Platform",
  "Restaurant Ordering System",
  "Clinic Booking App",
  "Subscription Billing System",
  "School Management Portal",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-10 md:pt-24 md:pb-14">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/5" />
        <div className="absolute top-1/2 -left-16 h-64 w-64 rounded-full bg-primary/4" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-primary/3" />
        {/* Dotted grid pattern */}
        <svg className="absolute top-16 right-8 opacity-10" width="120" height="120">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="hsl(0 100% 44%)" />
          </pattern>
          <rect width="120" height="120" fill="url(#dots)" />
        </svg>
        <svg className="absolute bottom-10 left-10 opacity-[0.07]" width="80" height="80">
          <pattern id="dots2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="hsl(0 100% 44%)" />
          </pattern>
          <rect width="80" height="80" fill="url(#dots2)" />
        </svg>
        {/* Red accent lines */}
        <div className="absolute top-28 left-[15%] h-[2px] w-16 bg-primary/15 rounded-full" />
        <div className="absolute bottom-24 right-[20%] h-[2px] w-12 bg-primary/10 rounded-full" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Left - Text */}
          <div className="animate-fade-up">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                Software Development Studio
              </span>
            </div>

            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] text-balance">
              Aapka Idea, Hamari Coding.{" "}
              <span className="text-primary">Ready Software Deliver.</span>
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Hum aapke liye poora software bana ke dete hain - app, website, admin panel, payment system - sab kuch ready-to-use.
            </p>

            {/* Real-world examples that anyone can understand */}
            <div className="mt-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Jaise hum bana chuke hain:
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {examples.map((ex) => (
                  <div key={ex} className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="shrink-0 text-primary" />
                    <span className="text-xs text-foreground">{ex}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/918306590731"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 shadow-lg shadow-primary/20"
              >
                WhatsApp Pe Baat Karo
                <ArrowRight size={16} />
              </a>
              <a
                href="tel:+918306590731"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Call: +91 8306590731
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="animate-slide-left">
            <div className="relative overflow-hidden rounded-xl shadow-2xl shadow-primary/10 border border-border">
              <Image
                src="/hero-bg.jpg"
                alt="Software products built by WEMAKING"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
