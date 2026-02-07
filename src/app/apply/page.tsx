"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApplyPage() {
  const router = useRouter();

  const steps = [
    "Quick and easy process",
    "Secure application",
    "Expert review within 24h",
    "No obligation to proceed"
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase text-primary bg-primary/5 rounded-full">
              Online Application
            </span>
            <h1 className="text-5xl font-bold mb-6 text-slate-900">Start Your Application</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Please fill out the form below to get started. It's safe, secure, and takes only a few minutes.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
            {/* Download Application Section */}
            <div className="flex-1 w-full">
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 h-fit">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Complete Your Application</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  To ensure the highest level of security for your personal and financial information, we've moved to a paper-based application process. Please follow these simple steps:
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Download the Form</h4>
                      <p className="text-slate-500 text-sm">Download our official PDF application form using the button below.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Fill it Out</h4>
                      <p className="text-slate-500 text-sm">Complete the form at your convenience on your device or by hand.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Email it to Us</h4>
                      <p className="text-slate-500 text-sm">Send your completed form to emmanuelbriggs@bextermortgage.com</p>
                    </div>
                  </div>
                </div>

                <a 
                  href="/documents/application-form.pdf" 
                  download="Bexter_Mortgage_Application.pdf"
                  className="inline-block w-full"
                >
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all">
                    Download Application Form
                  </Button>
                </a>

                <p className="mt-6 text-center text-xs text-slate-400">
                  File Format: PDF | Size: ~150KB
                </p>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="flex-1 w-full lg:max-w-md">
              <div className="bg-slate-50 p-8 rounded-3xl sticky top-32">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Why Apply Online?</h3>
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <CheckCircle2 size={20} />
                      </div>
                      <span className="font-bold text-slate-700">{step}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    Need help with your application? Our experts are available to guide you through the process.
                  </p>
                  <Button variant="outline" className="w-full border-slate-300 hover:bg-white">
                    Call +1 437-484-9447
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rate Relief Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Rate Relief</h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Get a break from higher bank rates. Want the lowest rate around? 
              Get your BEST rate and product, anytime, with great services that can save you thousands.
            </p>
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
