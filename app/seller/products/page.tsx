"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Plus, Edit2, Trash2, Eye } from "lucide-react"
import Link from "next/link"

const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "Handwoven Kente Cloth",
    category: "Clothing",
    price: 85.0,
    cost: 40.0,
    status: "Published",
    image: "/placeholder.svg",
    orders: 12,
  },
  {
    id: "2",
    name: "Beaded Necklace Set",
    category: "Jewelry",
    price: 45.0,
    cost: 15.0,
    status: "Published",
    image: "/placeholder.svg",
    orders: 8,
  },
  {
    id: "3",
    name: "Leather Sandals",
    category: "Accessories",
    price: 75.0,
    cost: 30.0,
    status: "Pending",
    image: "/placeholder.svg",
    orders: 0,
  },
]

export default function ProductsPage() {
  const [products, setProducts] = useState(MOCK_PRODUCTS)
  const [filter, setFilter] = useState("all")

  const filteredProducts = filter === "all" ? products : products.filter((p) => p.status.toLowerCase() === filter)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Product Management</h1>
              <p className="text-muted-foreground">Manage and track all your products</p>
            </div>
            <Link
              href="/seller/products/new"
              className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Plus size={20} />
              Add New Product
            </Link>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-6">
            {["all", "published", "pending", "sold"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                  filter === status
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:bg-muted"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Products Table */}
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted">
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Product</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Category</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Price</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Cost</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Orders</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Status</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="border-b border-border hover:bg-muted transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-10 h-10 rounded object-cover"
                          />
                          <span className="font-medium text-foreground">{product.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-muted-foreground">{product.category}</td>
                      <td className="py-4 px-6 font-semibold text-foreground">${product.price.toFixed(2)}</td>
                      <td className="py-4 px-6 text-muted-foreground">${product.cost.toFixed(2)}</td>
                      <td className="py-4 px-6 text-foreground">{product.orders}</td>
                      <td className="py-4 px-6">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            product.status === "Published"
                              ? "bg-green-100 text-green-800"
                              : product.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-border rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                            <Eye size={18} />
                          </button>
                          <button className="p-2 hover:bg-border rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                            <Edit2 size={18} />
                          </button>
                          <button className="p-2 hover:bg-border rounded-lg transition-colors text-muted-foreground hover:text-red-600">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
