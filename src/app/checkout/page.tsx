"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Checkout() {
  const [isClient, setIsClient] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { items, getCartTotal, clearCart } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    if (isClient && items.length === 0 && !orderPlaced) {
      router.push("/cart");
    }
  }, [isClient, items.length, orderPlaced, router]);

  if (!isClient) return <main className="min-h-screen bg-gray-50"><Navbar /></main>;

  const subtotal = getCartTotal();
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (orderPlaced) {
    return (
      <main className="bg-gray-50/50 min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-green-100 text-primary rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Order Placed Successfully!</h1>
            <p className="text-gray-600 mb-8 max-w-md">
              Thank you for shopping with GramBazar. Your order has been received and is being processed. 
              We'll send you an SMS with tracking details soon.
            </p>
            <div className="flex gap-4">
              <Link href="/orders" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-bold transition-colors">
                View Orders
              </Link>
              <Link href="/shop" className="bg-primary hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                Continue Shopping
              </Link>
            </div>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-gray-50/50 min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Form */}
          <div className="lg:col-span-2">
            <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-8">
              
              {/* Shipping Details */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="Doe" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="+880 1XXX XXXXXX" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Address</label>
                    <textarea required rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none" placeholder="House no, Street, Area..."></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
                      <option>Dhaka</option>
                      <option>Chattogram</option>
                      <option>Sylhet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Zone / Area</label>
                    <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="Gulshan" />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h2>
                <div className="space-y-4">
                  <label className="flex items-center gap-4 p-4 border border-primary bg-green-50 rounded-xl cursor-pointer">
                    <input type="radio" name="payment" defaultChecked className="w-5 h-5 text-primary focus:ring-primary" />
                    <div>
                      <span className="block font-bold text-gray-900">Cash on Delivery</span>
                      <span className="text-sm text-gray-500">Pay when you receive your order.</span>
                    </div>
                  </label>
                  <label className="flex items-center gap-4 p-4 border border-gray-200 hover:border-primary hover:bg-green-50/50 rounded-xl cursor-pointer transition-colors opacity-50">
                    <input disabled type="radio" name="payment" className="w-5 h-5 text-primary focus:ring-primary" />
                    <div>
                      <span className="block font-bold text-gray-900">bKash / Nagad (Coming Soon)</span>
                      <span className="text-sm text-gray-500">Pay securely via mobile banking.</span>
                    </div>
                  </label>
                </div>
              </div>

            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                {items.map(item => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center shrink-0`}>
                      <span className="text-2xl">{item.image}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-bold text-sm text-gray-900">৳{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-6 border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between text-gray-600 text-sm">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">৳{subtotal}</span>
                </div>
                <div className="flex items-center justify-between text-gray-600 text-sm">
                  <span>Shipping</span>
                  <span className="font-semibold text-gray-900">{shipping === 0 ? 'Free' : `৳${shipping}`}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-black text-primary">৳{total}</span>
                </div>
              </div>
              
              <button 
                form="checkout-form"
                type="submit"
                className="w-full bg-primary hover:bg-green-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/30 active:scale-95 mb-4"
              >
                Place Order <ArrowRight className="w-5 h-5" />
              </button>
              
              <p className="text-xs text-center text-gray-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-4 h-4 text-green-500" /> Safe and secure checkout
              </p>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}