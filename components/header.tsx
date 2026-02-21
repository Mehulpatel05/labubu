import Image from "next/image"
import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="WEMAKING logo"
            width={140}
            height={36}
            className="h-8 w-auto"
            priority
          />
        </a>

        <a
          href="tel:+918306590731"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <Phone size={14} className="text-primary" />
          <span className="hidden sm:inline">+91 9680836834</span>
        </a>
      </div>
    </header>
  )
}
