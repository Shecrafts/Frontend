"use client"

import { Sidebar } from "@/components/sidebar"
import { StatCard } from "@/components/stat-card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react"

const chartData = [
  { month: "Jan", income: 2400, expenses: 1200, profit: 1200 },
  { month: "Feb", income: 1398, expenses: 900, profit: 498 },
  { month: "Mar", income: 9800, expenses: 3800, profit: 6000 },
  { month: "Apr", income: 3908, expenses: 2000, profit: 1908 },
  { month: "May", income: 4800, expenses: 2200, profit: 2600 },
  { month: "Jun", income: 3800, expenses: 1500, profit: 2300 },
]

export default function BudgetPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Budget Management</h1>
            <p className="text-muted-foreground">Track your income, expenses, and profit</p>
          </div>

          {/* Financial Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
              label="Total Income"
              value="$26,198"
              icon={<TrendingUp size={24} />}
              trend={{ value: 12, isPositive: true }}
            />
            <StatCard
              label="Total Expenses"
              value="$11,600"
              icon={<TrendingDown size={24} />}
              trend={{ value: 5, isPositive: false }}
            />
            <StatCard
              label="Total Profit"
              value="$14,598"
              icon={<DollarSign size={24} />}
              trend={{ value: 18, isPositive: true }}
            />
          </div>

          {/* Financial Chart */}
          <div className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Monthly Financial Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
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
                <Line type="monotone" dataKey="income" stroke="var(--accent)" strokeWidth={2} />
                <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} />
                <Line type="monotone" dataKey="profit" stroke="var(--primary)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Expense Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Income Sources */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Income Sources</h2>
              <div className="space-y-4">
                {[
                  { source: "Product Sales", amount: 18500, percentage: 70 },
                  { source: "Bulk Orders", amount: 5200, percentage: 20 },
                  { source: "Custom Orders", amount: 2498, percentage: 10 },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-foreground font-medium">{item.source}</span>
                      <span className="text-foreground font-bold">${item.amount.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.percentage}% of total</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Expense Breakdown */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Expense Breakdown</h2>
              <div className="space-y-4">
                {[
                  { category: "Materials", amount: 5200, percentage: 45 },
                  { category: "Shipping", amount: 3100, percentage: 27 },
                  { category: "Packaging", amount: 2300, percentage: 20 },
                  { category: "Other", amount: 1000, percentage: 8 },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-foreground font-medium">{item.category}</span>
                      <span className="text-foreground font-bold">${item.amount.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.percentage}% of total</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="mt-8 bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Recent Transactions</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Description</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Type</th>
                    <th className="text-right py-3 px-4 font-semibold text-foreground">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: "Jun 15", desc: "Kente Cloth Sale", type: "Income", amount: 85 },
                    { date: "Jun 14", desc: "Material Purchase", type: "Expense", amount: -45 },
                    { date: "Jun 13", desc: "Shipping Cost", type: "Expense", amount: -12 },
                    { date: "Jun 12", desc: "Bulk Order", type: "Income", amount: 250 },
                    { date: "Jun 11", desc: "Packaging Supplies", type: "Expense", amount: -30 },
                  ].map((transaction, idx) => (
                    <tr key={idx} className="border-b border-border hover:bg-muted transition-colors">
                      <td className="py-3 px-4 text-muted-foreground">{transaction.date}</td>
                      <td className="py-3 px-4 text-foreground font-medium">{transaction.desc}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            transaction.type === "Income" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {transaction.type}
                        </span>
                      </td>
                      <td
                        className={`py-3 px-4 text-right font-bold ${
                          transaction.amount > 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
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
