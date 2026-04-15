"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function SectionReview() {
  const reviews = [
    {
      text: "Websitenya keren parah, gue suka banget sama desainnya! Worth it lah pokoknya",
      name: "miyaa anifah",
    },
    {
      text: "Timnya asik-asik, ga ribet, langsung ngerti maunya kita. Hasilnya juga mantap!",
      name: "Rizky Pratama",
    },
    {
      text: "Revisinya sabar banget ngeladenin request gue yang banyak. Makasih ya",
      name: "Farhan Alif",
    },
    {
      text: "Pelayanan cepat dan hasil sesuai ekspektasi, recommended banget!",
      name: "Andi Saputra",
    },
    {
      text: "Desainnya bener-bener mencerminkan identitas brand kami. Caruban Tech emang juara!",
      name: "Siti Aminah",
    },
    {
      text: "Kodingannya rapi, performa web kencang banget. Puas banget sama hasilnya.",
      name: "Budi Santoso",
    },
  ];

  return (
    <section
      id="testimonial"
      className="py-20 px-6 bg-white text-[var(--foreground)] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-10 h-1.5 rounded-full bg-[var(--primary)]" />
          </div>
          {/* Font Heading diperkecil sesuai FAQ */}
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-tight">
            Apa Kata Mereka?
          </h2>
        </div>

        {/* DRAG CONTAINER */}
        <div className="relative cursor-grab active:cursor-grabbing px-4">
          <motion.div
            className="flex gap-6"
            drag="x"
            dragConstraints={{ left: -1200, right: 0 }}
          >
            {reviews.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -5,
                  borderColor: "var(--primary)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="min-w-[280px] md:min-w-[320px] bg-white border border-[var(--border)] rounded-[2rem] p-7 shadow-sm hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Quote Icon Background diperkecil */}
                <Quote className="absolute top-5 right-6 w-8 h-8 text-[var(--primary)] opacity-10" />

                {/* Text diperkecil sesuai FAQ (text-sm md:text-base) */}
                <p className="text-sm md:text-base italic opacity-70 mb-8 leading-relaxed relative z-10 font-medium">
                  “{item.text}”
                </p>

                <div className="flex items-center gap-3 border-t border-[var(--border)] pt-5">
                  {/* Avatar diperkecil */}
                  <div className="w-10 h-10 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center text-sm font-black">
                    {item.name.charAt(0).toUpperCase()}
                  </div>

                  {/* Name diperkecil */}
                  <div className="flex flex-col text-left">
                    <p className="text-xs md:text-sm font-black uppercase tracking-wider text-[var(--brand-dark)]">
                      {item.name}
                    </p>
                    <p className="text-[10px] opacity-50 font-bold uppercase tracking-widest">
                      Happy Client
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hint untuk user */}
        <p className="text-center mt-10 text-[10px] font-black uppercase tracking-[0.2em] opacity-30 animate-pulse">
          ← Geser untuk melihat →
        </p>
      </div>
    </section>
  );
}
