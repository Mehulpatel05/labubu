'use client'

import { products } from '@/lib/products'
import { Navbar } from '@/components/navbar'
import { useStore } from '@/hooks/use-store'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { toast } from 'sonner'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id)
  const [quantity, setQuantity] = useState(1)
  const store = useStore()
  const router = useRouter()

  if (!product) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    store.addToCart(product, quantity)
    toast.success('Added to cart!')
  }

  const handleBuyNow = () => {
    store.addToCart(product, quantity)
    router.push('/checkout')
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="relative h-96 md:h-full rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h1>
                  <p className="text-gray-600 text-lg mb-6">
                    {product.description}
                  </p>
                  <div className="text-4xl font-bold text-pink-600 mb-6">
                    ₹{product.price}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Specifications:</h3>
                  <ul className="space-y-2">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-pink-600 rounded-full mr-3"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="font-semibold">Quantity:</span>
                  <div className="flex items-center border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-6 font-semibold">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    onClick={handleAddToCart}
                    variant="outline"
                    size="lg"
                    className="flex-1 text-lg"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button
                    onClick={handleBuyNow}
                    size="lg"
                    className="flex-1 bg-pink-600 hover:bg-pink-700 text-lg"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
