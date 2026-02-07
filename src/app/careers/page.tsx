"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase } from "lucide-react";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-40 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Briefcase className="w-10 h-10 text-primary" />
            </div>
            
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase text-primary bg-primary/5 rounded-full">
              Careers at Bexter
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Join Our Team
            </h1>
            
            <div className="bg-slate-50 rounded-[40px] p-12 md:p-16 border border-slate-100 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">Current Openings</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Thank you for your interest in joining Bexter Mortgage. 
                We are currently not hiring for any positions at this time.
              </p>
              <div className="inline-block px-6 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <p className="font-semibold text-slate-700">No active vacancies</p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-slate-600 mb-12">
              <p>
                We're always looking for talented individuals who share our passion for putting people over mortgages. 
                Even though we don't have any open roles right now, feel free to check back later or get in touch 
                for general inquiries.
              </p>
            </div>
            
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-white rounded-full px-10 py-6 text-lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
