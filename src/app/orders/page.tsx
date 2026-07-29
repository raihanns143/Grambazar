"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { User, Package, Heart, LogOut, Settings, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Orders() {
  const [isClient, setIsClient] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    if (isClient && !isAuthenticated) {
      router.push("/login");
    }
  }, [isClient, isAuthenticated, router]);

  if (!isClient || !isAuthenticated || !user) return <main className="min-h-screen bg-gray-50"><Navbar /></main>;

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <main className="bg-gray-50/50 min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <div className="w-20 h-20 bg-green-100 text-primary rounded-full flex items-center justify-center text-3xl font-bold mb-4 mx-auto">
                {user.name.charAt(0)}
              </div>
              <h2 className="text-xl font-bold text-gray-900 text-center mb-1">{user.name}</h2>
              <p className="text-gray-500 text-sm text-center mb-8">{user.email}</p>
              
              <nav className="space-y-2">
                <Link href="/profile" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors">
                  <User className="w-5 h-5" /> Dashboard
                </Link>
                <Link href="/orders" className="flex items-center gap-3 px-4 py-3 bg-green-50 text-primary rounded-xl font-medium transition-colors">
                  <Package className="w-5 h-5" /> My Orders
                </Link>
                <Link href="/wishlist" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors">
                  <Heart className="w-5 h-5" /> Wishlist
                </Link>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors">
                  <Settings className="w-5 h-5" /> Settings
                </button>
                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-medium transition-colors mt-4">
                  <LogOut className="w-5 h-5" /> Logout
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
            
            <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm text-center">
              <Package className="w-16 h-16 text-gray-200 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No Orders Yet</h2>
              <p className="text-gray-500 mb-8 max-w-sm mx-auto">Looks like you haven't made any purchases yet. Start shopping to fill this space!</p>
              <Link href="/shop" className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg shadow-primary/30">
                Start Shopping <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
          </div>
          
        </div>
      </div>
      
      <Footer />
    </main>
  );
}