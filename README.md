# ShopHub E-commerce Website

Complete e-commerce website for selling Labubu Earphones and iPhone Charger Cases.

## Features

### Customer Features:
1. **Product Gallery (Homepage)** - `/`
   - Grid layout with all products
   - Smooth animations (fade-in, hover effects)
   - Mobile-friendly responsive design
   - Click to view product details

2. **Product Detail Page** - `/product/[id]`
   - Product image and description
   - Price and specifications
   - Quantity selector
   - "Add to Cart" button
   - "Buy Now" button (direct checkout)

3. **Shopping Cart** - `/cart`
   - List of added products
   - Quantity adjustment (+/-)
   - Remove items
   - Total price calculation
   - "Proceed to Checkout" button

4. **Checkout Page** - `/checkout`
   - Customer details form (Name, Phone, Email)
   - Delivery address (Street, City, State, PIN code)
   - Payment method selection (COD, UPI, Card)
   - Order summary sidebar

5. **Order Confirmation** - `/order-confirmation/[id]`
   - Order ID and details
   - Estimated delivery date
   - Customer and delivery information
   - "Track Order" button

6. **Order Tracking** - `/track-order/[id]`
   - Order status timeline with animations
   - Status: Ordered → Packed → Shipped → Out for Delivery → Delivered
   - Delivery address
   - Order items list

### Admin Features:
7. **Admin Panel** - `/admin`
   - View all orders
   - Update order status
   - Customer details
   - Order management

## Setup Instructions

1. Install dependencies:
```bash
npm install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Pages

- `/` - Homepage with product gallery
- `/product/[id]` - Product detail page
- `/cart` - Shopping cart
- `/checkout` - Checkout form
- `/order-confirmation/[id]` - Order confirmation
- `/track-order/[id]` - Order tracking
- `/admin` - Admin panel

## Products

### Labubu Earphones (₹1,299)
- Pink, White, Blue variants
- Bluetooth 5.0
- 4-5 hours battery
- Touch controls

### iPhone Charger Cases (₹899)
- Black, Blue, Pink variants
- Wireless charging support
- Drop protection
- Slim design

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Radix UI (components)
- Lucide React (icons)
- Sonner (toast notifications)
- date-fns (date formatting)

## Mobile Friendly

- Fully responsive design
- Touch-friendly buttons
- Optimized for all screen sizes
- Smooth animations

## State Management

Simple in-memory store for:
- Shopping cart
- Orders
- Order tracking

Note: Data is stored in memory and will reset on page refresh. For production, integrate with a backend database.
