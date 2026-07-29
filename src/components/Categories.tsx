"use client";

import { motion } from "framer-motion";
import { categories } from "@/lib/data";
import Link from "next/link";

export default function Categories() {


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Explore Categories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600"
          >
            Find everything you need from our wide variety of fresh, organic, and premium grocery collections.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <motion.div
              layoutId={`category-${category.id}`}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group cursor-pointer flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/categories/${category.id}`} className="flex flex-col items-center justify-center w-full h-full">
              <div className={`w-20 h-20 ${category.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-4xl">{category.icon}</span>
              </div>
              <h3 className="font-semibold text-gray-800 text-lg group-hover:text-primary transition-colors">
                {category.name}
              </h3>
                          </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
