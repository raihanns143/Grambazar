"use client";

import { motion } from "framer-motion";
import { Leaf, Truck, ShieldCheck, BadgeCheck } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Fresh Daily",
      description: "Sourced directly from local farmers every morning.",
      icon: <Leaf className="w-8 h-8 text-primary" />,
      color: "bg-green-50",
      borderColor: "border-green-100",
    },
    {
      title: "Fast Delivery",
      description: "Same-day delivery for all orders placed before noon.",
      icon: <Truck className="w-8 h-8 text-secondary" />,
      color: "bg-amber-50",
      borderColor: "border-amber-100",
    },
    {
      title: "Secure Payment",
      description: "100% secure payment methods and easy returns.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      color: "bg-blue-50",
      borderColor: "border-blue-100",
    },
    {
      title: "Quality Guarantee",
      description: "Hand-picked items ensuring only the best quality.",
      icon: <BadgeCheck className="w-8 h-8 text-rose-500" />,
      color: "bg-rose-50",
      borderColor: "border-rose-100",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-gradient-to-r from-green-50 to-amber-50 -z-10 skew-y-3 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3 block">Benefits</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose GramBazar?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to providing you with the best organic products, unmatched quality, and exceptional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`bg-white p-8 rounded-3xl border ${feature.borderColor} shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 relative z-10 overflow-hidden group`}
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 mx-auto`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
