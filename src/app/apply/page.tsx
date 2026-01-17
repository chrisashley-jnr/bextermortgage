"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApplyPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    mortgageType: "Purchase",
    propertyValue: "",
    mortgageAmount: "",
    employmentStatus: "Employed Full-Time",
    annualIncome: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, mortgageType: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'application', data: formData }),
      });

      if (response.ok) {
        router.push("/apply/success");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending application.");
    } finally {
      setLoading(false);
    }
  };

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
            {/* Application Form */}
            <div className="flex-1 w-full">
              <form className="space-y-12" onSubmit={handleSubmit}>
                {/* Section 1: Personal Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">Personal Details</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">First Name</label>
                      <input 
                        type="text" 
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                        placeholder="John" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                        placeholder="Doe" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                        placeholder="john@example.com" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone</label>
                      <input 
                        type="tel" 
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                        placeholder="+1 (555) 000-0000" 
                        required 
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Mortgage Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">Mortgage Requirements</h3>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">What are you looking for?</label>
                    <div className="grid grid-cols-2 gap-4">
                      {["Purchase", "Refinance", "Renewal", "Investment"].map((type) => (
                        <label key={type} className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all ${formData.mortgageType === type ? 'border-primary bg-primary/5' : 'border-slate-200 hover:border-primary'}`}>
                          <input 
                            type="radio" 
                            name="mortgageType"
                            value={type}
                            checked={formData.mortgageType === type}
                            onChange={handleRadioChange}
                            className="w-4 h-4 text-primary focus:ring-primary" 
                          />
                          <span className="font-medium text-slate-700">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Estimated Property Value</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                        <input 
                          type="number" 
                          id="propertyValue"
                          value={formData.propertyValue}
                          onChange={handleChange}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                          placeholder="500,000" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Desired Mortgage Amount</label>
                      <div className="relative">
                         <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                        <input 
                          type="number" 
                          id="mortgageAmount"
                          value={formData.mortgageAmount}
                          onChange={handleChange}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                          placeholder="400,000" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3: Financial Info */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">Employment & Income</h3>
                   <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Employment Status</label>
                      <select 
                        id="employmentStatus"
                        value={formData.employmentStatus}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      >
                        <option>Employed Full-Time</option>
                        <option>Self-Employed</option>
                        <option>Retired</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Annual Household Income</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                        <input 
                          type="number" 
                          id="annualIncome"
                          value={formData.annualIncome}
                          onChange={handleChange}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                          placeholder="100,000" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl flex items-start gap-4">
                  <input type="checkbox" id="consent" className="mt-1 w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" required />
                  <label htmlFor="consent" className="text-sm text-slate-600 leading-relaxed">
                    I agree to allow Bexter Mortgage Brokerage to check my credit history and contact me regarding this application. I understand this is just an initial inquiry and not a binding contract.
                  </label>
                </div>

                <Button disabled={loading} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-6 rounded-xl text-lg mt-4 shadow-lg hover:shadow-xl transition-all">
                  {loading ? "Submitting Application..." : "Submit Application"}
                </Button>
              </form>
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
                    Call 647-228-9447
                  </Button>
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
