"use client"

import { Sidebar } from "@/components/sidebar"
import { StatCard } from "@/components/stat-card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Package, ShoppingCart, DollarSign, TrendingUp } from "lucide-react"

const chartData = [
  { month: "Jan", revenue: 4000, orders: 24, products: 12 },
  { month: "Feb", revenue: 3000, orders: 18, products: 10 },
  { month: "Mar", revenue: 2000, orders: 15, products: 8 },
  { month: "Apr", revenue: 2780, orders: 20, products: 14 },
  { month: "May", revenue: 1890, orders: 16, products: 11 },
  { month: "Jun", revenue: 2390, orders: 22, products: 15 },
]

export default function SellerDashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-4 md:p-8 md:ml-0">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Ama!</h1>
            <p className="text-muted-foreground">Here's your business performance overview</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              label="Total Products"
              value="24"
              icon={<Package size={24} />}
              trend={{ value: 12, isPositive: true }}
            />
            <StatCard
              label="Total Orders"
              value="156"
              icon={<ShoppingCart size={24} />}
              trend={{ value: 8, isPositive: true }}
            />
            <StatCard
              label="Total Revenue"
              value="$4,250"
              icon={<DollarSign size={24} />}
              trend={{ value: 15, isPositive: true }}
            />
            <StatCard
              label="Profit"
              value="$1,890"
              icon={<TrendingUp size={24} />}
              trend={{ value: 5, isPositive: true }}
            />
          </div>

          {/* Chart */}
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Revenue Performance</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: `1px solid var(--border)`,
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="revenue" fill="var(--accent)" />
                <Bar dataKey="orders" fill="var(--primary)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Orders */}
          <div className="mt-8 bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Order ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Product</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Customer</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Amount</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "#001", product: "Kente Cloth", customer: "John Doe", amount: "$85", status: "Completed" },
                    {
                      id: "#002",
                      product: "Beaded Necklace",
                      customer: "Jane Smith",
                      amount: "$45",
                      status: "Pending",
                    },
                    {
                      id: "#003",
                      product: "Leather Sandals",
                      customer: "Mike Johnson",
                      amount: "$75",
                      status: "Shipped",
                    },
                  ].map((order) => (
                    <tr key={order.id} className="border-b border-border hover:bg-muted transition-colors">
                      <td className="py-3 px-4 text-foreground font-medium">{order.id}</td>
                      <td className="py-3 px-4 text-foreground">{order.product}</td>
                      <td className="py-3 px-4 text-muted-foreground">{order.customer}</td>
                      <td className="py-3 px-4 text-foreground font-semibold">{order.amount}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : order.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {order.status}
                        </span>
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
