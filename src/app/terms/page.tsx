
"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

export default function TermsofServicePage() {
  return (
    <main className="bg-gray-50/30 min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-4">
            <FileText className="w-10 h-10 text-primary" /> Terms of Service
          </h1>
          <p className="text-gray-500">Last updated: July 20, 2026</p>
        </div>
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm prose prose-lg prose-green max-w-none text-gray-600">
          
<h2>1. Acceptance of Terms</h2>
<p>By accessing and using the GramBazar website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
<h2>2. Product Accuracy</h2>
<p>We attempt to be as accurate as possible with our product descriptions and pricing. However, we do not warrant that product descriptions, pricing, or other content of this site is accurate, complete, reliable, current, or error-free. Because our products are fresh and organic, actual sizes and appearances may vary.</p>
<h2>3. Pricing and Availability</h2>
<p>All prices are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>
<h2>4. User Accounts</h2>
<p>If you create an account on the Website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it.</p>

        </div>
      </div>
      <Footer />
    </main>
  );
}
