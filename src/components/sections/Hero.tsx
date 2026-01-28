"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative pt-42 pb-20 overflow-hidden">
      {/* Decorative background element */}
      
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase text-primary bg-primary/5 rounded-full">
              Best Mortgage Broker
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-primary">
              The <span className="relative inline-block">
                Experience
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7 Q 50 3, 100 7 T 195 7" stroke="#fbbf24" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </span> you want, the <span className="relative inline-block">
                Service
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7 Q 50 3, 100 7 T 195 7" stroke="#fbbf24" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </span> you expect.
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              The Value You Deserve. At Bexter, we are committed to providing a diverse range of mortgage products to both Ghanaians living abroad and foreigners seeking to acquire or own a property in Ghana.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/apply">
                <Button size="lg" className="rounded-full px-20 py-7 text-lg bg-primary hover:bg-primary/90 text-white font-semibold">
                  Apply Now
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="rounded-full px-20 py-7 text-lg font-semibold border-2 hover:border-primary hover:text-primary">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* House Images Group */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-end max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 1.4 }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" 
              alt="Modern House 1" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 1.2 }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[350px] md:h-[480px] relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop" 
              alt="Modern House 2" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 1.4}}
            className="rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1000&auto=format&fit=crop" 
              alt="Modern House 3" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
