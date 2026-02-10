"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-10 md:pt-24 md:pb-14">
      {/* Decorative accent lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 right-0 h-px w-1/3 bg-primary/20 animate-pulse-line" />
        <div className="absolute top-40 left-0 h-px w-1/4 bg-primary/15 animate-pulse-line" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-32 right-10 h-24 w-px bg-primary/10 animate-pulse-line" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-2 md:gap-10">
        <div className="animate-fade-up">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            SaaS Development Studio
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            We Build Mini SaaS That Works.
          </h1>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            From idea to live product.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/918306590731"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Get Free Demo
              <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="animate-slide-left">
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/hero-bg.jpg"
              alt="Modern SaaS workspace"
              width={600}
              height={400}
              className="h-auto w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-primary/5" />
          </div>
        </div>
      </div>
    </section>
  )
}
