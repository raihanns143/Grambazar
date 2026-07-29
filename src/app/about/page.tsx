"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Leaf, Users, ShieldCheck, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { value: "500+", label: "Local Farmers" },
    { value: "10k+", label: "Happy Customers" },
    { value: "100%", label: "Organic Guarantee" },
    { value: "24/7", label: "Customer Support" },
  ];

  return (
    <main className="bg-gray-50/30 min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6"
          >
            Nourishing Communities,<br/>Supporting Local Farmers.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            GramBazar was founded on a simple principle: everyone deserves access to fresh, healthy, and organic food, and local farmers deserve a fair platform to sell their produce directly to consumers.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="bg-primary py-12 mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20 text-center">
              {stats.map((stat, idx) => (
                <div key={idx} className="px-4">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-green-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-96 rounded-[3rem] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-yellow-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center text-[10rem]">
                🌾
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                What started as a small weekend market initiative in 2022 has grown into Bangladesh's premier online destination for fresh, organic groceries. We noticed a massive gap between rural agricultural hubs and urban dining tables.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                By cutting out the middlemen, GramBazar ensures that farmers get paid better rates for their hard work, while customers receive produce that is fresher, safer, and more affordable.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose GramBazar?</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-green-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">100% Organic</h3>
                <p className="text-gray-600">No harmful pesticides or chemicals. Just pure, natural goodness grown exactly as nature intended.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <HeartHandshake className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fair Trade</h3>
                <p className="text-gray-600">We work directly with farmers, ensuring they receive a premium price for their premium produce.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Guaranteed</h3>
                <p className="text-gray-600">Every single item undergoes strict quality control checks before being dispatched to your doorstep.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <Footer />
    </main>
  );
}
