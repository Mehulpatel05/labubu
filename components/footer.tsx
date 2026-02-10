import Image from "next/image"
import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between">
        <Image
          src="/logo.jpg"
          alt="WEMAKING logo"
          width={100}
          height={26}
          className="h-6 w-auto"
        />

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a
            href="tel:+918306590731"
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <Phone size={12} />
            +91 8306590731
          </a>
          <a
            href="mailto:swatmehul5@gmail.com"
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <Mail size={12} />
            swatmehul5@gmail.com
          </a>
        </div>

        <p className="text-[10px] text-muted-foreground">
          {"© 2026 WEMAKING. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
