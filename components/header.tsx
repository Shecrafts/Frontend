"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isLoggedIn] = useState(false)
  const [userRole] = useState<"buyer" | "seller" | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">SheCrafts</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/categories" className="text-foreground hover:text-primary transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Auth Buttons / User Menu */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground text-sm font-bold">U</span>
                  </div>
                  <ChevronDown size={16} />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                    <Link href="/profile" className="block px-4 py-2 text-foreground hover:bg-muted transition-colors">
                      My Profile
                    </Link>
                    {userRole === "buyer" && (
                      <Link
                        href="/buyer/orders"
                        className="block px-4 py-2 text-foreground hover:bg-muted transition-colors"
                      >
                        My Orders
                      </Link>
                    )}
                    {userRole === "seller" && (
                      <>
                        <Link
                          href="/seller/dashboard"
                          className="block px-4 py-2 text-foreground hover:bg-muted transition-colors"
                        >
                          Dashboard
                        </Link>
                        <Link
                          href="/seller/products"
                          className="block px-4 py-2 text-foreground hover:bg-muted transition-colors"
                        >
                          My Products
                        </Link>
                      </>
                    )}
                    <hr className="my-2 border-border" />
                    <button
                      onClick={() => {
                        // TODO: Implement logout
                        window.location.href = "/"
                      }}
                      className="w-full text-left px-4 py-2 text-foreground hover:bg-muted transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="text-foreground hover:text-primary transition-colors font-medium">
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link href="/" className="block text-foreground hover:text-primary transition-colors py-2">
              Home
            </Link>
            <Link href="/categories" className="block text-foreground hover:text-primary transition-colors py-2">
              Categories
            </Link>
            <Link href="/about" className="block text-foreground hover:text-primary transition-colors py-2">
              About
            </Link>
            <Link href="/contact" className="block text-foreground hover:text-primary transition-colors py-2">
              Contact
            </Link>
            {isLoggedIn ? (
              <>
                <Link href="/profile" className="block text-foreground hover:text-primary transition-colors py-2">
                  My Profile
                </Link>
                {userRole === "buyer" && (
                  <Link
                    href="/buyer/orders"
                    className="block text-foreground hover:text-primary transition-colors py-2"
                  >
                    My Orders
                  </Link>
                )}
                {userRole === "seller" && (
                  <>
                    <Link
                      href="/seller/dashboard"
                      className="block text-foreground hover:text-primary transition-colors py-2"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/seller/products"
                      className="block text-foreground hover:text-primary transition-colors py-2"
                    >
                      My Products
                    </Link>
                  </>
                )}
                <button
                  onClick={() => {
                    // TODO: Implement logout
                    window.location.href = "/"
                  }}
                  className="w-full text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex gap-3 pt-2">
                <Link
                  href="/login"
                  className="flex-1 text-center text-foreground border border-border px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="flex-1 text-center bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
