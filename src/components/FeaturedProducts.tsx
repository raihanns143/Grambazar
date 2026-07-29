"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Star, Heart, Eye } from "lucide-react";
import { products } from "@/lib/data";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import Link from "next/link";

export default function FeaturedProducts() {


  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Featured Products
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600"
            >
              Hand-picked premium quality products freshly sourced for you.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/shop" className="text-primary font-semibold hover:text-green-700 transition-colors flex items-center gap-2">
              View All Products
              <span className="text-xl">→</span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {products.slice(0, 8).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Product Image Area */}
              <div className={`relative h-60 w-full ${product.bgColor} flex items-center justify-center p-6 overflow-hidden`}>
                <Link href={`/product/${product.id}`} className="absolute inset-0 z-0"></Link>
                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-2 py-1 rounded-lg z-10">
                  {product.discount} OFF
                </div>
                <button onClick={(e) => { e.preventDefault(); useWishlistStore.getState().addItem(product); }} className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:scale-110 shadow-sm transition-all z-10">
                  <Heart className="w-5 h-5" />
                </button>
                
                {/* Simulated Image with Emoji for prototype, normally an <img /> */}
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-8xl drop-shadow-xl"
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
                    <span className="text-gray-400 text-sm line-through font-medium">৳{product.oldPrice}</span>
                    <span className="text-xl font-black text-gray-900">৳{product.price}</span>
                  </div>
                  
                  <button onClick={(e) => { e.preventDefault(); useCartStore.getState().addItem(product); }} className="w-12 h-12 bg-gray-50 hover:bg-primary text-gray-600 hover:text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 active:scale-95">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
