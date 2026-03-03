'use client'

import { Navbar } from '@/components/navbar'
import { useStore } from '@/hooks/use-store'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { format } from 'date-fns'
import { Package } from 'lucide-react'
import { toast } from 'sonner'

export default function AdminPage() {
  const store = useStore()
  const orders = store.getOrders()

  const handleStatusUpdate = (orderId: string, status: any) => {
    store.updateOrderStatus(orderId, status)
    toast.success('Order status updated!')
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Admin Panel</h1>
            <div className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold">
              {orders.length} Total Orders
            </div>
          </div>

          {orders.length === 0 ? (
            <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
              <Package className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No orders yet</h2>
              <p className="text-gray-600">Orders will appear here once customers place them</p>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Order ID</p>
                      <p className="font-bold text-pink-600">{order.id}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Customer</p>
                      <p className="font-semibold">{order.customer.name}</p>
                      <p className="text-sm text-gray-600">{order.customer.phone}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Order Date</p>
                      <p className="font-semibold">{format(new Date(order.date), 'dd MMM yyyy')}</p>
                      <p className="text-sm text-gray-600">Total: ₹{order.total}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Update Status</p>
                      <Select value={order.status} onValueChange={(value) => handleStatusUpdate(order.id, value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ordered">Ordered</SelectItem>
                          <SelectItem value="packed">Packed</SelectItem>
                          <SelectItem value="shipped">Shipped</SelectItem>
                          <SelectItem value="out-for-delivery">Out for Delivery</SelectItem>
                          <SelectItem value="delivered">Delivered</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm font-semibold mb-2">Items:</p>
                    <div className="flex flex-wrap gap-2">
                      {order.items.map((item) => (
                        <span key={item.id} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                          {item.name} x {item.quantity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm font-semibold mb-1">Delivery Address:</p>
                    <p className="text-sm text-gray-600">
                      {order.customer.address}, {order.customer.city}, {order.customer.state} - {order.customer.pincode}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
