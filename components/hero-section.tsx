"use client"

import Image from "next/image"
import { ArrowRight, Code2, Rocket, CreditCard } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-foreground pt-16 pb-0 md:pt-20">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-16 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-32 left-1/4 h-px w-32 bg-primary/30 animate-pulse-line" />
        <div className="absolute top-48 right-1/3 h-px w-24 bg-primary/20 animate-pulse-line" style={{ animationDelay: "0.7s" }} />
        <div className="absolute bottom-40 right-16 h-20 w-px bg-primary/20 animate-pulse-line" style={{ animationDelay: "1.2s" }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
          {/* Left - Text */}
          <div className="animate-fade-up py-8 md:py-14">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                SaaS Development Studio
              </span>
            </div>

            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-background md:text-4xl lg:text-5xl text-balance">
              We Build Your SaaS Idea Into a Real Product
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-background/60">
              You bring the idea. We design, develop & launch your mini SaaS, MVP, or subscription platform - ready to earn.
            </p>

            {/* Quick service tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { icon: Code2, label: "SaaS Apps" },
                { icon: Rocket, label: "MVPs" },
                { icon: CreditCard, label: "Payment Systems" },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-1.5 rounded-md bg-background/10 px-2.5 py-1 text-[11px] font-medium text-background/80"
                >
                  <tag.icon size={12} className="text-primary" />
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/918306590731"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/918306590731"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-background/20 px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-background/10"
              >
                Get Free Demo
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="animate-slide-left">
            <div className="relative overflow-hidden rounded-t-lg md:rounded-lg shadow-2xl">
              <Image
                src="/hero-bg.jpg"
                alt="SaaS product being built at WEMAKING studio"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
