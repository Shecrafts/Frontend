"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Search, Filter } from "lucide-react"

const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "Handwoven Kente Cloth",
    price: 85.0,
    image: "/handwoven-kente-cloth.jpg",
    category: "Clothing",
    seller: "Ama's Textiles",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Beaded Necklace Set",
    price: 45.0,
    image: "/beaded-necklace-african.jpg",
    category: "Jewelry",
    seller: "Zainab Beads",
    rating: 4.9,
  },
  {
    id: "3",
    name: "Traditional Mask",
    price: 120.0,
    image: "/african-traditional-mask.jpg",
    category: "Art",
    seller: "Kofi's Crafts",
    rating: 4.7,
  },
  {
    id: "4",
    name: "Ankara Print Dress",
    price: 65.0,
    image: "/ankara-print-dress.jpg",
    category: "Clothing",
    seller: "Fatima Fashion",
    rating: 4.6,
  },
  {
    id: "5",
    name: "Gold Plated Earrings",
    price: 55.0,
    image: "/gold-plated-earrings.jpg",
    category: "Jewelry",
    seller: "Zainab Beads",
    rating: 4.8,
  },
  {
    id: "6",
    name: "Abstract Canvas Painting",
    price: 150.0,
    image: "/abstract-canvas-painting.jpg",
    category: "Art",
    seller: "Amara Art Studio",
    rating: 4.9,
  },
  {
    id: "7",
    name: "Shea Butter Basket",
    price: 35.0,
    image: "/shea-butter-basket.jpg",
    category: "Accessories",
    seller: "Village Crafts",
    rating: 4.5,
  },
  {
    id: "8",
    name: "Leather Sandals",
    price: 75.0,
    image: "/leather-sandals.jpg",
    category: "Accessories",
    seller: "Kwame Leather",
    rating: 4.7,
  },
]

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 200])

  const categories = ["all", "Clothing", "Jewelry", "Art", "Accessories"]

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted border-b border-border py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Discover African Crafts</h1>
            <p className="text-muted-foreground mb-6">Browse authentic handmade products from talented artisans</p>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-lg border border-border p-6 sticky top-20">
                  <div className="flex items-center gap-2 mb-6">
                    <Filter size={20} />
                    <h2 className="font-bold text-lg">Filters</h2>
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3">Category</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <label key={category} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="category"
                            value={category}
                            checked={selectedCategory === category}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-4 h-4"
                          />
                          <span className="text-foreground capitalize">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Price Range</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">${priceRange[0]}</span>
                        <span className="text-sm text-muted-foreground">-</span>
                        <span className="text-sm text-muted-foreground">${priceRange[1]}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="200"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="lg:col-span-3">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-muted-foreground">
                    Showing {filteredProducts.length} of {MOCK_PRODUCTS.length} products
                  </p>
                  <select className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Most Popular</option>
                  </select>
                </div>

                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">No products found matching your filters.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
