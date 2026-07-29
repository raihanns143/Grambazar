"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, categories } from "@/lib/data";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { ShoppingCart, Star, Heart, Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState(1000);
  const [sortBy, setSortBy] = useState("default");
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredProducts = useMemo(() => {
    let result = products;

    if (searchQuery) {
      result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    if (selectedCategory !== "all") {
      result = result.filter(p => p.categoryId === selectedCategory);
    }
    result = result.filter(p => p.price <= priceRange);

    if (sortBy === "price-low") result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === "rating") result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <main className="bg-gray-50/30 min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Shop Our Products</h1>
            <p className="text-gray-500">Showing {currentProducts.length} of {filteredProducts.length} results</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm"
              />
            </div>
            
            <div className="relative hidden md:block">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2.5 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm font-medium text-gray-700 cursor-pointer"
              >
                <option value="default">Sort by: Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-primary" /> Categories
              </h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => { setSelectedCategory("all"); setCurrentPage(1); }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors ${selectedCategory === "all" ? "bg-green-50 text-primary" : "text-gray-600 hover:bg-gray-50"}`}
                  >
                    All Categories
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => { setSelectedCategory(cat.id); setCurrentPage(1); }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${selectedCategory === cat.id ? "bg-green-50 text-primary" : "text-gray-600 hover:bg-gray-50"}`}
                    >
                      <span className="flex items-center gap-2"><span className="text-lg">{cat.icon}</span> {cat.name}</span>
                      <span className="bg-gray-100 text-gray-500 py-0.5 px-2 rounded-full text-xs">{cat.itemCount}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Price Filter */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Price Range</h3>
              <input 
                type="range" 
                min="0" 
                max="1000" 
                step="10"
                value={priceRange} 
                onChange={(e) => { setPriceRange(Number(e.target.value)); setCurrentPage(1); }}
                className="w-full accent-primary h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-500 font-medium mt-4">
                <span>৳0</span>
                <span className="text-primary font-bold">Up to ৳{priceRange}</span>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {currentProducts.length === 0 ? (
              <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center shadow-sm h-full flex flex-col items-center justify-center">
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">No products found</h2>
                <p className="text-gray-500 mb-6">Try adjusting your filters or search query.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("all"); setPriceRange(1000); }}
                  className="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-green-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  <AnimatePresence mode="popLayout">
                    {currentProducts.map((product) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        key={product.id}
                        className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                      >
                        {/* Product Image */}
                        <div className={`relative h-56 w-full ${product.bgColor} flex items-center justify-center p-6 overflow-hidden`}>
                          <Link href={`/product/${product.id}`} className="absolute inset-0 z-0"></Link>
                          {product.discount && (
                            <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-2 py-1 rounded-lg z-10">
                              {product.discount} OFF
                            </div>
                          )}
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

                        {/* Product Info */}
                        <div className="p-5">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-primary bg-green-50 px-2 py-1 rounded-md">
                              {product.category}
                            </span>
                            <div className="flex items-center gap-1 text-sm font-bold text-secondary">
                              <Star className="w-3.5 h-3.5 fill-secondary" />
                              {product.rating}
                            </div>
                          </div>
                          
                          <Link href={`/product/${product.id}`} className="block font-bold text-lg text-gray-900 mb-4 group-hover:text-primary transition-colors cursor-pointer truncate">
                            {product.name}
                          </Link>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                              {product.oldPrice && <span className="text-gray-400 text-xs line-through font-medium">৳{product.oldPrice}</span>}
                              <span className="text-lg font-black text-gray-900">৳{product.price}</span>
                            </div>
                            
                            <button onClick={(e) => { e.preventDefault(); useCartStore.getState().addItem(product); }} className="w-10 h-10 bg-gray-50 hover:bg-primary text-gray-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-md hover:shadow-primary/30 active:scale-95">
                              <ShoppingCart className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-12 gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setCurrentPage(i + 1);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`w-10 h-10 rounded-full font-bold transition-colors ${currentPage === i + 1 ? 'bg-primary text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}