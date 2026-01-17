"use client";

import { motion } from "framer-motion";

export const LendersSection = () => {
  const lenders = [
    { name: "Zebraft", logo: "Z" },
    { name: "Lightbar", logo: "L" },
    { name: "PartnerGo", logo: "P" },
    { name: "GameBank", logo: "G" },
    { name: "Renovia", logo: "R" },
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-slate-400 font-bold uppercase tracking-widest text-sm mb-12">POPULAR LENDERS WE USE</h3>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60">
          {lenders.map((lender, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs uppercase">
                {lender.logo}
              </div>
              <span className="font-bold text-xl text-slate-900">{lender.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
