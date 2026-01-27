"use client";

import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, Calendar, DollarSign, Percent } from "lucide-react";

export const MortgageCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.3);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  
  // Additional monthly costs (estimates)
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.2); // Annual %
  const [homeInsuranceRate, setHomeInsuranceRate] = useState(0.5); // Annual %
  const [hoaFees, setHoaFees] = useState(0);

  const calculateMortgage = () => {
    const principal = propertyValue - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    let mortgage = 0;
    if (interestRate === 0) {
      mortgage = principal / numberOfPayments;
    } else {
      mortgage =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    setMonthlyPayment(isFinite(mortgage) ? mortgage : 0);
  };

  const propertyTax = (propertyValue * (propertyTaxRate / 100)) / 12;
  const homeInsurance = (propertyValue * (homeInsuranceRate / 100)) / 12;

  useEffect(() => {
    calculateMortgage();
  }, [propertyValue, downPayment, interestRate, loanTerm]);

  const handlePropertyValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value.replace(/,/g, ""));
    setPropertyValue(value);
    setDownPayment(value * (downPaymentPercent / 100));
  };

  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value.replace(/,/g, ""));
    setDownPayment(value);
    setDownPaymentPercent((value / propertyValue) * 100);
  };

  const handleDownPaymentPercentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setDownPaymentPercent(value);
    setDownPayment(propertyValue * (value / 100));
  };

  const totalMonthlyPayment = monthlyPayment + propertyTax + homeInsurance + hoaFees;

  const data = [
    { name: "Principal & Interest", value: monthlyPayment, color: "#2563eb" }, // primary blue
    { name: "Property Tax", value: propertyTax, color: "#86efac" }, // green-300
    { name: "Homeowner's Insurance", value: homeInsurance, color: "#fca5a5" }, // red-300
    { name: "HOA Fees", value: hoaFees, color: "#fcd34d" }, // yellow-300
  ];

  return (
    <div className="bg-white rounded-[32px] shadow-xl p-8 md:p-12">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Input Section */}
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Assessed property value</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">$</span>
              <input
                type="text"
                value={propertyValue.toLocaleString()}
                onChange={handlePropertyValueChange}
                className="w-full pl-8 pr-4 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-lg font-bold text-slate-900 transition-all"
              />
            </div>
            <Slider
              defaultValue={[propertyValue]}
              max={2000000}
              min={50000}
              step={1000}
              onValueChange={(vals) => {
                 const val = vals[0];
                 setPropertyValue(val);
                 setDownPayment(val * (downPaymentPercent / 100));
              }}
              className="mt-6"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Down payment</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">$</span>
                <input
                  type="text"
                  value={Math.round(downPayment).toLocaleString()}
                  onChange={handleDownPaymentChange}
                  className="w-full pl-8 pr-4 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-lg font-bold text-slate-900 transition-all"
                />
              </div>
            </div>
             <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">&nbsp;</label>
              <div className="relative">
                <input
                  type="number"
                  value={downPaymentPercent.toFixed(0)}
                  onChange={handleDownPaymentPercentChange}
                  className="w-full pl-4 pr-8 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-lg font-bold text-slate-900 transition-all text-right"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">%</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Loan term</label>
            <div className="relative">
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full pl-4 pr-10 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-lg font-bold text-slate-900 appearance-none bg-white transition-all cursor-pointer"
              >
                <option value="15">15 years</option>
                <option value="20">20 years</option>
                <option value="30">30 years</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Interest rate</label>
            <div className="flex items-center gap-4">
               <Slider
                defaultValue={[interestRate]}
                max={15}
                min={0.1}
                step={0.1}
                onValueChange={(vals) => setInterestRate(vals[0])}
                className="w-full"
              />
              <div className="relative w-32 shrink-0">
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full pl-4 pr-8 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-lg font-bold text-slate-900 text-right"
                />
                 <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">%</span>
              </div>
            </div>
          </div>
          

        </div>

        {/* Result Section */}
        <div className="flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 mb-8">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={80}
                            outerRadius={120}
                            paddingAngle={2}
                            dataKey="value"
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip 
                             formatter={(value: any) => `$${Number(value).toFixed(0)}`}
                             contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                
                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-4xl font-bold text-slate-900">${Math.round(totalMonthlyPayment).toLocaleString()}</span>
                    <span className="text-sm font-medium text-slate-500">Monthly payment</span>
                </div>
            </div>

            <div className="w-full space-y-4 max-w-sm">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                            <span className="font-medium text-slate-600">{item.name}</span>
                        </div>
                        <span className="font-bold text-slate-900">${Math.round(item.value).toLocaleString()}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};
