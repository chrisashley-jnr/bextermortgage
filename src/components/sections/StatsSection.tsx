"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    { label: "Broker regions manual", value: "19+" },
    { label: "Rating on TrustPilot", value: "4.8" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">The Bexter Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              WHY BEXTER
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-xl">
              Because mortgages are all we do. Unlike the banks, we're obsessed with providing you with unbeatable service. It's all about helping you with one of the biggest financial decisions you'll make.
            </p>
            <p className="text-slate-600 text-lg mb-8 max-w-xl">
              Our Bexter Mortgage Brokers are knowledgeable, friendly, and easy to get a hold of — real people who care about getting your best mortgage fit. We're here for your lifetime mortgage needs.
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col sm:flex-row gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-1 bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-center"
              >
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold text-primary">{stat.value}</span>
                  {stat.label.includes("Rating") && (
                    <div className="flex text-amber-400">
                      <Star size={20} fill="currentColor" />
                    </div>
                  )}
                </div>
                <p className="text-slate-500 font-medium uppercase tracking-wider text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
