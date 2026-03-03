'use client'

import { Navbar } from '@/components/navbar'
import { useStore } from '@/hooks/use-store'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Package, PackageCheck, Truck, Home, CheckCircle2 } from 'lucide-react'
import { format } from 'date-fns'

const statusSteps = [
  { key: 'ordered', label: 'Order Placed', icon: Package },
  { key: 'packed', label: 'Packed', icon: PackageCheck },
  { key: 'shipped', label: 'Shipped', icon: Truck },
  { key: 'out-for-delivery', label: 'Out for Delivery', icon: Truck },
  { key: 'delivered', label: 'Delivered', icon: Home }
]

export default function TrackOrderPage({ params }: { params: { id: string } }) {
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

  const currentStepIndex = statusSteps.findIndex(step => step.key === order.status)

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Track Your Order</h1>
              <p className="text-gray-600">Order ID: <span className="font-semibold text-pink-600">{order.id}</span></p>
            </div>

            <div className="bg-pink-50 rounded-2xl p-6 mb-12">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Order Date</p>
                  <p className="text-lg font-bold">{format(new Date(order.date), 'dd MMM yyyy')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Estimated Delivery</p>
                  <p className="text-lg font-bold text-green-600">
                    {format(new Date(order.estimatedDelivery), 'dd MMM yyyy')}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                  <p className="text-lg font-bold text-pink-600">₹{order.total}</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-8">Order Status</h2>
              <div className="relative">
                {statusSteps.map((step, index) => {
                  const Icon = step.icon
                  const isCompleted = index <= currentStepIndex
                  const isCurrent = index === currentStepIndex

                  return (
                    <div key={step.key} className="relative flex items-start mb-8 last:mb-0">
                      {index < statusSteps.length - 1 && (
                        <div
                          className={`absolute left-6 top-12 w-0.5 h-full -ml-px transition-colors duration-500 ${
                            isCompleted ? 'bg-pink-600' : 'bg-gray-300'
                          }`}
                        />
                      )}
                      
                      <div className="relative z-10 flex items-center">
                        <div
                          className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ${
                            isCompleted
                              ? 'bg-pink-600 text-white scale-110'
                              : 'bg-gray-200 text-gray-400'
                          } ${isCurrent ? 'ring-4 ring-pink-200 animate-pulse' : ''}`}
                        >
                          {isCompleted && index < currentStepIndex ? (
                            <CheckCircle2 className="w-6 h-6" />
                          ) : (
                            <Icon className="w-6 h-6" />
                          )}
                        </div>
                        
                        <div className="ml-6">
                          <h3
                            className={`text-lg font-bold transition-colors ${
                              isCompleted ? 'text-gray-900' : 'text-gray-400'
                            }`}
                          >
                            {step.label}
                          </h3>
                          {isCurrent && (
                            <p className="text-sm text-pink-600 font-semibold mt-1">
                              Current Status
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-lg mb-3">Delivery Address</h3>
              <p className="font-semibold">{order.customer.name}</p>
              <p className="text-gray-600">{order.customer.phone}</p>
              <p className="text-gray-600 mt-2">
                {order.customer.address}, {order.customer.city}, {order.customer.state} - {order.customer.pincode}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-lg mb-3">Order Items</h3>
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-2">
                  <span className="text-gray-700">{item.name} x {item.quantity}</span>
                  <span className="font-semibold">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={() => router.push('/')}
              variant="outline"
              className="w-full text-lg py-6"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
