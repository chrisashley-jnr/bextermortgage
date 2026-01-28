"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logos/bexterlogo.svg" alt="Bexter Mortgage" className="h-15 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-5">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <div className="relative group">
            <button className="text-sm font-medium hover:text-primary transition-colors py-4">Resources</button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2 z-50">
              <Link href="/apply" className="block px-4 py-2 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors">Online Application</Link>
              <Link href="/tools" className="block px-4 py-2 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors">Tools</Link>
            </div>
          </div>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact Us</Link>
          <div className="h-4 w-[1px] bg-slate-200"></div>
          <Link href="/calculator" className="text-sm font-medium border border-slate-200 px-10 py-2 rounded-full hover:border-primary hover:text-primary transition-colors">Calculator</Link>
          <Link href="/find-a-broker">
            <Button size="sm" className="bg-primary text-sm font-medium hover:bg-primary/80 text-white rounded-full px-7 py-5">
              Find a Broker
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile/Tablet Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 flex flex-col gap-4 lg:hidden shadow-xl max-h-[85vh] overflow-y-auto"
          >
            <Link href="/" className="font-medium text-lg py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" className="font-medium text-lg py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            
            {/* Mobile Resources Dropdown */}
            <div>
              <button 
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center justify-between w-full font-medium text-lg py-2"
              >
                Resources
                <ChevronDown size={20} className={`transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-slate-50 rounded-xl mt-2"
                  >
                     <div className="flex flex-col p-4 gap-3">
                        <Link href="/apply" className="text-slate-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Online Application</Link>
                        <Link href="/calculator" className="text-slate-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Calculator</Link>
                        <Link href="/tools" className="text-slate-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Tools</Link>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" className="font-medium text-lg py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            <hr className="my-2" />
            <Link href="/calculator" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-center py-6 text-lg rounded-xl border-slate-200">
                    Calculator
                </Button>
            </Link>
            <Link href="/find-a-broker" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-primary text-white justify-center py-6 text-lg rounded-xl">
                    Find a Broker
                </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
