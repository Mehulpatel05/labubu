"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Mail, Phone } from "lucide-react"

export function CTASection() {
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
    <section id="contact" className="relative bg-primary/[0.04] py-14 md:py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-primary/[0.04]" />
        <div className="absolute -bottom-16 -right-16 h-[300px] w-[300px] rounded-full bg-primary/[0.03]" />
        <svg className="absolute top-8 right-12 opacity-[0.04]" width="160" height="160">
          <pattern id="ctaGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="hsl(0 100% 44%)" />
          </pattern>
          <rect width="160" height="160" fill="url(#ctaGrid)" />
        </svg>
        <div className="absolute top-12 left-[15%] h-[2px] w-24 rounded-full bg-primary/10" />
        <div className="absolute bottom-10 right-[25%] h-[2px] w-16 rounded-full bg-primary/[0.07]" />
      </div>

      <div
        ref={ref}
        className={`relative mx-auto max-w-xl px-5 text-center ${visible ? "animate-fade-up" : "opacity-0"}`}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
          Let{"'"}s Talk
        </p>
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl lg:text-4xl text-balance">
          Have An Idea?{" "}
          <span className="text-primary">Let{"'"}s Build It.</span>
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Free consultation. We reply within 24 hours.
        </p>

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/918306590731"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
          >
            <MessageCircle size={16} />
            Chat On WhatsApp
          </a>
          <a
            href="tel:+918306590731"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Phone size={16} className="text-primary" />
            +91 8306590731
          </a>
        </div>

        <a
          href="mailto:swatmehul5@gmail.com"
          className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <Mail size={12} />
          swatmehul5@gmail.com
        </a>
      </div>
    </section>
  )
}
