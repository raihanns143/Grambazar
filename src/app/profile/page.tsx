"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { User, MapPin, Settings, LogOut, Package, CreditCard, Bell, Shield } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Profile() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated || !user) return null;

  return (
    <main className="bg-gray-50/30 min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">My Account</h1>
          <p className="text-gray-500">Manage your profile, track orders, and update your addresses.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm sticky top-24">
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                <div className="w-16 h-16 bg-green-50 text-primary rounded-full flex items-center justify-center font-bold text-2xl">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 text-lg">{user.name}</h2>
                  <p className="text-gray-500 text-sm">{user.email}</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                <button 
                  onClick={() => setActiveTab("dashboard")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <User className="w-5 h-5" /> Dashboard
                </button>
                <Link 
                  href="/orders"
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3"><Package className="w-5 h-5" /> Orders</div>
                  <span className="bg-green-50 text-primary text-xs font-bold px-2 py-1 rounded-full">3</span>
                </Link>
                <button 
                  onClick={() => setActiveTab("addresses")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'addresses' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <MapPin className="w-5 h-5" /> Addresses
                </button>
                <button 
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'settings' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <Settings className="w-5 h-5" /> Account Settings
                </button>
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <button 
                    onClick={logout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-5 h-5" /> Logout
                  </button>
                </div>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              
              {activeTab === "dashboard" && (
                <motion.div key="dashboard" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <div className="bg-white rounded-[2rem] border border-gray-100 p-8 md:p-10 shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Hello, {user.name}! 👋</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      From your account dashboard you can view your <Link href="/orders" className="text-primary hover:underline">recent orders</Link>, manage your shipping and billing addresses, and edit your password and account details.
                    </p>
                    
                    <div className="grid sm:grid-cols-3 gap-6">
                      <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-500 mb-4 shadow-sm"><Package className="w-6 h-6" /></div>
                        <h3 className="font-bold text-gray-900 mb-1">Total Orders</h3>
                        <p className="text-blue-600 font-black text-2xl">12</p>
                      </div>
                      <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-500 mb-4 shadow-sm"><CreditCard className="w-6 h-6" /></div>
                        <h3 className="font-bold text-gray-900 mb-1">Loyalty Points</h3>
                        <p className="text-orange-600 font-black text-2xl">450</p>
                      </div>
                      <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-4 shadow-sm"><Shield className="w-6 h-6" /></div>
                        <h3 className="font-bold text-gray-900 mb-1">Account Status</h3>
                        <p className="text-primary font-black text-xl">Verified</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "addresses" && (
                <motion.div key="addresses" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <div className="bg-white rounded-[2rem] border border-gray-100 p-8 md:p-10 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-2xl font-bold text-gray-900">Saved Addresses</h2>
                      <button className="text-primary font-bold hover:underline text-sm">+ Add New</button>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="border-2 border-primary bg-green-50/30 rounded-2xl p-6 relative">
                        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">Default</div>
                        <h3 className="font-bold text-gray-900 mb-2">{user.name} (Home)</h3>
                        <p className="text-gray-600 text-sm mb-1">+880 1712 345 678</p>
                        <p className="text-gray-600 text-sm mb-4">Level 4, Navana Tower, Gulshan-1<br/>Dhaka-1212, Bangladesh</p>
                        <div className="flex gap-4">
                          <button className="text-primary font-semibold text-sm hover:underline">Edit</button>
                          <button className="text-red-500 font-semibold text-sm hover:underline">Delete</button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-2">{user.name} (Office)</h3>
                        <p className="text-gray-600 text-sm mb-1">+880 1812 987 654</p>
                        <p className="text-gray-600 text-sm mb-4">Software Tech Park, Karwan Bazar<br/>Dhaka-1215, Bangladesh</p>
                        <div className="flex gap-4">
                          <button className="text-primary font-semibold text-sm hover:underline">Edit</button>
                          <button className="text-red-500 font-semibold text-sm hover:underline">Delete</button>
                          <button className="text-gray-500 font-semibold text-sm hover:underline ml-auto">Set Default</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "settings" && (
                <motion.div key="settings" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <div className="bg-white rounded-[2rem] border border-gray-100 p-8 md:p-10 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Account Settings</h2>
                    
                    <form className="space-y-6 max-w-xl" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                          <input type="text" defaultValue={user.name.split(' ')[0]} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-gray-50" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                          <input type="text" defaultValue={user.name.split(' ')[1] || ''} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-gray-50" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <input type="email" defaultValue={user.email} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-gray-50" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                        <input type="tel" defaultValue="+880 1712 345 678" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-gray-50" />
                      </div>
                      
                      <div className="pt-6 border-t border-gray-100">
                        <h3 className="font-bold text-gray-900 mb-4">Change Password</h3>
                        <div className="space-y-4">
                          <input type="password" placeholder="Current Password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-gray-50" />
                          <input type="password" placeholder="New Password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-gray-50" />
                        </div>
                      </div>
                      
                      <div className="pt-6">
                        <button className="bg-primary text-white font-bold px-8 py-3.5 rounded-xl hover:bg-green-600 transition-colors shadow-lg shadow-primary/30">
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}