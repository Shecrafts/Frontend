"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Search, MoreVertical, CheckCircle, XCircle } from "lucide-react"

const MOCK_USERS = [
  {
    id: "1",
    name: "Ama Osei",
    email: "ama@example.com",
    role: "Seller",
    status: "Active",
    joinDate: "2024-01-15",
    products: 24,
  },
  {
    id: "2",
    name: "Zainab Ahmed",
    email: "zainab@example.com",
    role: "Buyer",
    status: "Active",
    joinDate: "2024-02-20",
    products: 0,
  },
  {
    id: "3",
    name: "Kofi Mensah",
    email: "kofi@example.com",
    role: "Seller",
    status: "Inactive",
    joinDate: "2024-03-10",
    products: 12,
  },
  {
    id: "4",
    name: "Fatima Hassan",
    email: "fatima@example.com",
    role: "Buyer",
    status: "Active",
    joinDate: "2024-04-05",
    products: 0,
  },
]

export default function UsersPage() {
  const [users, setUsers] = useState(MOCK_USERS)
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = roleFilter === "all" || user.role.toLowerCase() === roleFilter
    return matchesSearch && matchesRole
  })

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">User Management</h1>
            <p className="text-muted-foreground">Manage and monitor all platform users</p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Roles</option>
              <option value="buyer">Buyers</option>
              <option value="seller">Sellers</option>
            </select>
          </div>

          {/* Users Table */}
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted">
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Name</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Email</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Role</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Status</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Join Date</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Products</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b border-border hover:bg-muted transition-colors">
                      <td className="py-4 px-6 font-medium text-foreground">{user.name}</td>
                      <td className="py-4 px-6 text-muted-foreground">{user.email}</td>
                      <td className="py-4 px-6">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/20 text-accent-foreground">
                          {user.role}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          {user.status === "Active" ? (
                            <>
                              <CheckCircle size={16} className="text-green-600" />
                              <span className="text-green-600 text-sm font-semibold">Active</span>
                            </>
                          ) : (
                            <>
                              <XCircle size={16} className="text-gray-600" />
                              <span className="text-gray-600 text-sm font-semibold">Inactive</span>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-muted-foreground text-sm">{user.joinDate}</td>
                      <td className="py-4 px-6 text-foreground">{user.products}</td>
                      <td className="py-4 px-6">
                        <button className="p-2 hover:bg-border rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                          <MoreVertical size={18} />
                        </button>
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
