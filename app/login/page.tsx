"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AuthForm } from "@/components/auth-form"
import Link from "next/link"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (data: any) => {
    setIsLoading(true)
    try {
      // TODO: Implement actual login logic
      console.log("Login attempt:", data)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const redirectUrl = data.role === "seller" ? "/seller/dashboard" : "/marketplace"
      window.location.href = redirectUrl
    } catch (error) {
      console.error("Login error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="bg-card rounded-lg border border-border p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
              <p className="text-muted-foreground">Sign in to your SheCrafts account</p>
            </div>

            <AuthForm type="login" onSubmit={handleLogin} isLoading={isLoading} />

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-center text-sm text-muted-foreground mb-4">Or continue with</p>
              <div className="grid grid-cols-2 gap-4">
                <button className="border border-border rounded-lg py-2 px-4 font-medium text-foreground hover:bg-muted transition-colors">
                  Google
                </button>
                <button className="border border-border rounded-lg py-2 px-4 font-medium text-foreground hover:bg-muted transition-colors">
                  Facebook
                </button>
              </div>
            </div>

            <div className="mt-6 text-center text-sm">
              <Link href="/forgot-password" className="text-primary hover:underline">
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
