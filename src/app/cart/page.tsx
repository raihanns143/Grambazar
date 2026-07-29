"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCartStore } from "@/store/useCartStore";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Cart() {
  const [isClient, setIsClient] = useState(false);
  const { items, removeItem, updateQuantity, getCartTotal } = useCartStore();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <main className="min-h-screen bg-gray-50"><Navbar /></main>;
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <main className="bg-gray-50/50 min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center shadow-sm">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Looks like you haven't added any products to your cart yet. Browse our shop to discover fresh organic produce.
            </p>
            <Link 
              href="/shop"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-bold hover:bg-green-600 transition-colors shadow-lg shadow-primary/30"
            >
              Start Shopping <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <motion.div 
                  layout
                  key={item.id}
                  className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <Link href={`/product/${item.id}`} className={`w-full sm:w-24 h-24 ${item.bgColor} rounded-xl flex items-center justify-center shrink-0`}>
                    <span className="text-5xl drop-shadow-md">{item.image}</span>
                  </Link>
                  
                  <div className="flex-1 text-center sm:text-left w-full">
                    <Link href={`/product/${item.id}`} className="font-bold text-lg text-gray-900 hover:text-primary transition-colors block mb-1">
                      {item.name}
                    </Link>
                    <div className="text-primary font-bold">
                      ৳{item.price} <span className="text-gray-400 text-sm font-normal line-through ml-2">{item.oldPrice ? `৳${item.oldPrice}` : ''}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-4 sm:pt-0 mt-4 sm:mt-0">
                    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl h-10 w-28">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="flex-1 text-center font-bold text-gray-900 text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, Math.min(item.stock, item.quantity + 1))}
                        className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    
                    <div className="font-black text-gray-900 w-20 text-right">
                      ৳{item.price * item.quantity}
                    </div>
                    
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-gray-900">৳{subtotal}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-semibold text-gray-900">{shipping === 0 ? 'Free' : `৳${shipping}`}</span>
                  </div>
                  {shipping > 0 && (
                    <div className="text-xs text-secondary bg-yellow-50 p-2 rounded-lg">
                      Add ৳{1000 - subtotal} more to your cart to get free shipping!
                    </div>
                  )}
                </div>
                
                <div className="border-t border-gray-100 pt-4 mb-8">
                  <div className="flex justify-between text-gray-900 mb-6 font-bold text-xl">
                    <span>Total</span>
                    <span>৳{total}</span>
                  </div>
                  
                  <div className="mb-6 relative">
                    <input type="text" placeholder="Coupon Code" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary pr-24" />
                    <button className="absolute right-1 top-1 bottom-1 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-lg transition-colors text-sm">
                      Apply
                    </button>
                  </div>
                </div>
                  
                <Link 
                  href="/checkout"
                  className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center transition-colors shadow-lg shadow-primary/30 hover:bg-green-600"
                >
                  Proceed to Checkout <ArrowRight className="w-5 h-5" />
                </Link>
                
                <div className="mt-4 text-center">
                  <Link href="/shop" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
      
      <Footer />
    </main>
  );
}