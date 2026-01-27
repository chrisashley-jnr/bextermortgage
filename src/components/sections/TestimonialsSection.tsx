"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Helen Klane",
      role: "Homeowner",
      content: "Bexter Mortgage were absolutely fantastic throughout my house purchase process. I would highly recommend their services to anyone looking for a broker.",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?u=h"
    },
    {
      name: "Caspian El-Amin",
      role: "First Time Buyer",
      content: "Amazing service from start to finish. They found a lender when others couldn't. Professional, friendly, and efficient.",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?u=c"
    },
    {
      name: "Henry Ambler",
      role: "Property Investor",
      content: "As a property investor, I value efficiency and transparency. Bexter delivered on both fronts. Looking forward to our next deal.",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?u=he"
    },
    {
      name: "Miles Baker",
      role: "Refinancing",
      content: "The best experience I've had with a mortgage broker. They saved me thousands on my monthly payments.",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?u=m"
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">WHAT OUR LOVING CLIENT SAYING</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-slate-100 flex flex-col hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#fbbf24" className="text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-8 flex-1 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-500 text-xs uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 gap-4">
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all">
            <ChevronLeft size={20} />
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
