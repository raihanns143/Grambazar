"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Hasan",
      role: "Regular Customer",
      comment: "The freshness of the vegetables is unbelievable. It feels like they were picked from the garden just minutes before delivery. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sadia Rahman",
      role: "Food Blogger",
      comment: "Finally found a reliable place for 100% organic fruits in Dhaka. The delivery is always on time, and the packaging is very eco-friendly.",
      rating: 5,
    },
    {
      id: 3,
      name: "Kamrul Islam",
      role: "Fitness Enthusiast",
      comment: "Their organic chicken and farm-fresh eggs have become a staple in my diet. The quality is consistently excellent week after week.",
      rating: 4,
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50/50 -z-10 rounded-l-[100px] hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600"
          >
            Don't just take our word for it. Read what our valued customers have to say about their experience with GramBazar.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 relative group"
            >
              <div className="absolute -top-4 right-8 bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                <Quote className="w-5 h-5 text-primary" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-secondary text-secondary' : 'fill-gray-200 text-gray-200'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 italic leading-relaxed">
                "{testimonial.comment}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-400">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
