"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { offers, products } from "@/lib/data";
import { ShoppingCart, Heart, Star, Tag, Gift, Copy, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";

export default function Offers() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const flashSaleProducts = products.filter(p => p.discount);
  
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <main className="bg-gray-50/30 min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-4">
            <Gift className="w-10 h-10 text-primary" /> Special Offers & Deals
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Save big on your favorite organic groceries with our exclusive coupons and flash sales.</p>
        </div>

        {/* Coupons Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Tag className="w-6 h-6 text-primary" /> Active Coupons
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <motion.div 
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl border border-gray-100 p-1 overflow-hidden shadow-sm hover:shadow-xl transition-shadow relative"
              >
                <div className={`absolute -right-12 -top-12 w-40 h-40 ${offer.bgColor} rounded-full opacity-10 blur-2xl`}></div>
                <div className="p-6 md:p-8">
                  <div className="inline-block px-3 py-1 bg-green-50 text-primary text-xs font-bold rounded-md uppercase tracking-wider mb-4">
                    Valid till {offer.validUntil}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-6">{offer.description}</p>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-mono font-bold text-gray-900 text-center tracking-widest border-dashed">
                      {offer.code}
                    </div>
                    <button 
                      onClick={() => handleCopy(offer.code)}
                      className={`h-12 px-4 rounded-xl font-bold flex items-center justify-center transition-all ${copiedCode === offer.code ? 'bg-green-100 text-green-700' : 'bg-primary hover:bg-green-600 text-white shadow-lg shadow-primary/30'}`}
                    >
                      {copiedCode === offer.code ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Flash Sale Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              ⚡ Flash Sale 
            </h2>
            <div className="flex items-center gap-2 text-primary font-bold bg-red-50 text-red-500 px-4 py-2 rounded-xl">
              <span className="animate-pulse">Ends in: 12:45:30</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {flashSaleProducts.map((product) => (
              <motion.div
                key={product.id}
                className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
              >
                <div className={`relative h-56 w-full ${product.bgColor} flex items-center justify-center p-6 overflow-hidden`}>
                  <Link href={`/product/${product.id}`} className="absolute inset-0 z-0"></Link>
                  <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-2 py-1 rounded-lg z-10 animate-bounce">
                    {product.discount} OFF
                  </div>
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
                      <span className="text-gray-400 text-xs line-through font-medium text-red-400">৳{product.oldPrice}</span>
                      <span className="text-xl font-black text-gray-900">৳{product.price}</span>
                    </div>
                    
                    <button onClick={(e) => { e.preventDefault(); useCartStore.getState().addItem(product); }} className="w-10 h-10 bg-gray-50 hover:bg-primary text-gray-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-md hover:shadow-primary/30 active:scale-95">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      
      <Footer />
    </main>
  );
}