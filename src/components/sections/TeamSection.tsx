"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const TeamSection = () => {
  const experts = [
    { name: "Emmanuel Briggs", role: "Chief Executive Officer", img: "/images/imgs/team_img1.svg" },
    { name: "Dickson Marfo Asiamah", role: "Company Secretary", img: "/images/imgs/team_img2.svg" },
    { name: "Isaiah Adusei", role: "Business Development Manager", img: "/images/imgs/team_img3.svg" },
    { name: "Prince Coffie", role: "Sales and Operations Manager", img: "/images/imgs/team_img4.svg" },
    { name: "Agyabeng Anokye", role: "IT & Marketing Manager", img: "/images/imgs/team_img5.svg" }, 
    { name: "Anthony D.A. Asare", role: "Financial & Investment Analysis", img: "/images/imgs/team_img6.svg" } 
  ];

  return (
    <section className="py-24 bg-white px-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Team</span>
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight">MEET OUR MORTGAGE EXPERTS</h2>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
              <ArrowLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-3xl overflow-hidden mb-4 aspect-[4/5] bg-slate-100 shadow-sm group-hover:shadow-xl transition-all">
                <img 
                  src={expert.img} 
                  alt={expert.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="font-bold text-lg mb-1">{expert.name}</h3>
              <p className="text-slate-500 text-sm">{expert.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
