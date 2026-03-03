// Simple state management for cart and orders
export interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  category: string
  specs: string[]
}

export interface CartItem extends Product {
  quantity: number
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  customer: {
    name: string
    phone: string
    email: string
    address: string
    city: string
    state: string
    pincode: string
  }
  payment: string
  status: 'ordered' | 'packed' | 'shipped' | 'out-for-delivery' | 'delivered'
  date: string
  estimatedDelivery: string
}

class Store {
  private cart: CartItem[] = []
  private orders: Order[] = []
  private listeners: (() => void)[] = []

  subscribe(listener: () => void) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
  }

  private notify() {
    this.listeners.forEach(listener => listener())
  }

  getCart() {
    return this.cart
  }

  addToCart(product: Product, quantity: number = 1) {
    const existing = this.cart.find(item => item.id === product.id)
    if (existing) {
      existing.quantity += quantity
    } else {
      this.cart.push({ ...product, quantity })
    }
    this.notify()
  }

  updateQuantity(productId: string, quantity: number) {
    const item = this.cart.find(item => item.id === productId)
    if (item) {
      item.quantity = quantity
      if (item.quantity <= 0) {
        this.cart = this.cart.filter(item => item.id !== productId)
      }
      this.notify()
    }
  }

  removeFromCart(productId: string) {
    this.cart = this.cart.filter(item => item.id !== productId)
    this.notify()
  }

  clearCart() {
    this.cart = []
    this.notify()
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  createOrder(customer: Order['customer'], payment: string): Order {
    const order: Order = {
      id: `ORD${Date.now()}`,
      items: [...this.cart],
      total: this.getTotal(),
      customer,
      payment,
      status: 'ordered',
      date: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()
    }
    this.orders.push(order)
    this.clearCart()
    this.notify()
    return order
  }

  getOrders() {
    return this.orders
  }

  getOrder(orderId: string) {
    return this.orders.find(order => order.id === orderId)
  }

  updateOrderStatus(orderId: string, status: Order['status']) {
    const order = this.orders.find(order => order.id === orderId)
    if (order) {
      order.status = status
      this.notify()
    }
  }
}

export const store = new Store()
