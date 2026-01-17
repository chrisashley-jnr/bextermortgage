import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { MortgageCalculator } from "@/components/calculator/MortgageCalculator";

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase text-primary bg-primary/5 rounded-full">
              Calculator
            </span>
            <h1 className="text-5xl font-bold mb-6 text-slate-900">Mortgage Calculator</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Run different scenarios by changing the down payment amount, interest rate, term and amortization period to help predict your monthly mortgage payment amount.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <MortgageCalculator />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
