"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Mail } from "lucide-react"

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
    <section id="contact" className="relative bg-foreground py-10 md:py-14 overflow-hidden">
      {/* Background design */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />
      </div>

      <div
        ref={ref}
        className={`relative mx-auto max-w-xl px-4 text-center ${visible ? "animate-fade-up" : "opacity-0"}`}
      >
        <h2 className="font-display text-2xl font-bold text-background md:text-3xl text-balance">
          {"Have an Idea? Let's Build It."}
        </h2>
        <p className="mt-2 text-xs text-background/50">
          Talk to us. We reply within 24 hours.
        </p>

        <div className="mt-5 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/918306590731"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
          <a
            href="mailto:swatmehul5@gmail.com"
            className="inline-flex items-center gap-2 rounded-md border border-background/20 px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-background/10"
          >
            <Mail size={16} />
            swatmehul5@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
