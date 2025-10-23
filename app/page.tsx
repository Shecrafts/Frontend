import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ShoppingBag, Store, PieChart, Share2 } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative w-full h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=500&width=1200&query=African%20artisans%20crafting%20handmade%20products)",
            backgroundColor: "#f0f0f0",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Empowering Women Artisans Through Digital Access
            </h1>
            <p className="text-lg md:text-xl mb-8 text-balance">
              Connect with authentic African crafts and support talented artisans through our digital marketplace
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/marketplace"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Discover Now
              </Link>
              <Link
                href="/signup?role=seller"
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Selling
              </Link>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Platform Offers</h2>
              <p className="text-muted-foreground text-lg">
                Comprehensive tools for both buyers and sellers in the African artisan marketplace
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <div className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag size={24} className="text-accent-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">Buy Products Easily</h3>
                <p className="text-muted-foreground text-sm">
                  Browse and purchase authentic African crafts with secure payments and worldwide shipping
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store size={24} className="text-accent-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">Sell Your Art Online</h3>
                <p className="text-muted-foreground text-sm">
                  Create your digital storefront and reach customers worldwide with our seller tools
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <PieChart size={24} className="text-accent-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">Manage Your Budget</h3>
                <p className="text-muted-foreground text-sm">
                  Track your savings, expenses, and financial performance with comprehensive budget management tools
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 size={24} className="text-accent-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">Generate Social Media Ads</h3>
                <p className="text-muted-foreground text-sm">
                  Create professional social media advertisements to promote your products effectively
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community Today</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you're looking to discover unique African crafts or showcase your artistic talents, we have the
              perfect solution for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup?role=buyer"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Join as Buyer
              </Link>
              <Link
                href="/signup?role=seller"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Join as Seller
              </Link>
            </div>
            <p className="text-muted-foreground text-sm mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-semibold hover:underline">
                Log In Here
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
