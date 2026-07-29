"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Categories() {
  return (
    <main className="bg-gray-50/30 min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Explore Categories</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Browse through our wide selection of fresh, organic, and premium quality grocery categories.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link 
                href={`/categories/${cat.id}`}
                className="group block bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-300"
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-inner ${cat.color}`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{cat.name}</h3>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2 min-h-[40px]">{cat.description}</p>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-sm font-semibold text-gray-400">{cat.itemCount} Items</span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-primary flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
      </div>
      
      <Footer />
    </main>
  );
}