"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-green-700 rounded-[40px] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl shadow-primary/20"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="text-center lg:text-left max-w-2xl text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                Get <span className="text-yellow-300">20% Off</span> Your First Order
              </h2>
              <p className="text-green-50 text-lg">
                Subscribe to our newsletter and get exclusive offers, healthy recipes, and organic living tips delivered to your inbox.
              </p>
            </div>

            <div className="w-full max-w-md">
              <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-green-100 px-6 py-4 rounded-full outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all backdrop-blur-sm"
                  required
                  suppressHydrationWarning
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-white text-primary hover:bg-green-50 px-6 rounded-full font-bold shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span className="hidden sm:inline">Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <p className="text-green-100 text-xs mt-4 text-center lg:text-left">
                By subscribing you agree to our Terms & Conditions and Privacy Policy.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
