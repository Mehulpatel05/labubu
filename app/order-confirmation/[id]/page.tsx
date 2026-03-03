'use client'

import { Navbar } from '@/components/navbar'
import { useStore } from '@/hooks/use-store'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import { format } from 'date-fns'

export default function OrderConfirmationPage({ params }: { params: { id: string } }) {
  const store = useStore()
  const order = store.getOrder(params.id)
  const router = useRouter()

  if (!order) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Order not found</h2>
            <Button onClick={() => router.push('/')} className="bg-pink-600 hover:bg-pink-700">
              Go to Home
            </Button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
              <p className="text-gray-600">Thank you for your purchase</p>
            </div>

            <div className="bg-pink-50 rounded-2xl p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Order ID</p>
                  <p className="text-xl font-bold text-pink-600">{order.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Order Date</p>
                  <p className="text-xl font-bold">{format(new Date(order.date), 'dd MMM yyyy')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Estimated Delivery</p>
                  <p className="text-xl font-bold text-green-600">
                    {format(new Date(order.estimatedDelivery), 'dd MMM yyyy')}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Payment Method</p>
                  <p className="text-xl font-bold uppercase">{order.payment}</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Delivery Address</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="font-semibold text-lg mb-2">{order.customer.name}</p>
                <p className="text-gray-600">{order.customer.phone}</p>
                {order.customer.email && <p className="text-gray-600">{order.customer.email}</p>}
                <p className="text-gray-600 mt-2">
                  {order.customer.address}, {order.customer.city}, {order.customer.state} - {order.customer.pincode}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Order Items</h2>
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-gray-50 rounded-xl p-4">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-pink-600">₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t mt-6 pt-6">
                <div className="flex justify-between text-2xl font-bold">
                  <span>Total Amount</span>
                  <span className="text-pink-600">₹{order.total}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => router.push(`/track-order/${order.id}`)}
                className="flex-1 bg-pink-600 hover:bg-pink-700 text-lg py-6"
              >
                Track Order
              </Button>
              <Button
                onClick={() => router.push('/')}
                variant="outline"
                className="flex-1 text-lg py-6"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
