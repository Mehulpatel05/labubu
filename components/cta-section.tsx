"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, ArrowRight } from "lucide-react"

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="bg-foreground py-12 md:py-16">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl px-4 text-center ${
          visible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <h2 className="font-display text-2xl font-bold text-background md:text-3xl text-balance">
          {"Have an idea? Let's make it."}
        </h2>
        <p className="mt-2 text-xs text-background/60">
          Talk to us and get started within 24 hours.
        </p>

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/918306590731"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <MessageCircle size={16} />
            Talk on WhatsApp
          </a>
          <a
            href="mailto:swatmehul5@gmail.com"
            className="inline-flex items-center gap-2 rounded-md border border-background/20 px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-background/10"
          >
            Email Us
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
