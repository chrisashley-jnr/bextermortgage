"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, HeartHandshake } from "lucide-react";

export const ReasonsSection = () => {
  const reasons = [
    {
      title: "We Are Regulated",
      description: "We work in a heavily regulated market. We only work with regulated lenders and our advice is always compliant with the FCA guidelines.",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      image: "/images/imgs/img.png"
    },
    {
      title: "We Make It Happen",
      description: "We take on the hard cases. If there's a way to get you approved, our experts will find it. We're persistent and proactive.",
      icon: <Zap className="w-8 h-8 text-primary" />,
      image: "/images/imgs/img2.png"
    },
    {
      title: "We ARE EXPERTS",
      description: "With years of experience in the mortgage industry, we navigate the complex criteria of hundreds of lenders on your behalf.",
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      image: "/images/imgs/img3.png"
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          REASONS WHY YOU SHOULD <br /> CHOOSE US
        </h2>
        <div className="w-24 h-1.5 bg-primary/20 mx-auto rounded-full overflow-hidden">
          <div className="w-1/2 h-full bg-primary"></div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all group min-w-[280px] md:min-w-[320px] snap-start flex-shrink-0"
            >
              <div className="p-6 flex flex-col gap-4 h-[100%]">
                <div className="flex-1 flex items-center justify-center p-3 bg-slate-50/50 rounded-2xl overflow-hidden h-[180px]">
                  <img 
                    src={reason.image} 
                    alt={reason.title} 
                    className="w-full h-full "
                  />
                </div>
                
                <div className="">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-4 ">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-4 text-sm">{reason.description}</p>
                  <button className="font-bold text-primary flex items-center gap-2 ">
                    Learn More <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
