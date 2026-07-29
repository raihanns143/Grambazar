"use client";

import { motion, Variants } from "framer-motion";
import { Truck, Leaf, Star, ShoppingBag, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-70 -translate-x-1/3 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="max-w-xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-primary font-medium text-sm mb-6 shadow-sm">
              <Leaf className="w-4 h-4" />
              100% Organic • Chemical Free
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Fresh Organic Foods <br />
              <span className="font-light">Delivered Across</span> <br />
              <span className="text-primary relative inline-block">
                Bangladesh
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                </svg>
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Fresh fruits, vegetables and groceries delivered directly from trusted local farmers. Taste the difference of purely organic produce.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              <Link href="/shop" className="bg-primary hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-primary/30 transition-all hover:-translate-y-1">
                <ShoppingBag className="w-5 h-5" />
                Order Now
              </Link>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 shadow-sm transition-all hover:-translate-y-1">
                <MessageCircle className="w-5 h-5 text-green-500" />
                WhatsApp Order
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-200/60">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <Truck className="w-4 h-4" />
                </div>
                Fast Delivery
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-primary">
                  <Leaf className="w-4 h-4" />
                </div>
                100% Organic
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-secondary">
                  <Star className="w-4 h-4 fill-secondary" />
                </div>
                Trusted by Customers
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative lg:pl-10 mt-10 lg:mt-0"
          >
            {/* Floating decorative elements */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 z-20 bg-white p-3 rounded-2xl shadow-xl border border-gray-100"
            >
              <span className="text-3xl">🥭</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 right-10 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
            >
              <span className="text-3xl">🥦</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border-8 border-white bg-white/50 backdrop-blur-sm"
            >
              {/* Note: since we generated a banner image at /images/banner.jpg previously, we'll use that */}
              <div className="aspect-[4/3] relative w-full h-full">
                <img 
                  src="/images/banner.jpg" 
                  alt="Fresh Organic Groceries" 
                  className="w-full h-full object-cover"
                />
                {/* Subtle gradient overlay to make it pop */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
