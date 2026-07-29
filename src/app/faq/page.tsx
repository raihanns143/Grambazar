"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are all your products 100% organic?",
      answer: "Yes! We work directly with certified organic farmers across Bangladesh. Our products are grown without synthetic pesticides, herbicides, or genetically modified organisms (GMOs)."
    },
    {
      question: "How much is the delivery fee?",
      answer: "Delivery is completely free for all orders over ৳1000. For orders below ৳1000, we charge a flat delivery fee of ৳60 inside Dhaka and ৳120 outside Dhaka."
    },
    {
      question: "Do you offer Cash on Delivery (COD)?",
      answer: "Yes, we offer Cash on Delivery for all locations within Bangladesh. You can also pay via bKash, Nagad, or credit/debit card during checkout."
    },
    {
      question: "What is your return and refund policy?",
      answer: "If you receive a damaged or incorrect item, please notify us within 24 hours of delivery. We will arrange a free replacement or provide a full refund. Fresh produce must be reported within 12 hours."
    },
    {
      question: "How long does delivery take?",
      answer: "Inside Dhaka, we offer same-day or next-day delivery depending on when you place the order. Outside Dhaka, delivery typically takes 2-3 business days."
    },
    {
      question: "Where do you source your products from?",
      answer: "We source directly from a network of over 500 local farmers in rural Bangladesh, including Rajshahi (Mangoes), Bogra (Vegetables), and the Sundarbans (Honey). This ensures fair prices for farmers and the freshest produce for you."
    }
  ];

  return (
    <main className="bg-gray-50/30 min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-4">
            <MessageCircleQuestion className="w-10 h-10 text-primary" /> FAQ
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Frequently Asked Questions. Find answers to common questions about our products, shipping, and returns.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white border rounded-2xl overflow-hidden transition-colors ${openIndex === index ? 'border-primary shadow-sm' : 'border-gray-100'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-gray-900 hover:text-primary transition-colors focus:outline-none"
              >
                <span className="text-lg pr-8">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180 text-primary' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 mt-2 mx-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-green-50 rounded-3xl p-8 text-center border border-green-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6">If you cannot find answer to your question in our FAQ, you can always contact us.</p>
          <a href="/contact" className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-primary/30 hover:bg-green-600 transition-colors">
            Contact Us
          </a>
        </div>

      </div>
      
      <Footer />
    </main>
  );
}
