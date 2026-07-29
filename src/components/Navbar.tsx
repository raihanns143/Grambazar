"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useAuthStore } from "@/store/useAuthStore";
import { LogOut, LogIn } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const cartCount = useCartStore((state) => state.getCartCount());
  const wishlistItems = useWishlistStore((state) => state.items);
  const { isAuthenticated, logout } = useAuthStore();

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
            GB
          </div>
          <span className="font-bold text-2xl tracking-tight text-gray-900">
            গ্রাম<span className="text-primary">বাজার</span>
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <Link href="/" className="hover:text-primary transition-colors font-semibold">Home</Link>
          <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <Link href="/categories" className="hover:text-primary transition-colors">Categories</Link>
          <Link href="/offers" className="hover:text-primary transition-colors">Offers</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5 text-gray-600">
          <Link href="/search" className="hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </Link>
          <Link href="/wishlist" className="hover:text-primary transition-colors relative">
            <Heart className="w-5 h-5" />
            {isClient && wishlistItems.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white">
                {wishlistItems.length}
              </span>
            )}
          </Link>
          <Link href="/cart" className="hover:text-primary transition-colors relative">
            <ShoppingCart className="w-5 h-5" />
            {isClient && cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white">
                {cartCount}
              </span>
            )}
          </Link>
          
          {isClient && isAuthenticated ? (
            <div className="hidden sm:flex items-center gap-3">
              <Link href="/profile" className="hover:text-primary transition-colors">
                <User className="w-5 h-5" />
              </Link>
              <button onClick={() => logout()} className="hover:text-red-500 transition-colors" title="Logout">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            isClient && (
              <Link href="/login" className="hover:text-primary transition-colors hidden sm:flex items-center gap-1 font-medium" title="Login">
                <LogIn className="w-5 h-5" />
              </Link>
            )
          )}

          
          <Link href="/shop" className="hidden sm:flex bg-primary hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-medium items-center gap-2 shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5">
            Order Now
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
