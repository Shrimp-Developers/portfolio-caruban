"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white text-[var(--foreground)] pt-20"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[var(--primary)] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[var(--brand-dark)] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center z-10 w-full max-w-5xl"
      >
        {/* Title & Desc - Dikecilkan sedikit agar tidak dominan sendirian */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.1]">
            Solusi Pengembangan Web dan Aplikasi <br />
            <span className="text-[var(--primary)]">
              Terintegrasi untuk Bisnis Anda
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-sm md:text-base opacity-70 font-medium">
            Kami membantu transformasi digital bisnis Anda melalui pengembangan
            perangkat lunak yang skalabel, desain intuitif, dan teknologi
            terkini.
          </p>
        </motion.div>

        {/* Illustration - UKURAN DIOPTIMASI agar pas di satu layar laptop */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative my-6 w-full max-w-[450px] md:max-w-[500px]"
        >
          <div className="absolute inset-0 bg-[var(--primary)] opacity-5 blur-3xl rounded-full scale-90"></div>
          <Image
            src="/logo-hero.png"
            alt="Hero Illustration"
            width={500}
            height={500}
            priority
            className="relative w-full h-auto drop-shadow-xl"
          />
        </motion.div>

        {/* Tags & Button Container - Digabung agar lebih compact */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-wrap justify-center items-center gap-2">
            {["Web design", "Branding", "Marketing", "SEO", "Consulting"].map(
              (item, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 bg-white border border-[var(--border)] rounded-full shadow-sm text-[10px] md:text-xs font-bold text-[var(--brand-dark)]"
                >
                  {item}
                </span>
              ),
            )}
          </div>

          <button className="bg-[var(--primary)] hover:bg-[#168a65] text-white px-5 py-3 rounded-2xl flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg shadow-[var(--primary)]/20 font-bold text-sm md:text-base group">
            Konsultasi Gratis
            <div className="bg-white/20 p-1 rounded-lg">
              <ArrowDown className="w-4 h-4 text-white group-hover:translate-y-1 transition-transform" />
            </div>
          </button>
        </motion.div>
      </motion.div>

      {/* Floating WhatsApp */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Link href="https://wa.me/628XXXXXXXXXX" target="_blank">
          <Image
            src="/icon-WhatsApp.png"
            alt="WhatsApp"
            width={55}
            height={55}
            className="hover:rotate-12 transition-transform drop-shadow-lg"
          />
        </Link>
      </motion.div>
    </section>
  );
}
