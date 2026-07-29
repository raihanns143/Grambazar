"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart, Star, Trash2, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Wishlist() {
  const [isClient, setIsClient] = useState(false);
  const { items, removeItem } = useWishlistStore();
  const addItemToCart = useCartStore((state) => state.addItem);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <main className="min-h-screen bg-gray-50"><Navbar /></main>;

  return (
    <main className="bg-gray-50/30 min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Heart className="w-8 h-8 fill-red-500 text-red-500" /> My Wishlist
        </h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center shadow-sm max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center text-red-500 mx-auto mb-6">
              <Heart className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-8">
              Save your favorite products here so you never lose track of them.
            </p>
            <Link 
              href="/shop"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-bold hover:bg-green-600 transition-colors shadow-lg shadow-primary/30"
            >
              Discover Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {items.map((product, index) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Product Image Area */}
                <div className={`relative h-60 w-full ${product.bgColor} flex items-center justify-center p-6 overflow-hidden`}>
                  <Link href={`/product/${product.id}`} className="absolute inset-0 z-0"></Link>
                  <button 
                    onClick={(e) => { e.preventDefault(); removeItem(product.id); }} 
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 shadow-sm transition-all z-10"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-8xl drop-shadow-xl pointer-events-none"
                  >
                    {product.image}
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary bg-green-50 px-2 py-1 rounded-md">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm font-bold text-secondary">
                      <Star className="w-4 h-4 fill-secondary" />
                      {product.rating}
                    </div>
                  </div>
                  
                  <Link href={`/product/${product.id}`} className="block font-bold text-lg text-gray-900 mb-4 group-hover:text-primary transition-colors cursor-pointer">
                    {product.name}
                  </Link>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xl font-black text-gray-900">৳{product.price}</span>
                    </div>
                    
                    <button 
                      onClick={(e) => { e.preventDefault(); addItemToCart(product); removeItem(product.id); }} 
                      className="w-12 h-12 bg-gray-50 hover:bg-primary text-gray-600 hover:text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
                      title="Move to Cart"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </main>
  );
}