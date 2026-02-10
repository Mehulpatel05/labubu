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
    <section id="contact" className="relative bg-primary/5 py-10 md:py-14 overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-40 w-40 rounded-full bg-primary/[0.04]" />
        <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-primary/[0.03]" />
        <div className="absolute top-8 right-[20%] h-[2px] w-16 bg-primary/10 rounded-full" />
      </div>

      <div
        ref={ref}
        className={`relative mx-auto max-w-xl px-4 text-center ${visible ? "animate-fade-up" : "opacity-0"}`}
      >
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
          Koi Idea Hai? Baat Karo Humse.
        </h2>
        <p className="mt-2 text-xs text-muted-foreground">
          24 ghante me reply milega. Free consultation.
        </p>

        <div className="mt-5 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/918306590731"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 shadow-lg shadow-primary/20"
          >
            <MessageCircle size={16} />
            WhatsApp Pe Baat Karo
          </a>
          <a
            href="tel:+918306590731"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Phone size={16} className="text-primary" />
            +91 8306590731
          </a>
        </div>

        <a
          href="mailto:swatmehul5@gmail.com"
          className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <Mail size={12} />
          swatmehul5@gmail.com
        </a>
      </div>
    </section>
  )
}
