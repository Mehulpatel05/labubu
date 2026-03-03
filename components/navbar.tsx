'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useStore } from '@/hooks/use-store'
import { Button } from './ui/button'

export function Navbar() {
  const store = useStore()
  const cartCount = store.getCart().reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-pink-600">
          ShopHub
        </Link>
        <Link href="/cart">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>
        </Link>
      </div>
    </nav>
  )
}
