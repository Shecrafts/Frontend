"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Search, CheckCircle, Clock, Trash2 } from "lucide-react"

const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "Handwoven Kente Cloth",
    seller: "Ama Osei",
    category: "Clothing",
    price: 85.0,
    status: "Approved",
    submittedDate: "2024-06-10",
  },
  {
    id: "2",
    name: "Beaded Necklace Set",
    seller: "Zainab Ahmed",
    category: "Jewelry",
    price: 45.0,
    status: "Pending",
    submittedDate: "2024-06-15",
  },
  {
    id: "3",
    name: "Traditional Mask",
    seller: "Kofi Mensah",
    category: "Art",
    price: 120.0,
    status: "Approved",
    submittedDate: "2024-06-12",
  },
]

export default function ProductsPage() {
  const [products, setProducts] = useState(MOCK_PRODUCTS)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || product.status.toLowerCase() === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Product Management</h1>
            <p className="text-muted-foreground">Review and approve product listings</p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Status</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          {/* Products Table */}
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted">
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Product</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Seller</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Category</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Price</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Status</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Submitted</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="border-b border-border hover:bg-muted transition-colors">
                      <td className="py-4 px-6 font-medium text-foreground">{product.name}</td>
                      <td className="py-4 px-6 text-muted-foreground">{product.seller}</td>
                      <td className="py-4 px-6 text-muted-foreground">{product.category}</td>
                      <td className="py-4 px-6 font-semibold text-foreground">${product.price.toFixed(2)}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          {product.status === "Approved" ? (
                            <>
                              <CheckCircle size={16} className="text-green-600" />
                              <span className="text-green-600 text-sm font-semibold">Approved</span>
                            </>
                          ) : (
                            <>
                              <Clock size={16} className="text-yellow-600" />
                              <span className="text-yellow-600 text-sm font-semibold">Pending</span>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-muted-foreground text-sm">{product.submittedDate}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          {product.status === "Pending" && (
                            <button className="px-3 py-1 bg-green-100 text-green-800 rounded text-sm font-semibold hover:bg-green-200 transition-colors">
                              Approve
                            </button>
                          )}
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
