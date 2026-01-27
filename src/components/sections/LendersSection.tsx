"use client";

import { motion } from "framer-motion";

export const LendersSection = () => {
  const lenders = [
    { name: "Lender 1", logo: "/images/logos/image1.svg" },
    { name: "Lender 2", logo: "/images/logos/image2.svg" },
    { name: "Lender 3", logo: "/images/logos/image3.svg" },
    { name: "Lender 4", logo: "/images/logos/image4.svg" },
    { name: "Lender 5", logo: "/images/logos/image5.svg" },
    { name: "Lender 6", logo: "/images/logos/image6.svg" },
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-slate-400 font-bold uppercase tracking-widest text-sm mb-12">POPULAR LENDERS WE USE</h3>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {lenders.map((lender, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer"
            >
              <img 
                src={lender.logo} 
                alt={lender.name} 
                className="h-12 md:h-14 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
