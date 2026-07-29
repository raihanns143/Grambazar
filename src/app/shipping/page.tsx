
"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck } from "lucide-react";

export default function ShippingPolicyPage() {
  return (
    <main className="bg-gray-50/30 min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-4">
            <Truck className="w-10 h-10 text-primary" /> Shipping Policy
          </h1>
          <p className="text-gray-500">Last updated: July 20, 2026</p>
        </div>
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm prose prose-lg prose-green max-w-none text-gray-600">
          
<h2>1. Delivery Areas</h2>
<p>GramBazar currently delivers to all major areas within Dhaka city. We also offer nationwide delivery for non-perishable items such as rice, pulses, honey, and spices. Fresh produce and meat delivery is currently limited to Dhaka to ensure quality.</p>
<h2>2. Delivery Fees</h2>
<ul>
  <li><strong>Orders over ৳1000:</strong> Free Delivery (Inside Dhaka)</li>
  <li><strong>Inside Dhaka (Below ৳1000):</strong> ৳60 flat rate</li>
  <li><strong>Outside Dhaka:</strong> ৳120 flat rate</li>
</ul>
<h2>3. Delivery Times</h2>
<p>For orders placed before 12:00 PM inside Dhaka, we offer same-day delivery. Orders placed after 12:00 PM will be delivered the next day. You can select your preferred delivery time slot during checkout. Deliveries outside Dhaka take 2-3 business days.</p>
<h2>4. Packaging</h2>
<p>We are committed to the environment. Your orders will arrive in eco-friendly, biodegradable bags and recycled cardboard boxes to minimize plastic waste.</p>

        </div>
      </div>
      <Footer />
    </main>
  );
}
