"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AuthForm } from "@/components/auth-form"
import { useSearchParams } from "next/navigation"

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedRole, setSelectedRole] = useState<"buyer" | "seller" | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const role = searchParams.get("role")
    if (role === "buyer" || role === "seller") {
      setSelectedRole(role)
    }
  }, [searchParams])

  const handleSignup = async (data: any) => {
    setIsLoading(true)
    try {
      // TODO: Implement actual signup logic
      console.log("Signup attempt:", data)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const redirectUrl = data.role === "seller" ? "/seller/dashboard" : "/marketplace"
      window.location.href = redirectUrl
    } catch (error) {
      console.error("Signup error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!selectedRole) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join SheCrafts</h1>
              <p className="text-muted-foreground text-lg">Choose your role to get started</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Buyer Option */}
              <button
                onClick={() => setSelectedRole("buyer")}
                className="bg-card border-2 border-border rounded-lg p-8 text-center hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">I'm a Buyer</h3>
                <p className="text-muted-foreground mb-4">
                  Browse and purchase authentic African crafts from talented artisans
                </p>
                <span className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold">
                  Continue as Buyer
                </span>
              </button>

              {/* Seller Option */}
              <button
                onClick={() => setSelectedRole("seller")}
                className="bg-card border-2 border-border rounded-lg p-8 text-center hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">I'm a Seller</h3>
                <p className="text-muted-foreground mb-4">
                  Showcase your handmade products and reach customers worldwide
                </p>
                <span className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold">
                  Continue as Seller
                </span>
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="bg-card rounded-lg border border-border p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Create Your {selectedRole === "buyer" ? "Buyer" : "Seller"} Account
              </h1>
              <p className="text-muted-foreground">Join SheCrafts and start your journey</p>
            </div>

            <AuthForm type="signup" onSubmit={handleSignup} isLoading={isLoading} />

            <button
              onClick={() => setSelectedRole(null)}
              className="w-full mt-4 text-center text-sm text-muted-foreground hover:text-foreground"
            >
              Change role
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
