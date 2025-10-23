import type React from "react"
interface StatCardProps {
  label: string
  value: string | number
  icon: React.ReactNode
  trend?: { value: number; isPositive: boolean }
}

export function StatCard({ label, value, icon, trend }: StatCardProps) {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground">
          {icon}
        </div>
        {trend && (
          <span className={`text-sm font-semibold ${trend.isPositive ? "text-green-600" : "text-red-600"}`}>
            {trend.isPositive ? "+" : "-"}
            {trend.value}%
          </span>
        )}
      </div>
      <p className="text-muted-foreground text-sm mb-1">{label}</p>
      <p className="text-2xl font-bold text-foreground">{value}</p>
    </div>
  )
}
