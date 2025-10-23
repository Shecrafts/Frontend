"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { StatCard } from "@/components/stat-card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Users, Package, ShoppingCart, TrendingUp } from "lucide-react"

const chartData = [
  { month: "Jan", users: 400, products: 240, orders: 120 },
  { month: "Feb", users: 520, products: 280, orders: 150 },
  { month: "Mar", users: 680, products: 320, orders: 180 },
  { month: "Apr", users: 750, products: 380, orders: 220 },
  { month: "May", users: 890, products: 420, orders: 280 },
  { month: "Jun", users: 1050, products: 480, orders: 350 },
]

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <main className="flex-1 p-4 md:p-8 md:ml-0">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Platform overview and management</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              label="Total Users"
              value="1,050"
              icon={<Users size={24} />}
              trend={{ value: 12, isPositive: true }}
            />
            <StatCard
              label="Total Products"
              value="480"
              icon={<Package size={24} />}
              trend={{ value: 8, isPositive: true }}
            />
            <StatCard
              label="Total Orders"
              value="350"
              icon={<ShoppingCart size={24} />}
              trend={{ value: 15, isPositive: true }}
            />
            <StatCard
              label="Platform Revenue"
              value="$28,450"
              icon={<TrendingUp size={24} />}
              trend={{ value: 20, isPositive: true }}
            />
          </div>

          {/* Chart */}
          <div className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Platform Growth</h2>
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
                <Bar dataKey="users" fill="var(--accent)" />
                <Bar dataKey="products" fill="var(--primary)" />
                <Bar dataKey="orders" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Users */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Recent Users</h2>
              <div className="space-y-4">
                {[
                  { name: "Ama Osei", role: "Seller", date: "2 hours ago", status: "Active" },
                  { name: "Zainab Ahmed", role: "Buyer", date: "4 hours ago", status: "Active" },
                  { name: "Kofi Mensah", role: "Seller", date: "1 day ago", status: "Inactive" },
                  { name: "Fatima Hassan", role: "Buyer", date: "2 days ago", status: "Active" },
                ].map((user, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between pb-4 border-b border-border last:border-0"
                  >
                    <div>
                      <p className="font-semibold text-foreground">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{user.date}</p>
                      <span
                        className={`text-xs font-semibold ${
                          user.status === "Active" ? "text-green-600" : "text-gray-600"
                        }`}
                      >
                        {user.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Recent Orders</h2>
              <div className="space-y-4">
                {[
                  { id: "#1050", amount: "$250", status: "Completed", date: "1 hour ago" },
                  { id: "#1049", amount: "$85", status: "Pending", date: "3 hours ago" },
                  { id: "#1048", amount: "$120", status: "Shipped", date: "5 hours ago" },
                  { id: "#1047", amount: "$95", status: "Completed", date: "1 day ago" },
                ].map((order, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between pb-4 border-b border-border last:border-0"
                  >
                    <div>
                      <p className="font-semibold text-foreground">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground">{order.amount}</p>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
