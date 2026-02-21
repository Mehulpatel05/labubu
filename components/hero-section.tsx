"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-12 md:pt-28 md:pb-16">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/[0.06]" />
        <div className="absolute top-1/2 -left-32 h-[400px] w-[400px] rounded-full bg-primary/[0.05]" />
        <div className="absolute bottom-0 right-[20%] h-[250px] w-[250px] rounded-full bg-primary/[0.04]" />
        <svg className="absolute top-20 right-16 opacity-[0.08]" width="220" height="220">
          <pattern id="hg" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="hsl(0 100% 44%)" />
          </pattern>
          <rect width="220" height="220" fill="url(#hg)" />
        </svg>
        <svg className="absolute bottom-20 left-4 opacity-[0.06]" width="160" height="160">
          <pattern id="hg2" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="hsl(0 100% 44%)" />
          </pattern>
          <rect width="160" height="160" fill="url(#hg2)" />
        </svg>
        <div className="absolute top-36 left-[6%] h-[3px] w-32 rounded-full bg-primary/[0.12]" />
        <div className="absolute top-56 right-[10%] h-[3px] w-20 rounded-full bg-primary/[0.09]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="animate-fade-up">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                Software Development Studio
              </span>
            </div>

            <h1 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[3.2rem] text-balance">
              We Build{" "}
              <span className="relative inline-block text-primary">
                Software
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                  <path d="M0 3Q50 0 100 3Q150 6 200 3" stroke="hsl(0 100% 44%)" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
                </svg>
              </span>{" "}
              That Runs Your Business
            </h1>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Apps, websites, admin panels & payment systems - delivered ready to launch.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/919680836834"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight size={15} />
              </a>
              <a
                href="tel:+me 919680836834"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Call Us
              </a>
            </div>
          </div>

          <div className="animate-slide-left">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-primary/[0.06] -rotate-2" />
              <div className="absolute -inset-3 rounded-2xl border-2 border-primary/[0.12] rotate-1" />
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
