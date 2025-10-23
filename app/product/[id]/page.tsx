"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Share2, Star, ShoppingCart } from "lucide-react"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  // Mock product data
  const product = {
    id: params.id,
    name: "Handwoven Kente Cloth",
    price: 85.0,
    originalPrice: 100.0,
    rating: 4.8,
    reviews: 124,
    image: "/handwoven-kente-cloth.jpg",
    images: ["/handwoven-kente-cloth.jpg", "/kente-cloth-detail.jpg", "/kente-cloth-pattern.jpg"],
    category: "Clothing",
    seller: {
      name: "Ama's Textiles",
      rating: 4.9,
      reviews: 456,
      image: "/seller-avatar.png",
    },
    description:
      "Authentic handwoven Kente cloth from Ghana. Each piece is uniquely crafted using traditional weaving techniques passed down through generations. This vibrant cloth features traditional patterns and colors that represent cultural heritage and artistic excellence.",
    features: [
      "100% authentic handwoven",
      "Traditional Ghanaian patterns",
      "Approximately 6 yards",
      "Machine washable",
      "Eco-friendly dyes",
    ],
    inStock: true,
    shippingTime: "7-14 business days",
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div>
              <div className="bg-muted rounded-lg overflow-hidden mb-4 h-96 md:h-[500px]">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="bg-muted rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity h-24"
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`View ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{product.name}</h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-border">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-3xl font-bold text-foreground">${product.price.toFixed(2)}</span>
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-sm font-semibold text-accent">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-2">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shipping Info */}
              <div className="mb-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Shipping:</span> {product.shippingTime}
                </p>
              </div>

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-foreground hover:bg-muted transition-colors"
                    >
                      −
                    </button>
                    <span className="px-6 py-2 text-foreground font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-foreground hover:bg-muted transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="p-3 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    <Heart size={20} className={isFavorite ? "fill-primary text-primary" : "text-muted-foreground"} />
                  </button>
                </div>

                <button className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>

                <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Buy with Telebirr
                </button>

                <button className="w-full border border-border text-foreground py-3 rounded-lg font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2">
                  <Share2 size={20} />
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Seller Info */}
          <div className="bg-card rounded-lg border border-border p-8 mb-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={product.seller.image || "/placeholder.svg"}
                  alt={product.seller.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg text-foreground">{product.seller.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>★ {product.seller.rating}</span>
                    <span>({product.seller.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                View Profile
              </button>
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-40 bg-muted"></div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">Clothing</p>
                    <h4 className="font-semibold text-foreground mb-2">Related Product {i}</h4>
                    <p className="text-lg font-bold text-foreground">$65.00</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
