"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileText, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StepsSection = () => {
  const steps = [
    {
      icon: <UserCheck className="w-6 h-6 text-primary" />,
      title: "Buying a Home",
      description: "Mortgages are complex, but we make it really simple by doing all the heavy lifting for you. Secure the best mortgage for your unique needs today and years down the road.",
    },
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Refinance/Renew",
      description: "We'll help you save money and maximize your refinance or renewal strategy through an equity take out, prepayment plan, or cost saving opportunity.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
      title: "Investing",
      description: "Finding the right investment opportunity can change your financial future. No matter the scenario, there are always solutions, and it's our job to find you the right one.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              UNDERSTANDING YOUR NEEDS
            </h2>
            <p className="text-slate-600 text-lg mb-6 max-w-lg">
              There's a lot to know, especially to save more. Is your bank going to help you with all that? Short answer: No. But we can, as one of Ghana's top mortgage brokerages.
            </p>
            <p className="text-slate-600 text-lg mb-10 max-w-lg">
              We exist to offer you the lowest rates in the industry through volume discounts and strong lender relationships. Our highly trained Bexter Mortgage brokers offer unbiased advice that puts you first.
            </p>
            <Button size="lg" className="rounded-full px-8 py-6 bg-primary text-white font-semibold">
              Get Started Now
            </Button>
          </div>

          <div className="lg:w-1/2 w-full flex flex-col gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6 bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <div className="group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
