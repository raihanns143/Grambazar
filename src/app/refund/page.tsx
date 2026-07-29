
"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RefreshCcw } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <main className="bg-gray-50/30 min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-4">
            <RefreshCcw className="w-10 h-10 text-primary" /> Refund Policy
          </h1>
          <p className="text-gray-500">Last updated: July 20, 2026</p>
        </div>
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm prose prose-lg prose-green max-w-none text-gray-600">
          
<h2>1. Returns & Replacements</h2>
<p>We take pride in the quality of our fresh organic produce. If you are not entirely satisfied with your purchase, we're here to help. If you receive a damaged or incorrect item, please contact our customer service team within 12 hours of delivery for fresh produce, and within 24 hours for non-perishable goods.</p>
<h2>2. Refunds Process</h2>
<p>Once we receive your complaint and verify the issue, we will initiate a refund to your original method of payment. You will receive the credit within a certain amount of days, depending on your card issuer's policies. For Cash on Delivery orders, we will transfer the refund amount to your designated bKash or Nagad account.</p>
<h2>3. Exceptions</h2>
<p>Please note that we do not accept returns or provide refunds for products that have been partially consumed, altered, or stored incorrectly after delivery. Fresh vegetables, fruits, and meat must be refrigerated immediately upon receipt.</p>

        </div>
      </div>
      <Footer />
    </main>
  );
}
