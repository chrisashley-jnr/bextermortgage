"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <Link href="/apply" className="text-sm font-medium hover:text-primary transition-colors">Online Application</Link>

          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact Us</Link>
          <Link href="/calculator">
            <Button size="sm" className="bg-primary text-sm font-medium hover:bg-primary/80 text-white rounded-full px-10 py-5">
              Calculator
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
            
            <Link href="/apply" className="font-medium text-lg py-2" onClick={() => setIsMobileMenuOpen(false)}>Online Application</Link>


            <Link href="/contact" className="font-medium text-lg py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            <hr className="my-2" />
            <Link href="/calculator" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-primary text-white justify-center py-6 text-lg rounded-xl">
                    Calculator
                </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
