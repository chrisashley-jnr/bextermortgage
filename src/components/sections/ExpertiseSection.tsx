"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const ExpertiseSection = () => {
  const values = [
    "Understanding",
    "Practical",
    "Creative",
    "Reliable",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Who we are?</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            We specialize in arranging mortgages for people who've been turned down elsewhere, 
            using our expertise to find the right solution when others can't.
          </h2>
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {values.map((value, index) => (
              <div key={index} className="flex items-center gap-2 group">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Check className="w-3 h-3 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-lg font-medium text-slate-700">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[40px] overflow-hidden shadow-2xl h-[400px] relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop" 
              alt="Interior Design" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[40px] overflow-hidden shadow-2xl h-[400px] relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1000&auto=format&fit=crop" 
              alt="Minimal Office" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl max-w-xs text-center">
                <h4 className="font-bold text-lg mb-2">Bespoke Solutions</h4>
                <p className="text-sm text-slate-500">Every client case is unique. We tailor our approach to fit your specific needs.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
