import Link from "next/link"
import { ShoppingCart, Heart } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
  seller: string
  rating?: number
}

export function ProductCard({ id, name, price, image, category, seller, rating = 4.5 }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`}>
      <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow group">
        <div className="relative h-48 bg-muted overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
          <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
            <Heart size={20} className="text-primary" />
          </button>
        </div>

        <div className="p-4">
          <p className="text-xs text-muted-foreground mb-1">{category}</p>
          <h3 className="font-semibold text-foreground mb-1 line-clamp-2">{name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{seller}</p>

          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-bold text-foreground">${price.toFixed(2)}</span>
            <span className="text-xs text-muted-foreground">★ {rating}</span>
          </div>

          <button className="w-full bg-accent text-accent-foreground py-2 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            <ShoppingCart size={16} />
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  )
}
