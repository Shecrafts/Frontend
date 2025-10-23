"use client"

import type React from "react"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Wand2, Copy, Share2 } from "lucide-react"

export default function PostGeneratorPage() {
  const [productImage, setProductImage] = useState<string | null>(null)
  const [prompt, setPrompt] = useState("")
  const [platform, setPlatform] = useState("facebook")
  const [generatedPost, setGeneratedPost] = useState<{
    caption: string
    hashtags: string[]
  } | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGeneratePost = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      setGeneratedPost({
        caption: `✨ Discover the beauty of authentic African craftsmanship! ${prompt || "This stunning handmade piece"}
        
Each item is carefully crafted with love and tradition. Perfect for those who appreciate quality and cultural heritage.

Shop now and support talented artisans! 🎨`,
        hashtags: [
          "#AfricanCrafts",
          "#Handmade",
          "#SupportLocal",
          "#ArtisanMade",
          "#SheCrafts",
          "#AuthenticArt",
          "#CulturalHeritage",
        ],
      })
      setIsGenerating(false)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Post Generator</h1>
            <p className="text-muted-foreground">Create AI-powered social media posts for your products</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div>
              <form onSubmit={handleGeneratePost} className="bg-card rounded-lg border border-border p-6 space-y-6">
                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Product Image</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    {productImage ? (
                      <div>
                        <img
                          src={productImage || "/placeholder.svg"}
                          alt="Product"
                          className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <button
                          type="button"
                          onClick={() => setProductImage(null)}
                          className="text-sm text-primary hover:underline"
                        >
                          Change Image
                        </button>
                      </div>
                    ) : (
                      <div>
                        <div className="text-4xl mb-2">📸</div>
                        <p className="text-foreground font-medium mb-1">Click to upload product image</p>
                        <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Prompt */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Post Description</label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe what you want the post to highlight about your product..."
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Platform Selection */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Platform</label>
                  <select
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="facebook">Facebook</option>
                    <option value="instagram">Instagram</option>
                    <option value="tiktok">TikTok</option>
                    <option value="twitter">Twitter</option>
                  </select>
                </div>

                {/* Generate Button */}
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Wand2 size={20} />
                  {isGenerating ? "Generating..." : "Generate Post"}
                </button>
              </form>
            </div>

            {/* Preview Section */}
            <div>
              {generatedPost ? (
                <div className="bg-card rounded-lg border border-border p-6 sticky top-8">
                  <h2 className="text-xl font-bold text-foreground mb-4">Post Preview</h2>

                  {/* Platform Preview */}
                  <div className="bg-muted rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 bg-primary rounded-full"></div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">Your Store</p>
                        <p className="text-xs text-muted-foreground">@yourstore</p>
                      </div>
                    </div>

                    {productImage && (
                      <img
                        src={productImage || "/placeholder.svg"}
                        alt="Product"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}

                    <p className="text-foreground text-sm leading-relaxed mb-4 whitespace-pre-wrap">
                      {generatedPost.caption}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {generatedPost.hashtags.map((tag, idx) => (
                        <span key={idx} className="text-primary text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                      <Share2 size={18} />
                      Share on {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </button>
                    <button
                      onClick={() => {
                        const text = `${generatedPost.caption}\n\n${generatedPost.hashtags.join(" ")}`
                        navigator.clipboard.writeText(text)
                        alert("Post copied to clipboard!")
                      }}
                      className="w-full border border-border text-foreground py-2 rounded-lg font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2"
                    >
                      <Copy size={18} />
                      Copy to Clipboard
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-card rounded-lg border border-border p-6 text-center sticky top-8">
                  <div className="text-5xl mb-4">✨</div>
                  <p className="text-foreground font-semibold mb-2">No post generated yet</p>
                  <p className="text-muted-foreground text-sm">
                    Fill in the form and click "Generate Post" to create an AI-powered social media post
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
