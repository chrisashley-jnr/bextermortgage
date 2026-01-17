"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ApplicationSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="flex items-center justify-center min-h-[80vh] pt-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto bg-white rounded-[32px] p-12 text-center shadow-xl border border-slate-100"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="text-4xl font-bold mb-4 text-slate-900">Application Received!</h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Thank you for submitting your mortgage application. Our team will review your details and get back to you within 24 hours.
            </p>
            
            <div className="flex flex-col gap-4">
              <Link href="/">
                <Button className="w-full bg-primary text-white rounded-xl py-6 text-lg font-bold">
                  Return Home
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="w-full border-slate-200 rounded-xl py-6 text-lg font-semibold hover:bg-slate-50">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
