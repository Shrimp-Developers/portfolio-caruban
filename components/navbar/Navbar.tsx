"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LanguageToggle from "@/components/toggle-languange/ToggleLanguange";

export default function Navbar() {
  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="
          w-full max-w-[1050px] 
          flex items-center justify-between 
          pointer-events-auto
          px-6 py-2.5 
          bg-white/40 backdrop-blur-md 
          rounded-2xl 
          border border-white/20 
          shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]
        "
      >
        {/* Brand Logo */}
        <div className="flex items-center gap-3 group cursor-pointer shrink-0">
          <div className="relative">
            <Image
              src="/icon-caruban.png"
              alt="Logo"
              width={34}
              height={34}
              className="transition-transform duration-500 group-hover:rotate-12"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-black tracking-tighter text-[var(--brand-dark)]">
              Caruban
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] text-[var(--primary)]">
              TECHNOLOGY
            </span>
          </div>
        </div>

        {/* Nav Links - Desktop */}
        <ul className="hidden lg:flex items-center space-x-7 text-[13px] font-black uppercase tracking-wider text-[var(--brand-dark)]">
          {[
            { name: "Beranda", id: "/#home" },
            { name: "Proyek", id: "/#project" },
            { name: "Layanan", id: "/#services" },
            { name: "Harga", id: "/#pricing" },
            { name: "Testimoni", id: "/#testimonial" },
            { name: "Kontak", id: "/contact" },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.id}
                className="relative hover:text-[var(--primary)] transition-colors group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block scale-90">
            <LanguageToggle />
          </div>
          <button className="bg-[var(--brand-dark)] hover:bg-[var(--primary)] text-white text-[11px] font-black uppercase tracking-widest py-2.5 px-5 rounded-xl transition-all shadow-lg active:scale-95 whitespace-nowrap">
            Hubungi Kami
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
