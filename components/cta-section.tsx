"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Mail, Phone } from "lucide-react"

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="relative bg-primary/[0.05] py-12 md:py-16 overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[450px] w-[450px] rounded-full bg-primary/[0.06]" />
        <div className="absolute -bottom-20 -right-20 h-[350px] w-[350px] rounded-full bg-primary/[0.05]" />
        <svg className="absolute top-6 right-8 opacity-[0.06]" width="180" height="180">
          <pattern id="cg" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="hsl(0 100% 44%)" />
          </pattern>
          <rect width="180" height="180" fill="url(#cg)" />
        </svg>
        <div className="absolute top-10 left-[12%] h-[3px] w-28 rounded-full bg-primary/[0.12]" />
        <div className="absolute bottom-8 right-[20%] h-[3px] w-20 rounded-full bg-primary/[0.08]" />
      </div>

      <div
        ref={ref}
        className={`relative mx-auto max-w-lg px-5 text-center ${visible ? "animate-fade-up" : "opacity-0"}`}
      >
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
          Have An Idea?{" "}
          <span className="text-primary">{"Let's"} Build It.</span>
        </h2>

        <div className="mt-5 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/919680836834"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
          >
            <MessageCircle size={15} />
            WhatsApp Us
          </a>
          <a
            href="tel:+919680836834"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Phone size={15} className="text-primary" />
            +91 9680836834
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
