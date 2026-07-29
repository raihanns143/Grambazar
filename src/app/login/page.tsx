"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore(state => state.login);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login({ name: "Demo User", email });
    router.push("/profile");
  };

  return (
    <main className="bg-gray-50/50 min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 max-w-md mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Welcome Back</h1>
          <p className="text-gray-500 text-center mb-8">Sign in to your GramBazar account</p>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input required type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-green-600 text-white py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-primary/30 mt-4">
              Sign In
            </button>
          </form>
          
          <p className="text-center mt-6 text-gray-600 text-sm">
            Don't have an account? <Link href="/register" className="text-primary font-bold hover:underline">Register here</Link>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}