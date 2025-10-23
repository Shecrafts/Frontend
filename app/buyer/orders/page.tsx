"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Package, MapPin, Calendar, DollarSign } from "lucide-react"

const MOCK_ORDERS = [
  {
    id: "#ORD-001",
    product: "Handwoven Kente Cloth",
    seller: "Ama's Textiles",
    price: 85.0,
    quantity: 1,
    status: "Completed",
    orderDate: "2024-06-10",
    deliveryDate: "2024-06-18",
    image: "/placeholder.svg",
  },
  {
    id: "#ORD-002",
    product: "Beaded Necklace Set",
    seller: "Zainab Beads",
    price: 45.0,
    quantity: 2,
    status: "Shipped",
    orderDate: "2024-06-12",
    deliveryDate: "2024-06-20",
    image: "/placeholder.svg",
  },
  {
    id: "#ORD-003",
    product: "Leather Sandals",
    seller: "Kwame Leather",
    price: 75.0,
    quantity: 1,
    status: "Pending",
    orderDate: "2024-06-15",
    deliveryDate: "2024-06-25",
    image: "/placeholder.svg",
  },
]

export default function OrdersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">My Orders</h1>
            <p className="text-muted-foreground">Track and manage all your purchases</p>
          </div>

          {/* Orders List */}
          <div className="space-y-6">
            {MOCK_ORDERS.map((order) => (
              <div
                key={order.id}
                className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                  {/* Product Image */}
                  <div className="md:col-span-1">
                    <img
                      src={order.image || "/placeholder.svg"}
                      alt={order.product}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>

                  {/* Order Details */}
                  <div className="md:col-span-3">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Order ID: {order.id}</p>
                        <h3 className="text-xl font-bold text-foreground mb-1">{order.product}</h3>
                        <p className="text-sm text-muted-foreground">by {order.seller}</p>
                      </div>
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Shipped"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>

                    {/* Order Info Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center gap-2">
                        <DollarSign size={18} className="text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Price</p>
                          <p className="font-semibold text-foreground">${order.price.toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Package size={18} className="text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Quantity</p>
                          <p className="font-semibold text-foreground">{order.quantity}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Ordered</p>
                          <p className="font-semibold text-foreground">{order.orderDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Delivery</p>
                          <p className="font-semibold text-foreground">{order.deliveryDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-6 border-t border-border">
                  <button className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                    View Details
                  </button>
                  <button className="flex-1 border border-border text-foreground py-2 rounded-lg font-medium hover:bg-muted transition-colors">
                    Contact Seller
                  </button>
                  {order.status === "Completed" && (
                    <button className="flex-1 border border-border text-foreground py-2 rounded-lg font-medium hover:bg-muted transition-colors">
                      Leave Review
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {MOCK_ORDERS.length === 0 && (
            <div className="text-center py-12">
              <Package size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-foreground font-semibold mb-2">No orders yet</p>
              <p className="text-muted-foreground mb-6">Start shopping to see your orders here</p>
              <a
                href="/marketplace"
                className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Browse Products
              </a>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
