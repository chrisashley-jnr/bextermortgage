import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const services = [
    {
      title: "Mortgage Pre-approval",
      description: "A mortgage pre-approval is an important step in the home buying process and we can help you out. We can help with your financial strategy, your mortgage amount, down payment amount, purchase price and give you an overall idea of what you can realistically afford.",
      details: "We will advise you about the documentation (income confirmation, down payment confirmation, etc.) You'll need to supply upon conditional approval of your mortgage. Any conditions must be met for your mortgage to be fully approved. Pre-approvals are subject to your continued good credit and are usually good for 60, 90, or 120 days depending on the lender."
    },
    {
      title: "Mortgage Refinancing",
      description: "A refinance means that you want, or perhaps need, to renegotiate your existing mortgage loan in order to replace it with a new one that is a better fit for you — usually to access more equity in your home or for better mortgage options.",
      details: "It can be done at any point during your mortgage term, or at renewal time. Our Bexter Mortgage brokers can take a look at your particular situation, quickly sort out the pros and cons, and outline any benefits to help you decide if a refinance is right for you."
    }
  ];

  const qualificationFactors = [
    "The size of your down payment",
    "Your income",
    "Your debts",
    "Your employment history",
    "Your credit history",
    "The property's value",
    "Your proof of identity"
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase text-primary bg-primary/5 rounded-full">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              LEARN MORE ABOUT <br />
              <span className="text-primary">BEXTER MORTGAGES</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              At Bexter, we are committed to providing a diverse range of mortgage products to both Ghanaians living abroad and foreigners seeking to acquire or own a property in Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">WHO WE ARE</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                Our utmost priority is to become your preferred option for all your mortgage needs. We have a determined team that is dedicated to providing top-quality services that will suit your distinctive requirements.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our ethos revolves around working assiduously to accomplish our goals, and we take pride in our achievements and quality customer service.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-white rounded-full px-10 py-6">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Factors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">What's involved to get your full mortgage approval?</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              When you're ready to buy a house, we'll complete your full mortgage approval. We take all the numbers and complexity down to a simple, stress-free process, outlining all your details for clearer decisions along the way.
            </p>
            <h3 className="text-2xl font-bold mb-6">Seven factors that lenders use to qualify you:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {qualificationFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-slate-700">{factor}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-600 mt-8 leading-relaxed">
              We'll help you assess and understand how a lender views your loan application, and what they look for in terms of a strong application.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">OUR VISION</h2>
            <p className="text-xl leading-relaxed mb-8">
              Our top priority is to offer the most exceptional brokerage services in Ghana through cutting-edge solutions and unparalleled customer service.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Bexter mortgage brokerage is an independent broker that helps to connect and advise prospects to wholesale lenders in Ghana to secure mortgage loans at the best possible rates. Bexter Mortgage focuses its main operations on helping Ghanaian expatriates and other foreign nationals obtain mortgage loans for homes and commercial purchases.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Meet Our Founder</h2>
              <h3 className="text-2xl text-primary font-semibold">Mr. Emmanuel B. Asiamah Jnr</h3>
              <p className="text-slate-600 mt-2">Founder / CEO</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                Emmanuel Briggs Asiamah Jr. is an accomplished and versatile individual who embodies innovation, leadership, and a relentless pursuit of excellence. With a robust education, extensive work history, and a notable track record in volunteerism, Emmanuel stands out as a dynamic CEO and Founder dedicated to creating positive impact.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Emmanuel is a resourceful and determined professional thriving in dynamic environments. He excels in planning, problem-solving, and adapting quickly to change. His leadership, critical thinking, communication, and interpersonal skills make him highly effective.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                He holds degrees in Business Administration from Trent University and University of Ghana, along with high school studies in Business Studies. Emmanuel Briggs Asiamah Jr. is more than a CEO and Founder; he's a catalyst for positive change.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-2xl">
                <h4 className="font-bold text-lg mb-4">Contact Information</h4>
                <div className="space-y-2">
                  <p className="text-slate-700">
                    <span className="font-semibold">Phone:</span>{" "}
                    <a href="tel:6472289447" className="text-primary hover:underline">647-228-9447</a>
                  </p>
                  <p className="text-slate-700">
                    <span className="font-semibold">Email:</span>{" "}
                    <a href="mailto:emmanuelbriggs@bextermortgage.com" className="text-primary hover:underline">
                      emmanuelbriggs@bextermortgage.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get in touch with Bexter Mortgages</h2>
            <p className="text-xl text-slate-600 mb-8">
              Bexter Mortgage gives you the best of Mortgage solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-white rounded-full px-10 py-6">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/apply">
                <Button variant="outline" size="lg" className="rounded-full px-10 py-6 border-2">
                  Apply Now
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
