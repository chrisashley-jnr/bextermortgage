"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckSquare, ShieldQuestion, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ToolsPage() {
  const tools = [
    {
      title: "Mortgage Terms Glossary",
      description: "So much to know about your mortgage. Here are some definitions to help out. Our friendly, expert brokers always have the time, if you have more questions.",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      link: "#"
    },
    {
      title: "Mortgage Checklist",
      description: "For the eager and organized, here's a list of what you may need to complete your mortgage. Of course, we'll help you check everything off your list, including a great mortgage fit.",
      icon: <CheckSquare className="w-8 h-8 text-primary" />,
      link: "#"
    },
    {
      title: "What is an insured mortgage?",
      description: "If you have less than a 20% down payment for a home, you'll need default insurance that (usually) incurs a premium. But, there can be benefits, too. Here's what it can mean for you.",
      icon: <ShieldQuestion className="w-8 h-8 text-primary" />,
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase text-primary bg-primary/5 rounded-full">
              Resources
            </span>
            <h1 className="text-5xl font-bold mb-6 text-slate-900">Bexter Mortgage Tools</h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a break from higher bank rates. Want the lowest rate around? Here's some Rate Relief. Or get your BEST rate and product, anytime, with 5-star service that can save you thousands.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{tool.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed h-[120px]">{tool.description}</p>
                <Link href={tool.link} className="inline-flex items-center gap-2 font-semibold text-primary group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unbiased Advice Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Unbiased, expert advice. Completely free.</h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Mortgages can be stressful. Our expert team makes it easy. Whether you apply online or stop by, you get a real person who cares about getting your best mortgage.
            </p>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              We're unified, highly trained and salaried for unbiased advice. And there's no cost or obligation while we deal with the lenders and details for you. It's a relationship for a lifetime of mortgage help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-10 py-7 font-bold text-lg border-2 border-transparent">
                  Get a call back
                </Button>
              </Link>
              <Link href="/apply">
                <Button variant="outline" size="lg" className="border-2 border-slate-700 text-white hover:bg-slate-800 hover:text-white hover:border-slate-600 rounded-full px-10 py-7 font-bold text-lg bg-transparent">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
