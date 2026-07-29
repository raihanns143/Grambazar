
"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-50/30 min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-4">
            <ShieldCheck className="w-10 h-10 text-primary" /> Privacy Policy
          </h1>
          <p className="text-gray-500">Last updated: July 20, 2026</p>
        </div>
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm prose prose-lg prose-green max-w-none text-gray-600">
          
<h2>1. Information We Collect</h2>
<p>At GramBazar, we collect information to provide better services to our users. This includes personal information such as your name, email address, phone number, and delivery address when you register for an account or place an order.</p>
<h2>2. How We Use Your Information</h2>
<p>We use the information we collect to process your orders, communicate with you about your order status, and provide customer support. We may also use your information to send you promotional offers if you have opted in to receive them.</p>
<h2>3. Data Security</h2>
<p>We implement a variety of security measures to maintain the safety of your personal information. Your payment information is encrypted and processed securely by our trusted payment gateways. We do not store your credit card details on our servers.</p>
<h2>4. Sharing of Information</h2>
<p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>

        </div>
      </div>
      <Footer />
    </main>
  );
}
