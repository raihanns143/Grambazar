"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/data";
import { Clock, ArrowRight, User } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogList() {
  return (
    <main className="bg-gray-50/30 min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">GramBazar Blog</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Read the latest news, tips, and insights on organic living, healthy diets, and sustainable farming.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-64 bg-gray-50 flex items-center justify-center relative overflow-hidden">
                <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10"></Link>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-primary z-20 shadow-sm">
                  {post.category}
                </div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="text-8xl drop-shadow-xl"
                >
                  {post.imageEmoji}
                </motion.div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 mb-4">
                  <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
                </div>
                
                <Link href={`/blog/${post.slug}`} className="block">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                  <span className="text-sm font-semibold text-gray-500">{post.date}</span>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="flex items-center gap-2 text-primary font-bold hover:text-green-700 transition-colors"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
      
      <Footer />
    </main>
  );
}