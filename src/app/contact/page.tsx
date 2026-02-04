"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  const benefits = [
    "Expert advice on homeownership",
    "Tailored mortgage solutions",
    "Access to diverse mortgage products",
    "Support for Ghanaian expatriates",
    "Competitive rates and terms"
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase text-primary bg-primary/5 rounded-full">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 text-slate-900">Get in touch with us</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Fill out the form below or schedule a meeting with us at your convenience.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
            {/* Contact Options Section */}
            <div className="flex-1 w-full">
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 h-fit">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">How Can We Help You?</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We're here to assist you with your mortgage needs. Please select the appropriate option below to send us an email, and we'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Choose Your Topic</h4>
                      <p className="text-slate-500 text-sm">Select whether you have a general enquiry or need to file a complaint.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Email Opens Automatically</h4>
                      <p className="text-slate-500 text-sm">Your email client will open with a pre-filled subject line.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Write Your Message</h4>
                      <p className="text-slate-500 text-sm">Compose your message and send it to info@bextermortgage.com</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <a 
                    href="mailto:info@bextermortgage.com?subject=General%20Enquiry%20-%20Bexter%20Mortgage"
                    className="block w-full"
                  >
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all">
                      Send General Enquiry
                    </Button>
                  </a>

                  <a 
                    href="mailto:info@bextermortgage.com?subject=Complaint%20-%20Bexter%20Mortgage"
                    className="block w-full"
                  >
                    <Button variant="outline" className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold py-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all">
                      File a Complaint
                    </Button>
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Or Contact Us Directly</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-900 shrink-0">
                        <Mail size={20} />
                      </div>
                      <a href="mailto:info@bextermortgage.com" className="font-medium text-slate-600 hover:text-primary transition-colors">
                        info@bextermortgage.com
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-900 shrink-0">
                        <Phone size={20} />
                      </div>
                      <a href="tel:6472289447" className="font-medium text-slate-600 hover:text-primary transition-colors">
                        +1 647-228-9447
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="flex-1 w-full lg:max-w-md">
              <div className="mb-12">
                <h3 className="text-lg font-bold mb-6 text-slate-900">With our services you can</h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-slate-900 shrink-0" strokeWidth={1.5} />
                      <span className="text-slate-600 leading-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-slate-900" strokeWidth={2.5} />
                    <span className="font-bold text-slate-900">Ghana</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Helping expats invest<br />
                    back home
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
