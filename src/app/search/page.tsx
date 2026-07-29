"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/lib/data";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { ShoppingCart, Star, Heart, Search as SearchIcon, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return products.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) || 
      p.category.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  const popularSearches = ["Organic Bananas", "Fresh Apples", "Milk", "Beef", "Mustard Oil"];

  return (
    <main className="bg-gray-50/30 min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        
        {/* Search Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">What are you looking for?</h1>
          
          <div className="relative mb-6">
            <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input 
              type="text" 
              autoFocus
              placeholder="Search for organic fruits, fresh meat, dairy..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-16 pr-16 py-5 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-lg text-lg text-gray-900 placeholder:text-gray-400"
            />
            {query && (
              <button 
                onClick={() => setQuery("")}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm font-semibold text-gray-500">Popular:</span>
            {popularSearches.map(term => (
              <button 
                key={term}
                onClick={() => setQuery(term)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors shadow-sm"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results */}
        {query && (
          <div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Search Results <span className="text-gray-500 font-medium text-lg ml-2">({searchResults.length})</span>
              </h2>
            </div>
            
            {searchResults.length === 0 ? (
              <div className="bg-white rounded-3xl border border-gray-100 p-16 text-center shadow-sm max-w-2xl mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">No products found for "{query}"</h2>
                <p className="text-gray-500 mb-6">Please check your spelling or try searching for something else.</p>
                <button 
                  onClick={() => setQuery("")}
                  className="bg-primary text-white px-8 py-3.5 rounded-full font-bold hover:bg-green-600 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence mode="popLayout">
                  {searchResults.map((product) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={product.id}
                      className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
                    >
                      <div className={`relative h-56 w-full ${product.bgColor} flex items-center justify-center p-6 overflow-hidden`}>
                        <Link href={`/product/${product.id}`} className="absolute inset-0 z-0"></Link>
                        {product.discount && (
                          <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-2 py-1 rounded-lg z-10">
                            {product.discount} OFF
                          </div>
                        )}
                        <button onClick={(e) => { e.preventDefault(); useWishlistStore.getState().addItem(product); }} className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:scale-110 shadow-sm transition-all z-10">
                          <Heart className="w-5 h-5" />
                        </button>
                        <motion.div 
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="text-7xl drop-shadow-xl pointer-events-none"
                        >
                          {product.image}
                        </motion.div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-primary bg-green-50 px-2 py-1 rounded-md">
                            {product.category}
                          </span>
                          <div className="flex items-center gap-1 text-sm font-bold text-secondary">
                            <Star className="w-3.5 h-3.5 fill-secondary" />
                            {product.rating}
                          </div>
                        </div>
                        
                        <Link href={`/product/${product.id}`} className="block font-bold text-lg text-gray-900 mb-4 group-hover:text-primary transition-colors cursor-pointer line-clamp-2">
                          {product.name}
                        </Link>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex flex-col">
                            {product.oldPrice && <span className="text-gray-400 text-xs line-through font-medium">৳{product.oldPrice}</span>}
                            <span className="text-lg font-black text-gray-900">৳{product.price}</span>
                          </div>
                          
                          <button onClick={(e) => { e.preventDefault(); useCartStore.getState().addItem(product); }} className="w-10 h-10 bg-gray-50 hover:bg-primary text-gray-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-md hover:shadow-primary/30 active:scale-95">
                            <ShoppingCart className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        )}

      </div>
      
      <Footer />
    </main>
  );
}