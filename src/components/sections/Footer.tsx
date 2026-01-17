"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-6">
        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-[40px] bg-slate-900 p-12 mb-24 md:flex items-center justify-between gap-12 text-white">
          <div className="md:w-1/2 mb-8 md:mb-0 relative z-10">
            <h2 className="text-4xl font-bold mb-4">Get In Touch For Your Free Consultation</h2>
            <p className="text-slate-400 text-lg">Speak to one of our friendly mortgage experts today and find out your options.</p>
          </div>
          <div className="flex gap-4 relative z-10">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-7 font-bold text-lg">
              Start Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-black hover:bg-white hover:bg-black hover:text-white rounded-full px-10 py-7 font-bold text-lg">
              Contact Us
            </Button>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img src="/images/logos/bexterlogo.svg" alt="Bexter Mortgage" className="h-15 w-auto" />
            </Link>
            <p className="text-slate-500 leading-relaxed mb-6">
              Putting people over mortgages. Find reliable mortgage solutions tailored just for you.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-500 hover:text-primary transition-colors">Find a Broker</Link></li>
              <li><Link href="/about" className="text-slate-500 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-slate-500 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-primary transition-colors">Career</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-500 hover:text-primary transition-colors">Remortgage</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-primary transition-colors">First Time Buyer</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-primary transition-colors">Buy To Let</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-primary transition-colors">Help to Buy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-500 mb-6">Subscribe to our newsletter to get latest news and updates.</p>
            <div className="flex gap-2 p-1.5 bg-slate-50 rounded-full border border-slate-200">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent border-none outline-none px-4 flex-1 text-sm"
              />
              <Button size="sm" className="rounded-full px-5 py-5 bg-primary hover:bg-primary/90">
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400">
          <p>© 2026 Mortgage Experts. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
