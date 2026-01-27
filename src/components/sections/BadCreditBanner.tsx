"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const BadCreditBanner = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 to-blue-500 p-12 text-center text-white"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Bad Credit?</h2>
            <p className="text-xl text-blue-50 mb-10 opacity-90 leading-relaxed">
              We look past the credit score. We focus on the person. If you've been declined by high street lenders, we are here to help.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-lg px-10 py-7 rounded-full font-bold">
                Talk to an Expert
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 bg-transparent text-lg px-10 py-7 rounded-full font-bold">
                Check Availability
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
