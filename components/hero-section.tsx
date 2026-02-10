"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-14 md:pt-28 md:pb-20">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-primary/[0.04]" />
        <div className="absolute top-1/2 -left-24 h-[350px] w-[350px] rounded-full bg-primary/[0.03]" />
        <div className="absolute bottom-10 right-[10%] h-[200px] w-[200px] rounded-full bg-primary/[0.025]" />
        {/* Grid pattern */}
        <svg className="absolute top-16 right-12 opacity-[0.06]" width="200" height="200">
          <pattern id="heroGrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="hsl(0 100% 44%)" />
          </pattern>
          <rect width="200" height="200" fill="url(#heroGrid)" />
        </svg>
        <svg className="absolute bottom-12 left-8 opacity-[0.04]" width="140" height="140">
          <pattern id="heroGrid2" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="hsl(0 100% 44%)" />
          </pattern>
          <rect width="140" height="140" fill="url(#heroGrid2)" />
        </svg>
        {/* Accent lines */}
        <div className="absolute top-40 left-[8%] h-[2px] w-24 rounded-full bg-primary/10" />
        <div className="absolute top-60 right-[12%] h-[2px] w-16 rounded-full bg-primary/[0.07]" />
        <div className="absolute bottom-32 left-[30%] h-[2px] w-20 rounded-full bg-primary/[0.06]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          {/* Left content */}
          <div className="animate-fade-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                Software Development Studio
              </span>
            </div>

            <h1 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              We Build Complete{" "}
              <span className="relative inline-block text-primary">
                Software Products
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                  <path d="M0 3 Q50 0 100 3 Q150 6 200 3" stroke="hsl(0 100% 44%)" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
                </svg>
              </span>{" "}
              For Your Business
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              From apps to admin panels, payment systems to full platforms. 
              You share the idea, we deliver ready-to-launch software.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://wa.me/918306590731"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight size={16} />
              </a>
              <a
                href="tel:+918306590731"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Call Us Now
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="animate-slide-left">
            <div className="relative">
              {/* Decorative frame behind image */}
              <div className="absolute -inset-3 rounded-2xl bg-primary/[0.04] -rotate-2" />
              <div className="absolute -inset-3 rounded-2xl border border-primary/10 rotate-1" />
              <div className="relative overflow-hidden rounded-xl border border-border shadow-2xl shadow-primary/10">
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
      </div>
    </section>
  )
}
