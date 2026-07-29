"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/lib/data";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { Star, Heart, ShoppingCart, Minus, Plus, Truck, ShieldCheck, ArrowRight, User as UserIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProductDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const product = products.find((p) => p.id === params.id);
  const relatedProducts = product ? products.filter(p => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4) : [];
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description"); // description, specifications, reviews
  const addItemToCart = useCartStore((state) => state.addItem);
  const { addItem: addWishlist, isInWishlist } = useWishlistStore();

  if (!product) {
    return (
      <main className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center pt-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-primary font-medium hover:underline flex items-center gap-2">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Shop
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const isWished = isInWishlist(product.id);

  const handleAddToCart = () => {
    addItemToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addItemToCart(product, quantity);
    router.push("/checkout");
  };

  return (
    <main className="bg-gray-50/30 min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-primary">Shop</Link>
          <span>/</span>
          <Link href={`/categories/${product.categoryId}`} className="hover:text-primary">{product.category}</Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">{product.name}</span>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* Left: Product Gallery */}
            <div className={`${product.bgColor} p-8 lg:p-16 flex flex-col relative`}>
              {product.discount && (
                <div className="absolute top-8 left-8 bg-accent text-white font-bold px-3 py-1.5 rounded-lg text-sm shadow-md z-10">
                  {product.discount} OFF
                </div>
              )}
              <button 
                onClick={() => addWishlist(product)}
                className={`absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md transition-all hover:scale-110 z-10 ${isWished ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
              >
                <Heart className={`w-6 h-6 ${isWished ? 'fill-red-500' : ''}`} />
              </button>
              
              <div className="flex-1 flex items-center justify-center min-h-[300px] lg:min-h-[400px]">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                  className="text-[10rem] md:text-[14rem] lg:text-[16rem] drop-shadow-2xl"
                >
                  {product.image}
                </motion.div>
              </div>
              
              {/* Fake Gallery Thumbnails */}
              <div className="flex justify-center gap-4 mt-8">
                {[1, 2, 3].map((i) => (
                  <button key={i} className={`w-16 h-16 rounded-2xl bg-white/50 border-2 ${i === 1 ? 'border-primary' : 'border-transparent'} flex items-center justify-center text-3xl hover:bg-white transition-colors`}>
                    {product.image}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="p-8 lg:p-12 xl:p-16 flex flex-col">
              <span className="inline-block px-3 py-1 bg-green-50 text-primary text-xs font-bold rounded-md uppercase tracking-wider w-fit mb-4">
                {product.category}
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 bg-secondary/10 text-secondary px-2 py-1 rounded-md font-bold text-sm">
                  <Star className="w-4 h-4 fill-secondary" />
                  {product.rating} <span className="text-gray-500 ml-1">({product.reviewsCount} reviews)</span>
                </div>
                <span className="text-gray-400 text-sm">|</span>
                <span className="text-green-600 font-medium text-sm flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> In Stock ({product.stock} available)
                </span>
              </div>
              
              <div className="flex items-end gap-3 mb-8">
                <span className="text-4xl font-black text-gray-900">৳{product.price}</span>
                {product.oldPrice && (
                  <span className="text-xl text-gray-400 line-through font-medium mb-1">৳{product.oldPrice}</span>
                )}
              </div>
              
              <p className="text-gray-600 mb-10 leading-relaxed text-lg line-clamp-3">
                {product.description}
              </p>
              
              <div className="mt-auto">
                <div className="flex items-center gap-4 mb-6">
                  {/* Quantity Toggle */}
                  <div className="flex items-center bg-gray-50 border border-gray-200 rounded-2xl h-14 w-32">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="flex-1 text-center font-bold text-gray-900">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Add to Cart */}
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 h-14 bg-green-50 text-primary border border-green-200 hover:bg-green-100 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
                
                {/* Buy Now */}
                <button 
                  onClick={handleBuyNow}
                  className="w-full h-14 bg-primary text-white hover:bg-green-600 rounded-2xl font-bold flex items-center justify-center transition-all shadow-lg shadow-primary/30 active:scale-95 mb-8"
                >
                  Buy Now
                </button>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Free Delivery</h4>
                      <p className="text-gray-500 text-xs">On orders over ৳1000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Quality Guaranteed</h4>
                      <p className="text-gray-500 text-xs">100% organic products</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm mb-16">
          <div className="flex flex-wrap gap-8 border-b border-gray-100 mb-8">
            {['description', 'specifications', 'reviews'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-bold text-lg capitalize transition-colors relative ${activeTab === tab ? 'text-primary' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />
                )}
              </button>
            ))}
          </div>
          
          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              {activeTab === "description" && (
                <motion.div 
                  key="desc"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="prose prose-green max-w-none text-gray-600"
                >
                  <p>{product.description}</p>
                  <p className="mt-4">GramBazar ensures that all products are sourced directly from the finest farms. Our rigorous quality control guarantees that you receive only the freshest, most nutritious goods without any chemical treatments or harmful preservatives.</p>
                </motion.div>
              )}
              
              {activeTab === "specifications" && (
                <motion.div 
                  key="spec"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                >
                  {product.specifications ? (
                    <div className="max-w-xl">
                      {product.specifications.map((spec, i) => (
                        <div key={i} className="flex border-b border-gray-100 py-4 last:border-0">
                          <span className="w-1/3 font-semibold text-gray-900">{spec.label}</span>
                          <span className="w-2/3 text-gray-600">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">No specific specifications provided for this product.</p>
                  )}
                </motion.div>
              )}
              
              {activeTab === "reviews" && (
                <motion.div 
                  key="rev"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex text-secondary"><Star className="w-5 h-5 fill-secondary" /><Star className="w-5 h-5 fill-secondary" /><Star className="w-5 h-5 fill-secondary" /><Star className="w-5 h-5 fill-secondary" /><Star className="w-5 h-5 fill-secondary" /></div>
                        <span className="font-bold text-gray-900">{product.rating} out of 5</span>
                      </div>
                    </div>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-xl font-semibold transition-colors">Write a Review</button>
                  </div>
                  
                  {product.reviews && product.reviews.length > 0 ? (
                    <div className="space-y-6">
                      {product.reviews.map(review => (
                        <div key={review.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 text-gray-400">
                                <UserIcon className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-900 text-sm">{review.user}</h4>
                                <span className="text-xs text-gray-500">{review.date}</span>
                              </div>
                            </div>
                            <div className="flex gap-1">
                              {Array.from({length: 5}).map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-secondary fill-secondary' : 'text-gray-300'}`} />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">No reviews yet. Be the first to review this product!</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <div key={p.id} className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className={`relative h-48 w-full ${p.bgColor} flex items-center justify-center p-6`}>
                    <Link href={`/product/${p.id}`} className="absolute inset-0 z-0"></Link>
                    <div className="text-6xl drop-shadow-lg">{p.image}</div>
                  </div>
                  <div className="p-5">
                    <Link href={`/product/${p.id}`} className="block font-bold text-lg text-gray-900 mb-2 hover:text-primary transition-colors truncate">
                      {p.name}
                    </Link>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-black text-gray-900">৳{p.price}</span>
                      <button onClick={(e) => { e.preventDefault(); useCartStore.getState().addItem(p); }} className="w-8 h-8 bg-gray-50 hover:bg-primary text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all">
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      
      <Footer />
    </main>
  );
}