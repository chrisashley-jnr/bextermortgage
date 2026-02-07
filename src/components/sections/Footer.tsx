"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Facebook, Instagram, Music2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-6">
        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-[40px] bg-slate-900 p-12 mb-24 md:flex items-center justify-between gap-12 text-white">
          <div className="md:w-1/2 mb-8 md:mb-0 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch For Your Free Consultation</h2>
            <p className="text-slate-400 text-lg">Speak to one of our friendly mortgage experts today and find out your options.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-black hover:bg-white hover:bg-black hover:text-white rounded-full px-10 py-7 font-bold text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img src="/images/logos/bexterlogo.svg" alt="Bexter Mortgage" className="h-15 w-auto" />
            </Link>
            <p className="text-slate-500 leading-relaxed mb-6">
              Putting people over mortgages. Find reliable mortgage solutions tailored just for you.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/share/169oQ8b7oT/?mibextid=wwXIfr" target="_blank" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400">
                <Facebook size={20} />
              </Link>
              <Link href="https://www.instagram.com/bexter_mortgage__ghana?igsh=b3NsbnZlb3A1bmJ3" target="_blank" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400">
                <Instagram size={20} />
              </Link>
              <Link href="https://www.tiktok.com/@bexter_mortgage_gh?_r=1&_t=ZS-93j8OBmUTaq" target="_blank" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400">
                <Music2 size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/find-a-broker" className="text-slate-500 hover:text-primary transition-colors">Find a Broker</Link></li>
              <li><Link href="/about" className="text-slate-500 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-slate-500 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/careers" className="text-slate-500 hover:text-primary transition-colors">Career</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/about#pre-approval" className="text-slate-500 hover:text-primary transition-colors">Mortgage Pre-approval</Link></li>
              <li><Link href="/about#refinancing" className="text-slate-500 hover:text-primary transition-colors">Mortgage Refinancing</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400">
          <p>© 2026 Mortgage Experts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
