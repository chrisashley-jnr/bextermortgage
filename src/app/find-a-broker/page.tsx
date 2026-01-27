"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function FindBrokerPage() {
  const brokers = [
    {
      name: "Emmanuel B. Asiamah Jnr",
      role: "Lead Broker & Founder",
      image: "/bexterfounder.jpg", 
      email: "contact@bextermortgage.com",
      phone: "+1 (647) 228-9447",
      location: "Toronto, Canada",
      specialties: ["Residential Mortgages", "Expat Mortgages", "Refinancing"],
      bio: "With over a decade of experience, Emmanuel helps clients navigate the complex mortgage landscape with ease and transparency."
    },
    // Placeholder for future brokers to demonstrate grid
    /*
    {
      name: "Sarah Johnson",
      role: "Senior Mortgage Agent",
      image: "...", 
      email: "sarah@bextermortgage.com", 
      ...
    } 
    */
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase text-primary bg-primary/5 rounded-full">
              Our Experts
            </span>
          <h1 className="text-5xl font-bold mb-6 text-slate-900">Find Your Mortgage Partner</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Connect directly with our licensed professionals who are dedicated to finding you the best rates and terms.
          </p>
        </div>
      </section>

      {/* Broker Directory */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Render Brokers */}
            {brokers.map((broker, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                    {/* Fallback if image missing, or use actual image */}
                   <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                        <Image 
                            src={broker.image} 
                            alt={broker.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                   </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{broker.name}</h3>
                    <p className="text-primary font-medium">{broker.role}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-slate-600">
                      <Mail size={18} className="text-primary" />
                      <a href={`mailto:${broker.email}`} className="hover:text-primary transition-colors">{broker.email}</a>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <Phone size={18} className="text-primary" />
                       <span>{broker.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <MapPin size={18} className="text-primary" />
                      <span>{broker.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                      {broker.specialties.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wide rounded-full">
                              {tag}
                          </span>
                      ))}
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-slate-900 text-white rounded-xl py-6 font-bold hover:bg-slate-800">
                        Contact {broker.name.split(' ')[0]}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}

            {/* "Match Me" Card (Always displayed as an alternative) */}
            <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="bg-primary text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"></div>
                
                <div>
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                        <UserCheck className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Not sure who to choose?</h3>
                    <p className="text-white/90 text-lg leading-relaxed mb-8">
                        Our intelligent matching system connects you with the specialist best suited for your specific financial goals.
                    </p>
                </div>

                <Link href="/apply">
                    <Button className="w-full bg-white text-primary hover:bg-slate-50 rounded-xl py-6 text-lg font-bold border-none">
                        Match Me with a Broker <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Are you a Mortgage Professional?</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                  We are always looking for talented brokers to join our growing team. Benefit from our technology, leads, and support system.
              </p>
              <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-slate-700 hover:bg-slate-800 text-white rounded-full px-10 py-6">
                      Join Our Team
                  </Button>
              </Link>
          </div>
      </section>

      <Footer />
    </main>
  );
}
