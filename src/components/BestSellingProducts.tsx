"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Star, Eye, Heart } from "lucide-react";
import { products } from "@/lib/data";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import Link from "next/link";

export default function BestSellingProducts() {


  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Best Selling Products
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600"
          >
            Our most popular items chosen by our loyal customers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {products.slice(8, 12).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-3xl border border-gray-100 p-4 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
            >
              {/* Image Area */}
              <Link href={`/product/${product.id}`} className={`relative h-48 w-full ${product.bgColor} rounded-2xl flex items-center justify-center mb-4 overflow-hidden block`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-7xl drop-shadow-md relative z-0"
                >
                  {product.image}
                </motion.div>
              </Link>

              {/* Info Area */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm font-bold text-secondary">
                    <Star className="w-3.5 h-3.5 fill-secondary" />
                    {product.rating}
                  </div>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors cursor-pointer">
                  {product.name}
                </h3>
                
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
                  <span className="text-lg font-black text-gray-900">৳{product.price}</span>
                  
                  <button onClick={(e) => { e.preventDefault(); useCartStore.getState().addItem(product); }} className="text-primary hover:bg-primary hover:text-white p-2 rounded-xl transition-colors border border-primary/20 hover:border-primary">
                    <ShoppingCart className="w-4 h-4" />
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
