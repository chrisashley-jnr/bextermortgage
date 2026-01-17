"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', data: formData }),
      });

      if (response.ok) {
        router.push("/contact/success");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

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
            <h1 className="text-5xl font-bold mb-6 text-slate-900">Get in touch with us</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Fill out the form below or schedule a meeting with us at your convenience.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
            {/* Contact Form Section */}
            <div className="flex-1 w-full">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-600 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-600 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Enter Your Message"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-slate-600 placeholder:text-slate-400"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="terms" className="text-sm text-slate-500">
                    I agree with Terms and Conditions
                  </label>
                </div>

                <Button disabled={loading} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-6 rounded-xl text-lg mt-4">
                  {loading ? "Sending..." : "Send Your Request"}
                </Button>
              </form>

              <div className="mt-12 pt-12 border-t border-slate-100">
                <h3 className="text-lg font-bold mb-6 text-slate-900">You can also Contact Us via</h3>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 bg-white shadow-sm">
                      <Mail size={20} />
                    </div>
                    <a href="mailto:emmanuelbriggs@bextermortgage.com" className="font-medium text-slate-600 hover:text-primary transition-colors">
                      emmanuelbriggs@bextermortgage.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 bg-white shadow-sm">
                      <Phone size={20} />
                    </div>
                    <a href="tel:6472289447" className="font-medium text-slate-600 hover:text-primary transition-colors">
                      +1 647-228-9447
                    </a>
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
                    <span className="font-bold text-slate-900">Canada</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Licensed in Ontario<br />
                    Serving clients globally
                  </p>
                </div>
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
